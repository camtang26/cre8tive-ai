import { Lightbulb, HandshakeIcon, DollarSign, MessageSquare, Users, Network, TrendingUp, Scale } from "lucide-react";
import { BenefitCard } from "./BenefitCard";
import { Separator } from "../ui/separator";
import { ScrollFade } from "@/components/shared/ScrollFade";

const clientBenefits = [
  {
    icon: Lightbulb,
    title: "Faster Concept Development",
    description: "Quickly move from idea to storyboard, saving valuable time and resources.",
    color: "#60A5FA" // blue-400
  },
  {
    icon: HandshakeIcon,
    title: "Increased Creative Control",
    description: "Actively participate in the creative process and ensure your vision is accurately captured.",
    color: "#F87171" // red-400
  },
  {
    icon: DollarSign,
    title: "Reduced Pre-Production Costs",
    description: "Streamline the initial stages of ad creation, minimizing costly back-and-forth.",
    color: "#34D399" // green-400
  },
  {
    icon: MessageSquare,
    title: "Clear Communication & Collaboration",
    description: "Facilitate seamless communication and collaboration with the Cre8tive AI Studio team.",
    color: "#A78BFA" // purple-400
  }
];

const agencyBenefits = [
  {
    icon: Users,
    title: "Improved Client Onboarding",
    description: "Efficiently gather client information and creative direction.",
    color: "#60A5FA" // blue-400
  },
  {
    icon: Network,
    title: "Enhanced Collaboration",
    description: "Facilitate seamless collaboration with clients on ad concepts.",
    color: "#F87171" // red-400
  },
  {
    icon: TrendingUp,
    title: "Increased Team Productivity",
    description: "Free up your team to focus on high-value tasks, such as final production and optimization.",
    color: "#34D399" // green-400
  },
  {
    icon: Scale,
    title: "Scalable Solution",
    description: "Manage multiple ad campaigns simultaneously with ease.",
    color: "#A78BFA" // purple-400
  }
];

export const Benefits = () => {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden" aria-label="Benefits section">
      <div className="container mx-auto px-4">
        <ScrollFade>
          <h2 className="text-4xl md:text-6xl font-bold text-gradient text-center mb-8 md:mb-16">
            Benefits for Everyone
          </h2>
        </ScrollFade>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16">
          {/* Client Benefits Column */}
          <div className="space-y-4 md:space-y-8">
            <ScrollFade>
              <h3 className="text-2xl md:text-3xl font-semibold text-gradient text-center mb-4 md:mb-8">
                For Clients
              </h3>
            </ScrollFade>
            <div className="grid gap-4 md:gap-6">
              {clientBenefits.map((benefit, index) => (
                <ScrollFade key={index} delay={index * 100}>
                  <BenefitCard
                    Icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    color={benefit.color}
                  />
                </ScrollFade>
              ))}
            </div>
          </div>
          
          {/* Vertical Separator (hidden on mobile) */}
          <div className="hidden lg:block absolute left-1/2 top-[200px] bottom-24 -translate-x-1/2">
            <Separator orientation="vertical" className="bg-white/10 w-px h-full" />
          </div>
          
          {/* Agency Benefits Column */}
          <div className="space-y-4 md:space-y-8 mt-8 lg:mt-0">
            <ScrollFade>
              <h3 className="text-2xl md:text-3xl font-semibold text-gradient text-center mb-4 md:mb-8">
                For Agencies
              </h3>
            </ScrollFade>
            <div className="grid gap-4 md:gap-6">
              {agencyBenefits.map((benefit, index) => (
                <ScrollFade key={index} delay={index * 100}>
                  <BenefitCard
                    Icon={benefit.icon}
                    title={benefit.title}
                    description={benefit.description}
                    color={benefit.color}
                  />
                </ScrollFade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};