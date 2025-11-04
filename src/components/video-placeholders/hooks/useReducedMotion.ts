import { useState, useEffect } from 'react';

/**
 * Custom hook to detect user's motion preferences
 *
 * Checks for the `prefers-reduced-motion` media query and updates when
 * the preference changes. This is required for WCAG 2.1 AA compliance
 * (Success Criterion 2.3.3).
 *
 * @returns {boolean} True if user prefers reduced motion
 *
 * @example
 * ```tsx
 * const prefersReducedMotion = useReducedMotion();
 *
 * useEffect(() => {
 *   if (prefersReducedMotion) {
 *     // Skip animations
 *     return;
 *   }
 *
 *   // Normal animated behavior
 *   gsap.to(element, { ... });
 * }, [prefersReducedMotion]);
 * ```
 *
 * @see https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
 */
export const useReducedMotion = (): boolean => {
  // Default to false for SSR/initial render
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    // Create media query matcher
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Handler for media query changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Listen for changes
    // Modern browsers support addEventListener
    mediaQuery.addEventListener('change', handleChange);

    // Cleanup listener on unmount
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return prefersReducedMotion;
};
