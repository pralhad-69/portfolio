import { useState, useRef, useEffect } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: "lazy" | "eager";
  priority?: boolean;
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  loading = "lazy",
  priority = false,
  sizes = "100vw",
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Generate WebP and fallback URLs
  const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  const originalSrc = src;

  // Generate responsive srcSet
  const generateSrcSet = (baseSrc: string) => {
    if (baseSrc.includes("placeholder.svg")) return baseSrc;

    const extension = baseSrc.split(".").pop();
    const baseName = baseSrc.replace(`.${extension}`, "");

    return [
      `${baseName}-400w.${extension} 400w`,
      `${baseName}-800w.${extension} 800w`,
      `${baseName}-1200w.${extension} 1200w`,
      `${baseName}-1600w.${extension} 1600w`,
    ].join(", ");
  };

  return (
    <div className={`relative overflow-hidden ${className}`} ref={imgRef}>
      {isInView && (
        <picture>
          {/* WebP source for modern browsers */}
          <source
            srcSet={generateSrcSet(webpSrc)}
            sizes={sizes}
            type="image/webp"
          />
          {/* Fallback for older browsers */}
          <source
            srcSet={generateSrcSet(originalSrc)}
            sizes={sizes}
            type="image/jpeg"
          />
          <img
            src={originalSrc}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            decoding="async"
            className={`transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } ${error ? "hidden" : ""}`}
            onLoad={() => setIsLoaded(true)}
            onError={() => setError(true)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </picture>
      )}

      {/* Loading placeholder */}
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-dark-lighter animate-pulse flex items-center justify-center">
          <div className="w-12 h-12 border-2 border-blue-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error fallback */}
      {error && (
        <div className="absolute inset-0 bg-dark-lighter flex items-center justify-center">
          <div className="text-light-grey text-center">
            <div className="text-4xl mb-2">📷</div>
            <div className="text-sm">Image unavailable</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
