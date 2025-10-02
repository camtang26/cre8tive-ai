import { useScroll, useTransform, MotionValue } from "framer-motion";
import { RefObject } from "react";

interface UseParallaxOptions {
  speed?: number;
  direction?: "up" | "down";
  offset?: [string, string];
}

export const useParallax = (
  ref: RefObject<HTMLElement>,
  options: UseParallaxOptions = {}
): MotionValue<number> => {
  const { speed = 0.5, direction = "up", offset = ["start end", "end start"] } = options;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  return useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? [100 * speed, -100 * speed] : [-100 * speed, 100 * speed]
  );
};
