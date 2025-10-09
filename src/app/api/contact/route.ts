import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Configuration du transporteur SMTP (exemple avec Gmail ou OVH)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // ex : "ssl0.ovh.net" ou "smtp.gmail.com"
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Contenu du mail
    const mailOptions = {
      from: `"Portfolio – ${name}" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO || "contact@loricbondon.fr",
      subject: `Nouveau message depuis le portfolio`,
      text: `
Nom : ${name}
Email : ${email}

Message :
${message}
      `,
      html: `
        <h2>Nouveau message reçu depuis le portfolio</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br/>${message}</p>
      `,
    };

    // Envoi du mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur lors de l'envoi du mail :", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
