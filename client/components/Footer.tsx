import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: "GitHub",
      url: "https://github.com/pralhad-neupane",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/pralhad-neupane",
    },
    {
      icon: <Twitter size={20} />,
      label: "Twitter",
      url: "https://twitter.com/pralhad_neupane",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-dark-lighter border-t border-border">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div>
            <h3 className="font-heading font-bold text-xl text-light mb-4">
              Pralhad Neupane
            </h3>
            <p className="text-light-grey leading-relaxed mb-6">
              Full Stack MERN Developer passionate about creating modern,
              scalable web applications with clean code and intuitive user
              experiences.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link p-2 bg-dark border border-border rounded-lg hover:border-blue-accent transition-all duration-300"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-light mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-light-grey hover:text-blue-accent transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg text-light mb-4">
              Get in Touch
            </h4>
            <div className="space-y-2 text-light-grey">
              <p>Available for freelance projects</p>
              <p>Open to internship opportunities</p>
              <p>Always learning and growing</p>
            </div>
            <button
              onClick={() => scrollToSection("#contact")}
              className="mt-4 btn-primary inline-flex items-center gap-2"
            >
              Let's Connect
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-light-grey text-center md:text-left">
              © {currentYear} Pralhad Neupane. All rights reserved.
            </p>
            <p className="text-light-grey text-center md:text-right flex items-center gap-1">
              Designed & built with{" "}
              <Heart size={16} className="text-blue-accent" /> by Pralhad
              Neupane
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
