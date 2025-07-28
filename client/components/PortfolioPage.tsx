import Navigation from "./Navigation";
import ScrollProgress from "./ScrollProgress";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Services from "./sections/Services";
import Contact from "./sections/Contact";
import Footer from "./Footer";

const PortfolioPage = () => {
  return (
    <>
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-accent text-white px-4 py-2 z-50"
      >
        Skip to main content
      </a>

      {/* Navigation Header */}
      <Navigation />

      {/* Main Content */}
      <main id="main-content" role="main">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default PortfolioPage;
