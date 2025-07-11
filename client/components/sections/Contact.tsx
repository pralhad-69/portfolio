import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // For development, simulate form submission
    if (import.meta.env.DEV) {
      setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", message: "" });
        }, 5000);
      }, 1000);
      return;
    }

    try {
      // Create form data in the format Netlify expects
      const formElement = e.target as HTMLFormElement;
      const formData = new FormData(formElement);

      const response = await fetch("/", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsLoading(false);
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", message: "" });
        }, 5000);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      // Fallback: try the traditional form submission
      try {
        const response = await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            "form-name": "contact",
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }).toString(),
        });

        if (response.ok) {
          setIsLoading(false);
          setIsSubmitted(true);
          setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", message: "" });
          }, 5000);
        } else {
          throw new Error("Fallback submission also failed");
        }
      } catch (fallbackError) {
        console.error("Fallback submission failed:", fallbackError);
        setIsLoading(false);
        setError(
          "There was an error sending your message. Please try again later or contact me directly at pralhadneupane14@gmail.com",
        );
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "pralhadneupane14@gmail.com",
      link: "mailto:pralhadneupane14@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+977 9827920138",
      link: "tel:+9779827920138",
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Jhapa, Nepal",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: "GitHub",
      url: "https://github.com/pralhad-neupane",
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/pralhad-neupane",
    },
    {
      icon: <Twitter size={24} />,
      label: "Twitter",
      url: "https://twitter.com/pralhad_neupane",
    },
  ];

  return (
    <section id="contact" className="section bg-dark">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-light">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-blue-accent mx-auto mb-6 transition-all duration-700 hover:w-32"></div>
          <p className="text-light-grey text-lg max-w-2xl mx-auto">
            Let's collaborate on your next project. I'm always open to
            internships, freelance, and learning opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h3 className="font-heading font-bold text-2xl mb-6 text-light">
              Send a Message
            </h3>

            {isSubmitted ? (
              <div className="card border-green-500/50 bg-green-500/10">
                <div className="flex items-center gap-3 text-green-400">
                  <CheckCircle size={24} />
                  <div>
                    <h4 className="font-semibold">Message Sent!</h4>
                    <p className="text-sm opacity-80">
                      Thank you for reaching out. I'll get back to you soon.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {error && (
                  <div className="card border-red-500/50 bg-red-500/10 mb-6">
                    <div className="flex items-start gap-3 text-red-400">
                      <div className="text-red-400 mt-0.5">⚠️</div>
                      <div>
                        <h4 className="font-semibold">Error</h4>
                        <p className="text-sm opacity-80">{error}</p>
                      </div>
                    </div>
                  </div>
                )}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  name="contact"
                  method="POST"
                >
                  {/* Hidden input for Netlify Forms */}
                  <input type="hidden" name="form-name" value="contact" />
                  {/* Honeypot field for spam protection */}
                  <div style={{ display: "none" }}>
                    <input name="bot-field" />
                  </div>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-light mb-2 font-medium"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-lighter border border-border rounded-lg text-light focus:border-blue-accent focus:outline-none transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-light mb-2 font-medium"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-lighter border border-border rounded-lg text-light focus:border-blue-accent focus:outline-none transition-colors duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-light mb-2 font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-dark-lighter border border-border rounded-lg text-light focus:border-blue-accent focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell me about your project or say hello..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`btn-primary w-full flex items-center justify-center gap-2 group ${
                      isLoading ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                        <span className="group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-heading font-bold text-2xl mb-6 text-light">
              Contact Information
            </h3>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-4 bg-dark-lighter border border-border rounded-lg hover:border-blue-accent/50 transition-colors duration-300 group"
                >
                  <div className="text-blue-accent group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-light-grey text-sm">{info.label}</div>
                    <div className="text-light font-medium">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-heading font-semibold text-xl mb-4 text-light">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link p-3 bg-dark-lighter border border-border rounded-lg hover:border-blue-accent transition-all duration-300"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-dark-lighter border border-border rounded-xl">
              <h4 className="font-heading font-semibold text-lg mb-3 text-light">
                Let's Build Something Great
              </h4>
              <p className="text-light-grey leading-relaxed">
                Whether you have a project in mind, need help with development,
                or just want to connect, I'd love to hear from you. Let's create
                something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
