import { ExternalLink, Github, ArrowRight } from "lucide-react";
import OptimizedImage from "../OptimizedImage";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "DevConnect",
      description:
        "A social media platform for developers to connect and share projects. Features include user profiles, project showcases, and real-time messaging.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Socket.io",
        "JWT",
      ],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "TaskFlow",
      description:
        "A comprehensive task management app with boards, status updates, and deadline tracking. Built with drag-and-drop functionality and team collaboration features.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60",
      technologies: ["React", "Redux", "Node.js", "PostgreSQL", "Express"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "BlogSpace",
      description:
        "A personal blogging platform with Markdown support. Features include rich text editing, tagging system, and responsive design.",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS", "MDX"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      title: "SnapStore",
      description:
        "A basic e-commerce frontend prototype with product listing and add-to-cart functionality. Includes responsive design and smooth animations.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60",
      technologies: ["React", "Context API", "CSS Modules", "Stripe API"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 5,
      title: "EduHub API",
      description:
        "A RESTful API for managing courses, students, and enrollments. Built with comprehensive authentication and authorization systems.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Bcrypt"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 6,
      title: "WeatherWise",
      description:
        "A modern weather application with location-based forecasts, interactive maps, and weather alerts. Features real-time data and beautiful visualizations.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop&crop=entropy&auto=format&q=60",
      technologies: [
        "React",
        "TypeScript",
        "OpenWeather API",
        "Mapbox",
        "Chart.js",
      ],
      demoLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="section bg-dark"
      role="main"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16 animate-on-scroll">
          <h2
            id="projects-heading"
            className="font-heading font-bold text-4xl md:text-5xl mb-6 text-light"
          >
            My <span className="text-gradient">Projects</span>
          </h2>
          <div
            className="w-24 h-1 bg-blue-accent mx-auto mb-6 transition-all duration-700 hover:w-32"
            aria-hidden="true"
          ></div>
          <p className="text-light-grey text-lg max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating proficiency in
            full-stack development
          </p>
        </header>

        {/* Projects Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          role="region"
          aria-label="Project portfolio"
        >
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="card group hover:border-blue-accent/50 glow-on-hover animate-on-scroll"
              style={{ animationDelay: `${index * 0.15}s` }}
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              {/* Project Image */}
              <figure className="relative overflow-hidden rounded-lg mb-6">
                <div className="aspect-video bg-dark border border-border rounded-lg relative overflow-hidden group-hover:scale-105 transition-all duration-500">
                  <div
                    className="absolute inset-0 bg-gradient-to-tr from-blue-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"
                    aria-hidden="true"
                  ></div>
                  <OptimizedImage
                    src={project.image}
                    alt={`${project.title} - ${project.description.substring(0, 100)}...`}
                    width={400}
                    height={225}
                    className="w-full h-full"
                    loading={index < 3 ? "eager" : "lazy"}
                    priority={index < 2}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <div className="text-light-grey text-4xl opacity-30 font-heading font-bold">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                </div>
              </figure>

              {/* Project Content */}
              <div>
                <div className="mb-4">
                  <h3
                    className="font-heading font-bold text-xl mb-3 text-light group-hover:text-blue-accent transition-all duration-500"
                    itemProp="name"
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-light-grey text-sm leading-relaxed"
                    itemProp="description"
                  >
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div
                    className="flex flex-wrap gap-2"
                    role="list"
                    aria-label="Technologies used"
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-dark border border-border rounded text-blue-accent text-xs font-mono hover:bg-blue-accent hover:text-white transition-all duration-300"
                        role="listitem"
                        itemProp="programmingLanguage"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <nav
                  className="flex gap-3"
                  role="navigation"
                  aria-label="Project links"
                >
                  <a
                    href={project.demoLink}
                    className="flex-1 btn-primary flex items-center justify-center gap-2 group/btn text-sm py-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View live demo of ${project.title}`}
                    itemProp="url"
                  >
                    <ExternalLink size={14} aria-hidden="true" />
                    Demo
                  </a>
                  <a
                    href={project.githubLink}
                    className="flex-1 btn-secondary flex items-center justify-center gap-2 group/btn text-sm py-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View source code of ${project.title} on GitHub`}
                    itemProp="codeRepository"
                  >
                    <Github size={14} aria-hidden="true" />
                    Code
                  </a>
                </nav>
              </div>
            </article>
          ))}
        </div>

        {/* View More Projects */}
        <footer className="text-center">
          <a
            href="https://github.com/pralhad-neupane"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 group"
            aria-label="View more projects on GitHub profile"
          >
            <Github size={20} aria-hidden="true" />
            View More Projects
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </a>
        </footer>
      </div>
    </section>
  );
};

export default Projects;
