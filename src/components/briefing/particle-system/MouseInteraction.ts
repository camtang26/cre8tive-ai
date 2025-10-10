/**
 * Mouse Interaction - Cursor tracking and particle attraction
 *
 * Epic 3 Story 3.1 - Module 3: MouseInteraction
 * Throttled mousemove tracking, canvas coordinate conversion, attraction forces
 *
 * Target ACs: #14, #15, #33
 *
 * @see docs/tech-spec-epic-3.md - Module 3: MouseInteraction
 */

import type { MouseConfig } from './types'

/**
 * Native throttle implementation (AC-3.15: 60fps throttling)
 * More reliable than GSAP utils which may have import issues
 */
function throttle<T extends (...args: unknown[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastExecTime = 0

  return function(this: unknown, ...args: Parameters<T>) {
    const currentTime = Date.now()

    if (currentTime - lastExecTime >= delay) {
      func.apply(this, args)
      lastExecTime = currentTime
    }
  }
}

export class MouseInteraction {
  private config: MouseConfig
  private canvas: HTMLCanvasElement
  private mousePosition: { x: number; y: number } | null = null
  private throttledUpdate: ((event: MouseEvent) => void) | null = null
  private isAttached: boolean = false
  private handleMouseLeaveListener: ((event: MouseEvent) => void) | null = null

  constructor(canvas: HTMLCanvasElement, config: MouseConfig) {
    this.canvas = canvas
    this.config = config
  }

  /**
   * Start mouse interaction (attach listeners)
   * AC-3.33: Disabled on mobile/touch devices
   */
  public start(): void {
    if (!this.config.enabled || this.isAttached) return

    // AC-3.15: Throttle mousemove to 60fps max (16ms interval)
    this.throttledUpdate = throttle(
      this.handleMouseMove.bind(this),
      this.config.throttleMs
    )

    this.canvas.addEventListener('mousemove', this.throttledUpdate as EventListener)
    this.handleMouseLeaveListener = this.handleMouseLeave.bind(this)
    this.canvas.addEventListener('mouseleave', this.handleMouseLeaveListener)

    this.isAttached = true
  }

  /**
   * Stop mouse interaction (detach listeners)
   */
  public stop(): void {
    if (!this.isAttached) return

    if (this.throttledUpdate) {
      this.canvas.removeEventListener('mousemove', this.throttledUpdate as EventListener)
    }
    if (this.handleMouseLeaveListener) {
      this.canvas.removeEventListener('mouseleave', this.handleMouseLeaveListener)
      this.handleMouseLeaveListener = null
    }

    this.mousePosition = null
    this.isAttached = false
  }

  /**
   * Get current mouse position (canvas coordinates)
   * Returns null if mouse is not over canvas
   */
  public getMousePosition(): { x: number; y: number } | null {
    return this.mousePosition
  }

  /**
   * Handle mousemove event - convert to canvas coordinates
   */
  private handleMouseMove(event: MouseEvent): void {
    const rect = this.canvas.getBoundingClientRect()

    // Convert global coordinates to canvas-relative coordinates
    this.mousePosition = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    }
  }

  /**
   * Handle mouseleave event - clear mouse position
   */
  private handleMouseLeave(): void {
    this.mousePosition = null
  }

  /**
   * Calculate attraction force for a particle
   * AC-3.14: 150px attraction radius, inverse square law
   *
   * @param particleX Particle x position
   * @param particleY Particle y position
   * @returns Force vector { fx, fy } or null if no attraction
   */
  public calculateAttractionForce(
    particleX: number,
    particleY: number
  ): { fx: number; fy: number } | null {
    if (!this.mousePosition) return null

    const dx = this.mousePosition.x - particleX
    const dy = this.mousePosition.y - particleY
    const distance = Math.sqrt(dx * dx + dy * dy)

    // No attraction beyond radius
    if (distance > this.config.attractionRadius) return null

    // Inverse square law for natural attraction
    // Normalize force to prevent extreme values at very close distances
    const minDistance = 10 // Prevent division by very small numbers
    const safeDistance = Math.max(distance, minDistance)
    const forceMagnitude = (this.config.attractionRadius - distance) / (safeDistance * safeDistance)

    // Scale force for visible effect (tuned for smooth motion)
    const forceScale = 0.5

    return {
      fx: (dx / distance) * forceMagnitude * forceScale,
      fy: (dy / distance) * forceMagnitude * forceScale,
    }
  }

  /**
   * Destroy and clean up
   */
  public destroy(): void {
    this.stop()
    this.throttledUpdate = null
    this.handleMouseLeaveListener = null
  }
}
