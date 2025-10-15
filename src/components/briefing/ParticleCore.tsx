import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { briefingPalette } from "./palette"
import { detectDeviceCapabilities, detectDeviceCapabilitiesSync } from "@/utils/performance-adapter"
import { getAdaptiveConfig } from "@/utils/adaptive-config"
import type { AdaptiveAnimationConfig } from "@/utils/adaptive-config"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
  hue: number
}

interface ParticleCoreProps {
  isActive?: boolean
  intensity?: number
  className?: string
}

export const ParticleCore = ({
  isActive = false,
  intensity = 0.5,
  className = ""
}: ParticleCoreProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const tickerRef = useRef<gsap.TickerCallback | null>(null)
  const resizeObserverRef = useRef<ResizeObserver | null>(null)
  const sizeRef = useRef({ width: 0, height: 0, centerX: 0, centerY: 0, needsResize: true })
  const particlesRef = useRef<Particle[]>([])
  const poolRef = useRef<Particle[]>([])

  const [adaptiveConfig, setAdaptiveConfig] = useState<AdaptiveAnimationConfig>(() => {
    const capabilities = detectDeviceCapabilitiesSync()
    return getAdaptiveConfig(capabilities)
  })

  const isActiveRef = useRef(isActive)
  const intensityRef = useRef(intensity)
  const configRef = useRef(adaptiveConfig)

  useEffect(() => {
    detectDeviceCapabilities().then((capabilities) => {
      const newConfig = getAdaptiveConfig(capabilities)
      setAdaptiveConfig(newConfig)

      if (import.meta.env.DEV) {
        console.log("[ParticleCore] Adaptive config loaded:", {
          tier: newConfig.tier,
          particles: newConfig.particleCount,
          blur: newConfig.enableBlur,
          shadows: newConfig.enableShadows
        })
      }
    })
  }, [])

  useEffect(() => {
    isActiveRef.current = isActive
  }, [isActive])

  useEffect(() => {
    intensityRef.current = intensity
  }, [intensity])

  useEffect(() => {
    configRef.current = adaptiveConfig
  }, [adaptiveConfig])

  useEffect(() => {
    if (!configRef.current.enableParticles) {
      if (import.meta.env.DEV) {
        console.log("[ParticleCore] Particles disabled for tier:", configRef.current.tier)
      }
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const sizeState = sizeRef.current

    const measure = () => {
      const rect = canvas.getBoundingClientRect()
      const pixelRatio = window.devicePixelRatio || 1
      const pixelWidth = Math.max(1, Math.round(rect.width * pixelRatio))
      const pixelHeight = Math.max(1, Math.round(rect.height * pixelRatio))

      if (pixelWidth === 0 || pixelHeight === 0) {
        sizeState.needsResize = false
        return
      }

      if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
        canvas.width = pixelWidth
        canvas.height = pixelHeight
        ctx.setTransform(1, 0, 0, 1, 0, 0)
        ctx.scale(pixelRatio, pixelRatio)
      }

      sizeState.width = rect.width || 1
      sizeState.height = rect.height || 1
      sizeState.centerX = sizeState.width / 2
      sizeState.centerY = sizeState.height / 2
      sizeState.needsResize = false
    }

    sizeState.needsResize = true
    measure()

    if (resizeObserverRef.current) {
      resizeObserverRef.current.disconnect()
    }
    const resizeObserver = new ResizeObserver(() => {
      sizeRef.current.needsResize = true
    })
    resizeObserver.observe(canvas)
    resizeObserverRef.current = resizeObserver

    const createParticle = (x: number, y: number): Particle => {
      const angle = Math.random() * Math.PI * 2
      const speed = Math.random() * 0.5 + 0.5
      const life = Math.random() * 60 + 60 // 60-120 frames

      return {
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life,
        maxLife: life,
        size: Math.random() * 3.2 + 2.2,
        hue: Math.random() * 30 + 200
      }
    }

    particlesRef.current = []
    poolRef.current = []
    const particleCount = configRef.current.particleCount
    const { centerX, centerY } = sizeRef.current
    for (let i = 0; i < particleCount; i++) {
      poolRef.current.push(createParticle(centerX, centerY))
    }

    const spawnParticle = (force = false) => {
      if (!force && !isActiveRef.current) return

      const { centerX, centerY } = sizeRef.current
      if (centerX === 0 && centerY === 0) return

      const offsetX = (Math.random() - 0.5) * 36
      const offsetY = (Math.random() - 0.5) * 36

      let particle: Particle
      if (poolRef.current.length > 0) {
        particle = poolRef.current.pop()!
        Object.assign(particle, createParticle(centerX + offsetX, centerY + offsetY))
      } else {
        particle = createParticle(centerX + offsetX, centerY + offsetY)
      }

      particlesRef.current.push(particle)
    }

    const primeParticles = () => {
      const { centerX, centerY } = sizeRef.current
      if (centerX === 0 && centerY === 0) return

      const target = Math.min(particleCount, Math.max(0, Math.floor(particleCount * 0.45)))
      for (let i = 0; i < target && particlesRef.current.length < particleCount; i++) {
        spawnParticle(true)
      }
    }

    primeParticles()

    const updateParticles = () => {
      const particles = particlesRef.current
      const { centerX, centerY } = sizeRef.current

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]

        p.x += p.vx
        p.y += p.vy

        const dx = centerX - p.x
        const dy = centerY - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist > 10) {
          p.vx += (dx / dist) * 0.02
          p.vy += (dy / dist) * 0.02
        }

        p.life--

        if (p.life <= 0) {
          poolRef.current.push(particles.splice(i, 1)[0])
        }
      }
    }

    const drawParticles = () => {
      const { width, height } = sizeRef.current
      if (!width || !height) return

      ctx.clearRect(0, 0, width, height)

      const particles = particlesRef.current
      const config = configRef.current

      if (config.enableBlur) {
        ctx.filter = "blur(2px)"
      } else {
        ctx.filter = "none"
      }

      particles.forEach((p) => {
        const alpha = p.life / p.maxLife
        const glowRadius = config.enableBlur ? p.size * 4.5 : p.size * 3.5

        if (config.enableShadows) {
          ctx.shadowColor = `hsla(${p.hue}, 80%, 70%, ${alpha * 0.3})`
          ctx.shadowBlur = 10
        } else {
          ctx.shadowBlur = 0
        }

        ctx.beginPath()
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowRadius)
        gradient.addColorStop(0, `hsla(${p.hue}, 80%, 70%, ${alpha * 0.8})`)
        gradient.addColorStop(0.5, `hsla(${p.hue}, 70%, 60%, ${alpha * 0.4})`)
        gradient.addColorStop(1, `hsla(${p.hue}, 60%, 50%, 0)`)
        ctx.fillStyle = gradient
        ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2)
        ctx.fill()

        ctx.beginPath()
        ctx.fillStyle = `hsla(${p.hue}, 90%, 80%, ${alpha})`
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      ctx.filter = "none"
      ctx.shadowBlur = 0
    }

    const FRAME_STEP = 1 / 30
    let accumulator = 0
    let spawnTimer = 0

    const tickerCallback: gsap.TickerCallback = (_time, deltaTime = 0) => {
      if (!configRef.current.enableParticles) {
        if (particlesRef.current.length) {
          particlesRef.current = []
          poolRef.current = []
          const { width, height } = sizeRef.current
          if (width && height) {
            ctx.clearRect(0, 0, width, height)
          }
        }
        return
      }

      if (sizeRef.current.needsResize) {
        measure()
      }

      const deltaSeconds = deltaTime || 1 / 60
      accumulator += deltaSeconds
      spawnTimer += deltaSeconds

      const maxParticles = configRef.current.particleCount
      const baseIntervalFrames = Math.max(1, Math.round(5 - intensityRef.current * 3.5))
      const spawnIntervalSeconds = baseIntervalFrames / 60
      const spawnBatchSize = Math.min(48, Math.max(4, Math.round(intensityRef.current * Math.max(3, maxParticles / 54))))

      while (accumulator >= FRAME_STEP) {
        if (spawnTimer >= spawnIntervalSeconds && particlesRef.current.length < maxParticles) {
          for (let i = 0; i < spawnBatchSize && particlesRef.current.length < maxParticles; i++) {
            spawnParticle()
          }
          spawnTimer = 0
        }

        updateParticles()
        accumulator -= FRAME_STEP
      }

      drawParticles()
    }

    tickerRef.current = tickerCallback
    gsap.ticker.add(tickerCallback)

    return () => {
      if (tickerRef.current) {
        gsap.ticker.remove(tickerRef.current)
        tickerRef.current = null
      }
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect()
        resizeObserverRef.current = null
      }
      particlesRef.current = []
      poolRef.current = []
    }
  }, [])

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full pointer-events-none"
        style={{
          mixBlendMode: "screen",
          opacity: isActive ? 1 : 0,
          transition: "opacity 0.5s ease-out"
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative h-32 w-32 rounded-full transition-all duration-700 ease-out"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${briefingPalette.holographic.cyan}80, ${briefingPalette.indigo.DEFAULT}90)`,
            boxShadow: isActive
              ? `0 0 60px ${briefingPalette.holographic.cyan}70, 0 0 120px ${briefingPalette.indigo.DEFAULT}50, inset 0 0 40px ${briefingPalette.holographic.cyan}40`
              : `0 0 20px ${briefingPalette.holographic.cyan}30`,
            transform: isActive ? "scale(1)" : "scale(0.8)",
            opacity: isActive ? 1 : 0.5
          }}
        >
          <div
            className="absolute inset-4 rounded-full border-2 opacity-60"
            style={{
              borderColor: `${briefingPalette.holographic.cyan}50`,
              animation: isActive ? "spin 20s linear infinite" : "none"
            }}
          />

          <div
            className="absolute inset-0 rounded-full opacity-40"
            style={{
              background: `conic-gradient(from 0deg, transparent 0deg, ${briefingPalette.holographic.cyan}80 90deg, transparent 180deg)`,
              animation: isActive ? "spin 8s linear infinite" : "none"
            }}
          />
        </div>
      </div>
    </div>
  )
}
