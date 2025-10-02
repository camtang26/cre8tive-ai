import { useInView } from "framer-motion";
import { useRef } from "react";

interface UseScrollAnimationOptions {
  once?: boolean;
  margin?: string;
  amount?: number | "some" | "all";
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { once = true, margin = "-100px", amount = 0.3 } = options;

  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin, amount });

  return { ref, isInView };
};
