import { ContactForm } from "../ContactForm";
import { ScrollFade } from "./ScrollFade";

export const ContactCTA = () => {
  return (
    <section className="py-8 md:py-32 relative overflow-hidden">
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,255,128,0.03) 0%, #000000 75%, #0D0D1D 100%)',
          opacity: 0.95
        }}
      />
      
      <div className="container relative mx-auto px-4 md:px-6 z-20">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
          <ScrollFade>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gradient mb-3 md:mb-6 font-geist neon-glow">
              Contact Us
            </h2>
          </ScrollFade>
          
          <ScrollFade delay={100}>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gradient mb-3 md:mb-8 font-geist neon-glow">
              Don't get left behind—AI is transforming businesses now.
            </h3>
          </ScrollFade>
          
          <ScrollFade delay={200}>
            <p className="text-sm md:text-lg lg:text-xl text-white/90 leading-relaxed mb-3 md:mb-8 neon-glow">
              Reach out today to discover how Cre8tive AI's customized solutions—from AI-powered video production 
              to autonomous AI agents and the Cre8tive AI Ad Manager—can streamline your operations, boost efficiency, 
              and give you a competitive edge.
            </p>
          </ScrollFade>
          
          <ScrollFade delay={300}>
            <p className="text-sm md:text-lg lg:text-xl text-white/90 leading-relaxed neon-glow">
              Act now and stay ahead of the curve. Contact us to explore smarter, more efficient solutions 
              tailored to your goals, brand, and success.
            </p>
          </ScrollFade>
        </div>
        
        <div className="max-w-xl mx-auto relative z-30">
          <ScrollFade delay={400}>
            <ContactForm />
          </ScrollFade>
        </div>
      </div>
    </section>
  );
};