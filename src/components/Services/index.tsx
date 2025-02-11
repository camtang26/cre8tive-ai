import { useIsMobile } from "@/hooks/use-mobile";
import { MobileServices } from "./mobile/MobileServices";
import { DesktopServices } from "./desktop/DesktopServices";
import { ServiceData } from "./types";

const services: ServiceData[] = [
  {
    icon: "Brain",
    title: "Cre8tive AI Studios",
    description: "High-quality video, powered by AI. Cre8tive AI Studios delivers speed, efficiency, and stunning results.",
    link: "/studios",
    color: "#60A5FA"
  },
  {
    icon: "Layers",
    title: "Ad Manager",
    description: "Instantly create professional video ad storyboards with Cre8tive AI Ad Manager. Transform your ideas into production-ready plans in minutes.",
    link: "/manager",
    color: "#F87171"
  },
  {
    icon: "Bot",
    title: "AI Agents",
    description: "Supercharge your marketing with Cre8tive AI Agents. Automate key tasks, from customer service to content creation, for maximum impact.",
    link: "/agents",
    color: "#C084FC"
  },
  {
    icon: "Phone",
    title: "Conversational AI",
    description: "Revolutionize customer communication with Cre8tive AI Conversational AI. Our AI agents make and receive calls using real phone numbers, providing 24/7 support.",
    link: "/conversational",
    color: "#4ADE80"
  }
];

export const Services = () => {
  const isMobile = useIsMobile();
  console.log('Services component rendered, isMobile:', isMobile);

  return (
    <section 
      className="py-8 md:py-24 relative overflow-hidden" 
      role="region" 
      aria-label="Our Services"
    >
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, #000000 0%, #000000 85%, #0D0D1D 100%)',
        }}
        aria-hidden="true"
      />
      
      {isMobile ? (
        <MobileServices services={services} />
      ) : (
        <DesktopServices services={services} />
      )}
    </section>
  );
};