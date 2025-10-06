import { Clock, DollarSign, Layers, Shield, Award, Rocket, Brain, Wand2 } from "lucide-react";
import { BenefitCard } from "./benefits/BenefitCard";
import { ExpertiseCard } from "./benefits/ExpertiseCard";
import { ComparisonTable } from "./benefits/ComparisonTable";
import { ScrollFade } from "@/components/shared/ScrollFade";

export const ExpertiseBenefits = () => {
  const brandColors = {
    orange: "#F97316",  // Studios Orange
    teal: "#14B8A6",    // Studios Teal
    coral: "#FB7185"    // Studios Coral
  };

  // Consolidated value propositions - 6 strongest cards
  const valueProps = [
    {
      icon: Clock,
      title: "Speed & Efficiency",
      description: "Professional-quality videos in a fraction of the time. Our AI-powered workflows automate tedious tasks and significantly reduce turnaround times.",
      color: brandColors.orange
    },
    {
      icon: DollarSign,
      title: "Cost-Effectiveness",
      description: "Cut out large crews, expensive equipment, and lengthy post-production. High-quality video production accessible to all businesses.",
      color: brandColors.teal
    },
    {
      icon: Layers,
      title: "Scalability & Flexibility",
      description: "Scale content creation easily across platforms, formats, and languages. Reach wider audiences without extra effort or expense.",
      color: brandColors.coral
    },
    {
      icon: Award,
      title: "Early Adopters & Innovators",
      description: "Working with AI video since 2023. We've seen it evolve, experimented with every tool and update, and understand its nuances inside out.",
      color: brandColors.orange
    },
    {
      icon: Rocket,
      title: "Masters of the AI Toolkit",
      description: "30+ AI tools at our fingertips—from video generation to editing and image processing. We select the perfect combination for each project.",
      color: brandColors.teal
    },
    {
      icon: Wand2,
      title: "Creativity Meets Technology",
      description: "Artistic creativity blended with technical expertise. Every video is visually impressive and strategically designed to achieve your goals.",
      color: brandColors.coral
    }
  ];

  return (
    <section
      className="py-16 md:py-32 relative overflow-hidden"
      aria-label="Why Choose Studios"
    >
      {/* Unified Value Proposition Section */}
      <div className="container mx-auto px-4 mb-16 md:mb-24 relative z-10">
        <ScrollFade>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gradient text-center mb-6 md:mb-12 tracking-tighter leading-none">
            Why Choose Cre8tive AI Studios
          </h2>
        </ScrollFade>
        <ScrollFade delay={200}>
          <div className="max-w-4xl mx-auto text-base md:text-lg text-white/90 mb-10 md:mb-14 leading-relaxed">
            <p>
              Traditional video production is slow, costly, and complicated. We offer AI-driven production that delivers exceptional results faster and more affordably—backed by deep expertise since 2023, 30+ specialized tools, and a team that blends creative vision with technical mastery.
            </p>
          </div>
        </ScrollFade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {valueProps.map((item, index) => (
            <ScrollFade key={index} delay={300 + (index * 100)}>
              <BenefitCard
                Icon={item.icon}
                title={item.title}
                description={item.description}
                color={item.color}
                index={index}
              />
            </ScrollFade>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollFade>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gradient text-center mb-8 sm:mb-10 md:mb-14 tracking-tighter leading-none">
            AI Video vs. Traditional Production
          </h2>
        </ScrollFade>
        <ScrollFade delay={200}>
          <ComparisonTable />
        </ScrollFade>
      </div>
    </section>
  );
};
