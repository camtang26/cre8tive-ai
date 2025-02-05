import { useEffect, useRef } from 'react';

interface AnimationConfig {
  duration?: number;
  easing?: string;
  delay?: number;
}

export const useOptimizedAnimation = (config: AnimationConfig = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const { 
    duration = 300, 
    easing = 'cubic-bezier(0.4, 0, 0.2, 1)',
    delay = 0 
  } = config;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Use requestAnimationFrame for smooth animations
    const animate = () => {
      if (!element) return;
      
      element.style.willChange = 'transform, opacity';
      
      const animation = element.animate([
        { opacity: 0, transform: 'translateY(20px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ], {
        duration,
        easing,
        delay,
        fill: 'forwards'
      });

      animation.onfinish = () => {
        element.style.willChange = 'auto';
      };
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [duration, easing, delay]);

  return elementRef;
};