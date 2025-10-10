export const ENTRANCE_DURATION_SECONDS = 1.6
export const ENTRANCE_MAX_DELAY = 0.6

/**
 * Clamp number between 0 and 1.
 */
function clamp01(value: number): number {
  if (value <= 0) return 0
  if (value >= 1) return 1
  return value
}

/**
 * Power4 ease-out curve (matches GSAP power4.out).
 */
export function easeOutPower4(progress: number): number {
  const clamped = clamp01(progress)
  return 1 - Math.pow(1 - clamped, 4)
}

/**
 * Resolve staggered progress for a particle given a base timeline progress.
 */
export function resolveStaggeredProgress(
  baseProgress: number,
  delayFactor: number,
  maxDelay: number
): number {
  const clampedDelay = clamp01(delayFactor)
  const clampedMaxDelay = clamp01(maxDelay)
  const effectiveDelay = clampedDelay * clampedMaxDelay
  const denominator = Math.max(1 - clampedMaxDelay, 1e-6)
  const normalized = (baseProgress - effectiveDelay) / denominator
  return clamp01(normalized)
}
