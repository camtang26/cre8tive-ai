import { Brain, Layers, Bot, Phone } from "lucide-react";
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
      <div className="flex flex-col space-y-4">
        {services.map((service, index) => (
          <ScrollFade key={index} delay={index * 100}>
            <MobileServiceCard
              {...service}
              icon={service.icon}
              index={index}
            />
          </ScrollFade>
        ))}
      </div>
    </div>
  );
};