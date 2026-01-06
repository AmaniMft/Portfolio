import { useState } from "react";
import {cn} from "@/lib/utils";
import { DiHtml5, DiCss3,DiJavascript1, DiReact, DiAngularSimple,DiJava, DiPython, DiDjango, DiMysql, DiPostgresql, DiMongodb, DiGit, DiDocker } from "react-icons/di";
import { SiSpring, SiSqlite } from "react-icons/si";
import {FaAws, FaGithub, FaNode, FaLinux, FaWindows} from "react-icons/fa";



const skills = [
  // Frontend
  { name: "HTML5", category: "Frontend", icon: DiHtml5 },
  { name: "CSS3", category: "Frontend", icon: DiCss3 },
  { name: "JavaScript", category: "Frontend", icon: DiJavascript1 },
  { name: "React", category: "Frontend", icon: DiReact },
  { name: "Tailwind CSS", category: "Frontend", icon: DiCss3 },

  // Backend
  { name: "Java", category: "Backend", icon: DiJava },
  { name: "Spring Boot", category: "Backend", icon: SiSpring },
  { name: "Python", category: "Backend", icon: DiPython },
  { name: "Django", category: "Backend", icon: DiDjango },


  // DataBase
  { name: "MySQL", category: "Database", icon: DiMysql },
  { name: "SQLite", category: "Database", icon: SiSqlite },
  { name: "PostgreSQL", category: "Database", icon: DiPostgresql },
  { name: "MongoDB", category: "Database", icon: DiMongodb },


  //Operating Systems
  { name: "Linux", category: "Operating Systems", icon: FaLinux },
  { name: "Windows", category: "Operating Systems", icon: FaWindows },

  // Tools
  { name: "Git", category: "Tools", icon: DiGit },
  { name: "GitHub", category: "Tools", icon: FaGithub },
  { name: "Docker", category: "Tools", icon: DiDocker },
  { name: "Node.js", category: "Tools", icon: FaNode },
  { name: "AWS", category: "Tools", icon: FaAws },
 

];


const categories =["all", "Frontend", "Backend", "Database", "Operating Systems","Tools"]

function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Filters */}
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
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
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
