"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: changeLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    "nav.home": "Accueil",
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.education": "Formation",
    "nav.about": "À propos",
    "nav.contact": "Contact",

    "home.title": "Développeur Web Full-Stack",
    "home.subtitle":
      "Passionné par le développement web moderne, je crée des expériences digitales innovantes avec Next.js, React et TypeScript.",
    "home.viewProjects": "Voir mes projets",
    "home.contactMe": "Me contacter",
    "home.webDev": "Développement Web",
    "home.webDevDesc": "Création d'applications web modernes et performantes",
    "home.design": "Design UI/UX",
    "home.designDesc":
      "Interfaces élégantes et expériences utilisateur optimales",
    "home.performance": "Performance",
    "home.performanceDesc": "Applications rapides et optimisées pour le web",

    "projects.title": "Mes Projets",
    "projects.subtitle":
      "Découvrez une sélection de mes réalisations en développement web & mobile",
    "projects.github": "GitHub",
    "projects.demo": "Démo",

    "skills.title": "Compétences",
    "skills.subtitle": "Technologies et outils que je maîtrise",

    "education.title": "Formation & Parcours",
    "education.subtitle": "Mon parcours académique et professionnel",

    "contact.title": "Contact",
    "contact.subtitle":
      "Une question ou un projet ? N'hésitez pas à me contacter",
    "contact.sendMessage": "Envoyez-moi un message",
    "contact.name": "Nom",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Envoyer le message",
    "contact.sending": "Envoi en cours...",
    "contact.otherMeans": "Autres moyens de contact",
    "contact.available": "Disponible pour des projets",
    "contact.availableDesc":
      "Je suis actuellement ouvert aux opportunités de collaboration et aux nouveaux projets.",
    "contact.namePlaceholder": "Votre nom",
    "contact.emailPlaceholder": "votre@email.com",
    "contact.messagePlaceholder": "Votre message...",
    "contact.linkedinDesc": "Connectez-vous avec moi",
    "contact.success": "Message envoyé !",
    "contact.successDesc": "Je vous répondrai dans les plus brefs délais.",

    "about.title": "À propos de moi",
    "about.subtitle":
      "Développeur web passionné par les technologies modernes et les projets concrets",
    "about.hello": "Salut !",
    "about.p1":
      "Je suis étudiant en BUT Informatique et développeur web full-stack, passionné par la création d’expériences numériques modernes, performantes et intuitives. J’aime transformer des idées en projets concrets grâce à des technologies innovantes.",
    "about.p2":
      "Je travaille principalement avec Next.js, React, TypeScript et Flutter, en combinant créativité et rigueur technique pour concevoir des interfaces élégantes et dynamiques. Mon approche repose sur un code propre, maintenable et orienté utilisateur.",
    "about.p3":
      "Mon parcours m’a permis de contribuer à différents projets, comme la refonte de sites pour des associations sportives et le développement de solutions web complètes pendant mon stage chez Eagle Intuition. Ces expériences m’ont appris à gérer un projet de bout en bout, du design à la mise en production.",
    "about.p4":
      "Curieux et toujours en veille, j’aime découvrir de nouveaux outils, frameworks et bonnes pratiques pour améliorer mes compétences et la qualité de mes réalisations. Je suis ouvert à toute opportunité de collaboration stimulante dans le domaine du développement web.",
    "about.cleanCode": "Code Propre",
    "about.cleanCodeDesc":
      "J’écris un code clair, structuré et maintenable sur le long terme",
    "about.performanceTitle": "Performance",
    "about.performanceDesc":
      "J’optimise chaque détail pour offrir des applications rapides et fluides",
    "about.passion": "Passion",
    "about.passionDesc":
      "Chaque projet est pour moi une occasion d’apprendre, de créer et d’innover",
    "about.downloadCV": "Téléchargez mon CV",
    "about.downloadCVDesc":
      "Découvrez mon parcours, mes projets et mes expériences professionnelles",
    "about.downloadButton": "Télécharger le CV (PDF)",

    "footer.rights": "Tous droits réservés.",
  },
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.about": "About",
    "nav.contact": "Contact",

    "home.title": "Full-Stack Web Developer",
    "home.subtitle":
      "Passionate about modern web development, I create innovative digital experiences with Next.js, React and TypeScript.",
    "home.viewProjects": "View my projects",
    "home.contactMe": "Contact me",
    "home.webDev": "Web Development",
    "home.webDevDesc": "Building modern and efficient web applications",
    "home.design": "UI/UX Design",
    "home.designDesc": "Elegant interfaces and optimal user experiences",
    "home.performance": "Performance",
    "home.performanceDesc": "Fast and optimized web applications",

    "projects.title": "My Projects",
    "projects.subtitle": "Discover a selection of my web & mobile development work",
    "projects.github": "GitHub",
    "projects.demo": "Demo",

    "skills.title": "Skills",
    "skills.subtitle": "Technologies and tools I master",

    "education.title": "Education & Experience",
    "education.subtitle": "My academic and professional journey",

    "contact.title": "Contact",
    "contact.subtitle": "Have a question or a project? Feel free to reach out",
    "contact.sendMessage": "Send me a message",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send message",
    "contact.sending": "Sending...",
    "contact.otherMeans": "Other contact methods",
    "contact.available": "Available for projects",
    "contact.availableDesc":
      "I'm currently open to collaboration opportunities and new projects.",
    "contact.namePlaceholder": "Your name",
    "contact.emailPlaceholder": "your@email.com",
    "contact.messagePlaceholder": "Your message...",
    "contact.linkedinDesc": "Connect with me",
    "contact.success": "Message sent!",
    "contact.successDesc": "I'll get back to you as soon as possible.",

    "about.title": "About Me",
    "about.subtitle":
      "Web developer passionate about modern technologies and real-world projects",
    "about.hello": "Hi!",
    "about.p1":
      "I'm a full-stack web developer and IT student passionate about building modern, high-performance and intuitive digital experiences. I love turning ideas into real projects using cutting-edge web technologies.",
    "about.p2":
      "I mainly work with Next.js, React, TypeScript and Flutter, combining creativity and technical precision to craft elegant and dynamic user interfaces. My development approach focuses on clean, maintainable and user-centered code.",
    "about.p3":
      "Throughout my journey, I've contributed to various projects such as redesigning websites for sports associations and developing complete web solutions during my internship at Eagle Intuition. These experiences taught me to manage a project from design to deployment.",
    "about.p4":
      "Curious and always learning, I keep up with the latest tools, frameworks and best practices to improve my skills and the quality of my work. I'm open to exciting collaboration opportunities in web development.",
    "about.cleanCode": "Clean Code",
    "about.cleanCodeDesc":
      "I write structured, readable and maintainable code for long-term use",
    "about.performanceTitle": "Performance",
    "about.performanceDesc":
      "I focus on optimization to deliver fast and smooth web applications",
    "about.passion": "Passion",
    "about.passionDesc":
      "Each project is an opportunity to learn, create and innovate",
    "about.downloadCV": "Download my CV",
    "about.downloadCVDesc":
      "Discover my background, projects and professional experiences",
    "about.downloadButton": "Download CV (PDF)",

    "footer.rights": "All rights reserved.",
  },
};
