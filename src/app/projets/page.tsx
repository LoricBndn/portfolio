"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProjetsPage() {
  const { t } = useLanguage();
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t("projects.title")}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
