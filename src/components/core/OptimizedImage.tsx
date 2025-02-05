import { useState, useEffect } from 'react';
import { useLazyLoad } from '@/hooks/useLazyLoad';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  blur?: boolean;
}

export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  blur = true
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(!priority);
  const { elementRef, isVisible } = useLazyLoad();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isVisible || priority) {
      const img = new Image();
      img.src = src;
      
      img.onload = () => {
        setIsLoaded(true);
        setIsLoading(false);
      };
      
      img.onerror = () => {
        setError('Failed to load image');
        setIsLoading(false);
      };
    }
  }, [isVisible, priority, src]);

  if (error) {
    return <div className="text-red-500 text-sm">{error}</div>;
  }

  return (
    <div ref={elementRef} className="relative">
      {isLoading && (
        <Skeleton 
          className={cn(
            "absolute inset-0",
            className
          )}
          style={{ width, height }}
        />
      )}
      {(isVisible || priority) && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            className,
            isLoaded ? 'opacity-100' : 'opacity-0',
            blur && 'transition-opacity duration-300',
            isLoading && 'blur-sm'
          )}
          loading={priority ? "eager" : "lazy"}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
};