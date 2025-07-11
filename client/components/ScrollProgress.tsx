import { useScrollProgress } from "../hooks/useScrollAnimation";

const ScrollProgress = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-dark/20">
      <div
        className="h-full bg-gradient-to-r from-blue-accent to-blue-accent/80 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;
