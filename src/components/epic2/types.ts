/**
 * Epic 2 Premium Component Type Definitions
 *
 * Type definitions for organic shapes, magnetic interactions, and GSAP orchestration.
 * These types are used across all Epic 2 stories (2.1-2.8) for consistent premium patterns.
 *
 * @see docs/tech-spec-epic-2.md for implementation details
 */

import type { ReactNode } from 'react'
import type gsap from 'gsap'

// ===== PREMIUM SHAPE SYSTEM =====

/**
 * Shape variants for OrganicCard component
 * - blob: Organic blob shape (portfolio cards)
 * - hexagon: Angular hexagon shape (multi-platform cards)
 * - organic: Fluid organic shape (benefit cards)
 * - floating: Soft floating shape (value prop cards)
 */
export type ShapeVariant = 'blob' | 'hexagon' | 'organic' | 'floating'

/**
 * SVG path definition for shape morphing
 */
export interface ShapePath {
  /** SVG path string (d attribute) */
  path: string
  /** Viewbox dimensions [width, height] */
  viewBox: [number, number]
}

/**
 * Props for OrganicCard component
 *
 * @example
 * ```tsx
 * <OrganicCard
 *   shape="blob"
 *   glowColor="#06b6d4"
 *   morphing
 *   morphIntensity={0.05}
 * >
 *   <img src="portfolio.jpg" alt="Project" />
 * </OrganicCard>
 * ```
 */
export interface OrganicCardProps {
  /** Content to render inside the shape-masked container */
  children: ReactNode
  /** Shape variant to display (default: 'blob') */
  shape?: ShapeVariant
  /** Hex color for SVG glow filter (e.g., '#06b6d4') */
  glowColor?: string
  /** Enable breathing morphing animation (8s loop) */
  morphing?: boolean
  /** Morph intensity: 0-1, how much shape variance (default: 0.05 = ±5%) */
  morphIntensity?: number
  /** Additional Tailwind classes */
  className?: string
}

// ===== MAGNETIC PULL INTERACTION =====

/**
 * Configuration options for useMagneticPull hook
 *
 * @example
 * ```tsx
 * const ref = useMagneticPull({
 *   strength: 0.3,
 *   maxDistance: 30,
 *   rotation: true
 * })
 * ```
 */
export interface MagneticPullOptions {
  /** Pull intensity: 0-1 scale (0 = no pull, 1 = full distance, default: 0.3) */
  strength?: number
  /** Maximum pixels element can move from center (default: 30px) */
  maxDistance?: number
  /** GSAP easing function (default: 'power2.out') */
  ease?: string
  /** Enable subtle rotation on pull (default: false) */
  rotation?: boolean
  /** Rotation intensity: 0-1 scale (default: 0.1 = ±5.7 degrees) */
  rotationIntensity?: number
}

// ===== GSAP ORCHESTRATION SYSTEM =====

/**
 * ScrollTrigger configuration for useOrchestrator hook
 *
 * @see https://gsap.com/docs/v3/Plugins/ScrollTrigger/
 */
export interface OrchestratorOptions {
  /** Element selector or ref to trigger scroll animation */
  trigger: string | HTMLElement
  /** ScrollTrigger start position (default: 'top center') */
  start?: string
  /** ScrollTrigger end position (default: 'bottom center') */
  end?: string
  /** Scrub lag in seconds or boolean (default: 1, smooth scroll link) */
  scrub?: number | boolean
  /** Pin section during scroll animation (default: false) */
  pin?: boolean
  /** Show debug markers in development (default: false) */
  markers?: boolean
}

/**
 * Animation phase definition for orchestrated timelines
 *
 * @example
 * ```tsx
 * const phase: AnimationPhase = {
 *   name: 'title-reveal',
 *   targets: '.portfolio-title',
 *   animation: { opacity: 1, y: 0, duration: 1 },
 *   stagger: 0.2,
 *   position: '+=0.5'
 * }
 * ```
 */
export interface AnimationPhase {
  /** Phase identifier (e.g., 'title-reveal', 'card-entrance') */
  name: string
  /** CSS selector or HTMLElement array to animate */
  targets: string | HTMLElement[]
  /** GSAP animation properties (opacity, x, y, scale, etc.) */
  animation: gsap.TweenVars
  /** Stagger delay between multiple targets (seconds or config object) */
  stagger?: number | gsap.StaggerVars
  /** Timeline position: number (seconds) or string ('+=0.5', '<', '>')  */
  position?: string | number
}

/**
 * Return type for useOrchestrator hook
 *
 * @example
 * ```tsx
 * const { timeline, addPhase, play, pause, restart } = useOrchestrator(options)
 *
 * addPhase({
 *   name: 'entrance',
 *   targets: '.card',
 *   animation: { opacity: 1, y: 0 }
 * })
 * ```
 */
export interface UseOrchestratorReturn {
  /** GSAP master timeline instance */
  timeline: gsap.core.Timeline
  /** Add animation phase to timeline */
  addPhase: (phase: AnimationPhase) => void
  /** Play timeline */
  play: () => void
  /** Pause timeline */
  pause: () => void
  /** Restart timeline from beginning */
  restart: () => void
}

// ===== PERFORMANCE MONITORING =====

/**
 * Performance monitor state
 */
export interface PerformanceMetrics {
  /** Current frames per second */
  fps: number
  /** Number of consecutive frames below threshold */
  lowFpsFrames: number
  /** Whether fallback mode is active */
  fallbackActive: boolean
}

/**
 * Performance fallback configuration
 */
export interface PerformanceFallbackConfig {
  /** FPS threshold to trigger fallback (default: 30) */
  fpsThreshold?: number
  /** Consecutive frames below threshold to trigger (default: 5) */
  consecutiveFrames?: number
  /** Callback when fallback is triggered */
  onFallback?: () => void
}
