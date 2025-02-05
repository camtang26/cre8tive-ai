import { useState, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { VideoBackground } from "../hero/VideoBackground";
import { HeroContent } from "../hero/HeroContent";
import { TouchRipple } from "./TouchRipple";
import { useGestures } from "@/hooks/useGestures";
import { smoothScrollToElement } from "@/utils/smoothScroll";
import { MobileLoadingSkeleton } from "./MobileLoadingSkeleton";
import { toast } from "sonner";

export const MobileHero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const toggleMute = () => {
    setIsMuted(!isMuted);
    toast.success(isMuted ? "Sound unmuted" : "Sound muted", {
      position: "bottom-center",
      duration: 1500
    });
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    toast.success(isPlaying ? "Video paused" : "Video playing", {
      position: "bottom-center",
      duration: 1500
    });
  };

  useGestures({
    onSwipeLeft: () => {
      smoothScrollToElement('services');
      toast.info("Swipe left: Services section", {
        position: "bottom-center",
        duration: 1500
      });
    },
    onSwipeRight: () => {
      console.log('Swiped right');
      toast.info("Swipe right: Previous section", {
        position: "bottom-center",
        duration: 1500
      });
    }
  });

  return (
    <Suspense fallback={<MobileLoadingSkeleton />}>
      <section 
        className="relative w-full h-[calc(100vh-48px)] mt-[48px] flex items-center justify-center overflow-hidden touch-manipulation" 
        role="banner" 
        aria-label="Hero section"
      >
        <VideoBackground
          isMuted={isMuted}
          isPlaying={isPlaying}
          onToggleMute={toggleMute}
          onTogglePlay={togglePlay}
          priority={true}
          onLoad={() => setIsLoading(false)}
        />
        
        {!isLoading && (
          <div 
            className="relative z-[3] flex flex-col items-center justify-center text-center space-y-6 max-w-[90vw] mx-auto px-4"
            style={{ touchAction: 'manipulation' }}
          >
            <h1 className="font-inter text-6xl font-bold tracking-[-0.02em] opacity-0 animate-[fadeIn_3s_ease-out_forwards] [text-shadow:0_0_15px_rgba(0,0,0,0.5),0_0_30px_rgba(0,0,0,0.3)]">
              <span className="text-white inline-block transition-transform duration-300">
                Cre8tive AI
              </span>
            </h1>
            <p className="font-inter text-3xl font-medium tracking-[-0.01em] text-white/90 opacity-0 animate-[fadeIn_3s_ease-out_forwards] [text-shadow:0_0_10px_rgba(0,0,0,0.5),0_0_20px_rgba(0,0,0,0.3)]">
              Cutting Edge AI Solutions For Your Business
            </p>
          </div>
        )}
        
        <TouchRipple />
      </section>
    </Suspense>
  );
};