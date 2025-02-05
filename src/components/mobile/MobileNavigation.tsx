import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { MobileMenuOverlay } from "./MobileMenuOverlay";
import { TouchRipple } from "./TouchRipple";

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-12">
            <Link 
              to="/" 
              className="relative flex items-center space-x-2 touch-manipulation"
              style={{ touchAction: 'manipulation' }}
            >
              <img
                src="/images/logo-small.jpeg"
                alt="Cre8tive AI Logo"
                className="w-7 h-7"
                loading="eager"
              />
              <span className="font-geist text-white font-bold">
                Cre8tive AI
              </span>
              <TouchRipple />
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
        </div>
      </nav>

      <MobileMenuOverlay isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};