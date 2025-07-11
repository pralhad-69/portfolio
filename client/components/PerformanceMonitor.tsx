import { useEffect } from "react";

// Performance monitoring for Core Web Vitals
const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production and when performance API is available
    if (
      import.meta.env.PROD &&
      typeof window !== "undefined" &&
      "performance" in window
    ) {
      // Measure First Contentful Paint (FCP)
      const measureFCP = () => {
        const fcpEntry = performance
          .getEntriesByType("paint")
          .find((entry) => entry.name === "first-contentful-paint");

        if (fcpEntry) {
          console.log(`FCP: ${fcpEntry.startTime.toFixed(2)}ms`);
          // You can send this to analytics service
        }
      };

      // Measure Largest Contentful Paint (LCP)
      const measureLCP = () => {
        if ("PerformanceObserver" in window) {
          const observer = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log(`LCP: ${lastEntry.startTime.toFixed(2)}ms`);
            // You can send this to analytics service
          });

          observer.observe({ entryTypes: ["largest-contentful-paint"] });
        }
      };

      // Measure First Input Delay (FID)
      const measureFID = () => {
        if ("PerformanceObserver" in window) {
          const observer = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach((entry: any) => {
              console.log(`FID: ${entry.processingStart - entry.startTime}ms`);
              // You can send this to analytics service
            });
          });

          observer.observe({ entryTypes: ["first-input"] });
        }
      };

      // Measure Cumulative Layout Shift (CLS)
      const measureCLS = () => {
        if ("PerformanceObserver" in window) {
          let clsValue = 0;
          const observer = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });
            console.log(`CLS: ${clsValue.toFixed(4)}`);
            // You can send this to analytics service
          });

          observer.observe({ entryTypes: ["layout-shift"] });
        }
      };

      // Initialize measurements
      setTimeout(() => {
        measureFCP();
        measureLCP();
        measureFID();
        measureCLS();
      }, 1000);

      // Cleanup function
      return () => {
        // Cleanup observers if needed
      };
    }
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
