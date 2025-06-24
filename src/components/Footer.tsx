import { Link } from "react-router-dom";
import { Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import { ASSETS } from '@/constants/assets';
import { OptimizedImage } from '@/components/core/OptimizedImage';

export const Footer = () => {
  return (
    <footer className="relative" role="contentinfo">
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, #000000 0%, #000000 75%, #0D0D1D 100%)',
          opacity: 0.95
        }}
        aria-hidden="true"
      />
      
      <div className="relative border-t border-white/10 py-4 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12">
            {/* Logo and Social Links Section */}
            <div className="space-y-2 md:space-y-4 col-span-2 md:col-span-1 flex flex-col items-start">
              <div className="flex items-center space-x-2">
                <OptimizedImage
                  webpSrc={ASSETS.logos.small.webp}
                  jpegSrc={ASSETS.logos.small.jpeg}
                  alt="Cre8tive AI Logo"
                  className="w-5 h-5 md:w-8 md:h-8"
                />
                <span className="font-geist text-white font-bold text-xs md:text-base">Cre8tive AI</span>
              </div>
              <div className="flex space-x-3 md:space-x-4" role="list" aria-label="Social media links">
                <a 
                  href="https://www.instagram.com/cre8tiveai_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 md:w-5 md:h-5 text-white/70 hover:text-white transition-colors duration-300 cursor-pointer" />
                </a>
                <a 
                  href="https://www.youtube.com/@Cre8tiveAI-nd4ms" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Youtube"
                >
                  <Youtube className="w-4 h-4 md:w-5 md:h-5 text-white/70 hover:text-white transition-colors duration-300 cursor-pointer" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/cre8tive-ai/?viewAsMember=true" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-white/70 hover:text-white transition-colors duration-300 cursor-pointer" />
                </a>
              </div>
            </div>

            {/* Services Navigation */}
            <nav aria-label="Services navigation" className="col-span-1">
              <h3 className="font-geist text-white font-semibold text-xs md:text-base mb-2 md:mb-4">Services</h3>
              <ul className="space-y-1 md:space-y-2" role="list">
                <li>
                  <Link to="/studios" className="font-geist text-xs md:text-base text-white/70 hover:text-white transition-colors duration-300">
                    Cre8tive AI Studios
                  </Link>
                </li>
                <li>
                  <Link to="/studios-engine" className="font-geist text-xs md:text-base text-white/70 hover:text-white transition-colors duration-300">
                    CS AI Engine
                  </Link>
                </li>
                <li>
                  <Link to="/agents" className="font-geist text-xs md:text-base text-white/70 hover:text-white transition-colors duration-300">
                    AI Agents
                  </Link>
                </li>
                <li>
                  <Link to="/conversational" className="font-geist text-xs md:text-base text-white/70 hover:text-white transition-colors duration-300">
                    Conversational AI Agents
                  </Link>
                </li>
              </ul>
            </nav>

            {/* About Navigation */}
            <nav aria-label="About navigation" className="col-span-1">
              <h3 className="font-geist text-white font-semibold text-xs md:text-base mb-2 md:mb-4">About Us</h3>
              <ul className="space-y-1 md:space-y-2" role="list">
                <li>
                  <Link to="/contact" className="font-geist text-xs md:text-base text-white/70 hover:text-white transition-colors duration-300">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Copyright and Logo Section */}
            <div className="flex flex-col items-end col-span-2 md:col-span-1">
              <h3 className="font-geist text-white font-semibold text-xs md:text-base mb-2 md:mb-4">© 2025 Cre8tive AI</h3>
              <Link to="/" aria-label="Return to homepage">
                <OptimizedImage
                  webpSrc={ASSETS.logos.medium.webp}
                  jpegSrc={ASSETS.logos.medium.jpeg}
                  alt="Footer logo"
                  className="w-16 md:w-32 hover:opacity-90 transition-opacity duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};