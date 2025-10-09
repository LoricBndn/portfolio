"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Skill } from "@/data/skills";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 h-full bg-white/80 dark:bg-gray-900/60 backdrop-blur-sm">
        <div className="flex flex-col items-center gap-3">
          {/* Image optimisée */}
          <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center">
            <Image
              src={skill.icon}
              alt={skill.name}
              width={48}
              height={48}
              className="object-contain w-12 h-12"
            />
          </div>

          {/* Nom et catégorie */}
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {skill.name}
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {skill.category[language]}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}
