import { skills } from "@/data/skills";

export interface Project {
  id: number;
  title: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  image: string;
  github: string;
  demo: string;
  category: 
  {
    fr: "web" | "mobile" | "jeu vidéo";
    en: "web" | "mobile" | "video game";
  };
  languages: {
    name: string;
    icon: string;
  }[];
}

const getSkillIcon = (name: string) => {
  const skill = skills.find(
    (s) => s.name.toLowerCase() === name.toLowerCase()
  );
  return skill ? skill.icon : `/images/skills/${name.toLowerCase()}.svg`;
};

export const projects: Project[] = [
  {
    id: 1,
    title: {
      fr: "StickSpin",
      en: "StickSpin",
    },
    description: {
      fr: "Jeu web développé en PHP, basé sur un concept interactif de rotation et de défis.",
      en: "Web game developed in PHP, based on an interactive rotation and challenges concept.",
    },
    image: "/images/placeholder.png",
    github: "https://github.com/LoricBndn/StickSpin",
    demo: "",
    category: {
      fr: "jeu vidéo",
      en: "video game",
    },
    languages: [
      { name: "PHP", icon: getSkillIcon("PHP") },
      { name: "JavaScript", icon: getSkillIcon("JavaScript") },
      { name: "Godot", icon: getSkillIcon("Godot") },
    ],
  },
  {
    id: 2,
    title: {
      fr: "SAE4.01 – Vente en ligne",
      en: "SAE4.01 – Online Store",
    },
    description: {
      fr: "Projet JavaScript de boutique en ligne pour des pulls de Noël et accessoires.",
      en: "JavaScript project of an online store for Christmas sweaters and accessories.",
    },
    image: "/images/placeholder.png",
    github: "https://github.com/LoricBndn/SAE4.01",
    demo: "",
    category: {
      fr: "web",
      en: "web",
    },
    languages: [
      { name: "JavaScript", icon: getSkillIcon("JavaScript") },
      { name: "HTML", icon: getSkillIcon("HTML") },
      { name: "CSS", icon: getSkillIcon("CSS") },
    ],
  },
  {
    id: 3,
    title: {
      fr: "Eagle Intuition International",
      en: "Eagle Intuition International",
    },
    description: {
      fr: "Application web internationale développée en TypeScript pour la gestion d’entreprise.",
      en: "International web application developed in TypeScript for business management.",
    },
    image: "/images/placeholder.png",
    github: "https://github.com/LoricBndn/eagle-intuition-v2",
    demo: "",
    category: {
      fr: "web",
      en: "web",
    },
    languages: [
      { name: "TypeScript", icon: getSkillIcon("TypeScript") },
      { name: "Next.js", icon: getSkillIcon("Next.js") },
    ],
  },
  {
    id: 4,
    title: {
      fr: "SAE5.01 – Reconnaissance IA",
      en: "SAE5.01 – AI Recognition",
    },
    description: {
      fr: "Projet en Kotlin de reconnaissance et classification d’objets avec intelligence artificielle.",
      en: "Kotlin project for object recognition and classification using artificial intelligence.",
    },
    image: "/images/placeholder.png",
    github: "https://github.com/LoricBndn/SAE5.01",
    demo: "",
    category: {
      fr: "mobile",
      en: "mobile",
    },
    languages: [
      { name: "Kotlin", icon: getSkillIcon("Kotlin") },
      { name: "AI", icon: getSkillIcon("AI") },
      { name: "Machine Learning", icon: getSkillIcon("Machine Learning") },
    ],
  },
  {
    id: 5,
    title: {
      fr: "Bouzonville Handball",
      en: "Bouzonville Handball",
    },
    description: {
      fr: "Site vitrine complet du club avec pages équipes, actualités et boutique. Réalisé en Next.js et TailwindCSS.",
      en: "Full showcase website for Bouzonville Handball club with team pages, news, and a shop. Built with Next.js and TailwindCSS.",
    },
    image: "/images/placeholder.png",
    github: "https://github.com/LoricBndn/bouzonville-handball",
    demo: "https://bouzonville-handball.fr",
    category: {
      fr: "web",
      en: "web",
    },
    languages: [
      { name: "Next.js", icon: getSkillIcon("Next.js") },
      { name: "TailwindCSS", icon: getSkillIcon("TailwindCSS") },
      { name: "TypeScript", icon: getSkillIcon("TypeScript") },
    ],
  },
  {
    id: 6,
    title: {
      fr: "Portfolio Personnel",
      en: "Personal Portfolio",
    },
    description: {
      fr: "Portfolio moderne développé avec Next.js, affichant mes projets, compétences et expériences avec animations fluides.",
      en: "Modern portfolio built with Next.js, showcasing my projects, skills, and experiences with smooth animations.",
    },
    image: "/images/placeholder.png",
    github: "https://github.com/LoricBndn/portfolio",
    demo: "https://loricbndn.fr",
    category: {
      fr: "web",
      en: "web",
    },
    languages: [
      { name: "Next.js", icon: getSkillIcon("Next.js") },
      { name: "TypeScript", icon: getSkillIcon("TypeScript") },
      { name: "Framer Motion", icon: getSkillIcon("Framer Motion") },
    ],
  },
];
