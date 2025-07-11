import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-dark text-light flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        {/* Fun Icon/Illustration */}
        <div className="mb-8 animate-bounce">
          <div className="text-8xl mb-4">🏠</div>
          <div className="text-6xl opacity-50">🔍</div>
        </div>

        {/* Error Code */}
        <h1 className="font-heading font-bold text-6xl md:text-8xl mb-6 text-gradient">
          404
        </h1>

        {/* Custom Message */}
        <h2 className="font-heading font-semibold text-2xl md:text-3xl mb-6 text-light">
          Ooops! You've landed in Pralhad's basement.
        </h2>

        <p className="text-xl md:text-2xl text-light-grey mb-8">
          This page doesn't exist.
        </p>

        {/* Description */}
        <p className="text-light-grey text-lg leading-relaxed mb-12 max-w-lg mx-auto">
          Looks like you've wandered off the beaten path. Don't worry, even the
          best developers get lost sometimes. Let's get you back to where the
          magic happens!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/" className="btn-primary flex items-center gap-2 group">
            <Home size={20} />
            Back to Homepage
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
          </Link>

          <Link
            to="/#contact"
            className="btn-secondary flex items-center gap-2 group"
          >
            Report Issue
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>

        {/* Fun Footer */}
        <div className="mt-16 p-6 bg-dark-lighter border border-border rounded-xl">
          <p className="text-light-grey text-sm">
            <strong>Developer Tip:</strong> Check the URL for typos, or maybe
            this feature is still in development. Either way, I'd love to hear
            about it!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
