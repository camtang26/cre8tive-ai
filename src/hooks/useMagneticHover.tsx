import { useMotionValue, useSpring } from "framer-motion";
import { MouseEvent } from "react";

interface UseMagneticHoverOptions {
  strength?: number;
  damping?: number;
  stiffness?: number;
}

export const useMagneticHover = (options: UseMagneticHoverOptions = {}) => {
  const { strength = 0.15, damping = 20, stiffness = 300 } = options;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping, stiffness };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLElement>, ref: HTMLElement) => {
    const rect = ref.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return {
    springX,
    springY,
    handleMouseMove,
    handleMouseLeave,
  };
};
