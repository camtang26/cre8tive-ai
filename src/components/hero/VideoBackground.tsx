import { useState } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { Button } from "../ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "../ui/use-toast";
import VimeoPlayer from "../video/VimeoPlayer";

interface VideoBackgroundProps {
  isMuted: boolean;
  isPlaying: boolean;
  onToggleMute: () => void;
  onTogglePlay: () => void;
  priority?: boolean;
  onLoad?: () => void;
}

export const VideoBackground = ({
  isMuted,
  isPlaying,
  onToggleMute,
  onTogglePlay,
  priority = false,
  onLoad
}: VideoBackgroundProps) => {
  const isMobile = useIsMobile();
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleReady = () => {
    console.log("Video is ready");
    setIsLoaded(true);
    setLoadError(null);
    onLoad?.();
  };

  const handleError = (error: Error) => {
    console.error("Video error:", error);
    setLoadError("Failed to load video");
    toast({
      title: "Video Loading Issue",
      description: "Failed to load the video. Please refresh the page.",
      variant: "destructive"
    });
  };

  return (
    <div className="absolute inset-0 z-0">
      <div 
        className="relative w-full h-full z-[1] overflow-hidden"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      >
        <VimeoPlayer
          videoId="1051821551"
          autoplay={isPlaying}
          loop={true}
          muted={isMuted}
          onReady={handleReady}
          onError={handleError}
          className={isMobile ? "object-cover w-full h-full" : ""}
        />
      </div>
      
      {!isLoaded && !loadError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
      
      {loadError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <p className="text-white text-lg">{loadError}</p>
        </div>
      )}
      
      <div 
        className="absolute inset-0 bg-black/20 z-[2]" 
        aria-hidden="true" 
      />
      
      {!isMobile && (
        <div className="absolute bottom-8 right-8 flex gap-4 z-[3]">
          <Button
            variant="outline"
            size="icon"
            onClick={onToggleMute}
            className="bg-black/20 border-white/10 hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? 
              <VolumeX className="h-4 w-4" aria-hidden="true" /> : 
              <Volume2 className="h-4 w-4" aria-hidden="true" />
            }
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={onTogglePlay}
            className="bg-black/20 border-white/10 hover:bg-white/10 transition-colors duration-300 backdrop-blur-sm"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? 
              <Pause className="h-4 w-4" aria-hidden="true" /> : 
              <Play className="h-4 w-4" aria-hidden="true" />
            }
          </Button>
        </div>
      )}
    </div>
  );
};