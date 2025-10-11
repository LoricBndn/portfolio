"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import ProjectCard from "@/components/ProjectCard";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function ProjetsPage() {
  const { t, language } = useLanguage();

  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [languageFilters, setLanguageFilters] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fermer le dropdown si clic à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Liste des langages (catégories pertinentes)
  const languageSkills = useMemo(
    () =>
      skills
        .filter((s) =>
          ["Frontend", "Backend", "Mobile", "Base de données"].includes(
            s.category.fr
          )
        )
        .map((s) =>
          typeof s.name === "object" ? s.name[language] : s.name
        ),
    [language]
  );

  // Liste des types de projets
  const typeFilters = [
    { key: "all", label: t("projects.type.all") },
    { key: "web", label: t("projects.type.web") },
    { key: "mobile", label: t("projects.type.mobile") },
    { key: "game", label: t("projects.type.game") },
  ];

  // 🧠 Met à jour le typeFilter quand la langue change
  useEffect(() => {
    if (typeFilter !== "all") {
      const correspondingType = ["web", "mobile", "game"].find(
        (key) =>
          t(`projects.type.${key}`) === typeFilter ||
          key === typeFilter.toLowerCase()
      );
      setTypeFilter(correspondingType ?? "all");
    }
    // ✅ On ne touche plus aux languageFilters
  }, [language]);

  // 🔎 Filtrage des projets
  const filteredProjects = projects.filter((project) => {
    const projectCategory = project.category[language].toLowerCase();
    const typeFilterLower = typeFilter.toLowerCase();

    const matchType = typeFilter === "all" || projectCategory === typeFilterLower;

    const matchLanguages =
      languageFilters.length === 0 ||
      languageFilters.every((filter) =>
        project.languages.some((lang) => {
          const langName =
            typeof lang.name === "object" ? lang.name[language] : lang.name;
          return langName.toLowerCase() === filter.toLowerCase();
        })
      );

    return matchType && matchLanguages;
  });

  const toggleLanguage = (lang: string) => {
    setLanguageFilters((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <AnimatedSection>
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t("projects.title")}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>
      </AnimatedSection>

      {/* === FILTRES === */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
        {/* Type Filter */}
        <div className="flex flex-col items-start">
          <label className="text-gray-800 dark:text-gray-200 font-medium mb-2">
            {t("projects.filter.type")}
          </label>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-700 text-gray-800 dark:text-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {typeFilters.map(({ key, label }) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {/* Language Filter Dropdown */}
        <div className="flex flex-col items-start relative" ref={dropdownRef}>
          <label className="text-gray-800 dark:text-gray-200 font-medium mb-2">
            {t("projects.filter.language")}
          </label>

          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-700 text-gray-800 dark:text-gray-200 rounded-lg px-4 py-2 w-56 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span className="flex gap-1 items-center">
              {languageFilters.length > 0
                ? languageFilters.map((name) => {
                    const skill = skills.find((s) => s.name === name);
                    return skill?.icon ? (
                      <img
                        key={name}
                        src={skill.icon}
                        alt={name}
                        className="w-4 h-4 object-contain"
                      />
                    ) : (
                      <span key={name}>{name}</span>
                    );
                  })
                : t("projects.filter.selectLanguages")}
            </span>
            <span className="ml-2">{dropdownOpen ? "▲" : "▼"}</span>
          </button>

          {dropdownOpen && (
            <div className="absolute top-full left-0 z-10 mt-1 w-56 bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              {languageSkills.map((name) => {
                const skill = skills.find(
                  (s) =>
                    (typeof s.name === "object" ? s.name[language] : s.name) ===
                    name
                );
                return (
                  <label
                    key={name}
                    className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={languageFilters.includes(name)}
                      onChange={() => toggleLanguage(name)}
                      className="accent-blue-500"
                    />
                    {skill?.icon && (
                      <img
                        src={skill.icon}
                        alt={name}
                        className="w-4 h-4 object-contain"
                      />
                    )}
                    <span>{name}</span>
                  </label>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* === LISTE DES PROJETS === */}
      {filteredProjects.length > 0 ? (
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      ) : (
        <div className="text-center text-gray-500 dark:text-gray-400 py-10">
          {t("projects.list")}
        </div>
      )}
    </div>
  );
}
