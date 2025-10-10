/**
 * useMagneticPull - Cursor-following magnetic hover effect hook
 *
 * Creates a smooth magnetic pull effect where an element follows the cursor within a
 * defined radius. Uses GSAP for smooth transforms and throttles mousemove to 60fps.
 * Automatically disables on mobile devices (<768px viewport) for performance.
 *
 * @see src/components/epic2/PREMIUM_USAGE.md for usage examples
 * @see docs/tech-spec-epic-2.md for performance constraints
 *
 * Performance: Throttled to 16ms (60fps), disabled on mobile, max 30px movement
 */

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import type { MagneticPullOptions } from '../types'

/**
 * Simple throttle implementation as fallback
 */
function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): T & { kill?: () => void } {
  let timeout: NodeJS.Timeout | null = null
  let previous = 0

  const throttled = function (this: unknown, ...args: Parameters<T>) {
    const now = Date.now()
    const remaining = wait - (now - previous)

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      func.apply(this, args)
    } else if (!timeout) {
      timeout = setTimeout(() => {
        previous = Date.now()
        timeout = null
        func.apply(this, args)
      }, remaining)
    }
  } as T & { kill?: () => void }

  // Add kill method for cleanup
  throttled.kill = () => {
    if (timeout) {
      clearTimeout(timeout)
      timeout = null
    }
  }

  return throttled
}

/**
 * Default configuration for magnetic pull effect
 */
const DEFAULTS = {
  strength: 0.3, // 30% of maxDistance
  maxDistance: 30, // Max pixels element can move
  ease: 'power2.out', // GSAP easing
  rotation: false, // Disable rotation by default
  rotationIntensity: 0.1, // ±5.7 degrees max rotation
} as const

/**
 * Magnetic pull hook - creates cursor-following effect
 *
 * @example Basic usage
 * ```tsx
 * function PortfolioCard() {
 *   const cardRef = useMagneticPull({ strength: 0.3 })
 *   return <div ref={cardRef}>Content</div>
 * }
 * ```
 *
 * @example With rotation
 * ```tsx
 * const cardRef = useMagneticPull({
 *   strength: 0.4,
 *   maxDistance: 40,
 *   rotation: true,
 *   rotationIntensity: 0.15
 * })
 * ```
 *
 * @param options - Configuration options for magnetic pull
 * @returns Ref to attach to target element
 */
export function useMagneticPull(options: MagneticPullOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null)
  const throttledRef = useRef<((e: MouseEvent) => void) | null>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Merge options with defaults
    const config = {
      ...DEFAULTS,
      ...options,
    }

    // Mobile detection: disable on viewports <768px (touch screens)
    const isMobile = window.innerWidth < 768
    if (isMobile) {
      // Don't attach listeners on mobile
      return
    }

    /**
     * Calculate magnetic pull based on cursor position
     */
    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Calculate distance from cursor to element center
      const deltaX = e.clientX - centerX
      const deltaY = e.clientY - centerY
      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2)

      // Define trigger radius (150px from center per tech spec)
      const triggerRadius = 150

      if (distance < triggerRadius) {
        // Calculate pull amount based on strength
        const pullX = deltaX * config.strength
        const pullY = deltaY * config.strength

        // Clamp to maxDistance
        const clampedX = Math.max(
          -config.maxDistance,
          Math.min(config.maxDistance, pullX)
        )
        const clampedY = Math.max(
          -config.maxDistance,
          Math.min(config.maxDistance, pullY)
        )

        // Calculate rotation if enabled
        const rotation = config.rotation
          ? (clampedX / config.maxDistance) * 10 * config.rotationIntensity
          : 0

        // Apply smooth GSAP transform
        gsap.to(element, {
          x: clampedX,
          y: clampedY,
          rotation,
          duration: 0.3,
          ease: config.ease,
        })
      } else {
        // Reset to center when cursor leaves trigger radius
        gsap.to(element, {
          x: 0,
          y: 0,
          rotation: 0,
          duration: 0.5,
          ease: config.ease,
        })
      }
    }

    /**
     * Reset element position when mouse leaves the element
     */
    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        rotation: 0,
        duration: 0.5,
        ease: config.ease,
      })
    }

    // Throttle mousemove to 60fps (16ms interval)
    // Use custom throttle instead of gsap.utils.throttle for better compatibility
    const throttledMouseMove = throttle(handleMouseMove, 16)
    throttledRef.current = throttledMouseMove

    // Attach event listeners
    window.addEventListener('mousemove', throttledMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    // Cleanup on unmount
    return () => {
      window.removeEventListener('mousemove', throttledMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)

      // CRITICAL: Kill throttle to prevent memory leaks
      if (throttledRef.current) {
        throttledRef.current.kill?.()
      }

      // Reset element position
      gsap.set(element, { x: 0, y: 0, rotation: 0 })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options.strength, options.maxDistance, options.ease, options.rotation, options.rotationIntensity])

  return elementRef
}
