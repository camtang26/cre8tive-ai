import { Brain, Layers, Bot, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollFade } from "@/components/shared/ScrollFade";
import { MobileServiceCard } from "./MobileServiceCard";
import { ServicesProps } from "../types";
import { useGestures } from "@/hooks/useGestures";
import { useMobileInteractions } from "@/hooks/useMobileInteractions";
import { smoothScrollToElement } from "@/utils/smoothScroll";

const iconMap = {
  Brain,
  Layers,
  Bot,
  Phone
};

export const MobileServices = ({ services }: ServicesProps) => {
  useMobileInteractions();
  
  useGestures({
    onSwipeLeft: () => {
      smoothScrollToElement('contact');
    },
    onSwipeRight: () => {
      smoothScrollToElement('hero');
    }
  });

  return (
    <div id="services" className="container mx-auto px-4">
      <div className="flex flex-col space-y-3">
        {services.map((service, index) => (
          <ScrollFade key={index} delay={index * 50}>
            <MobileServiceCard
              {...service}
              icon={service.icon}
              index={index}
            />
          </ScrollFade>
        ))}
      </div>
      
      <ScrollFade delay={services.length * 50}>
        <div className="mt-6 mb-12 text-center">
          <Button 
            size="lg"
            className="font-inter text-base xs:text-lg font-semibold bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white px-4 py-3 h-auto w-full max-w-xs mx-auto transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(30,174,219,0.5),0_0_30px_rgba(30,174,219,0.3)] hover:shadow-[0_0_20px_rgba(30,174,219,0.6),0_0_40px_rgba(30,174,219,0.4)] active:scale-95 tracking-[-0.01em] !cursor-pointer rounded-lg"
            onClick={() => window.open('https://cal.com/cameron-tang-121990/30min', '_blank')}
            aria-label="Book free consultation"
          >
            Get a Free Consultation
          </Button>
        </div>
      </ScrollFade>
    </div>
  );
};