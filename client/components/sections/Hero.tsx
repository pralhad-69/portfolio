import { ArrowDown, Download, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-dark"
    >
      <div className="section text-center">
        <div className="space-y-6">
          {/* Greeting */}
          <p
            className="text-light-grey text-lg mb-4 animate-fade-in opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Hello, I'm
          </p>

          {/* Main Name */}
          <h1
            className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-6 text-light animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Pralhad <span className="text-gradient">Neupane</span>
          </h1>

          {/* Title */}
          <h2
            className="font-heading font-light text-2xl md:text-4xl lg:text-5xl mb-8 text-light-grey animate-slide-in-right opacity-0"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            Expert Full Stack <span className="text-blue-accent">MERN</span>{" "}
            Developer
          </h2>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-light-grey max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in opacity-0"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            Building modern, scalable, and intuitive web applications with
            clean, efficient code.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in opacity-0"
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-primary flex items-center gap-2 group glow-on-hover"
            >
              <Mail size={20} />
              Hire Me
              <span className="group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="btn-secondary flex items-center gap-2 group glow-on-hover"
            >
              <Download size={20} />
              View Projects
              <span className="group-hover:translate-x-2 transition-transform duration-300">
                →
              </span>
            </button>
          </div>

          {/* Scroll Down Indicator */}
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-gentle-bounce animate-fade-in opacity-0"
            style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
          >
            <button
              onClick={() => scrollToSection("about")}
              className="text-light-grey hover:text-blue-accent transition-all duration-500 flex flex-col items-center gap-2 hover:-translate-y-1"
            >
              <span className="text-sm">Scroll Down</span>
              <ArrowDown size={20} className="animate-gentle-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
