export interface Skill {
  name: string;
  icon: string;
  category: {
    fr: string;
    en: string;
  };
}

export const skills: Skill[] = [
  // === FRONTEND ===
  { name: "HTML5", icon: "/images/skills/html5.svg", category: { fr: "Frontend", en: "Frontend" } },
  { name: "CSS3", icon: "/images/skills/css3.svg", category: { fr: "Frontend", en: "Frontend" } },
  { name: "JavaScript", icon: "/images/skills/javascript.svg", category: { fr: "Frontend", en: "Frontend" } },
  { name: "TypeScript", icon: "/images/skills/typescript.svg", category: { fr: "Frontend", en: "Frontend" } },
  { name: "React", icon: "/images/skills/react.svg", category: { fr: "Frontend", en: "Frontend" } },
  { name: "Next.js", icon: "/images/skills/nextjs.svg", category: { fr: "Frontend", en: "Frontend" } },
  { name: "TailwindCSS", icon: "/images/skills/tailwindcss.svg", category: { fr: "Frontend", en: "Frontend" } },

  // === BACKEND ===
  { name: "PHP", icon: "/images/skills/php.svg", category: { fr: "Backend", en: "Backend" } },
  { name: "Node.js", icon: "/images/skills/nodejs.svg", category: { fr: "Backend", en: "Backend" } },
  { name: "SQL", icon: "/images/skills/sql.svg", category: { fr: "Backend", en: "Backend" } },

  // === MOBILE ===
  { name: "Flutter", icon: "/images/skills/flutter.svg", category: { fr: "Mobile", en: "Mobile" } },
  { name: "Dart", icon: "/images/skills/dart.svg", category: { fr: "Mobile", en: "Mobile" } },
  { name: "Kotlin", icon: "/images/skills/kotlin.svg", category: { fr: "Mobile", en: "Mobile" } },

  // === OUTILS ===
  { name: "Git", icon: "/images/skills/git.svg", category: { fr: "Outils", en: "Tools" } },
  { name: "GitHub", icon: "/images/skills/github.svg", category: { fr: "Outils", en: "Tools" } },
  { name: "VS Code", icon: "/images/skills/vscode.svg", category: { fr: "Outils", en: "Tools" } },
  { name: "Figma", icon: "/images/skills/figma.svg", category: { fr: "Outils", en: "Tools" } },
  { name: "Postman", icon: "/images/skills/postman.svg", category: { fr: "Outils", en: "Tools" } },
  { name: "Vercel", icon: "/images/skills/vercel.svg", category: { fr: "Outils", en: "Tools" } },
    { name: "MySQL", icon: "/images/skills/mysql.svg", category: { fr: "Outils", en: "Tools" } },
  { name: "MongoDB", icon: "/images/skills/mongodb.svg", category: { fr: "Outils", en: "Tools" } },
  { name: "Prisma", icon: "/images/skills/prisma.svg", category: { fr: "Outils", en: "Tools" } },
  { name: "REST API", icon: "/images/skills/api.svg", category: { fr: "Outils", en: "Tools" } },

  // === AUTRES ===
  { name: "Trello", icon: "/images/skills/trello.svg", category: { fr: "Autres", en: "Other" } },
  { name: "Notion", icon: "/images/skills/notion.svg", category: { fr: "Autres", en: "Other" } },
  { name: "Discord", icon: "/images/skills/discord.svg", category: { fr: "Autres", en: "Other" } },
];
