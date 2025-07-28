import {
  Database,
  Server,
  Globe,
  Layers,
  Code,
  Zap,
  GitBranch,
  Cloud,
  Smartphone,
} from "lucide-react";

const Skills = () => {
  const skills = [
    {
      name: "MongoDB",
      icon: <Database size={32} />,
      category: "Database",
      level: 85,
    },
    {
      name: "Express.js",
      icon: <Server size={32} />,
      category: "Backend",
      level: 90,
    },
    {
      name: "React.js",
      icon: <Globe size={32} />,
      category: "Frontend",
      level: 95,
    },
    {
      name: "Node.js",
      icon: <Layers size={32} />,
      category: "Backend",
      level: 88,
    },
    {
      name: "JavaScript (ES6+)",
      icon: <Code size={32} />,
      category: "Language",
      level: 92,
    },

  ];

  const categories = [
    "All",
    "Frontend",
    "Backend",
    "Database",
    "Language",
    "Operations",
  ];

  return (
    <section id="skills" className="section bg-dark-lighter">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-light">
            <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-blue-accent mx-auto mb-6 transition-all duration-700 hover:w-32"></div>
          <p className="text-light-grey text-lg max-w-2xl mx-auto">
            Specialized in the MERN stack with expertise in modern web
            development technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="card group hover:border-blue-accent/50 glow-on-hover animate-on-scroll"
              style={
                {
                  animationDelay: `${index * 0.15}s`,
                  "--stagger-delay": `${index * 0.1}s`,
                } as React.CSSProperties
              }
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-blue-accent group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-light">
                    {skill.name}
                  </h3>
                  <span className="text-light-grey text-sm">
                    {skill.category}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-light-grey">Proficiency</span>
                  <span className="text-blue-accent">{skill.level}%</span>
                </div>
                <div className="w-full bg-dark h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-accent to-blue-accent/80 transition-all duration-1500 ease-out hover:shadow-lg hover:shadow-blue-accent/50"
                    style={{
                      width: `${skill.level}%`,
                      transform: "scaleX(0)",
                      transformOrigin: "left",
                      animation: `scaleIn 1.5s ease-out ${index * 0.1}s forwards`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="text-center animate-on-scroll">
          <h3 className="font-heading font-semibold text-xl mb-6 text-light">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Tailwind CSS",
              "Git",
              "VS Code",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-dark border border-border rounded-lg text-light-grey hover:text-blue-accent hover:border-blue-accent hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-accent/25 transition-all duration-300 animate-on-scroll"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
