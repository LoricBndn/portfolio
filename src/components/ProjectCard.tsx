import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Readonly<ProjectCardProps>) {
  const { language } = useLanguage();

  let categoryClass = "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"; // valeur par défaut
  if (project.category?.[language] === "web") {
    categoryClass = "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300";
  } else if (project.category?.[language] === "mobile") {
    categoryClass = "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {/* 🖼️ Image du projet */}
      <div className="relative w-full h-52">
        <Image
          src={project.image}
          alt={project.title[language]}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6 flex flex-col gap-3">
        {/* 🔹 Titre + catégorie */}
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {project.title[language]}
          </h3>

          {/* 🏷️ Catégorie visible sur la carte */}
          <span
            className={`px-3 py-1 text-sm rounded-full capitalize font-medium ${categoryClass}`}
          >
            {project.category[language]}
          </span>
        </div>

        {/* 🧾 Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {project.description.fr}
        </p>

        {/* 💻 Langages et technologies */}
        <div className="flex flex-wrap gap-3 mt-3">
          {project.languages?.map((lang) => (
            <div
              key={lang.name}
              className="flex items-center gap-2 bg-gray-50 dark:bg-neutral-800 px-2 py-1 rounded-md"
              title={lang.name}
            >
              <Image
                src={lang.icon}
                alt={lang.name}
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
