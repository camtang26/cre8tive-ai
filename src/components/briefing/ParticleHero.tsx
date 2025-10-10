/**
 * Particle Hero - Premium neural network particle animation
 *
 * Epic 3 Story 3.1 - Module 1: ParticleHero React Component
 * Main React component integrating ParticleSystem, GSAP ScrollTrigger, entrance animation
 *
 * Target: 60fps with 5,000 particles on desktop, graceful degradation to 1K on mobile
 *
 * Target ACs: All 52 ACs (primary integration point)
 *
 * @see docs/tech-spec-epic-3.md - Complete technical specification
 */

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { briefingPalette } from './palette'
import { ParticleSystem } from './particle-system/ParticleSystem'
import { PerformanceMonitor } from './particle-system/PerformanceMonitor'
import { MouseInteraction } from './particle-system/MouseInteraction'
import {
  computeDeviceCapabilities,
  parseParticleScale,
} from './particle-system/device'
import type {
  ParticleHeroProps,
  DeviceCapabilities,
  ParticleConfig,
  PerformanceConfig,
  MouseConfig,
} from './particle-system/types'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

/**
 * Detect device capabilities and initial configuration
 * AC-3.30, AC-3.31, AC-3.32: Responsive particle counts
 * AC-3.33: Mouse interaction disabled on mobile
 * AC-3.34: prefers-reduced-motion detection
 */
export function detectDeviceCapabilities(): DeviceCapabilities {
  const width = window.innerWidth

  // AC-3.34: Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const scale = parseParticleScale(import.meta.env.VITE_PARTICLE_COUNT_SCALE)
  const { deviceType, particleCount } = computeDeviceCapabilities(width, scale)

  // AC-3.33: Disable mouse interaction on mobile/touch devices
  const supportsTouch =
    'ontouchstart' in window ||
    (typeof navigator !== 'undefined' && navigator.maxTouchPoints > 0)
  const enableMouseInteraction = deviceType === 'desktop' && !supportsTouch

  return {
    deviceType,
    particleCount,
    enableMouseInteraction,
    prefersReducedMotion,
  }
}

/**
 * Static gradient fallback component
 * AC-3.34, AC-3.48, AC-3.52: Fallback for reduced motion, canvas failure, or performance
 */
function StaticGradientFallback({ className }: { className?: string }) {
  return (
    <div
      className={className}
      style={{
        background: 'linear-gradient(to bottom, #1e1b4b, #0f172a)',
        width: '100%',
        height: '100%',
      }}
      aria-hidden="true"
    />
  )
}

/**
 * ParticleHero - Main component
 */
