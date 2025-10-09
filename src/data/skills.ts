export interface Skill {
  name: string;
  icon: string;
  category: {
    fr: string;
    en: string;
  };
}

export const skills: Skill[] = [
  { name: "HTML5", icon: "Code", category: { fr: "Frontend", en: "Frontend" } },
  { name: "CSS3", icon: "Palette", category: { fr: "Frontend", en: "Frontend" } },
  { name: "JavaScript", icon: "FileCode", category: { fr: "Frontend", en: "Frontend" } },
  { name: "TypeScript", icon: "FileType", category: { fr: "Frontend", en: "Frontend" } },
  { name: "React", icon: "Atom", category: { fr: "Frontend", en: "Frontend" } },
  { name: "Next.js", icon: "Triangle", category: { fr: "Frontend", en: "Frontend" } },
  { name: "TailwindCSS", icon: "Wind", category: { fr: "Frontend", en: "Frontend" } },
  { name: "PHP", icon: "Code2", category: { fr: "Backend", en: "Backend" } },
  { name: "Node.js", icon: "Server", category: { fr: "Backend", en: "Backend" } },
  { name: "SQL", icon: "Database", category: { fr: "Backend", en: "Backend" } },
  { name: "Flutter", icon: "Smartphone", category: { fr: "Mobile", en: "Mobile" } },
  { name: "Git", icon: "GitBranch", category: { fr: "Outils", en: "Tools" } },
];
