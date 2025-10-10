/**
 * Type definitions for Particle System
 *
 * Epic 3: Neural Briefing Network - Canvas Particle System
 * Story 3.1: Premium 3,000-5,000 particle neural network animation
 *
 * @see docs/tech-spec-epic-3.md - Data Models section
 */

/**
 * Configuration for initializing the particle system
 */
export interface ParticleConfig {
  /** Canvas element to render particles */
  canvas: HTMLCanvasElement
  /** Number of particles to create (1K mobile, 2K tablet, 5K desktop) */
  particleCount: number
  /** Color palette for particles (Epic 1 BRIEFING_PALETTE) */
  colors: {
    indigo: string
    cyan: string
    fuchsia: string
  }
  /** Background gradient colors (dark indigo → darker) */
  backgroundGradient: {
    from: string
    to: string
  }
}

/**
 * Internal state of the particle system (not exposed)
 */
export interface ParticleSystemState {
  /** Particle positions (Float32Array: [x0, y0, x1, y1, ...]) */
  positions: Float32Array
  /** Render positions used during entrance animation */
  renderPositions: Float32Array
  /** Particle velocities (Float32Array: [vx0, vy0, vx1, vy1, ...]) */
  velocities: Float32Array
  /** Particle sizes (Float32Array: [size0, size1, ...]) radius 2-6px */
  sizes: Float32Array
  /** Particle colors (Uint8Array: [r0, g0, b0, a0, r1, g1, b1, a1, ...]) */
  colors: Uint8Array
  /** Per-particle stagger factor for entrance animation */
  entranceDelays: Float32Array
  /** Current number of active particles */
  activeParticleCount: number
  /** Target particle count (responsive baseline) */
  targetParticleCount: number
  /** Animation frame ID (for cancelAnimationFrame) */
  animationFrameId: number | null
  /** Last frame timestamp (for delta time) */
  lastFrameTime: number
  /** Scroll progress (0-1, updated by GSAP ScrollTrigger) */
  scrollProgress: number
  /** Mouse position (null if no interaction) */
  mousePosition: { x: number; y: number } | null
  /** Entrance animation progress (0-1) */
  entranceProgress: number
  /** Whether entrance animation is currently active */
  entranceActive: boolean
  /** Entrance animation total duration in seconds */
  entranceDuration: number
  /** Max stagger delay applied across particles */
  entranceMaxDelay: number
  /** Spawn origin for entrance animation */
  spawnCenter: { x: number; y: number }
  /** Ramp animation state */
  rampActive: boolean
  rampStartCount: number
  rampDuration: number
  rampElapsed: number
}

/**
 * Configuration for mouse interaction
 */
export interface MouseConfig {
  /** Enable mouse interaction (disabled on mobile) */
  enabled: boolean
  /** Attraction radius in pixels (150px per AC-3.14) */
  attractionRadius: number
  /** Throttle interval in ms (16ms = 60fps max per AC-3.15) */
  throttleMs: number
}

/**
 * Performance monitoring configuration
 */
export interface PerformanceConfig {
  /** Enable FPS monitoring */
  enabled: boolean
  /** Sample size for rolling FPS average (60 frames) */
  sampleSize: number
  /** Degradation thresholds */
  degradation: {
    /** FPS threshold for first degradation (30fps → 5K to 2K) */
    threshold1: number
    /** Frame count to confirm threshold1 (5 frames) */
    frameCount1: number
    /** FPS threshold for second degradation (20fps → 2K to 1K) */
    threshold2: number
    /** Frame count to confirm threshold2 (5 frames) */
    frameCount2: number
    /** FPS threshold for static fallback (15fps → static gradient) */
    fallbackThreshold: number
    /** Frame count to confirm fallback (10 frames) */
    fallbackFrameCount: number
  }
}

/**
 * Props for ParticleHero React component
 */
export interface ParticleHeroProps {
  /** Optional className for positioning/styling */
  className?: string
}

/**
 * Device capability detection result
 */
export interface DeviceCapabilities {
  /** Device type based on viewport width */
  deviceType: 'mobile' | 'tablet' | 'desktop'
  /** Initial particle count for device */
  particleCount: number
  /** Whether mouse interaction should be enabled */
  enableMouseInteraction: boolean
  /** Whether user prefers reduced motion */
  prefersReducedMotion: boolean
}
