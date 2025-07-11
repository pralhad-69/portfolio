import { Code, Heart, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code",
    },
    {
      icon: <Heart size={24} />,
      title: "User-Centric",
      description: "Prioritizing user experience in every project",
    },
    {
      icon: <Users size={24} />,
      title: "Collaborative",
      description: "Working effectively in team environments",
    },
  ];

  return (
    <section id="about" className="section bg-dark">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-light">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-accent mx-auto transition-all duration-700 hover:w-32"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-on-scroll">
            {/* Bio */}
            <div className="animate-on-scroll-delay-1">
              <h3 className="font-heading font-semibold text-2xl mb-4 text-light">
                Hello! I'm Pralhad Neupane
              </h3>
              <p className="text-light-grey text-lg leading-relaxed mb-6">
                I'm a passionate MERN stack developer from Jhapa, Nepal,
                currently pursuing my studies in software development. I focus
                on creating responsive, high-performance web applications with
                clean architecture and intuitive interfaces using React,
                Node.js, MongoDB, and Express.
              </p>
              <p className="text-light-grey text-lg leading-relaxed">
                With a strong foundation in modern web technologies, I enjoy
                solving complex problems and building digital solutions that
                make a difference.
              </p>
            </div>

            {/* Personal Statement */}
            <div className="bg-dark-lighter border border-border rounded-xl p-6 glow-on-hover animate-on-scroll-delay-2">
              <blockquote className="text-xl text-light italic leading-relaxed">
                "I believe in building digital solutions that are{" "}
                <span className="text-blue-accent font-medium">simple</span>,{" "}
                <span className="text-blue-accent font-medium">scalable</span>,
                and{" "}
                <span className="text-blue-accent font-medium">efficient</span>{" "}
                — prioritizing both code quality and user experience."
              </blockquote>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="space-y-6 animate-on-scroll">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="card hover:border-blue-accent/50 group glow-on-hover"
                style={{
                  animationDelay: `${(index + 1) * 0.2}s`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-blue-accent group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-xl mb-2 text-light">
                      {highlight.title}
                    </h4>
                    <p className="text-light-grey leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="font-heading font-bold text-3xl text-blue-accent mb-1">
                  2+
                </div>
                <div className="text-light-grey text-sm">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-3xl text-blue-accent mb-1">
                  10+
                </div>
                <div className="text-light-grey text-sm">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="font-heading font-bold text-3xl text-blue-accent mb-1">
                  5+
                </div>
                <div className="text-light-grey text-sm">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
