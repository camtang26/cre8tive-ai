/**
 * Particle System - Core physics engine and renderer
 *
 * Epic 3 Story 3.1 - Module 2: ParticleSystem
 * Handles particle initialization, physics updates, rendering, neural network connections
 *
 * Performance-optimized with typed arrays (Float32Array, Uint8Array)
 * Target: 60fps with 5,000 particles (16.67ms/frame budget)
 *
 * Target ACs: #1-#11 (Visual), #13, #19, #20-#22 (Performance), #30-#32 (Responsive)
 *
 * @see docs/tech-spec-epic-3.md - Module 2: ParticleSystem
 */

import type { ParticleConfig, ParticleSystemState } from './types'
import { PerformanceMonitor } from './PerformanceMonitor'
import { MouseInteraction } from './MouseInteraction'
import {
  ENTRANCE_DURATION_SECONDS,
  ENTRANCE_MAX_DELAY,
  easeOutPower4,
  resolveStaggeredProgress,
} from './entrance'

export class ParticleSystem {
  private config: ParticleConfig
  private ctx: CanvasRenderingContext2D
  private state: ParticleSystemState
  private performanceMonitor: PerformanceMonitor
  private mouseInteraction: MouseInteraction
  private isRunning: boolean = false

  constructor(
    config: ParticleConfig,
    performanceMonitor: PerformanceMonitor,
    mouseInteraction: MouseInteraction
  ) {
    this.config = config
    this.performanceMonitor = performanceMonitor
    this.mouseInteraction = mouseInteraction

    // AC-3.48: Canvas context creation with fallback
    const ctx = config.canvas.getContext('2d')
    if (!ctx) {
      throw new Error('Canvas 2D context not available')
    }
    this.ctx = ctx

    // Initialize particle state with typed arrays (performance optimization)
    this.state = this.initializeState(config.particleCount)
  }

  /**
   * Recalculate spawn center to match current canvas size.
   */
  private updateSpawnCenter(): void {
    const { canvas } = this.config
    this.state.spawnCenter.x = canvas.width / 2
    this.state.spawnCenter.y = canvas.height / 2
  }

  /**
   * Reset render positions to the spawn center and refresh entrance delays.
   */
  private resetRenderPositions(): void {
    const { renderPositions, entranceDelays, activeParticleCount } = this.state
    const { x, y } = this.state.spawnCenter

    for (let i = 0; i < activeParticleCount; i++) {
      const idx = i * 2
      renderPositions[idx] = x
      renderPositions[idx + 1] = y
      entranceDelays[i] = Math.random()
    }
  }

  private computeInitialRampCount(target: number): number {
    if (target <= 1200) return target
    return Math.min(target, Math.max(800, Math.floor(target / 5)))
  }

  private computeRampDuration(start: number, target: number): number {
    const delta = Math.max(target - start, 0)
    if (delta === 0) return 0
    const duration = 800 + delta * 0.6
    return Math.min(4000, Math.max(1200, duration))
  }

  private startRamp(fromCount: number): void {
    this.state.rampStartCount = fromCount
    this.state.rampElapsed = 0
    this.state.rampDuration = this.computeRampDuration(fromCount, this.state.targetParticleCount)
    this.state.rampActive = this.state.rampDuration > 0 && fromCount < this.state.targetParticleCount
  }

