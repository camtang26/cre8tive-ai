/**
 * usePerformanceMonitor - FPS monitoring and graceful degradation
 *
 * Monitors frame rate and automatically triggers performance fallbacks when FPS
 * drops below 30fps for 5 consecutive frames. Implements graceful degradation
 * strategy to maintain smooth user experience on lower-end devices.
 *
 * @see src/components/epic2/PREMIUM_USAGE.md for usage examples
 * @see docs/tech-spec-epic-2.md for fallback strategy
 *
 * Performance: Lightweight RAF loop, minimal overhead, auto-cleanup
 */

import { useEffect, useState, useRef } from 'react'
import type { PerformanceMetrics, PerformanceFallbackConfig } from '../types'

/**
 * Default performance configuration
 */
const DEFAULTS: Required<PerformanceFallbackConfig> = {
  fpsThreshold: 30,
  consecutiveFrames: 5,
  onFallback: () => {},
}

/**
 * Performance monitor hook - tracks FPS and triggers fallbacks
 *
 * @example Basic usage
 * ```tsx
 * function PremiumSection() {
 *   const { fallbackActive } = usePerformanceMonitor({
 *     fpsThreshold: 30,
 *     consecutiveFrames: 5,
 *     onFallback: () => {
 *       console.log('Performance fallback triggered!')
 *     }
 *   })
 *
 *   return (
 *     <div>
 *       <OrganicCard morphing={!fallbackActive}>
 *         Content
 *       </OrganicCard>
 *     </div>
 *   )
 * }
 * ```
 *
 * @param config - Configuration options for performance monitoring
 * @returns Performance metrics and fallback state
 */
export function usePerformanceMonitor(
  config: PerformanceFallbackConfig = {}
): PerformanceMetrics {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    lowFpsFrames: 0,
    fallbackActive: false,
  })

  const rafIdRef = useRef<number | null>(null)
  const lastFrameTimeRef = useRef<number>(performance.now())
  const lowFpsCountRef = useRef<number>(0)
  const fallbackTriggeredRef = useRef<boolean>(false)

  // Merge config with defaults
  const mergedConfig = {
    ...DEFAULTS,
    ...config,
  }

  useEffect(() => {
    /**
     * Calculate FPS using requestAnimationFrame
     */
    const measureFPS = (currentTime: number) => {
      const deltaTime = currentTime - lastFrameTimeRef.current
      lastFrameTimeRef.current = currentTime

      // Calculate FPS (1000ms / time between frames)
      const currentFPS = 1000 / deltaTime

      // Check if FPS is below threshold
      if (currentFPS < mergedConfig.fpsThreshold) {
        lowFpsCountRef.current++

        // Trigger fallback if threshold exceeded
        if (
          lowFpsCountRef.current >= mergedConfig.consecutiveFrames &&
          !fallbackTriggeredRef.current
        ) {
          fallbackTriggeredRef.current = true
          mergedConfig.onFallback()

          setMetrics({
            fps: currentFPS,
            lowFpsFrames: lowFpsCountRef.current,
            fallbackActive: true,
          })
        } else {
          setMetrics({
            fps: currentFPS,
            lowFpsFrames: lowFpsCountRef.current,
            fallbackActive: fallbackTriggeredRef.current,
          })
        }
      } else {
        // Reset counter if FPS is good
        lowFpsCountRef.current = 0
        setMetrics({
          fps: currentFPS,
          lowFpsFrames: 0,
          fallbackActive: fallbackTriggeredRef.current,
        })
      }

      // Continue monitoring
      rafIdRef.current = requestAnimationFrame(measureFPS)
    }

    // Start monitoring
    rafIdRef.current = requestAnimationFrame(measureFPS)

    // Cleanup on unmount
    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mergedConfig.fpsThreshold, mergedConfig.consecutiveFrames])

  return metrics
}

/**
 * Global performance fallback hook - applies fallbacks across all premium components
 *
 * @example Global fallback
 * ```tsx
 * function App() {
 *   const { fallbackActive, fps } = useGlobalPerformanceFallback()
 *
 *   return (
 *     <PerformanceContext.Provider value={{ fallbackActive }}>
 *       <Router />
 *     </PerformanceContext.Provider>
 *   )
 * }
 * ```
 */
export function useGlobalPerformanceFallback() {
  const [fallbackActive, setFallbackActive] = useState(false)

  const { fps, lowFpsFrames, fallbackActive: isActive } = usePerformanceMonitor({
    fpsThreshold: 30,
    consecutiveFrames: 5,
    onFallback: () => {
      console.warn(
        '[Performance] FPS dropped below 30 for 5 frames. Activating fallback mode.'
      )
      setFallbackActive(true)
    },
  })

  return {
    fps,
    lowFpsFrames,
    fallbackActive: isActive,
  }
}
