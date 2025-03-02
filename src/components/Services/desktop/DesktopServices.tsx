import { Brain, Layers, Bot, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollFade } from "@/components/shared/ScrollFade";
import { DesktopServiceCard } from "./DesktopServiceCard";
import { ServicesProps } from "../types";

const iconMap = {
  Brain,
  Layers,
  Bot,
  Phone
};

export const DesktopServices = ({ services }: ServicesProps) => {
  return (
    <section className="relative py-16 md:py-24 min-h-[80vh]">
      <div className="container mx-auto px-8 h-full">
        <div className="grid grid-cols-2 gap-8 mb-12 items-stretch">
          {services.map((service, index) => (
            <ScrollFade key={index} delay={index * 100}>
              <DesktopServiceCard
                {...service}
                icon={service.icon}
                index={index}
              />
            </ScrollFade>
          ))}
        </div>

        <div className="absolute bottom-8 left-0 right-0 text-center">
          <Button
            size="lg"
            className="font-inter text-lg sm:text-xl md:text-2xl font-semibold bg-[#1EAEDB] hover:bg-[#0FA0CE] text-white px-5 sm:px-7 py-3 sm:py-4 h-auto transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(30,174,219,0.5),0_0_30px_rgba(30,174,219,0.3)] hover:shadow-[0_0_20px_rgba(30,174,219,0.6),0_0_40px_rgba(30,174,219,0.4)] active:scale-95 tracking-[-0.01em] w-full sm:w-auto scale-95 !cursor-pointer mx-auto"
            onClick={() => window.open('https://cal.com/cameron-tang-121990/30min', '_blank')}
            aria-label="Book free consultation"
          >
            Get a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};