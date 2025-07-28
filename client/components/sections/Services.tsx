import {
  Globe,
  Server,
  Smartphone,
  Layers,
  Cloud,
  Code,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Globe size={48} />,
      title: "Web Application Development",
      description:
        "Full-stack web applications using modern technologies like React, Node.js, and MongoDB. From concept to deployment.",
      features: [
        "Responsive Design",
        "Performance Optimization",
        "SEO Friendly",
      ],
    },
    {
      icon: <Server size={48} />,
      title: "API & Backend Development",
      description:
        "Robust and scalable backend solutions with RESTful APIs, authentication, and database integration.",
      features: [
        "RESTful API Design",
        "Authentication & Security",
      ],
    },
    {
      icon: <Smartphone size={48} />,
      title: "Frontend Development",
      description:
        "Modern, interactive user interfaces with React, Next.js, and cutting-edge CSS frameworks.",
      features: [
        "React js",
        "Component Libraries",
        "State Management",
      ],
    }
  ];

  return (
    <section id="services" className="section bg-dark-lighter">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-light">
            Services <span className="text-gradient">I Offer</span>
          </h2>
          <div className="w-24 h-1 bg-blue-accent mx-auto mb-6 transition-all duration-700 hover:w-32"></div>
          <p className="text-light-grey text-lg max-w-2xl mx-auto">
            Comprehensive web development services to bring your ideas to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="card group hover:border-blue-accent/50 h-full transform transition-all duration-500 hover:-translate-y-2 animate-on-scroll"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon */}
              <div className="text-blue-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-xl mb-4 text-light">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-light-grey leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-2 text-light-grey text-sm"
                  >
                    <div className="w-2 h-2 bg-blue-accent rounded-full flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <button className="text-blue-accent hover:text-light transition-colors duration-300 flex items-center gap-2 group/btn mt-auto">
                <span>Learn More</span>
                <ArrowRight
                  size={16}
                  className="group-hover/btn:translate-x-1 transition-transform"
                />
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-dark border border-border rounded-xl p-8">
          <h3 className="font-heading font-bold text-2xl mb-4 text-light">
            Ready to Start Your Project?
          </h3>
          <p className="text-light-grey text-lg mb-6 max-w-2xl mx-auto">
            Let's discuss your ideas and create something amazing together. I'm
            available for freelance projects and internship opportunities.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="btn-primary inline-flex items-center gap-2 group"
          >
            Get In Touch
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
