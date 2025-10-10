import type { DeviceCapabilities } from './types'

// DESCOPED: Premium Minimalism (2025-10-10)
// Reduced from 5K/2K/1K to 300/200/150 for guaranteed 60fps
// Production build test showed static fallback with full counts
// See: docs/problem-solution-2025-10-10.md
export const BASE_PARTICLE_COUNTS: Record<DeviceCapabilities['deviceType'], number> = {
  mobile: 150,   // was 1000
  tablet: 200,   // was 2000
  desktop: 300,  // was 5000
}

/**
 * Resolve a device type based on viewport width.
 */
export function resolveDeviceType(width: number): DeviceCapabilities['deviceType'] {
  if (width < 768) return 'mobile'
  if (width < 1024) return 'tablet'
  return 'desktop'
}

/**
 * Parse env-provided particle count scale. Allows reductions but never increases.
 */
export function parseParticleScale(raw: string | undefined): number {
  if (!raw) return 1
  const numeric = Number(raw)
  if (!Number.isFinite(numeric) || numeric <= 0) return 1
  return Math.min(numeric, 1)
}

/**
 * Calculate the responsive particle count for a device type.
 */
export function resolveParticleCount(
  deviceType: DeviceCapabilities['deviceType'],
  scale = 1
): number {
  const base = BASE_PARTICLE_COUNTS[deviceType]
  const clampedScale = Math.min(Math.max(scale, 0.05), 1)
  return Math.max(200, Math.round(base * clampedScale))
}

/**
 * Compute both device type and particle count for a given width and optional scale.
 */
export function computeDeviceCapabilities(width: number, scale = 1): Pick<
  DeviceCapabilities,
  'deviceType' | 'particleCount'
> {
  const deviceType = resolveDeviceType(width)
  const particleCount = resolveParticleCount(deviceType, scale)
  return { deviceType, particleCount }
}