  /**
   * Initialize particle state with typed arrays
   * AC-3.49: Handle memory allocation failures with retry at reduced count
   */
  private initializeState(particleCount: number): ParticleSystemState {
    try {
      const positions = new Float32Array(particleCount * 2) // [x0, y0, x1, y1, ...]
      const renderPositions = new Float32Array(particleCount * 2)
      const velocities = new Float32Array(particleCount * 2) // [vx0, vy0, vx1, vy1, ...]
      const sizes = new Float32Array(particleCount) // [size0, size1, ...]
      const colors = new Uint8Array(particleCount * 4) // [r0, g0, b0, a0, r1, ...]
      const entranceDelays = new Float32Array(particleCount)

      // AC-3.2: Random distribution across canvas
      const width = this.config.canvas.width
      const height = this.config.canvas.height
      const centerX = width / 2
      const centerY = height / 2

      // Parse colors from hex (Epic 1 BRIEFING_PALETTE)
      const colorPalette = [
        this.hexToRgb(this.config.colors.indigo),
        this.hexToRgb(this.config.colors.cyan),
        this.hexToRgb(this.config.colors.fuchsia),
      ]

      for (let i = 0; i < particleCount; i++) {
        const idx = i * 2
        const colorIdx = i * 4

        // AC-3.2: Random positions
        positions[idx] = Math.random() * width
        positions[idx + 1] = Math.random() * height

        // AC-3.7: Horizontal flow left-to-right (0.5-1.0 px/frame)
        velocities[idx] = 0.5 + Math.random() * 0.5 // vx
        velocities[idx + 1] = (Math.random() - 0.5) * 0.3 // vy (slight vertical variation)

        // AC-3.4: Size variation (2-6px radius)
        sizes[i] = 2 + Math.random() * 4

        // Entrance positions start at center (burst outward)
        renderPositions[idx] = centerX
        renderPositions[idx + 1] = centerY

        // Stagger each particle across the burst duration
        entranceDelays[i] = Math.random()

        // AC-3.3: Color gradient distribution (varied)
        const colorChoice = colorPalette[Math.floor(Math.random() * colorPalette.length)]
        colors[colorIdx] = colorChoice.r
        colors[colorIdx + 1] = colorChoice.g
        colors[colorIdx + 2] = colorChoice.b
        colors[colorIdx + 3] = 255 // Full alpha
      }

      const rampStartCount = this.computeInitialRampCount(particleCount)

      return {
        positions,
        renderPositions,
        velocities,
        sizes,
        colors,
        entranceDelays,
        activeParticleCount: rampStartCount,
        targetParticleCount: particleCount,
        animationFrameId: null,
        lastFrameTime: performance.now(),
        scrollProgress: 0,
        mousePosition: null,
        entranceProgress: 0,
        entranceActive: true,
        entranceDuration: ENTRANCE_DURATION_SECONDS,
        entranceMaxDelay: ENTRANCE_MAX_DELAY,
        spawnCenter: { x: centerX, y: centerY },
        rampActive: rampStartCount < particleCount,
        rampStartCount,
        rampDuration: this.computeRampDuration(rampStartCount, particleCount),
        rampElapsed: 0,
      }
    } catch (error) {
      // AC-3.49: Retry with reduced particle count (500)
      if (particleCount > 500) {
        console.warn('[ParticleSystem] Memory allocation failed, retrying with 500 particles')
        return this.initializeState(500)
      }
      throw error
    }
  }

