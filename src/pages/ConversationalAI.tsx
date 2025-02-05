import { Navigation } from "@/components/Navigation";
import { useEffect } from "react";
import { HeroSection } from "@/components/conversational/HeroSection";
import { WhatIsSection } from "@/components/conversational/WhatIsSection";
import { FeaturesSection } from "@/components/conversational/FeaturesSection";
import { ApplicationsSection } from "@/components/conversational/ApplicationsSection";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { FadeIn } from "@/components/shared/FadeIn";

const ConversationalAI = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elevenlabs.io/convai-widget/index.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Main Gradient Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,255,128,0.03) 0%, #000000 75%, #0D0D1D 100%)',
          opacity: 0.95
        }}
      />
      
      {/* Brand Color Accents */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 
            'radial-gradient(circle at 20% 20%, rgba(0,255,128,0.08) 0%, transparent 40%), ' +
            'radial-gradient(circle at 80% 80%, rgba(0,255,128,0.08) 0%, transparent 40%)',
          filter: 'blur(120px)'
        }}
      />

      <Navigation />
      <main className="relative pt-20">
        <HeroSection />
        <FadeIn>
          <WhatIsSection />
        </FadeIn>
        <FadeIn>
          <FeaturesSection />
        </FadeIn>
        <FadeIn>
          <ApplicationsSection />
        </FadeIn>
        <FadeIn>
          <ContactCTA />
        </FadeIn>
      </main>
      <elevenlabs-convai agent-id="lQXvJFg8zSqlerOKPXm6"></elevenlabs-convai>
    </div>
  );
};

export default ConversationalAI;