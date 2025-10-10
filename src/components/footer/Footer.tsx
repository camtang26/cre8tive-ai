import { Link } from 'react-router-dom';
import { ASSETS } from '@/constants/assets';
import { OptimizedImage } from '@/components/core/OptimizedImage';

export const Footer = () => {
  return (
    <footer className="relative bg-background border-t border-white/10 overflow-hidden">
      {/* Professional Background Gradient */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 gradient-mesh" />
      </div>

      <div className="container mx-auto px-4 py-16 relative">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
          {/* Left side - Logo and description */}
          <div className="flex flex-col items-start gap-6 lg:max-w-sm">
            <Link to="/" className="block group">
              <OptimizedImage
                webpSrc={ASSETS.logos.medium.webp}
                jpegSrc={ASSETS.logos.medium.jpeg}
                alt="Cre8tive AI Logo"
                className="h-12 w-auto transition-opacity group-hover:opacity-80"
              />
            </Link>
            <p className="text-white/70 text-base leading-relaxed">
              Transforming businesses with cutting-edge AI-powered solutions for video production, automation, and intelligent systems.
            </p>
            {/* Professional contact info */}
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:0404713440" className="text-white/60 hover:text-blue-400 transition-colors">
                Phone: 0404 713 440
              </a>
              <a href="mailto:contact@cre8tive.ai" className="text-white/60 hover:text-blue-400 transition-colors">
                Email: contact@cre8tive.ai
              </a>
            </div>
          </div>

          {/* Center - Navigation Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 flex-grow">
            <div className="flex flex-col gap-3">
              <h3 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">Services</h3>
              <Link to="/studios" className="text-white/70 hover:text-blue-400 text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                Cre8tive AI Studios
              </Link>
              <Link to="/briefing-engine" className="text-white/70 hover:text-blue-400 text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                AI Briefing Engine
              </Link>
              {/* AI Agents temporarily hidden until service is polished */}
              {/* <Link to="/agents" className="text-white/70 hover:text-cyan-400 text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                AI Agents
              </Link> */}
              <Link to="/conversational" className="text-white/70 hover:text-emerald-400 text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                Conversational AI
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">Company</h3>
              <Link to="/about" className="text-white/70 hover:text-blue-400 text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                About Us
              </Link>
              <Link to="/contact" className="text-white/70 hover:text-amber-400 text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                Contact
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-white font-semibold mb-2 text-sm uppercase tracking-wider">Legal</h3>
              <Link to="/privacy" className="text-white/70 hover:text-blue-400 text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/70 hover:text-blue-400 text-sm transition-colors duration-200 hover:translate-x-1 inline-block">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Cre8tive AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-white/50 hover:text-white text-sm transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="text-white/50 hover:text-white text-sm transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 