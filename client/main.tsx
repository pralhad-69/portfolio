import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import PerformanceMonitor from "./components/PerformanceMonitor.tsx";
import "./global.css";

// Prefetch critical resources
if (typeof window !== "undefined") {
  // Prefetch important routes
  const prefetchLinks = [
    "https://fonts.googleapis.com",
    "https://github.com/pralhad-neupane",
    "https://linkedin.com/in/pralhad-neupane",
  ];

  prefetchLinks.forEach((href) => {
    const link = document.createElement("link");
    link.rel = "dns-prefetch";
    link.href = href;
    document.head.appendChild(link);
  });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PerformanceMonitor />
    <App />
  </React.StrictMode>,
);
