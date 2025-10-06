import { useEffect, useState } from 'react'

/**
 * usePrefersReducedMotion
 *
 * Detects user's `prefers-reduced-motion` media query preference
 * and updates dynamically if the setting changes.
 *
 * @returns boolean - true if user prefers reduced motion, false otherwise
 *
 * @example
 * ```tsx
 * function AnimatedComponent() {
 *   const prefersReducedMotion = usePrefersReducedMotion()
 *
 *   useEffect(() => {
 *     if (prefersReducedMotion) return // Skip animations
 *
 *     gsap.to('.element', { x: 100, duration: 1 })
 *   }, [prefersReducedMotion])
 * }
 * ```
 *
 * @see docs/architecture/animation-patterns.md - Accessibility section
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Initial check
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    // Listen for changes (user updates system preferences)
    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', listener)

    return () => {
      mediaQuery.removeEventListener('change', listener)
    }
  }, [])

  return prefersReducedMotion
}
