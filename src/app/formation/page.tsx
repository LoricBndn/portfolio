"use client";

import { motion } from "framer-motion";
import { formations } from "@/data/formation";
import AnimatedSection from "@/components/AnimatedSection";
import { GraduationCap, Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FormationPage() {
  const { t, language } = useLanguage();
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t("education.title")}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("education.subtitle")}
          </p>
        </div>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          {formations.slice().reverse().map((formation, index) => (
            <motion.div
              key={formation.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-20 pb-12"
            >
              <div className="absolute left-4 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                {formation.type === "education" ? (
                  <GraduationCap className="h-4 w-4 text-white" />
                ) : (
                  <Briefcase className="h-4 w-4 text-white" />
                )}
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {formation.title[language]}
                  </h3>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                    {formation.year[language]}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                  {formation.institution[language]}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {formation.description[language]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
