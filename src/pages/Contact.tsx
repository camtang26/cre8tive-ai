import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, Building2 } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Main Gradient Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, #000000 0%, #000000 75%, #0D0D1D 100%)',
          opacity: 0.95
        }}
      />
      
      {/* Brand Color Accents */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 
            'radial-gradient(circle at 20% 20%, rgba(155,135,245,0.15) 0%, transparent 40%), ' +
            'radial-gradient(circle at 80% 80%, rgba(217,70,239,0.15) 0%, transparent 40%)',
          filter: 'blur(120px)'
        }}
      />

      <Navigation />
      
      <main className="relative pt-24 md:pt-32 pb-8 md:pb-16">
        <div className="container mx-auto px-4 md:px-4">
          {/* Hero Section */}
          <div className="text-center mb-8 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 font-inter tracking-tight">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/80 font-inter">
              Ready to Transform Your Business?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-20">
            {/* Contact Information */}
            <div className="space-y-6 md:space-y-12">
              {/* Contact Methods */}
              <div className="space-y-4 md:space-y-8">
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-white mb-1">Email Us</h3>
                    <p className="text-sm md:text-base text-white/70">cameron@cre8tive.ai</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-white mb-1">Call Us</h3>
                    <p className="text-sm md:text-base text-white/70">0404 713 440</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <Building2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-white mb-1">Company Details</h3>
                    <p className="text-sm md:text-base text-white/70">
                      Cre8tive AI Pty Ltd<br />
                      ACN: 670 797 083
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Choose Section */}
              <div className="space-y-4 md:space-y-6 p-4 md:p-8 rounded-xl bg-white/5 backdrop-blur-sm">
                <h2 className="text-xl md:text-2xl font-bold text-white">Why Choose Cre8tive AI?</h2>
                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-white/70" />
                    <p className="text-sm md:text-base text-white/70">
                      <span className="font-semibold text-white">Cutting-Edge Technology:</span> Harness the power of AI to stay ahead of the curve.
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-white/70" />
                    <p className="text-sm md:text-base text-white/70">
                      <span className="font-semibold text-white">Custom Solutions:</span> Tailored to your business, your goals, and your industry.
                    </p>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 mt-2 rounded-full bg-white/70" />
                    <p className="text-sm md:text-base text-white/70">
                      <span className="font-semibold text-white">Proven Results:</span> From faster production times to higher margins, we deliver real value.
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-4 md:p-8 rounded-xl bg-white/5 backdrop-blur-sm">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>

          {/* Reinforced Call to Action */}
          <div className="mt-10 md:mt-20 p-4 md:p-8 rounded-xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm">
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              The future of business is here—stay ahead of the curve with AI-powered video production, autonomous AI agents, and the Cre8tive AI Ad Manager. Don't let your competitors outpace you. Contact us today to explore how we can build smarter, more efficient solutions tailored to your goals, brand, and competitive edge.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;