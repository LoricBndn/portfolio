"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Skill } from "@/data/skills";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const Icon = (Icons as any)[skill.icon] || Icons.Code;
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 h-full">
        <div className="flex flex-col items-center gap-3">
          <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl">
            <Icon className="h-8 w-8 text-white" />
          </div>
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
