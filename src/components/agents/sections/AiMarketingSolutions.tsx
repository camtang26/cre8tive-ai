import { Database, MessageSquare, Text, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollFade } from "@/components/shared/ScrollFade";
import { useIsMobile } from "@/hooks/use-mobile";

export const AiMarketingSolutions = () => {
  const isMobile = useIsMobile();
  
  const solutions = [
    {
      title: "AI-Powered CRM",
      description: "Supercharge your customer relationships with our AI-powered CRM system.",
      benefits: [
        "Monitor customer interactions and behaviors for personalized experiences",
        "Streamline lead nurturing with customized messaging",
        "Uncover high-potential opportunities using advanced AI analytics",
        "Boost conversions and strengthen customer loyalty"
      ],
      Icon: Database,
      color: "#60A5FA" // blue-400
    },
    {
      title: "AI-Driven Customer Service",
      description: "Provide instant, 24/7 support with our intelligent customer service solution.",
      benefits: [
        "First-line response for all marketing-related inquiries",
        "Quick, consistent, and tailored support around the clock",
        "Seamless routing of leads and feedback to appropriate teams",
        "Ensure no opportunity is missed with constant monitoring"
      ],
      Icon: MessageSquare,
      color: "#F87171" // red-400
    },
    {
      title: "AI Content Generation",
      description: "Unlock your content creation potential with our AI-powered system that learns your brand's unique voice.",
      benefits: [
        "Generate diverse content types from emails to white papers",
        "Create engaging and relevant content that resonates",
        "Leverage your business knowledge for authentic content",
        "Drive results with targeted content strategies"
      ],
      Icon: Text,
      color: "#C084FC" // purple-400
    },
    {
      title: "AI Social Media Management",
      description: "Elevate your social media presence with intelligent content crafting and audience targeting.",
      benefits: [
        "Create engaging posts tailored to your audience",
        "Match content to audience preferences and behaviors",
        "Identify and leverage trending topics and hashtags",
        "Maximize reach and impact across platforms"
      ],
      Icon: Share2,
      color: "#4ADE80" // green-400
    }
  ];

  return (
    <section className={cn(
      "relative overflow-hidden",
      isMobile ? "py-8" : "py-24" // Further reduced padding for mobile
    )}>
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, #000000 0%, #000000 85%, #0D0D1D 100%)',
        }}
        aria-hidden="true"
      />
      
      <div className="container mx-auto px-4">
        <ScrollFade>
          <h2 className={cn(
            "font-semibold text-gradient text-center relative z-50",
            isMobile ? "text-3xl mb-8" : "text-5xl md:text-6xl mb-20"
          )}>
            Our AI Marketing Solutions
          </h2>
        </ScrollFade>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {solutions.map((solution, index) => {
            const { Icon } = solution;
            return (
              <ScrollFade key={index} delay={index * 100}>
                <div 
                  className={cn(
                    "glass-morphism rounded-xl hover-glow border border-white/10",
                    "bg-gradient-to-br from-black/40 via-black/20 to-transparent relative group",
                    "transform-gpu transition-transform duration-500 hover:scale-105",
                    "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r",
                    "before:opacity-0 before:transition-opacity hover:before:opacity-100",
                    "after:absolute after:inset-0 after:rounded-xl",
                    "after:opacity-0 after:transition-opacity hover:after:opacity-100",
                    "flex flex-col items-center justify-center text-center",
                    isMobile ? "p-6 min-h-[400px]" : "p-12 min-h-[600px]" // Reduced desktop size, kept mobile size
                  )}
                  style={{
                    '--solution-color': solution.color,
                    boxShadow: `0 0 30px ${solution.color}25`
                  } as React.CSSProperties}
                >
                  <div className="mb-6 relative group-hover:animate-pulse">
                    <Icon 
                      className={cn(
                        "transition-all duration-300",
                        "drop-shadow-[0_0_20px_var(--solution-color)]",
                        "group-hover:drop-shadow-[0_0_40px_var(--solution-color)]",
                        isMobile ? "w-12 h-12" : "w-24 h-24" // Slightly reduced desktop icon size
                      )}
                      style={{ color: solution.color }}
                    />
                  </div>
                  
                  <h3 className={cn(
                    "font-semibold mb-4 bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent",
                    isMobile ? "text-xl" : "text-3xl" // Slightly reduced desktop heading size
                  )}>
                    {solution.title}
                  </h3>
                  
                  <p className={cn(
                    "leading-relaxed mb-6",
                    isMobile ? "text-sm text-white/80" : "text-lg text-white/80" // Adjusted desktop text size
                  )}>
                    {solution.description}
                  </p>

                  <ul className={cn(
                    "text-white/70 space-y-3 text-left w-full", // Restored desktop line spacing
                    isMobile ? "text-xs" : "text-base" // Adjusted desktop list text size
                  )}>
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2 text-[var(--solution-color)]">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollFade>
            );
          })}
        </div>
      </div>
    </section>
  );
};