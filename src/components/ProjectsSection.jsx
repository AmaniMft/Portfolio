import { ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

const projects = [
  {
    id: 1,
    titleKey: "project_msg_title",
    descriptionKey: "project_msg_desc",
    image: "/images/Chatapp.PNG",
    tags: ["Java", "Spring Boot", "SQLite"],
    demoUrl: null,
    githubUrl: null,
  },
  {
    id: 2,
    titleKey: "project_arg_title",
    descriptionKey: "project_arg_desc",
    image: "/images/ARG.PNG",
    tags: ["Python", "Django", "SQLite", "JavaScript", "HTML/CSS"],
    demoUrl: null,
    githubUrl: null,
  },
  {
    id: 3,
    titleKey: "project_bio_title",
    descriptionKey: "project_bio_desc",
    image: "/images/ADB.jpg",
    tags: ["Python"],
    demoUrl: null,
    githubUrl: null,
  },
];

function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("projects_title_1")}{" "}
          <span className="text-primary">{t("projects_title_2")}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("projects_intro")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group rounded-xl overflow-hidden bg-card shadow-lg"
            >
              <img
                src={project.image}
                alt={t(project.titleKey)}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div
                className="
                  absolute inset-0
                  bg-black/70
                  opacity-0 group-hover:opacity-100
                  transition-all duration-500
                  flex flex-col justify-between p-6
                "
              >
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {t(project.titleKey)}
                  </h3>

                  <p className="text-gray-300 text-sm mt-2">
                    {t(project.descriptionKey)}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs rounded-full bg-white/20 text-white backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4 text-white mt-6">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary transition-colors"
                      aria-label="Demo"
                    >
                      <ExternalLink size={22} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={22} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
