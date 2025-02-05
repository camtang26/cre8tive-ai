import { Brain, Users, Sliders, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollFade } from "@/components/shared/ScrollFade";
import { useIsMobile } from "@/hooks/use-mobile";

interface StepProps {
  number: number;
  title: string;
  description: string;
  Icon: any;
  color: string;
}

const Step = ({ number, title, description, Icon, color }: StepProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative group">
      <div 
        className={cn(
          "glass-morphism rounded-xl hover-lift hover-glow",
          "bg-gradient-to-br from-black/40 via-black/20 to-transparent",
          "transform-gpu transition-all duration-500",
          "border border-white/10",
          "hover:border-[var(--step-color)]/30",
          isMobile ? "p-6" : "p-8 min-h-[420px]" // Added fixed height for desktop
        )}
        style={{ '--step-color': color } as React.CSSProperties}
      >
        <div 
          className={cn(
            "absolute -top-4 -left-4 rounded-xl",
            "flex items-center justify-center",
            "text-white font-bold",
            "transform-gpu transition-transform duration-300",
            "hover:scale-110 hover:rotate-12",
            "shadow-[0_0_30px_var(--step-color)]",
            isMobile ? "w-8 h-8 text-lg" : "w-12 h-12 text-xl" // Smaller number badge for mobile
          )}
          style={{ background: color }}
        >
          {number}
        </div>

        <div className={cn(
          "mb-6 relative group-hover:animate-pulse",
          isMobile ? "mb-4" : "mb-6" // Reduced margin for mobile
        )}>
          <Icon 
            className={cn(
              "transition-all duration-300",
              "drop-shadow-[0_0_20px_var(--step-color)]",
              "group-hover:drop-shadow-[0_0_40px_var(--step-color)]",
              isMobile ? "w-12 h-12" : "w-16 h-16" // Smaller icon for mobile
            )}
            style={{ color }}
          />
        </div>

        <h3 className={cn(
          "font-bold text-gradient",
          isMobile ? "text-xl mb-2" : "text-2xl mb-4" // Smaller heading and margin for mobile
        )}>
          {title}
        </h3>
        <p className={cn(
          "text-white/80 leading-relaxed",
          isMobile ? "text-sm" : "text-base" // Smaller text for mobile
        )}>
          {description}
        </p>
      </div>
    </div>
  );
};

const steps = [
  {
    number: 1,
    title: "Share Your Vision",
    description: "Begin by sharing your marketing objectives and challenges with us. We'll work closely with you to understand your specific needs, target audience, and desired outcomes. Your vision becomes our blueprint for creating a perfectly tailored AI marketing solution.",
    Icon: Brain,
    color: "#60A5FA" // blue-400
  },
  {
    number: 2,
    title: "Custom AI Team Design",
    description: "Our experts design and configure a specialized team of AI agents tailored to your needs. We carefully select and optimize each agent's capabilities - from CRM and content creation to social media management and customer service - ensuring your unique challenges are met with precision.",
    Icon: Users,
    color: "#F87171" // red-400
  },
  {
    number: 3,
    title: "Precision Configuration",
    description: "We meticulously configure each AI agent's parameters and autonomy levels to align with your business processes. Our team ensures seamless integration with your existing workflows, striking the perfect balance between automation and human oversight.",
    Icon: Sliders,
    color: "#C084FC" // purple-400
  },
  {
    number: 4,
    title: "Continuous Optimization",
    description: "We actively monitor your AI team's performance through advanced analytics and real-time dashboards. Our experts continuously fine-tune and optimize your system, ensuring maximum impact and ROI while adapting to evolving market conditions and business needs.",
    Icon: Target,
    color: "#4ADE80" // green-400
  }
];

export const HowItWorks = () => {
  const isMobile = useIsMobile();

  return (
    <section className={cn(
      "relative",
      isMobile ? "py-12" : "py-20"
    )}>
      <div className="container mx-auto px-4">
        <div className={cn(
          "mx-auto text-center",
          isMobile ? "mb-8 max-w-[90%]" : "mb-16 max-w-3xl"
        )}>
          <ScrollFade>
            <h2 className={cn(
              "font-bold text-gradient",
              isMobile ? "text-3xl mb-3" : "text-5xl md:text-6xl mb-6"
            )}>
              How It Works
            </h2>
          </ScrollFade>
          <ScrollFade delay={100}>
            <p className={cn(
              "text-white/80",
              isMobile ? "text-lg" : "text-2xl md:text-3xl"
            )}>
              Transforming Your Vision into Reality
            </p>
          </ScrollFade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <ScrollFade key={index} delay={index * 100}>
              <Step {...step} />
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  );
};
