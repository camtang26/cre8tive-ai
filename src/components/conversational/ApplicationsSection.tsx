import { Brain, Sparkles, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollFade } from "../shared/ScrollFade";

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: React.ElementType;
  delay?: number;
}

const FeatureCard = ({ title, description, Icon, delay = 0 }: FeatureCardProps) => (
  <ScrollFade delay={delay}>
    <div className={cn(
      "p-3 md:p-8 rounded-xl glass-morphism hover-lift transition-all duration-500 text-center",
      "bg-gradient-to-br from-black/40 via-black/20 to-transparent",
      "border border-white/10 group h-[250px] md:h-full md:min-h-[400px] flex flex-col justify-start"
    )}>
      <div className="mb-3 md:mb-6 relative group-hover:animate-pulse flex justify-center">
        <Icon 
          className={cn(
            "w-8 h-8 md:w-16 md:h-16 transition-all duration-300 text-[#00ff80]",
            "drop-shadow-[0_0_20px_rgba(0,255,128,0.5)]",
            "group-hover:drop-shadow-[0_0_40px_rgba(0,255,128,0.7)]"
          )}
        />
      </div>
      <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-xs md:text-base text-white/70 leading-relaxed">
        {description}
      </p>
    </div>
  </ScrollFade>
);

export const ApplicationsSection = () => {
  return (
    <section className="relative py-12 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/98 to-black/95">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,128,0.02)_0%,transparent_60%)]" />
      </div>
      <div className="container mx-auto px-3 md:px-4 relative">
        <ScrollFade>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 md:mb-16 text-gradient text-center">
            Beyond the Chat: The Power of Conversational AI
          </h2>
        </ScrollFade>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <FeatureCard
            Icon={Brain}
            title="Intelligent Automation"
            description="Our Conversational AI agents are designed to handle complex conversations and automate tasks, freeing up your team to focus on strategic initiatives. Seamlessly integrate with your existing systems to streamline workflows and improve efficiency."
            delay={100}
          />
          <FeatureCard
            Icon={Sparkles}
            title="Personalized Experiences"
            description="Deliver tailored conversations that resonate with individual customers. Our AI agents understand user preferences and adapt their responses accordingly, creating a more engaging and satisfying experience."
            delay={200}
          />
          <FeatureCard
            Icon={BarChart3}
            title="Data-Driven Insights"
            description="Gain valuable insights into customer behavior and preferences through the data collected by our Conversational AI agents. Use these insights to optimize your marketing strategies and improve business outcomes."
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};
