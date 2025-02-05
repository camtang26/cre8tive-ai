import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { AnimatedBackground } from "./AnimatedBackground";
import { useIsMobile } from "@/hooks/use-mobile";

export const StudiosHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();

  return (
    <section 
      className="relative md:min-h-[85vh] min-h-[70vh] flex items-center justify-center overflow-hidden
                 md:mt-0 -mt-16 bg-black md:bg-transparent"
      role="banner"
      aria-label="Studios hero section"
      style={{ 
        position: 'relative',
        isolation: 'isolate',
        overscrollBehavior: 'none'
      }}
    >
      {/* Animated Background contained within hero section */}
      <div className="absolute inset-0 z-0">
        <AnimatedBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center mt-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 text-white [text-shadow:0_0_15px_rgba(255,255,255,0.5),0_0_25px_rgba(255,255,255,0.3)] opacity-0 animate-[fadeIn_3s_ease-out_forwards]">
          Cre8tive AI Studios
        </h1>
        
        <p className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-white max-w-4xl mx-auto mb-6 md:mb-8 italic [text-shadow:0_0_15px_rgba(255,255,255,0.5),0_0_25px_rgba(255,255,255,0.3)] opacity-0 animate-[fadeIn_3s_ease-out_forwards]">
          AI won't take over your business, but a business leveraging AI video 
          production will revolutionize the way you create, engage, and dominate 
          your market.
        </p>

        <Button 
          size="lg"
          className="text-base md:text-lg px-6 md:px-8 py-4 md:py-6 hover-lift hover-glow bg-blue-900 text-white shadow-[0_0_10px_rgba(59,130,246,0.5),0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_15px_rgba(59,130,246,0.6),0_0_30px_rgba(59,130,246,0.4)] hover:bg-blue-800 transition-all duration-300 opacity-0 animate-[fadeIn_6s_ease-out_2s_forwards]"
        >
          Get a Free Consultation
        </Button>
      </div>
    </section>
  );
};