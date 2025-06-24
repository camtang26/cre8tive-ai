import { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { cn } from '@/lib/utils';

interface VideoPlayerProps {
  src: string;
  title?: string;
  poster?: string;
  className?: string;
  fallbackContent?: React.ReactNode;
  onError?: (error: React.SyntheticEvent<HTMLVideoElement, Event>) => void;
  onLoad?: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  title,
  poster,
  className,
  fallbackContent,
  onError,
  onLoad,
}) => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reset states when src changes
    setError(null);
    setIsLoading(true);
  }, [src]);

  const handleError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const videoElement = e.currentTarget;
    
    // Get specific error message if available
    let errorMessage = 'An error occurred during video playback.';
    if (videoElement.error) {
      switch (videoElement.error.code) {
        case 1:
          errorMessage = 'Video loading was aborted.';
          break;
        case 2:
          errorMessage = 'Network error occurred while loading the video.';
          break;
        case 3:
          errorMessage = 'Error decoding video.';
          break;
        case 4:
          errorMessage = 'Video format not supported.';
          break;
      }
    }
    
    setError(errorMessage);
    onError?.(e);
  };

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  if (error) {
    return (
      <Alert variant="destructive" className="my-4">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Video Playback Error</AlertTitle>
        <AlertDescription>
          {error}
          {fallbackContent && (
            <div className="mt-4">
              {fallbackContent}
            </div>
          )}
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <div className={cn('relative', className)}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-sm">
          <div className="loading-spinner" aria-label="Loading video" />
        </div>
      )}
      <video
        className={cn('w-full rounded-lg', className)}
        controls
        poster={poster}
        onError={handleError}
        onLoadedData={handleLoad}
        title={title}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}; 