import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "../ui/button";
import VimeoPlayer, { VimeoPlayerHandle } from "../core/VimeoPlayer";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "../ui/use-toast";

export const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const playerRef = useRef<VimeoPlayerHandle>(null);
  const isMobile = useIsMobile();
  const { toast } = useToast();

  useEffect(() => {
    if (isMobile && playerRef.current) {
      playerRef.current.setMuted(true);
    }
  }, [isMobile]);

  const handleReady = () => {
    console.log("Video is ready");
    setIsLoaded(true);
  };

  const handleError = (error: Error) => {
    console.error("Hero video error:", error);
    toast({
      title: "Video Error",
      description: "There was an error loading the video. Please refresh the page.",
      variant: "destructive"
    });
  };

  return (
    <section 
      className="relative w-full aspect-video flex items-center justify-center overflow-hidden" 
      role="banner" 
      aria-label="Hero section"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div 
          className="relative w-full h-full"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
        >
          <VimeoPlayer
            ref={playerRef}
            videoId="1051821551"
            autoplay={!isMobile}
            loop={true}
            muted={isMuted}
            isBackground={true}
            onReady={handleReady}
            onError={handleError}
            className="absolute inset-0 pointer-events-none"
          />
        </div>

        {/* Loading Indicator */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        )}
        
        {/* Dark Overlay */}
        <div 
          className="absolute inset-0 bg-black/20 z-[2]" 
          aria-hidden="true" 
        />
      </div>

      {/* Content */}
      <div className="relative z-[3] flex flex-col items-center justify-center text-center space-y-6 md:space-y-8 max-w-[90vw] md:max-w-4xl mx-auto px-4">
        <h1 className="font-inter text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[-0.02em] animate-fade-in">
          <span className="text-white inline-block transition-transform duration-300 [text-shadow:0_0_10px_rgba(255,255,255,0.4),0_0_20px_rgba(255,255,255,0.2)]">
            Cre8tive AI
          </span>
        </h1>
        <p className="font-inter text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.01em] text-white/90 animate-fade-in [animation-delay:200ms] [text-shadow:0_0_4px_rgba(255,255,255,0.4),0_0_8px_rgba(255,255,255,0.2)]">
          Cutting Edge AI Solutions For Your Business
        </p>
      </div>
    </section>
  );
};