import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ENABLE_AUTH_FEATURES } from "../../constants/featureFlags";
import { X } from "lucide-react";

export const MobileMenuOverlay = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <div 
      className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-xl transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 p-2 z-50 text-white hover:text-white/80 transition-colors"
        aria-label="Close menu"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="container mx-auto px-4 py-8">
        <nav className="flex flex-col space-y-6 mt-8">
          <Link 
            to="/" 
            className="text-white/90 hover:text-white transition-colors font-geist text-2xl font-medium tracking-[-0.02em]"
            onClick={onClose}
          >
            Home
          </Link>
          <Link 
            to="/studios" 
            className="text-white/90 hover:text-white transition-colors font-geist text-2xl font-medium tracking-[-0.02em]"
            onClick={onClose}
          >
            Cre8tive AI Studios
          </Link>
          <Link 
            to="/manager" 
            className="text-white/90 hover:text-white transition-colors font-geist text-2xl font-medium tracking-[-0.02em]"
            onClick={onClose}
          >
            Ad Manager
          </Link>
          <Link 
            to="/agents" 
            className="text-white/90 hover:text-white transition-colors font-geist text-2xl font-medium tracking-[-0.02em]"
            onClick={onClose}
          >
            AI Agents
          </Link>
          <Link 
            to="/conversational" 
            className="text-white/90 hover:text-white transition-colors font-geist text-2xl font-medium tracking-[-0.02em]"
            onClick={onClose}
          >
            Conversational AI Agents
          </Link>
          <Link 
            to="/about" 
            className="text-white/90 hover:text-white transition-colors font-geist text-2xl font-medium tracking-[-0.02em]"
            onClick={onClose}
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className="text-white/90 hover:text-white transition-colors font-geist text-2xl font-medium tracking-[-0.02em]"
            onClick={onClose}
          >
            Contact
          </Link>
          
          {ENABLE_AUTH_FEATURES && (
            <Button 
              variant="outline" 
              className="w-full bg-transparent text-white border-white/20 hover:bg-white/10 font-geist font-medium tracking-[-0.02em] text-xl"
            >
              Sign in
            </Button>
          )}
        </nav>
      </div>
    </div>
  );
};