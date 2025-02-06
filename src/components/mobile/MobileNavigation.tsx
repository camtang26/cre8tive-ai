import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { MobileMenuOverlay } from "./MobileMenuOverlay";
import { TouchRipple } from "./TouchRipple";
import { ASSETS } from '@/constants/assets';
import { OptimizedImage } from '@/components/core/OptimizedImage';

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <OptimizedImage
              webpSrc={ASSETS.logos.small.webp}
              jpegSrc={ASSETS.logos.small.jpeg}
              alt="Cre8tive AI Logo"
              className="h-8 w-auto"
            />
          </Link>

          <button
            onClick={toggleMenu}
            className="relative p-4 -mr-4 touch-manipulation"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            style={{ touchAction: 'manipulation' }}
          >
            <Menu className="w-6 h-6 text-white" />
            <TouchRipple />
          </button>
        </div>
      </nav>

      <MobileMenuOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};