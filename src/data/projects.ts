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
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: {
      fr: "Bouzonville Handball",
      en: "Bouzonville Handball",
    },
    description: {
      fr: "Site vitrine du club réalisé avec Next.js et TailwindCSS.",
      en: "Club showcase website built with Next.js and TailwindCSS.",
    },
    image: "/images/bouzonville.png",
    github: "https://github.com/loricbndn/bouzonville-handball",
    demo: "https://bouzonville-handball.fr",
    tags: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    id: 2,
    title: {
      fr: "Portfolio Personnel",
      en: "Personal Portfolio",
    },
    description: {
      fr: "Portfolio moderne et responsive avec animations fluides.",
      en: "Modern and responsive portfolio with smooth animations.",
    },
    image: "/images/portfolio.png",
    github: "https://github.com/username/portfolio",
    demo: "https://portfolio.example.com",
    tags: ["Next.js", "TypeScript", "Framer Motion"],
  },
  {
    id: 3,
    title: {
      fr: "Application E-commerce",
      en: "E-commerce Application",
    },
    description: {
      fr: "Plateforme de vente en ligne avec gestion de panier.",
      en: "Online sales platform with shopping cart management.",
    },
    image: "/images/ecommerce.png",
    github: "https://github.com/username/ecommerce",
    demo: "https://ecommerce.example.com",
    tags: ["React", "Node.js", "SQL"],
  },
];
