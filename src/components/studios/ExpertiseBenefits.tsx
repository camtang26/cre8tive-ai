import { Brain, Award, Rocket } from "lucide-react";
import { ComparisonTable } from "./benefits/ComparisonTable";
import { ScrollFade } from "@/components/shared/ScrollFade";
import { useMagneticPull } from "@/components/epic2";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

/**
 * ValuePropositionCard - Research-validated value proposition with magnetic interactions
 *
 * Uses Epic 2 useMagneticPull hook for cursor-following hover effects
 * Citations from industry research (Tavus, HeyGen, Lemonlight 2025)
 */
interface ValuePropositionCardProps {
  icon: typeof Brain;
  title: string;
  description: string;
  citation: string;
  citationSource: string;
  color: string;
  index: number;
}

const ValuePropositionCard = ({
  icon: Icon,
  title,
  description,
  citation,
  citationSource,
  color,
  index
}: ValuePropositionCardProps) => {
  // Epic 2 magnetic pull hook - 30px max distance, 150px trigger radius
  const cardRef = useMagneticPull({
    strength: 0.3,
    maxDistance: 30,
    ease: 'power2.out'
  });

  return (
    <div ref={cardRef} className="h-full">
      <Card
        className={cn(
          "glass-morphism border-none animate-fade-in hover-lift group h-full",
          "bg-black/40 backdrop-blur-xl",
          "border border-white/10 hover:border-[var(--card-color)]/30",
          "transition-all duration-300 hover:shadow-[0_0_30px_var(--card-color)]"
        )}
        style={{
          animationDelay: `${index * 0.1}s`,
          '--card-color': color
        } as React.CSSProperties}
      >
        <CardContent className="p-6 md:p-8 flex flex-col h-full">
          {/* Icon */}
          <div className="flex items-start gap-4 mb-6">
            <div className="relative group-hover:scale-110 transition-transform duration-300">
              <div
                className="absolute inset-0 blur-xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                style={{ background: color }}
              />
              <Icon
                className={cn(
                  "w-8 h-8 md:w-10 md:h-10 relative z-10",
                  "transition-all duration-300",
                  "drop-shadow-[0_0_8px_var(--card-color)]",
                  "group-hover:drop-shadow-[0_0_12px_var(--card-color)]"
                )}
                style={{ color }}
              />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gradient tracking-tight group-hover:scale-105 transition-transform duration-300 flex-1">
              {title}
            </h3>
          </div>

          {/* Description */}
          <div className="text-sm md:text-base text-white/80 leading-relaxed space-y-3 mb-6 flex-1">
            {description.split('\n\n').map((paragraph, i) => (
              <div key={i}>
                {paragraph.split('\n').map((line, j) => (
                  <p key={j} className={cn(
                    line.startsWith('•') && "ml-4"
                  )}>
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Citation Badge */}
          <div className="mt-auto pt-4 border-t border-white/10">
            <div className="text-xs md:text-sm text-white/60 italic">
              <p className="font-semibold text-white/80 mb-1">"{citation}"</p>
              <p className="text-white/50">— {citationSource}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export const ExpertiseBenefits = () => {
  const brandColors = {
    orange: "#F97316",  // Studios Orange
    teal: "#14B8A6",    // Studios Teal
    coral: "#FB7185"    // Studios Coral
  };

  // Research-validated value propositions from COPY_IMPLEMENTATION_GUIDE.md lines 196-277
  const valueProps: Omit<ValuePropositionCardProps, 'index'>[] = [
    {
      icon: Brain,
      title: "Full-Stack Expertise",
      description: `Most AI tools generate clips. We deliver complete productions:

• Pre-production: Script, storyboard, scene planning
• Production: Image-to-video workflows for quality & control
• Post-production: Sound design, music, color grading, upscaling

Industry research shows hybrid AI + human workflows produce the highest quality results—we've mastered this approach.`,
      citation: "Hybrid AI workflows produce the highest quality results",
      citationSource: "Tavus Industry Research, 2025",
      color: brandColors.orange
    },
    {
      icon: Award,
      title: "Top 1% Production Values",
      description: `AI video quality varies dramatically. We deliver:

• 1080p-4K output with professional upscaling
• Custom sound design & original music scoring
• Image-to-video approach for maximum control vs. text-to-video
• Platform-optimized bespoke videos (not automated crops)

Quality enhancement can improve output by up to 83% beyond base AI generation—we maximize every frame.`,
      citation: "54% of consumers trust high-quality AI videos more than low-quality ones",
      citationSource: "HeyGen AI Sentiment Report, 2025",
      color: brandColors.teal
    },
    {
      icon: Rocket,
      title: "Enterprise-Grade Process",
      description: `Professional execution meets AI innovation:

• Multi-platform campaigns across 6 major channels
• Brand consistency across all deliverables
• Creative direction + AI efficiency
• Faster than traditional, without quality compromise

The best AI video agencies blend human creativity with AI tools—that's our foundation.`,
      citation: "86% of enterprise brands adopting AI video by 2026",
      citationSource: "Lemonlight Enterprise Report, 2025",
      color: brandColors.coral
    }
  ];

  return (
    <section
      className="py-16 md:py-32 relative overflow-hidden"
      aria-label="Why Choose Studios"
    >
      {/* Why Premium AI Video Production Matters Section */}
      <div className="container mx-auto px-4 mb-16 md:mb-24 relative z-10">
        <ScrollFade>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gradient text-center mb-6 tracking-tighter leading-none">
            Why Premium AI Video Production Matters
          </h2>
        </ScrollFade>
        <ScrollFade delay={100}>
          <p className="text-lg md:text-xl text-white/80 text-center mb-12 md:mb-16 max-w-4xl mx-auto">
            In a world where AI tools are everywhere, quality and execution make the difference.
          </p>
        </ScrollFade>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {valueProps.map((item, index) => (
            <ScrollFade key={index} delay={200 + (index * 100)}>
              <ValuePropositionCard
                {...item}
                index={index}
              />
            </ScrollFade>
          ))}
        </div>
      </div>

      {/* AI Video vs. Traditional Production Comparison */}
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