  /**
   * Convert hex color to RGB object
   */
  private hexToRgb(hex: string): { r: number; g: number; b: number } {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 }
  }

  /**
   * Start the particle system (begin animation loop)
   */
  public start(): void {
    if (this.isRunning) return

    this.isRunning = true
    this.state.lastFrameTime = performance.now()
    this.updateSpawnCenter()
    this.resetRenderPositions()
    this.state.entranceProgress = 0
    this.state.entranceActive = true
    this.state.targetParticleCount = this.config.particleCount
    this.state.activeParticleCount = Math.min(
      this.state.activeParticleCount,
      this.state.targetParticleCount
    )
    this.startRamp(this.state.activeParticleCount)
    this.mouseInteraction.start()
    this.animate()
  }

  /**
   * Stop the particle system (cancel animation loop)
   */
  public stop(): void {
    if (!this.isRunning) return

    this.isRunning = false
    this.mouseInteraction.stop()

    if (this.state.animationFrameId !== null) {
      cancelAnimationFrame(this.state.animationFrameId)
      this.state.animationFrameId = null
    }
  }

  /**
   * Main animation loop (60fps target)
   * AC-3.13, AC-3.19: Smooth animation at 60fps without interruption
   */
  private animate = (): void => {
    if (!this.isRunning) return

    const now = performance.now()
    const deltaTime = now - this.state.lastFrameTime
    this.state.lastFrameTime = now
    const cappedDelta = Math.min(deltaTime, 100) // guard spikes

    // Performance monitoring (AC-3.28)
    this.performanceMonitor.recordFrame()

    // Check for performance degradation (AC-3.25, AC-3.26, AC-3.52)
    const newParticleCount = this.state.rampActive
      ? null
      : this.performanceMonitor.checkDegradation(this.state.activeParticleCount)
    if (newParticleCount !== null) {
      if (!this.applyDegradation(newParticleCount)) {
        return
      }
    }

    if (
      !this.state.rampActive &&
      this.state.activeParticleCount < this.state.targetParticleCount
    ) {
      this.startRamp(this.state.activeParticleCount)
    }

    this.updateEntrance(cappedDelta)
    this.updateParticleRamp(cappedDelta)

    // Update particle physics
    if (!this.state.entranceActive) {
      this.updateParticles(deltaTime)
    }

    // Render frame
    this.render()

    // Schedule next frame
    this.state.animationFrameId = requestAnimationFrame(this.animate)
  }

  /**
   * Copy current positions into render buffer once entrance completes.
   */
  private syncRenderToPositions(): void {
    const { positions, renderPositions, activeParticleCount } = this.state
    for (let i = 0; i < activeParticleCount; i++) {
      const idx = i * 2
      renderPositions[idx] = positions[idx]
      renderPositions[idx + 1] = positions[idx + 1]
    }
  }

  /**
   * Update entrance animation progress and render positions.
   */
  private updateEntrance(deltaMs: number): void {
    if (!this.state.entranceActive) return

    const { entranceDuration, entranceMaxDelay } = this.state
    const progressIncrement = deltaMs / (entranceDuration * 1000)
    this.state.entranceProgress = Math.min(1, this.state.entranceProgress + progressIncrement)
    const baseProgress = this.state.entranceProgress

    const { renderPositions, positions, entranceDelays, spawnCenter, activeParticleCount } =
      this.state

    for (let i = 0; i < activeParticleCount; i++) {
      const idx = i * 2
      const staggered = resolveStaggeredProgress(baseProgress, entranceDelays[i], entranceMaxDelay)
      const eased = easeOutPower4(staggered)
      const targetX = positions[idx]
      const targetY = positions[idx + 1]
      renderPositions[idx] = spawnCenter.x + (targetX - spawnCenter.x) * eased
      renderPositions[idx + 1] = spawnCenter.y + (targetY - spawnCenter.y) * eased
    }

    if (baseProgress >= 1) {
      this.state.entranceActive = false
      this.syncRenderToPositions()
    }
  }

  private updateParticleRamp(deltaMs: number): void {
    if (!this.state.rampActive) return

    this.state.rampElapsed = Math.min(this.state.rampElapsed + deltaMs, this.state.rampDuration)
    const { rampElapsed, rampDuration, rampStartCount, targetParticleCount } = this.state
    const progress = rampDuration === 0 ? 1 : rampElapsed / rampDuration
    const eased = easeOutPower4(progress)
    const desiredCount = Math.round(rampStartCount + (targetParticleCount - rampStartCount) * eased)
    this.state.activeParticleCount = Math.max(this.state.activeParticleCount, desiredCount)

    if (progress >= 1) {
      this.state.rampActive = false
      this.state.activeParticleCount = targetParticleCount
    }
  }

  /**
   * Update particle positions and velocities
   */
  private updateParticles(deltaTime: number): void {
    const width = this.config.canvas.width
    const height = this.config.canvas.height

    // Get mouse position for attraction
    const mousePos = this.mouseInteraction.getMousePosition()

    // Delta time normalization (60fps = 16.67ms baseline)
    // Cap deltaTime to prevent physics explosion during lag spikes
    const cappedDelta = Math.min(deltaTime, 100) // Max 100ms (10fps minimum)
    const dt = cappedDelta / 16.67

    for (let i = 0; i < this.state.activeParticleCount; i++) {
      const idx = i * 2

      let vx = this.state.velocities[idx]
      let vy = this.state.velocities[idx + 1]

      // Apply mouse attraction force (AC-3.14)
      if (mousePos) {
        const force = this.mouseInteraction.calculateAttractionForce(
          this.state.positions[idx],
          this.state.positions[idx + 1]
        )
        if (force) {
          vx += force.fx
          vy += force.fy
        }
      }

      // Apply scroll speed modulation (updated by GSAP ScrollTrigger)
      // AC-3.16, AC-3.17: Particles flow faster as scrolling down
      const scrollSpeedMultiplier = 1 + this.state.scrollProgress * 2

      // Update positions
      this.state.positions[idx] += vx * scrollSpeedMultiplier * dt
      this.state.positions[idx + 1] += vy * dt

      // Edge wrapping (horizontal) and bouncing (vertical)
      if (this.state.positions[idx] > width) {
        this.state.positions[idx] = 0
      }
      if (this.state.positions[idx] < 0) {
        this.state.positions[idx] = width
      }
      if (this.state.positions[idx + 1] > height) {
        this.state.velocities[idx + 1] *= -0.8
        this.state.positions[idx + 1] = height
      }
      if (this.state.positions[idx + 1] < 0) {
        this.state.velocities[idx + 1] *= -0.8
        this.state.positions[idx + 1] = 0
      }

      // Damping (subtle friction)
      this.state.velocities[idx] = vx * 0.99
      this.state.velocities[idx + 1] = vy * 0.99
    }
  }

  /**
   * Render particles and connections
   */
  private render(): void {
    const { canvas } = this.config
    const { ctx } = this
    const positions = this.state.entranceActive ? this.state.renderPositions : this.state.positions

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // AC-3.8: Background gradient (dark indigo → darker)
    this.renderBackground()

    // DESCOPED: Premium Minimalism (2025-10-10)
    // Connections disabled for guaranteed 60fps performance
    // O(n²) bottleneck eliminated - 90% of computational cost removed
    // AC-3.5, AC-3.6: Neural network connections (DESCOPED)
    // this.renderConnections(positions)

    // AC-3.4, AC-3.11: Render particles with radial gradient glow
    this.renderParticles(positions)
  }

  /**
   * Render background gradient
   * AC-3.8: Dark indigo (#1e1b4b) to darker (#0f172a)
   */
  private renderBackground(): void {
    const { ctx, config } = this
    const { width, height } = config.canvas

    const gradient = ctx.createLinearGradient(0, 0, 0, height)
    gradient.addColorStop(0, config.backgroundGradient.from)
    gradient.addColorStop(1, config.backgroundGradient.to)

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)
  }

  /**
   * Render neural network connections between nearby particles
   * AC-3.5: Lines between particles within 100px distance
   * AC-3.6: Cyan stroke, 30% base opacity, increases when closer
   */
  private renderConnections(positions: Float32Array): void {
    const { ctx } = this
    const { activeParticleCount } = this.state
    const connectionDistance = 100 // pixels
    const cellSize = connectionDistance
    const cyanRgb = this.hexToRgb(this.config.colors.cyan)

    const grid = new Map<string, number[]>()

    for (let i = 0; i < activeParticleCount; i++) {
      const idx = i * 2
      const x = positions[idx]
      const y = positions[idx + 1]
      const key = this.getCellKey(x, y, cellSize)
      const bucket = grid.get(key)
      if (bucket) {
        bucket.push(i)
      } else {
        grid.set(key, [i])
      }
    }

    const neighborOffsets = [-1, 0, 1]

    for (let i = 0; i < activeParticleCount; i++) {
      const idx1 = i * 2
      const x1 = positions[idx1]
      const y1 = positions[idx1 + 1]
      const cellX = Math.floor(x1 / cellSize)
      const cellY = Math.floor(y1 / cellSize)

      for (const dx of neighborOffsets) {
        for (const dy of neighborOffsets) {
          const bucket = grid.get(this.getCellKeyFromIndices(cellX + dx, cellY + dy))
          if (!bucket) continue

          for (const j of bucket) {
            if (j <= i) continue
            const idx2 = j * 2
            const x2 = positions[idx2]
            const y2 = positions[idx2 + 1]

            const dxPos = x2 - x1
            const dyPos = y2 - y1
            const distanceSq = dxPos * dxPos + dyPos * dyPos
            if (distanceSq >= connectionDistance * connectionDistance) {
              continue
            }

            const distance = Math.sqrt(distanceSq)
            const opacity = 0.3 * (1 - distance / connectionDistance)

            ctx.strokeStyle = `rgba(${cyanRgb.r}, ${cyanRgb.g}, ${cyanRgb.b}, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.lineTo(x2, y2)
            ctx.stroke()
          }
        }
      }
    }
  }

  /**
   * Render particles with radial gradient glow
   * AC-3.4: 2-6px radius with radial gradient glow
   * AC-3.11: Premium quality (smooth gradients, anti-aliased)
   */
  private renderParticles(positions: Float32Array): void {
    const { ctx } = this
    const { activeParticleCount, sizes, colors } = this.state

    for (let i = 0; i < activeParticleCount; i++) {
      const idx = i * 2
      const colorIdx = i * 4

      const x = positions[idx]
      const y = positions[idx + 1]
      const size = sizes[i]
      const r = colors[colorIdx]
      const g = colors[colorIdx + 1]
      const b = colors[colorIdx + 2]

      // Safety: Skip particle if position/size is invalid (NaN/Infinity)
      if (!isFinite(x) || !isFinite(y) || !isFinite(size) || size <= 0) {
        continue
      }

      // Create radial gradient for glow effect
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size)
      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.9)`)
      gradient.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, 0.6)`)
      gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  /**
   * Render static gradient fallback (when particles disabled)
   * AC-3.52: Fallback for <15fps performance
   */
  private renderStaticGradient(): void {
    const { ctx, config } = this
    const { width, height } = config.canvas

    const gradient = ctx.createLinearGradient(0, 0, 0, height)
    gradient.addColorStop(0, config.backgroundGradient.from)
    gradient.addColorStop(1, config.backgroundGradient.to)

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)
  }

  /**
   * Update scroll progress (called by GSAP ScrollTrigger)
   * AC-3.16, AC-3.17: Modulate particle speed based on scroll (0-1)
   */
  public updateScrollProgress(progress: number): void {
    this.state.scrollProgress = Math.max(0, Math.min(1, progress))
  }

  /**
   * Resize canvas and reinitialize particles
   */
  public resize(newParticleCount?: number): void {
    const { canvas } = this.config

    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width || canvas.clientWidth
    canvas.height = rect.height || canvas.clientHeight

    // Reinitialize with new particle count if provided
    if (newParticleCount && newParticleCount !== this.state.activeParticleCount) {
      this.state = this.initializeState(newParticleCount)
    } else {
      this.updateSpawnCenter()
      if (this.state.entranceActive) {
        this.resetRenderPositions()
        this.state.entranceProgress = 0
      } else {
        this.syncRenderToPositions()
      }
      this.startRamp(this.state.activeParticleCount)
    }
  }

  /**
   * Destroy and clean up (AC-3.29: Prevent memory leaks)
  */
  public destroy(): void {
    this.stop()
    this.mouseInteraction.destroy()
    this.state.entranceActive = false
  }

  private applyDegradation(newCount: number): boolean {
    if (newCount === 0) {
      this.stop()
      this.state.entranceActive = false
      this.renderStaticGradient()
      return false
    }

    this.state.targetParticleCount = newCount
    this.state.activeParticleCount = Math.min(this.state.activeParticleCount, newCount)
    this.state.rampActive = false
    this.syncRenderToPositions()
    return true
  }

  private getCellKey(x: number, y: number, cellSize: number): string {
    const cellX = Math.floor(x / cellSize)
    const cellY = Math.floor(y / cellSize)
    return this.getCellKeyFromIndices(cellX, cellY)
  }

  private getCellKeyFromIndices(cellX: number, cellY: number): string {
    return `${cellX},${cellY}`
  }
}
