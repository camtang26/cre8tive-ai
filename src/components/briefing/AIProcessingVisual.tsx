import { useEffect, useRef, useState } from "react"
import { briefingPalette } from "@/components/briefing/palette"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  alpha: number
}

// Performance and physics constants
const PARTICLE_COUNT_DESKTOP = 80
const PARTICLE_COUNT_MOBILE = 30
const MOBILE_BREAKPOINT = 768
const FPS_TARGET = 60
const FPS_FALLBACK_THRESHOLD = 30
const LOW_FPS_FRAME_COUNT = 10
const CANVAS_WIDTH = 800
const CANVAS_HEIGHT = 600
const INTERSECTION_THRESHOLD = 0.3

// Physics constants
const ORBIT_DISTANCE_MIN = 50
const ORBIT_DISTANCE_MAX = 150
const CENTRIPETAL_FORCE = 100
const FORCE_MULTIPLIER = 0.01
const DRIFT_STRENGTH = 0.1
const VELOCITY_DAMPING = 0.99
const ALPHA_FADE_DISTANCE = 300
const PARTICLE_RADIUS_MIN = 0.5
const PARTICLE_RADIUS_MAX = 2.5

/**
 * AIProcessingVisual - Canvas particle animation for AI Briefing Engine
 *
 * Displays 60-100 particles with orbital physics to visualize AI processing.
 * Optimized for 60fps with graceful fallback to static gradient on low-end devices.
 *
 * @features
 * - Orbital physics: Centripetal force + random drift
 * - Alpha fading based on distance from center
 * - Mobile optimization: 30 particles on < 768px
 * - FPS monitoring with auto-fallback (< 30fps → static gradient)
 * - GPU acceleration (will-change: transform, translateZ)
 * - Scroll lifecycle: Renders only when visible (Intersection Observer)
 * - Memory leak prevention: RAF cleanup on unmount
 *
 * @accessibility
 * - Respects prefers-reduced-motion (shows static gradient)
 * - ARIA labels for screen readers
 * - Keyboard-accessible (no interactive elements)
 *
 * @performance
 * - Target: 60fps on modern devices (Chrome 100+, Firefox 100+, Safari 15+)
 * - Mobile: 30 particles (reduced from 80)
 * - Fallback: Static gradient if FPS < 30 for 10 consecutive frames
 */
export function AIProcessingVisual() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number>()
  const containerRef = useRef<HTMLDivElement>(null)
  const [showFallback, setShowFallback] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  // Intersection Observer for scroll reveal lifecycle
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
        })
      },
      { threshold: INTERSECTION_THRESHOLD }
    )

    observer.observe(container)

    return () => {
      observer.disconnect()
    }
  }, [])

  // Canvas particle animation with RAF cleanup
  useEffect(() => {
    // Skip animation if not visible, reduced motion, or fallback active
    if (!isVisible || prefersReducedMotion || showFallback) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    // Mobile optimization: Reduce particle count on mobile devices
    const particleCount = window.innerWidth < MOBILE_BREAKPOINT
      ? PARTICLE_COUNT_MOBILE
      : PARTICLE_COUNT_DESKTOP

    // Initialize particles with orbital positions around center
    particlesRef.current = Array.from({ length: particleCount }, () => {
      const angle = Math.random() * Math.PI * 2
      const distance = Math.random() * (ORBIT_DISTANCE_MAX - ORBIT_DISTANCE_MIN) + ORBIT_DISTANCE_MIN
      return {
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * (PARTICLE_RADIUS_MAX - PARTICLE_RADIUS_MIN) + PARTICLE_RADIUS_MIN,
        color: [
          briefingPalette.colors.indigo,
          briefingPalette.colors.cyan,
          briefingPalette.colors.fuchsia,
        ][Math.floor(Math.random() * 3)],
        alpha: 1,
      }
    })

    let fps = FPS_TARGET
    let lastTime = performance.now()
    let lowFpsCount = 0

    function animate(currentTime: number) {
      // FPS calculation for performance monitoring
      const deltaTime = currentTime - lastTime
      fps = deltaTime > 0 ? Math.round(1000 / deltaTime) : FPS_TARGET
      lastTime = currentTime

      // Graceful degradation: Switch to static gradient if consistently low FPS
      if (fps < FPS_FALLBACK_THRESHOLD) {
        lowFpsCount++
        if (lowFpsCount > LOW_FPS_FRAME_COUNT) {
          setShowFallback(true)
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current)
          }
          return
        }
      } else {
        lowFpsCount = 0
      }

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Orbital physics: Calculate centripetal force toward center
        const dx = centerX - particle.x
        const dy = centerY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const force = distance > 0 ? CENTRIPETAL_FORCE / distance : 0

        // Apply centripetal acceleration (F = ma, creates circular orbit)
        particle.vx += (dx / distance) * force * FORCE_MULTIPLIER
        particle.vy += (dy / distance) * force * FORCE_MULTIPLIER

        // Add random drift for organic, unpredictable movement
        particle.vx += (Math.random() - 0.5) * DRIFT_STRENGTH
        particle.vy += (Math.random() - 0.5) * DRIFT_STRENGTH

        // Velocity damping prevents runaway acceleration
        particle.vx *= VELOCITY_DAMPING
        particle.vy *= VELOCITY_DAMPING

        // Update particle position based on velocity
        particle.x += particle.vx
        particle.y += particle.vy

        // Alpha fading: Particles fade out as they move away from center
        particle.alpha = Math.max(0, 1 - distance / ALPHA_FADE_DISTANCE)

        // Draw particle
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.alpha
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Reset global alpha
      ctx.globalAlpha = 1

      // Request next frame
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Start animation loop
    animationFrameRef.current = requestAnimationFrame(animate)

    // CRITICAL: Cleanup to prevent memory leaks
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      particlesRef.current = []
    }
  }, [isVisible, prefersReducedMotion, showFallback])

  // Fallback: Static gradient for low-end devices or reduced motion
  if (prefersReducedMotion || showFallback) {
    return (
      <div
        ref={containerRef}
        className="w-full h-[600px] flex items-center justify-center rounded-2xl overflow-hidden"
        style={{
          background: `radial-gradient(circle at center, ${briefingPalette.colors.indigo} 0%, ${briefingPalette.colors.cyan} 50%, ${briefingPalette.colors.fuchsia} 100%)`,
          filter: "blur(100px)",
          opacity: 0.4,
        }}
      >
        <div
          className="text-2xl font-bold z-10"
          style={{ color: briefingPalette.text.primary }}
        >
          AI Processing...
        </div>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="w-full flex justify-center">
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        className="w-full max-w-[800px] h-auto"
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
        }}
        role="img"
        aria-label="AI processing visualization with animated particles orbiting in a circular pattern"
      />
    </div>
  )
}
