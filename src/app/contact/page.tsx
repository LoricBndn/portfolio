"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: t("contact.success"),
        description: t("contact.successDesc"),
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <AnimatedSection>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t("contact.title")}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>
      </AnimatedSection>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <AnimatedSection delay={0.2}>
          <Card className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              {t("contact.sendMessage")}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">{t("contact.name")}</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder={t("contact.namePlaceholder")}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">{t("contact.email")}</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={t("contact.emailPlaceholder")}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">{t("contact.message")}</Label>
                <Textarea
                  id="message"
                  placeholder={t("contact.messagePlaceholder")}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="mt-2"
                />
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  t("contact.sending")
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    {t("contact.send")}
                  </>
                )}
              </Button>
            </form>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                {t("contact.otherMeans")}
              </h2>

              <div className="space-y-4">
                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    href="mailto:contact@loricbondon.fr"
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        contact@loricbondon.fr
                      </p>
                    </div>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    href="https://github.com/loricbndn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                      <Github className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">GitHub</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        @loricbndn
                      </p>
                    </div>
                  </Link>
                </motion.div>

                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    href="https://linkedin.com/in/loric-bondon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                      <Linkedin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">LinkedIn</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {t("contact.linkedinDesc")}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              </div>
            </div>

            <Card className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
              <h3 className="text-xl font-bold mb-2">{t("contact.available")}</h3>
              <p className="text-blue-50">
                {t("contact.availableDesc")}
              </p>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
