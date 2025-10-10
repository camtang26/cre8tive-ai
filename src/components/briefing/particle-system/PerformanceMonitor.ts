/**
 * Performance Monitor - FPS tracking and graceful degradation
 *
 * Epic 3 Story 3.1 - Module 4: PerformanceMonitor
 * Tracks frame rate, detects performance degradation, adjusts particle count
 *
 * Target ACs: #20, #21, #25, #26, #27, #28, #29
 *
 * @see docs/tech-spec-epic-3.md - Module 4: PerformanceMonitor
 */

import type { PerformanceConfig } from './types'

export class PerformanceMonitor {
  private config: PerformanceConfig
  private frameTimes: number[] = []
  private lastFrameTime: number = 0
  private currentFPS: number = 60
  private lowFPSFrameCount: number = 0
  private degradationLevel: number = 0 // 0 = normal, 1 = first degradation, 2 = second degradation, 3 = fallback

  constructor(config: PerformanceConfig) {
    this.config = config
    this.lastFrameTime = performance.now()
  }

  /**
   * Record a frame and update FPS calculation
   * Call this once per animation frame
   */
  public recordFrame(): void {
    if (!this.config.enabled) return

    const now = performance.now()
    const deltaTime = now - this.lastFrameTime
    this.lastFrameTime = now

    // Store frame time for rolling average
    this.frameTimes.push(deltaTime)
    if (this.frameTimes.length > this.config.sampleSize) {
      this.frameTimes.shift()
    }

    // Calculate current FPS from average frame time
    const avgFrameTime = this.frameTimes.reduce((sum, time) => sum + time, 0) / this.frameTimes.length
    this.currentFPS = 1000 / avgFrameTime
  }

  /**
   * Get current FPS (±2fps accuracy per AC-3.28)
   */
  public getCurrentFPS(): number {
    return Math.round(this.currentFPS)
  }

  /**
   * Check if degradation is needed and return new particle count
   * Returns null if no degradation needed, otherwise returns new count
   *
   * Degradation levels:
   * - Level 0: 5000 particles (normal)
   * - Level 1: 2000 particles (<30fps for 5 frames)
   * - Level 2: 1000 particles (<20fps for 5 frames)
   * - Level 3: 0 particles (static fallback, <15fps for 10 frames)
   */
  public checkDegradation(currentParticleCount: number): number | null {
    if (!this.config.enabled) return null
    if (this.frameTimes.length < this.config.sampleSize) return null

    const fps = this.getCurrentFPS()
    const { degradation } = this.config

    // Track consecutive low FPS frames
    if (fps < degradation.threshold1) {
      this.lowFPSFrameCount++
    } else {
      this.lowFPSFrameCount = 0
      return null
    }

    // Level 3: Fallback to static gradient (<15fps for 10 frames)
    if (
      fps < degradation.fallbackThreshold &&
      this.lowFPSFrameCount >= degradation.fallbackFrameCount &&
      this.degradationLevel < 3
    ) {
      this.degradationLevel = 3
      this.logDegradation(0, fps, 'static gradient fallback')
      return 0
    }

    // Level 2: Second degradation (<20fps for 5 frames)
    if (
      fps < degradation.threshold2 &&
      this.lowFPSFrameCount >= degradation.frameCount2 &&
      this.degradationLevel < 2
    ) {
      this.degradationLevel = 2
      const newCount = 1000
      this.logDegradation(newCount, fps, 'second degradation')
      return newCount
    }

    // Level 1: First degradation (<30fps for 5 frames)
    if (
      fps < degradation.threshold1 &&
      this.lowFPSFrameCount >= degradation.frameCount1 &&
      this.degradationLevel < 1
    ) {
      this.degradationLevel = 1
      const newCount = 2000
      this.logDegradation(newCount, fps, 'first degradation')
      return newCount
    }

    return null
  }

  /**
   * Log degradation warning in dev mode (AC-3.27)
   */
  private logDegradation(newCount: number, fps: number, reason: string): void {
    // Only log in development mode
    if (import.meta.env.DEV) {
      console.warn(
        `[ParticleHero] Performance degradation: ${reason}. FPS: ${fps.toFixed(1)}, reducing particles to ${newCount}`
      )
    }
  }

  /**
   * Reset degradation state (useful for testing)
   */
  public reset(): void {
    this.frameTimes = []
    this.lastFrameTime = performance.now()
    this.currentFPS = 60
    this.lowFPSFrameCount = 0
    this.degradationLevel = 0
  }

  /**
   * Get current degradation level (for debugging)
   */
  public getDegradationLevel(): number {
    return this.degradationLevel
  }
}
