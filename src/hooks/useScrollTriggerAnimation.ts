import { useEffect, RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

gsap.registerPlugin(ScrollTrigger)

/**
 * useScrollTriggerAnimation
 *
 * Generic hook for GSAP ScrollTrigger animations with automatic cleanup
 * and prefers-reduced-motion support.
 *
 * @param containerRef - Ref to container element (for gsap.context scoping)
 * @param animationFn - Function containing GSAP animation code
 *
 * @example
 * ```tsx
 * function Gallery() {
 *   const containerRef = useRef<HTMLDivElement>(null)
 *
 *   useScrollTriggerAnimation(containerRef, () => {
 *     gsap.from('.card', {
 *       opacity: 0,
 *       y: 60,
 *       stagger: 0.15,
 *       scrollTrigger: {
 *         trigger: containerRef.current,
 *         start: 'top 80%',
 *       }
 *     })
 *   })
 *
 *   return <div ref={containerRef}>...</div>
 * }
 * ```
 *
 * @see docs/architecture/animation-patterns.md - React Integration section
 */
export function useScrollTriggerAnimation(
  containerRef: RefObject<HTMLElement>,
  animationFn: () => void
): void {
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    // Skip animations if user prefers reduced motion
    if (prefersReducedMotion) return

    // Ensure container exists
    if (!containerRef.current) return

    // Create GSAP context for automatic cleanup
    const ctx = gsap.context(animationFn, containerRef)

    // Cleanup function: revert ALL animations and ScrollTriggers
    return () => ctx.revert()
  }, [prefersReducedMotion, containerRef, animationFn])
}
