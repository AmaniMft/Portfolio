import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Messaging system",
    description: "Design and development of a messaging system with a REST API to manage users, conversations and messages, including secure data validation and a relational database.",
    image: "/images/Chatapp.PNG",
    tags: [ "Java", "Spring Boot" , "SQLite"],
    DemoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Automated Report Generation",
    description: " Development of a web application to automatically generate Word reports from Excel files, including file upload, metadata handling, history tracking and secure backend validation.",
    image: "/images/ARG.PNG",
    tags: ["Python", "Django", "SQLite","JavaScript", "HTML/CSS"],
    DemoUrl: "#",
    githubUrl: "#",
  }, 

  {
    id: 3,
    title: "Biological Data Analysis Automation",
    description: "Data cleaning, validation, automated calculations and result visualization to improve reliability and efficiency of laboratory workflows.",
    image: "/images/ADB.jpg",
    tags: ["Python"],
    DemoUrl: "#",
    githubUrl: "#",
  }, 


];

function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects, each crafted with attention to detail,
          performance and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group rounded-xl overflow-hidden bg-card shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="
                absolute inset-0 
                bg-black/70 
                opacity-0 group-hover:opacity-100 
                transition-all duration-500 
                flex flex-col justify-between p-6
              ">
                <div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-gray-300 text-sm mt-2">{project.description}</p>

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
                  <a
                    href={project.DemoUrl}
                    target="_blank"
                    className="hover:text-primary transition-colors"
                  >
                    <ExternalLink size={22} />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="hover:text-primary transition-colors"
                  >
                    <Github size={22} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://github.com/AmaniMft"
            target="_blank"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
