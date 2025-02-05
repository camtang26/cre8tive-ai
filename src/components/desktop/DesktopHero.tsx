import { useState } from "react";
import { VideoBackground } from "../hero/VideoBackground";
import { HeroContent } from "../hero/HeroContent";

export const DesktopHero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = () => setIsMuted(!isMuted);
  const togglePlay = () => setIsPlaying(!isPlaying);

  return (
    <section 
      className="relative w-full aspect-video flex items-center justify-center overflow-hidden" 
      role="banner" 
      aria-label="Hero section"
    >
      <VideoBackground
        isMuted={isMuted}
        isPlaying={isPlaying}
        onToggleMute={toggleMute}
        onTogglePlay={togglePlay}
        priority={true}
      />
      <HeroContent />
    </section>
  );
};