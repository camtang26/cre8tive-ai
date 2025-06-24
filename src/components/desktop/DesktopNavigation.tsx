import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ENABLE_AUTH_FEATURES } from "../../constants/featureFlags";
import { ASSETS } from '@/constants/assets';
import { OptimizedImage } from '@/components/core/OptimizedImage';
import { prefetchOnHover } from '@/utils/routePrefetch';

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

          {/* Navigation links - centered with flex-grow and justify-center */}
          <div className="flex-grow flex justify-center items-center -mt-1">
            <div className="flex items-center space-x-12 h-full" role="menubar">
              <Link 
                to="/studios" 
                className="text-white/90 hover:text-white transition-colors font-geist text-lg font-medium tracking-[-0.01em] flex items-center h-full"
                role="menuitem"
                onMouseEnter={() => prefetchOnHover('/studios')}
              >
                Cre8tive AI Studios
              </Link>
              <Link 
                to="/studios-engine" 
                className="text-white/90 hover:text-white transition-colors font-geist text-lg font-medium tracking-[-0.01em] flex items-center h-full"
                role="menuitem"
                onMouseEnter={() => prefetchOnHover('/studios-engine')}
              >
                CS AI Engine
              </Link>
              <Link 
                to="/agents" 
                className="text-white/90 hover:text-white transition-colors font-geist text-lg font-medium tracking-[-0.01em] flex items-center h-full"
                role="menuitem"
                onMouseEnter={() => prefetchOnHover('/agents')}
              >
                AI Agents
              </Link>
              <Link 
                to="/conversational" 
                className="text-white/90 hover:text-white transition-colors font-geist text-lg font-medium tracking-[-0.01em] flex items-center h-full"
                role="menuitem"
                onMouseEnter={() => prefetchOnHover('/conversational')}
              >
                Conversational AI Agents
              </Link>
              <Link 
                to="/about" 
                className="text-white/90 hover:text-white transition-colors font-geist text-lg font-medium tracking-[-0.01em] flex items-center h-full"
                role="menuitem"
                onMouseEnter={() => prefetchOnHover('/about')}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="text-white/90 hover:text-white transition-colors font-geist text-lg font-medium tracking-[-0.01em] flex items-center h-full"
                role="menuitem"
                onMouseEnter={() => prefetchOnHover('/contact')}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Sign in button - maintains position */}
          {ENABLE_AUTH_FEATURES && (
            <div className="flex-shrink-0 -mt-1">
              <Button 
                variant="outline" 
                className="bg-transparent text-white border-white/20 hover:bg-white/10 font-geist font-medium tracking-[-0.01em] text-lg flex items-center"
                aria-label="Sign in to your account"
              >
                Sign in
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};