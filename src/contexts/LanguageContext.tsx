"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "fr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

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
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
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
    "home.subtitle": "Passionné par le développement web moderne, je crée des expériences digitales innovantes avec Next.js, React et TypeScript.",
    "home.viewProjects": "Voir mes projets",
    "home.contactMe": "Me contacter",
    "home.webDev": "Développement Web",
    "home.webDevDesc": "Création d'applications web modernes et performantes",
    "home.design": "Design UI/UX",
    "home.designDesc": "Interfaces élégantes et expériences utilisateur optimales",
    "home.performance": "Performance",
    "home.performanceDesc": "Applications rapides et optimisées pour le web",

    "projects.title": "Mes Projets",
    "projects.subtitle": "Découvrez une sélection de mes réalisations en développement web",
    "projects.github": "GitHub",
    "projects.demo": "Démo",

    "skills.title": "Compétences",
    "skills.subtitle": "Technologies et outils que je maîtrise",

    "education.title": "Formation & Parcours",
    "education.subtitle": "Mon parcours académique et professionnel",

    "contact.title": "Contact",
    "contact.subtitle": "Une question ou un projet ? N'hésitez pas à me contacter",
    "contact.sendMessage": "Envoyez-moi un message",
    "contact.name": "Nom",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Envoyer le message",
    "contact.sending": "Envoi en cours...",
    "contact.otherMeans": "Autres moyens de contact",
    "contact.available": "Disponible pour des projets",
    "contact.availableDesc": "Je suis actuellement ouvert aux opportunités de collaboration et aux nouveaux projets.",
    "contact.namePlaceholder": "Votre nom",
    "contact.emailPlaceholder": "votre@email.com",
    "contact.messagePlaceholder": "Votre message...",
    "contact.linkedinDesc": "Connectez-vous avec moi",
    "contact.success": "Message envoyé !",
    "contact.successDesc": "Je vous répondrai dans les plus brefs délais.",

    "about.title": "À propos de moi",
    "about.subtitle": "Développeur passionné par les technologies web modernes",
    "about.hello": "Bonjour !",
    "about.p1": "Je suis un développeur web full-stack passionné par la création d'applications web modernes, performantes et élégantes. Mon parcours dans le développement web m'a permis de travailler sur des projets variés, allant de sites vitrines à des applications web complexes.",
    "about.p2": "Spécialisé dans l'écosystème JavaScript/TypeScript, je maîtrise particulièrement React, Next.js et Node.js. J'aime créer des interfaces utilisateur intuitives et des expériences digitales fluides qui allient esthétique et performance.",
    "about.p3": "Au-delà du code, je suis constamment en veille technologique pour découvrir et apprendre les dernières innovations du web. Je crois fermement à l'importance d'écrire un code propre, maintenable et bien documenté.",
    "about.p4": "Actuellement en formation BTS SIO, je combine théorie et pratique pour développer mes compétences et contribuer à des projets ambitieux. Je suis toujours ouvert aux nouvelles opportunités et aux collaborations enrichissantes.",
    "about.cleanCode": "Code Propre",
    "about.cleanCodeDesc": "J'écris du code maintenable et respectant les meilleures pratiques",
    "about.performanceTitle": "Performance",
    "about.performanceDesc": "Optimisation constante pour des applications rapides et efficaces",
    "about.passion": "Passion",
    "about.passionDesc": "Chaque projet est une opportunité d'apprendre et de créer",
    "about.downloadCV": "Téléchargez mon CV",
    "about.downloadCVDesc": "Découvrez mon parcours complet et mes expériences professionnelles",
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
    "home.subtitle": "Passionate about modern web development, I create innovative digital experiences with Next.js, React and TypeScript.",
    "home.viewProjects": "View my projects",
    "home.contactMe": "Contact me",
    "home.webDev": "Web Development",
    "home.webDevDesc": "Building modern and efficient web applications",
    "home.design": "UI/UX Design",
    "home.designDesc": "Elegant interfaces and optimal user experiences",
    "home.performance": "Performance",
    "home.performanceDesc": "Fast and optimized web applications",

    "projects.title": "My Projects",
    "projects.subtitle": "Discover a selection of my web development work",
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
    "contact.availableDesc": "I'm currently open to collaboration opportunities and new projects.",
    "contact.namePlaceholder": "Your name",
    "contact.emailPlaceholder": "your@email.com",
    "contact.messagePlaceholder": "Your message...",
    "contact.linkedinDesc": "Connect with me",
    "contact.success": "Message sent!",
    "contact.successDesc": "I'll get back to you as soon as possible.",

    "about.title": "About Me",
    "about.subtitle": "Developer passionate about modern web technologies",
    "about.hello": "Hello!",
    "about.p1": "I'm a full-stack web developer passionate about creating modern, efficient and elegant web applications. My journey in web development has allowed me to work on various projects, ranging from showcase websites to complex web applications.",
    "about.p2": "Specialized in the JavaScript/TypeScript ecosystem, I particularly master React, Next.js and Node.js. I love creating intuitive user interfaces and smooth digital experiences that combine aesthetics and performance.",
    "about.p3": "Beyond coding, I'm constantly staying up-to-date with technology to discover and learn the latest web innovations. I firmly believe in the importance of writing clean, maintainable and well-documented code.",
    "about.p4": "Currently studying for a BTS SIO degree, I combine theory and practice to develop my skills and contribute to ambitious projects. I'm always open to new opportunities and enriching collaborations.",
    "about.cleanCode": "Clean Code",
    "about.cleanCodeDesc": "I write maintainable code following best practices",
    "about.performanceTitle": "Performance",
    "about.performanceDesc": "Constant optimization for fast and efficient applications",
    "about.passion": "Passion",
    "about.passionDesc": "Each project is an opportunity to learn and create",
    "about.downloadCV": "Download my CV",
    "about.downloadCVDesc": "Discover my complete background and professional experiences",
    "about.downloadButton": "Download CV (PDF)",

    "footer.rights": "All rights reserved.",
  },
};
