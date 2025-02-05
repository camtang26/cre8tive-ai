import React from "react";
import { Brain, Layers, Target, Rocket } from "lucide-react";
import { Step } from "./Step";
import { StepArrow } from "./StepArrow";
import { ScrollFade } from "@/components/shared/ScrollFade";
import { MobileHowItWorksCarousel } from "./mobile/MobileHowItWorksCarousel";
import { useIsMobile } from "@/hooks/use-mobile";

const steps = [
  {
    number: 1,
    title: "Input Your Vision",
    description: "Share your product details and creative vision through our intuitive interface.",
    Icon: Brain,
    color: "#60A5FA" // blue-400
  },
  {
    number: 2,
    title: "AI Processing",
    description: "Our AI analyzes your input and generates creative concepts and storyboards.",
    Icon: Layers,
    color: "#F87171" // red-400
  },
  {
    number: 3,
    title: "Review & Refine",
    description: "Review the generated concepts and make refinements as needed.",
    Icon: Target,
    color: "#C084FC" // purple-400
  },
  {
    number: 4,
    title: "Production Ready",
    description: "Receive production-ready storyboards to send off to our team for production, or for use by your own creative team.",
    Icon: Rocket,
    color: "#4ADE80" // green-400
  }
];

export const HowItWorks = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-8 md:py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-4 md:mb-16">
          <ScrollFade>
            <h2 className="text-5xl md:text-6xl font-bold text-gradient mb-2 md:mb-4">
              How It Works
            </h2>
          </ScrollFade>
        </div>

        {isMobile ? (
          <ScrollFade>
            <MobileHowItWorksCarousel steps={steps} />
          </ScrollFade>
        ) : (
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <ScrollFade delay={index * 100}>
                  <Step {...step} />
                </ScrollFade>
                {index < steps.length - 1 && (
                  <StepArrow key={`arrow-${index}`} />
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};