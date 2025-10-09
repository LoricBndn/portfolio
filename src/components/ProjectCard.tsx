"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { t, language } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
            {project.title[language]}
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            {project.title[language]}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
            {project.description[language]}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex gap-3">
            <Button asChild variant="default" className="flex-1">
              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                {t("projects.github")}
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                {t("projects.demo")}
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
