import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface RippleProps {
  x: number;
  y: number;
  size: number;
}

export const TouchRipple = () => {
  const [ripples, setRipples] = useState<RippleProps[]>([]);

  const createRipple = (event: React.TouchEvent<HTMLDivElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const touch = event.touches[0];
    
    const size = Math.max(button.clientWidth, button.clientHeight);
    const x = touch.clientX - rect.left - size / 2;
    const y = touch.clientY - rect.top - size / 2;
    
    const newRipple = { x, y, size };
    setRipples([...ripples, newRipple]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (ripples.length > 0) {
        setRipples(ripples.slice(1));
      }
    }, 850); // Match animation duration

    return () => clearTimeout(timer);
  }, [ripples]);

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none" 
      aria-hidden="true"
    >
      {ripples.map((ripple, index) => (
        <span
          key={index}
          className={cn(
            "absolute rounded-full bg-white/30",
            "animate-[ripple_0.85s_ease-out]"
          )}
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </div>
  );
};