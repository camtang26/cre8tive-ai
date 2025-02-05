import { useEffect, useState } from "react";
import CoreVimeoPlayer from "../core/VimeoPlayer";
import { useToast } from "../ui/use-toast";

interface VimeoPlayerProps {
  videoId: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
  onReady?: () => void;
  onError?: (error: Error) => void;
}

const VimeoPlayer = ({
  videoId,
  autoplay = false,
  loop = false,
  muted = false,
  className = "",
  onReady,
  onError
}: VimeoPlayerProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { toast } = useToast();

  const handleReady = () => {
    console.log("Vimeo player is ready");
    setIsLoaded(true);
    onReady?.();
  };

  const handleError = (error: Error) => {
    console.error("Vimeo player error:", error);
    toast({
      title: "Video Loading Issue",
      description: "Failed to load the video. Please refresh the page.",
      variant: "destructive"
    });
    onError?.(error);
  };

  return (
    <div
      className={`relative w-full h-full ${className}`}
      style={{ 
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out'
      }}
      role="presentation"
    >
      <CoreVimeoPlayer
        videoId={videoId}
        autoplay={autoplay}
        loop={loop}
        muted={muted}
        onReady={handleReady}
        onError={handleError}
      />
    </div>
  );
};

export default VimeoPlayer;