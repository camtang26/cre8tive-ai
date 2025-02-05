import { Navigation } from "@/components/Navigation";
import { StudiosHero } from "@/components/studios/StudiosHero";
import { StudiosIntro } from "@/components/studios/StudiosIntro";
import { ExpertiseBenefits } from "@/components/studios/ExpertiseBenefits";
import { MarketingSection } from "@/components/studios/MarketingSection";
import { B2BSection } from "@/components/studios/B2BSection";
import { Testimonials } from "@/components/studios/Testimonials";
import { ContactCTA } from "@/components/shared/ContactCTA";
import { FadeIn } from "@/components/shared/FadeIn";

const Studios = () => {
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
      <main className="relative pt-20">
        <StudiosHero />
        <FadeIn>
          <StudiosIntro />
        </FadeIn>
        <FadeIn>
          <ExpertiseBenefits />
        </FadeIn>
        <FadeIn>
          <MarketingSection />
        </FadeIn>
        <FadeIn>
          <B2BSection />
        </FadeIn>
        <FadeIn>
          <Testimonials />
        </FadeIn>
        <FadeIn>
          <ContactCTA />
        </FadeIn>
      </main>
    </div>
  );
};

export default Studios;