"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-5xl font-bold"
            >
              LB
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
              {t("home.title")}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              {t("home.subtitle")}
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/projets">
                  {t("home.viewProjects")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/contact">
                  {t("home.contactMe")}
                </Link>
              </Button>
            </div>

            <div className="flex justify-center gap-6">
              <Link
                href="https://github.com/loricbndn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://linkedin.com/in/loric-bondon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="mailto:contact@loricbondon.dev"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Mail className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="grid md:grid-cols-3 gap-6 mt-20">
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
            >
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {t("home.webDev")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("home.webDevDesc")}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
            >
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {t("home.design")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("home.designDesc")}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {t("home.performance")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("home.performanceDesc")}
              </p>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
