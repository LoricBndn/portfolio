"use client";

import { motion } from "framer-motion";
import { Download, Code2, Rocket, Heart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  // URL vers ton CV (mets ton vrai nom de fichier ici, placé dans /public)
  const cvUrl = "/cv-loric-bondon.pdf";

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t("about.title")}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto space-y-12">
        <AnimatedSection delay={0.2}>
          <Card className="p-8">
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                {t("about.hello")}
              </h2>

              <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg">
                <p>{t("about.p1")}</p>
                <p>{t("about.p2")}</p>
                <p>{t("about.p3")}</p>
                <p>{t("about.p4")}</p>
              </div>
            </div>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                icon: <Code2 className="h-6 w-6 text-white" />,
                title: t("about.cleanCode"),
                desc: t("about.cleanCodeDesc"),
              },
              {
                id: 2,
                icon: <Rocket className="h-6 w-6 text-white" />,
                title: t("about.performanceTitle"),
                desc: t("about.performanceDesc"),
              },
              {
                id: 3,
                icon: <Heart className="h-6 w-6 text-white" />,
                title: t("about.passion"),
                desc: t("about.passionDesc"),
              },
            ].map((item) => (
              <motion.div key={item.id} whileHover={{ scale: 1.05 }}>
                <Card className="p-6 text-center h-full">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <Card className="p-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">{t("about.downloadCV")}</h3>
            <p className="mb-6 text-blue-50">{t("about.downloadCVDesc")}</p>

            {/* ✅ Bouton de téléchargement corrigé */}
            <a href={cvUrl} download className="inline-block">
              <Button
                variant="secondary"
                size="lg"
                className="rounded-full bg-white text-blue-700 hover:bg-blue-100"
              >
                <Download className="mr-2 h-5 w-5" />
                {t("about.downloadButton")}
              </Button>
            </a>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
}