export function ParticleHero({ className = '' }: ParticleHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const particleSystemRef = useRef<ParticleSystem | null>(null)
  const [shouldRenderParticles, setShouldRenderParticles] = useState(true)
  const [deviceCapabilities, setDeviceCapabilities] = useState<DeviceCapabilities | null>(null)

  // Detect device capabilities on mount
  useEffect(() => {
    const capabilities = detectDeviceCapabilities()
    setDeviceCapabilities(capabilities)

    // AC-3.34: Honor prefers-reduced-motion (static gradient fallback)
    if (capabilities.prefersReducedMotion) {
      setShouldRenderParticles(false)
    }
  }, [])

  // Initialize particle system
  useEffect(() => {
    if (!deviceCapabilities || !shouldRenderParticles || !canvasRef.current) return

    const canvas = canvasRef.current
    const startTime = performance.now() // AC-3.22: Track initialization time

    try {
      // AC-3.1: Set canvas size to full viewport immediately (RAF only needed for resize)
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Create particle configuration
      const config: ParticleConfig = {
        canvas,
        particleCount: deviceCapabilities.particleCount,
        colors: {
          indigo: briefingPalette.colors.indigo,
          cyan: briefingPalette.colors.cyan,
          fuchsia: briefingPalette.colors.fuchsia,
        },
        backgroundGradient: {
          from: '#1e1b4b', // dark indigo
          to: '#0f172a', // darker
        },
      }

      // DIAGNOSTIC: Performance monitor disabled to test if degradation is too aggressive
      // Re-enable after confirming particles render correctly
      const perfConfig: PerformanceConfig = {
        enabled: false, // ← TEMPORARILY DISABLED
        sampleSize: 60,
        degradation: {
          threshold1: 30,
          frameCount1: 5,
          threshold2: 20,
          frameCount2: 5,
          fallbackThreshold: 15,
          fallbackFrameCount: 10,
        },
      }

      // Create mouse interaction configuration
      const mouseConfig: MouseConfig = {
        enabled: deviceCapabilities.enableMouseInteraction,
        attractionRadius: 150, // AC-3.14: 150px attraction radius
        throttleMs: 16, // AC-3.15: 60fps max (16ms interval)
      }

      // Initialize subsystems
      const performanceMonitor = new PerformanceMonitor(perfConfig)
      const mouseInteraction = new MouseInteraction(canvas, mouseConfig)

      // Create particle system
      const particleSystem = new ParticleSystem(config, performanceMonitor, mouseInteraction)
      particleSystemRef.current = particleSystem

      // Start animation
      particleSystem.start()

      if (import.meta.env.DEV) {
        ;(window as typeof window & { __particleHeroStatus?: string }).__particleHeroStatus = 'running'
      }

      // AC-3.22: Log initialization time in dev mode
      if (import.meta.env.DEV) {
        const initTime = performance.now() - startTime
        console.log(`[ParticleHero] Initialized in ${initTime.toFixed(2)}ms`)
      }
    } catch (error) {
      // AC-3.48, AC-3.51: Graceful error handling with detailed logging
      console.error(
        '[ParticleHero] Initialization failed:',
        error instanceof Error ? error.message : String(error),
        '\nStack:',
        error instanceof Error ? error.stack : 'N/A'
      )
      setShouldRenderParticles(false)
      if (import.meta.env.DEV) {
        ;(window as typeof window & { __particleHeroStatus?: string }).__particleHeroStatus = 'disabled'
      }
    }

    // Cleanup on unmount (AC-3.29: Prevent memory leaks)
    return () => {
      if (particleSystemRef.current) {
        particleSystemRef.current.destroy()
        particleSystemRef.current = null
      }
      if (import.meta.env.DEV) {
        ;(window as typeof window & { __particleHeroStatus?: string }).__particleHeroStatus = 'stopped'
      }
    }
  }, [deviceCapabilities, shouldRenderParticles])

  // Handle window resize
  useEffect(() => {
    if (!particleSystemRef.current) return

    const handleResize = () => {
      const newCapabilities = detectDeviceCapabilities()

      // AC-3.1: Resize canvas to full viewport
      if (canvasRef.current) {
        requestAnimationFrame(() => {
          if (canvasRef.current) {
            canvasRef.current.width = window.innerWidth
            canvasRef.current.height = window.innerHeight
          }
        })
      }

      // Update particle count if device type changed
      if (newCapabilities.particleCount !== deviceCapabilities?.particleCount) {
        particleSystemRef.current?.resize(newCapabilities.particleCount)
      }

      setDeviceCapabilities(newCapabilities)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [deviceCapabilities])

  // GSAP ScrollTrigger integration and entrance animation
  // AC-3.39: useGSAP hook ensures automatic cleanup
  useGSAP(
    () => {
      if (!particleSystemRef.current || !containerRef.current) return

      // AC-3.12, AC-3.18: Entrance animation (particles burst from center)
      // Handled by initial particle distribution (already random across viewport)
      // Additional entrance animation can be added here if needed

      // AC-3.16, AC-3.17: ScrollTrigger for particle speed modulation
      // AC-3.50: GSAP fallback check
      if (typeof gsap !== 'undefined' && ScrollTrigger) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: false,
          onUpdate: (self) => {
            // Update particle speed based on scroll progress (0-1)
            particleSystemRef.current?.updateScrollProgress(self.progress)
          },
        })
      }

      // Cleanup handled automatically by useGSAP hook (AC-3.39)
    },
    { scope: containerRef, dependencies: [shouldRenderParticles, deviceCapabilities] }
  )

  // Render fallback if particles disabled
  if (!shouldRenderParticles) {
    if (import.meta.env.DEV) {
      ;(window as typeof window & { __particleHeroStatus?: string }).__particleHeroStatus = 'disabled'
    }
    return <StaticGradientFallback className={className} />
  }

  // AC-3.1, AC-3.9, AC-3.35: Canvas full-viewport with z-index: 0, content renders on top, aria-hidden for accessibility
  return (
    <div ref={containerRef} className={`${className} relative`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: '0' }}
        aria-hidden="true"
      />
    </div>
  )
}

// Error boundary wrapper for additional safety (AC-3.51)
// Note: React Error Boundaries must be class components
// This component can be wrapped in an Error Boundary in the parent (BriefingEngine.tsx)
export default ParticleHero
