import { Link } from 'react-router-dom';
import { ASSETS } from '@/constants/assets';
import { OptimizedImage } from '@/components/core/OptimizedImage';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side - Logo and description */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <Link to="/" className="block">
              <OptimizedImage
                webpSrc={ASSETS.logos.small.webp}
                jpegSrc={ASSETS.logos.small.jpeg}
                alt="Cre8tive AI Logo"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-white/70 text-sm text-center lg:text-left">
              Transforming businesses with AI-powered video production
            </p>
          </div>
          
          {/* Center - Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-white font-medium mb-2">Services</h3>
              <Link to="/studios" className="text-white/70 hover:text-white text-sm">Cre8tive AI Studios</Link>
              <Link to="/studios-engine" className="text-white/70 hover:text-white text-sm">CS AI Engine</Link>
              <Link to="/agents" className="text-white/70 hover:text-white text-sm">AI Agents</Link>
              <Link to="/conversational" className="text-white/70 hover:text-white text-sm">Conversational AI</Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-white font-medium mb-2">Company</h3>
              <Link to="/about" className="text-white/70 hover:text-white text-sm">About Us</Link>
              <Link to="/contact" className="text-white/70 hover:text-white text-sm">Contact</Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-white font-medium mb-2">Legal</h3>
              <Link to="/privacy" className="text-white/70 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-white/70 hover:text-white text-sm">Terms of Service</Link>
            </div>
          </div>

          {/* Right side - Secondary logo */}
          <div className="hidden lg:block">
            <OptimizedImage
              webpSrc={ASSETS.logos.medium.webp}
              jpegSrc={ASSETS.logos.medium.jpeg}
              alt="Cre8tive AI Logo"
              className="h-16 w-auto opacity-50 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Cre8tive AI. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="text-white/50 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/50 hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 