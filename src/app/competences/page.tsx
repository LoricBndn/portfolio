"use client";

import { skills } from "@/data/skills";
import SkillCard from "@/components/SkillCard";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CompetencesPage() {
  const { t, language } = useLanguage();
  const categories = Array.from(new Set(skills.map(skill => skill.category[language])));

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t("skills.title")}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </div>
      </AnimatedSection>

      <div className="max-w-6xl mx-auto space-y-12">
        {categories.map((category) => (
          <AnimatedSection key={category}>
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {category}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {skills
                  .filter(skill => skill.category[language] === category)
                  .map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                  ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
