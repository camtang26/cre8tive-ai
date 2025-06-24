import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ENABLE_AUTH_FEATURES } from "../../constants/featureFlags";
import { ASSETS } from '@/constants/assets';
import { OptimizedImage } from '@/components/core/OptimizedImage';

export const DesktopNavigation = () => {
  return (
    <nav 
      className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10 hidden md:block" 
      role="navigation" 
      aria-label="Desktop navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center h-24">
          {/* Logo and brand name - pushed to left */}
          <div className="flex-shrink-0 -mt-1">
            <Link 
              to="/" 
              className="flex items-center space-x-4" 
              aria-label="Go to homepage"
            >
              <OptimizedImage
                webpSrc={ASSETS.logos.medium.webp}
                jpegSrc={ASSETS.logos.medium.jpeg}
                alt="Cre8tive AI Logo"
                className="h-10 w-auto"
              />
              <span className="text-white font-geist font-bold text-2xl tracking-[-0.02em] leading-none">
                Cre8tive AI
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}; 