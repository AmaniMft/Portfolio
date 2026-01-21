import { useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import {
  DiHtml5, DiCss3, DiJavascript1, DiReact, DiJava, DiPython, DiDjango,
  DiMysql, DiPostgresql, DiMongodb, DiGit, DiDocker
} from "react-icons/di";
import { SiSpring, SiSqlite } from "react-icons/si";
import { FaAws, FaGithub, FaNode, FaLinux, FaWindows, FaFigma} from "react-icons/fa";

const skills = [
  { name: "HTML5", category: "Frontend", icon: DiHtml5 },
  { name: "CSS3", category: "Frontend", icon: DiCss3 },
  { name: "JavaScript", category: "Frontend", icon: DiJavascript1 },
  { name: "React", category: "Frontend", icon: DiReact },
  { name: "Tailwind CSS", category: "Frontend", icon: DiCss3 },

  { name: "Java", category: "Backend", icon: DiJava },
  { name: "Spring Boot", category: "Backend", icon: SiSpring },
  { name: "Python", category: "Backend", icon: DiPython },
  { name: "Django", category: "Backend", icon: DiDjango },

  { name: "MySQL", category: "Database", icon: DiMysql },
  { name: "SQLite", category: "Database", icon: SiSqlite },
  { name: "PostgreSQL", category: "Database", icon: DiPostgresql },
  { name: "MongoDB", category: "Database", icon: DiMongodb },

  { name: "Linux", category: "Operating Systems", icon: FaLinux },
  { name: "Windows", category: "Operating Systems", icon: FaWindows },

  { name: "Git", category: "Tools", icon: DiGit },
  { name: "GitHub", category: "Tools", icon: FaGithub },
  { name: "Docker", category: "Tools", icon: DiDocker },
  { name: "Node.js", category: "Tools", icon: FaNode },
  { name: "AWS", category: "Tools", icon: FaAws },
  { name: "Figma", category: "Tools", icon: FaFigma },
];

const categories = ["all", "Frontend", "Backend", "Database", "Operating Systems", "Tools"];

function SkillsSection() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const labelCategorie = (category) => {
    if (category === "all") return t("skills_filter_all");
    if (category === "Frontend") return t("skills_cat_frontend");
    if (category === "Backend") return t("skills_cat_backend");
    if (category === "Database") return t("skills_cat_database");
    if (category === "Operating Systems") return t("skills_cat_os");
    if (category === "Tools") return t("skills_cat_tools");
    return category;
  };

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t("skills_title_my")} <span className="text-primary">{t("skills_title_skills")}</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {labelCategorie(category)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => {
            const Icon = skill.icon;
            return (
              <div
                key={key}
                className="group bg-card p-6 rounded-lg shadow-xs card-hover flex items-center gap-4"
              >
                <Icon className="text-3xl text-primary/80 group-hover:text-primary transition" />
                <h3 className="font-medium tracking-wide">{skill.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
