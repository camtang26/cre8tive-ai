import { ContactForm } from "../ContactForm";
import { ScrollFade } from "./ScrollFade";

export const ContactCTA = () => {
  return (
    <section className="py-8 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
          <ScrollFade>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black gradient-text mb-4 md:mb-8 font-geist">
              Let's Build Together
            </h2>
          </ScrollFade>

          <ScrollFade delay={100}>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4 md:mb-8 font-geist">
              Don't get left behind—AI is transforming businesses now.
            </h3>
          </ScrollFade>

          <ScrollFade delay={200}>
            <p className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed mb-4 md:mb-6">
              Reach out today to discover how Cre8tive AI's customized solutions—from AI-powered video production
              to autonomous AI agents and the Cre8tive AI Studios AI Engine—can streamline your operations, boost efficiency,
              and give you a competitive edge.
            </p>
          </ScrollFade>

          <ScrollFade delay={300}>
            <p className="text-sm md:text-base lg:text-lg text-white/70 leading-relaxed">
              Act now and stay ahead of the curve. Contact us to explore smarter, more efficient solutions
              tailored to your goals, brand, and success.
            </p>
          </ScrollFade>
        </div>
        
        <div className="max-w-xl mx-auto">
          <ScrollFade delay={400}>
            <ContactForm />
          </ScrollFade>
        </div>
      </div>
    </section>
  );
};