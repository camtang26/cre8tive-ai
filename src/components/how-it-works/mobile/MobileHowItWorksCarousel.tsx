import { useState, useRef, useEffect } from 'react';
import { Step } from '../Step';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface StepData {
  number: number;
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
}

interface MobileHowItWorksCarouselProps {
  steps: StepData[];
}

export const MobileHowItWorksCarousel = ({ steps }: MobileHowItWorksCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [startY, setStartY] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.targetTouches[0];
    setTouchStart(touch.clientX);
    setStartY(touch.clientY);
    setTouchEnd(null);
  };

  const handleTouchMove = (e: TouchEvent) => {
    const touch = e.touches[0];
    const currentX = touch.clientX;
    const currentY = touch.clientY;

    if (touchStart !== null && startY !== null) {
      const dx = currentX - touchStart;
      const dy = currentY - startY;

      // If horizontal movement is greater than vertical, prevent default scrolling behavior
      if (Math.abs(dx) > Math.abs(dy)) {
        e.preventDefault();
      }
    }

    setTouchEnd(currentX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < steps.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }

    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('touchmove', handleTouchMove, { passive: false });
      return () => {
        container.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, [touchStart, startY]);

  const getSlideStyle = (index: number) => {
    const offset = index - currentIndex;
    const translateX = offset * 40;
    const translateZ = Math.abs(offset) * -150;
    const rotateY = offset * 30;
    const scale = offset === 0 ? 1 : 0.85;
    const opacity = Math.max(1 - Math.abs(offset) * 0.3, 0);

    return {
      transform: `
        translate(-50%, -50%) 
        translateX(${translateX}%) 
        translateZ(${translateZ}px)
        rotateY(${rotateY}deg)
        scale(${scale})
      `,
      opacity,
      zIndex: steps.length - Math.abs(offset),
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  return (
    <div 
      className={cn(
        "md:hidden relative w-full overflow-hidden",
        "h-[600px] flex flex-col items-center justify-center"
      )}
    >
      <div 
        ref={containerRef}
        className={cn(
          "relative w-full h-full perspective-1000",
          "flex items-center justify-center"
        )}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className={cn(
            "absolute inset-0",
            "flex items-center justify-center",
            "transform-gpu"
          )}
        >
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={cn(
                "absolute top-1/2 left-1/2",
                "transform-gpu will-change-transform origin-center",
                "w-full max-w-[300px]"
              )}
              style={getSlideStyle(index)}
              role="group"
              aria-label={`Step ${step.number}: ${step.title}`}
            >
              <Step {...step} />
            </div>
          ))}
        </div>

        <div 
          className={cn(
            "absolute bottom-8 left-0 right-0",
            "flex justify-center gap-2"
          )}
          role="tablist"
          aria-label="Carousel navigation"
        >
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex 
                  ? "bg-white w-4" 
                  : "bg-white/30"
              )}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};