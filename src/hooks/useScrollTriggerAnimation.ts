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
type AnimationContext = {
  prefersReducedMotion: boolean
  matchMedia: gsap.MatchMedia
}

export function useScrollTriggerAnimation(
  containerRef: RefObject<HTMLElement>,
  animationFn: (context: AnimationContext) => void
): void {
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    // Ensure container exists
    if (!containerRef.current) return

    const matchMedia = gsap.matchMedia()

    // Create GSAP context for automatic cleanup
    const ctx = gsap.context(() => animationFn({ prefersReducedMotion, matchMedia }), containerRef)

    // Cleanup function: revert ALL animations and ScrollTriggers
    return () => {
      matchMedia.revert()
      ctx.revert()
    }
  }, [prefersReducedMotion, containerRef, animationFn])
}
