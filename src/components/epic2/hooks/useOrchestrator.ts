/**
 * useOrchestrator - GSAP master timeline builder with ScrollTrigger integration
 *
 * Creates orchestrated multi-phase GSAP timelines with ScrollTrigger integration.
 * Provides a declarative API for building complex scroll-linked animations with
 * automatic cleanup and memory management.
 *
 * @see src/components/epic2/PREMIUM_USAGE.md for usage examples
 * @see docs/tech-spec-epic-2.md for performance constraints
 *
 * Performance: Pre-calculated timeline, max 12 elements per timeline, auto-cleanup
 */

import { useRef, useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { OrchestratorOptions, AnimationPhase, UseOrchestratorReturn } from '../types'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

/**
 * Default configuration for orchestrated timelines
 */
const DEFAULTS: Partial<OrchestratorOptions> = {
  start: 'top center',
  end: 'bottom center',
  scrub: 1, // 1 second lag for smooth scroll link
  pin: false,
  markers: false, // Set to true for debugging
} as const

/**
 * Orchestrator hook - builds GSAP ScrollTrigger timelines with phase system
 *
 * @example Basic 5-phase portfolio entrance
 * ```tsx
 * function PortfolioSection() {
 *   const containerRef = useRef(null)
 *   const { timeline, addPhase } = useOrchestrator({
 *     trigger: containerRef,
 *     start: 'top center',
 *     end: 'bottom center',
 *     scrub: 1
 *   })
 *
 *   useEffect(() => {
 *     addPhase({
 *       name: 'title-reveal',
 *       targets: '.portfolio-title',
 *       animation: { opacity: 1, y: 0, duration: 1 },
 *       position: 0
 *     })
 *
 *     addPhase({
 *       name: 'card-stagger',
 *       targets: '.portfolio-card',
 *       animation: { opacity: 1, y: 0, duration: 0.8 },
 *       stagger: 0.2,
 *       position: '+=0.5'
 *     })
 *   }, [])
 *
 *   return <div ref={containerRef}>...</div>
 * }
 * ```
 *
 * @param options - ScrollTrigger configuration options
 * @returns Timeline controls and addPhase method
 */
export function useOrchestrator(
  options: OrchestratorOptions
): UseOrchestratorReturn {
  const timelineRef = useRef<gsap.core.Timeline | null>(null)
  const [isReady, setIsReady] = useState(false)

  // Merge options with defaults
  const config: OrchestratorOptions = {
    ...DEFAULTS,
    ...options,
  }

  // Use official GSAP React hook for automatic cleanup
  useGSAP(
    () => {
      // Create master timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: config.trigger,
          start: config.start,
          end: config.end,
          scrub: config.scrub,
          pin: config.pin,
          markers: config.markers,
        },
      })

      timelineRef.current = tl
      setIsReady(true)

      // Cleanup handled automatically by useGSAP
    },
    { dependencies: [config.trigger, config.start, config.end, config.scrub, config.pin] }
  )

  /**
   * Add an animation phase to the timeline
   *
   * @example
   * ```tsx
   * addPhase({
   *   name: 'fade-in',
   *   targets: '.element',
   *   animation: { opacity: 1, duration: 1 },
   *   stagger: 0.1,
   *   position: '+=0.5'
   * })
   * ```
   */
  const addPhase = (phase: AnimationPhase) => {
    const timeline = timelineRef.current
    if (!timeline) {
      console.warn('[useOrchestrator] Timeline not initialized yet')
      return
    }

    const { targets, animation, stagger, position = '>' } = phase

    // Add animation to timeline
    timeline.to(targets, {
      ...animation,
      stagger: stagger || undefined,
    }, position)
  }

  /**
   * Play the timeline
   */
  const play = () => {
    timelineRef.current?.play()
  }

  /**
   * Pause the timeline
   */
  const pause = () => {
    timelineRef.current?.pause()
  }

  /**
   * Restart the timeline from the beginning
   */
  const restart = () => {
    timelineRef.current?.restart()
  }

  return {
    timeline: timelineRef.current as gsap.core.Timeline,
    addPhase,
    play,
    pause,
    restart,
  }
}
