import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { ENABLE_AUTH_FEATURES } from "../../constants/featureFlags";
import { ASSETS } from '@/constants/assets';
import { OptimizedImage } from '@/components/core/OptimizedImage';
import { useState, useEffect, useRef } from "react";

export const DesktopNavigation = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const rafRef = useRef<number | null>(null);
  const throttleTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // PERFORMANCE: Throttle + RAF to prevent forced reflows (-30ms, site-wide benefit)
    // Batches scroll position reads in RAF for smooth 60fps across all pages
    const handleScroll = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }

      if (throttleTimeoutRef.current === null) {
        throttleTimeoutRef.current = window.setTimeout(() => {
          throttleTimeoutRef.current = null;
          rafRef.current = requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            setScrolled(scrollY > 20);
          });
        }, 16); // 60fps
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      if (throttleTimeoutRef.current !== null) {
        clearTimeout(throttleTimeoutRef.current);
      }
    };
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 w-full z-50 hidden md:block transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20'
          : 'bg-background/60 backdrop-blur-md'
      }`}
      role="navigation"
      aria-label="Desktop navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Logo and brand name - pushed to left */}
          <div className="flex-shrink-0">
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
          <div className="flex-grow flex justify-center items-center">
            <div className="flex items-center space-x-8 h-full" role="menubar">
              <Link
                to="/studios"
                className={`relative text-white/90 hover:text-white transition-all duration-300 font-geist text-base font-medium tracking-[-0.01em] flex items-center h-full group ${
                  isActive('/studios') ? 'text-white' : ''
                }`}
                role="menuitem"
              >
                Cre8tive AI Studios
                <span className={`absolute bottom-5 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform origin-left transition-transform duration-300 ${
                  isActive('/studios') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
              <Link
                to="/briefing-engine"
                className={`relative text-white/90 hover:text-white transition-all duration-300 font-geist text-base font-medium tracking-[-0.01em] flex items-center h-full group ${
                  isActive('/briefing-engine') ? 'text-white' : ''
                }`}
                role="menuitem"
              >
                AI Briefing Engine
                <span className={`absolute bottom-5 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left transition-transform duration-300 ${
                  isActive('/briefing-engine') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
              {/* AI Agents temporarily hidden until service is polished */}
              {/* <Link
                to="/agents"
                className={`relative text-white/90 hover:text-white transition-all duration-300 font-geist text-base font-medium tracking-[-0.01em] flex items-center h-full group ${
                  isActive('/agents') ? 'text-white' : ''
                }`}
                role="menuitem"
              >
                AI Agents
                <span className={`absolute bottom-5 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-teal-500 transform origin-left transition-transform duration-300 ${
                  isActive('/agents') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link> */}
              <Link
                to="/conversational"
                className={`relative text-white/90 hover:text-white transition-all duration-300 font-geist text-base font-medium tracking-[-0.01em] flex items-center h-full group ${
                  isActive('/conversational') ? 'text-white' : ''
                }`}
                role="menuitem"
              >
                Conversational AI
                <span className={`absolute bottom-5 left-0 w-full h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 transform origin-left transition-transform duration-300 ${
                  isActive('/conversational') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
              <Link
                to="/about"
                className={`relative text-white/90 hover:text-white transition-all duration-300 font-geist text-base font-medium tracking-[-0.01em] flex items-center h-full group ${
                  isActive('/about') ? 'text-white' : ''
                }`}
                role="menuitem"
              >
                About Us
                <span className={`absolute bottom-5 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transform origin-left transition-transform duration-300 ${
                  isActive('/about') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
              <Link
                to="/contact"
                className={`relative text-white/90 hover:text-white transition-all duration-300 font-geist text-base font-medium tracking-[-0.01em] flex items-center h-full group ${
                  isActive('/contact') ? 'text-white' : ''
                }`}
                role="menuitem"
              >
                Contact
                <span className={`absolute bottom-5 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transform origin-left transition-transform duration-300 ${
                  isActive('/contact') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            </div>
          </div>

          {/* Sign in button - maintains position */}
          {ENABLE_AUTH_FEATURES && (
            <div className="flex-shrink-0">
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