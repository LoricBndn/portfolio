export interface Formation {
  id: number;
  year: {
    fr: string;
    en: string;
  };
  title: {
    fr: string;
    en: string;
  };
  institution: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  type: "education" | "work";
}

export const formations: Formation[] = [
  {
    id: 1,
    year: {
      fr: "2021 - 2023",
      en: "2021 - 2023",
    },
    title: {
      fr: "Baccalauréat Général",
      en: "General Baccalaureate",
    },
    institution: {
      fr: "Lycée Louis Vincent, Metz",
      en: "Louis Vincent High School, Metz",
    },
    description: {
      fr: "Spécialités : Mathématiques et NSI (Numérique et Sciences Informatiques). Mention Bien.",
      en: "Specializations: Mathematics and Computer Science. Graduated with honors.",
    },
    type: "education",
  },
  {
    id: 2,
    year: {
      fr: "2023 - 2026",
      en: "2023 - 2026",
    },
    title: {
      fr: "BUT Informatique",
      en: "Bachelor of Computer Science (BUT)",
    },
    institution: {
      fr: "IUT de Metz – Université de Lorraine",
      en: "University Institute of Technology of Metz – University of Lorraine",
    },
    description: {
      fr: "Formation en développement web et mobile, bases de données, architecture logicielle, gestion de projet et intelligence artificielle.",
      en: "Training in web and mobile development, databases, software architecture, project management, and artificial intelligence.",
    },
    type: "education",
  },
  {
    id: 3,
    year: {
      fr: "Avril 2025 - Juin 2025",
      en: "April 2025 - June 2025",
    },
    title: {
      fr: "Stage Développeur Web",
      en: "Web Developer Internship",
    },
    institution: {
      fr: "Eagle Intuition, Lisbonne (Portugal)",
      en: "Eagle Intuition, Lisbon (Portugal)",
    },
    description: {
      fr: "Développement complet des deux sites web de l’entreprise, intégration front-end avec Next.js.",
      en: "Developed two company websites from scratch, implemented front-end using Next.js.",
    },
    type: "work",
  },
];
