import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Loric Bondon | Développeur Web Full-Stack",
  description:
    "Portfolio de Loric Bondon, développeur web full-stack passionné, spécialisé en Next.js, React, TypeScript et Flutter. Découvrez mes projets, compétences et expériences.",
    keywords: [
    "Loric Bondon",
    "développeur web",
    "Next.js",
    "React",
    "TypeScript",
    "Flutter",
    "portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider>
            <Navbar />
            <main className="pt-16 min-h-screen">
              {children}
            </main>
            <Footer />
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
