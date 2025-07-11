import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioPage from "./components/PortfolioPage";
import NotFound from "./pages/NotFound";

function App() {
  useEffect(() => {
    // Add dark class to html element
    document.documentElement.classList.add("dark");

    // Scroll animation observer for elements
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -80px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          // Also trigger for any delay variants
          const delayElements = entry.target.querySelectorAll(
            ".animate-on-scroll-delay-1, .animate-on-scroll-delay-2, .animate-on-scroll-delay-3",
          );
          delayElements.forEach((el) => el.classList.add("in-view"));
        }
      });
    }, observerOptions);

    // Function to observe elements
    const observeElements = () => {
      const animatedElements = document.querySelectorAll(".animate-on-scroll");
      animatedElements.forEach((el) => observer.observe(el));
    };

    // Initial observation
    observeElements();

    // Re-observe on route changes or dynamic content
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark text-light">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/404-react" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
