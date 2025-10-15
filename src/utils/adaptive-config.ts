/**
 * Adaptive Configuration System - Quality Tier Mappings
 *
 * Provides 4-tier adaptive animation and particle configurations for Story 1.14.
 * Configurations are based on device capabilities detected by performance-adapter.ts.
 *
 * Configuration Tiers:
 * - HIGH: Full quality (discrete GPU, 8+ cores, 8+ GB RAM)
 * - MEDIUM: Reduced quality (integrated GPU, 4+ cores, 4+ GB RAM)
 * - LOW: Minimal quality (software renderer, <4 cores, <4 GB RAM)
 * - REDUCED_MOTION: Instant transitions (accessibility compliance)
 *
 * Research References:
 * - GSAP timeline.timeScale(): Preserves choreography while adjusting speed
 * - Canvas ctx.filter: GPU-accelerated blur (requires WebGL context)
 * - ParticleCore optimization: Object pooling with dynamic pool size
 */

import type { DeviceCapabilities, QualityTier } from './performance-adapter';

export interface AdaptiveAnimationConfig {
  // Particle System Configuration
  particleCount: number; // Max particles in pool (0, 75, or 150)
  enableBlur: boolean; // Canvas ctx.filter blur effect
  enableShadows: boolean; // Canvas ctx.shadowBlur effect
  enableParticles: boolean; // Master switch for entire particle system

  // GSAP Animation Configuration
  timeScaleMultiplier: number; // Timeline speed (1.0 = normal, 1.5 = 50% faster)
  ease: string; // GSAP easing function (power3.out, power2.out, linear)

  // Metadata
  tier: QualityTier;
  description: string;
}

/**
 * HIGH TIER Configuration (score ≥7)
 *
 * Target Devices: MacBook Pro M1+, Desktop RTX 3070+, high-end laptops
 * Performance Target: Sustained 60fps with full particle effects
 *
 * Particle Settings:
 * - 150 particles: Full visual richness, object pooling prevents GC pressure
 * - Blur enabled: ctx.filter = 'blur(2px)' for soft glow effect
 * - Shadows enabled: ctx.shadowBlur = 10 for depth perception
 *
 * Animation Settings:
 * - timeScale 1.0: Normal speed, preserves intended choreography
 * - power3.out: Complex easing (cubic bezier with smooth deceleration)
 *
 * Reason: High-end hardware can sustain 60fps with full GPU acceleration.
 * Canvas blur/shadow filters are GPU-optimized on discrete GPUs.
 */
const HIGH_TIER_CONFIG: AdaptiveAnimationConfig = {
  particleCount: 10000,
  enableBlur: true,
  enableShadows: true,
  enableParticles: true,
  timeScaleMultiplier: 1.0,
  ease: 'power3.out',
  tier: 'high',
  description: 'Full quality - 10000 particles, GPU effects, complex easing'
};

/**
 * MEDIUM TIER Configuration (score ≥4)
 *
 * Target Devices: MacBook Air M1, Dell XPS 13, mid-range laptops/tablets
 * Performance Target: Sustained 60fps with reduced particle count
 *
 * Particle Settings:
 * - 75 particles: 50% reduction, maintains visual presence without GPU strain
 * - Blur disabled: Eliminate expensive filter operation (saves ~5-10ms/frame)
 * - Shadows disabled: Eliminate expensive shadow rendering
 *
 * Animation Settings:
 * - timeScale 1.2: 20% faster, reduces scroll distance perception
 * - power2.out: Simpler easing (quadratic bezier, less CPU computation)
 *
 * Reason: Integrated GPUs struggle with blur filters. Faster animations reduce
 * total frame count during scroll sequence, improving perceived performance.
 */
const MEDIUM_TIER_CONFIG: AdaptiveAnimationConfig = {
  particleCount: 7500,
  enableBlur: false,
  enableShadows: false,
  enableParticles: true,
  timeScaleMultiplier: 1.2,
  ease: 'power2.out',
  tier: 'medium',
  description: 'Reduced quality - 7500 particles, no effects, simpler easing'
};

/**
 * LOW TIER Configuration (score <4)
 *
 * Target Devices: iPad Air 2019, budget Chromebooks, old laptops
 * Performance Target: Minimum 30fps with zero particle overhead
 *
 * Particle Settings:
 * - 0 particles: Completely disable particle system (no Canvas rendering)
 * - Blur disabled: N/A (no Canvas)
 * - Shadows disabled: N/A (no Canvas)
 * - enableParticles false: Skip Canvas initialization entirely
 *
 * Animation Settings:
 * - timeScale 1.5: 50% faster, minimize animation duration to reduce jank
 * - linear: Simplest easing (no bezier computation, straight interpolation)
 *
 * Reason: Software renderers can't sustain Canvas particle systems. Linear
 * easing eliminates CPU overhead from bezier calculations. Faster animations
 * reduce total time spent in animation loops.
 */
const LOW_TIER_CONFIG: AdaptiveAnimationConfig = {
  particleCount: 0,
  enableBlur: false,
  enableShadows: false,
  enableParticles: false,
  timeScaleMultiplier: 1.5,
  ease: 'linear',
  tier: 'low',
  description: 'Minimal quality - no particles, fastest rendering'
};

/**
 * REDUCED MOTION Configuration (prefers-reduced-motion: reduce)
 *
 * Target Users: Vestibular disorder users, accessibility compliance
 * Performance Target: Instant transitions (WCAG 2.1 Level AAA compliance)
 *
 * Particle Settings:
 * - 0 particles: No particle system (motion can trigger vestibular issues)
 * - enableParticles false: Complete disable
 *
 * Animation Settings:
 * - timeScale 100: Effectively instant (animations complete in 10ms)
 * - none: No easing (instant value changes)
 *
 * Reason: WCAG 2.1 requires respecting prefers-reduced-motion for accessibility.
 * Users with vestibular disorders can experience nausea from parallax/particle effects.
 * Instant transitions provide same content without motion-based interaction.
 *
 * Reference: https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html
 */
const REDUCED_MOTION_CONFIG: AdaptiveAnimationConfig = {
  particleCount: 0,
  enableBlur: false,
  enableShadows: false,
  enableParticles: false,
  timeScaleMultiplier: 100, // Instant transitions
  ease: 'none',
  tier: 'reduced-motion',
  description: 'Accessibility mode - instant transitions, no animations'
};

/**
 * Get adaptive configuration based on device capabilities
 *
 * Configuration Selection Logic:
 * 1. Check prefers-reduced-motion (highest priority, accessibility)
 * 2. Check device tier from performance-adapter.ts
 * 3. Return corresponding configuration object
 *
 * CRITICAL: This function should be called ONCE on component mount, then
 * stored in state. The configuration can be dynamically updated by
 * useAdaptivePerformance hook if FPS monitoring detects performance drops.
 *
 * @param capabilities - Device capabilities from detectDeviceCapabilities()
 * @returns Adaptive animation configuration for the detected tier
 */
export function getAdaptiveConfig(capabilities: DeviceCapabilities): AdaptiveAnimationConfig {
  // Accessibility takes highest priority
  if (capabilities.reducedMotion || capabilities.tier === 'reduced-motion') {
    return REDUCED_MOTION_CONFIG;
  }

  // Select configuration based on performance tier
  switch (capabilities.tier) {
    case 'high':
      return HIGH_TIER_CONFIG;
    case 'medium':
      return MEDIUM_TIER_CONFIG;
    case 'low':
      return LOW_TIER_CONFIG;
    default:
      // Fallback: Conservative default (medium tier)
      // Reason: If tier detection fails, prefer functional over broken
      console.warn('[AdaptiveConfig] Unknown tier, defaulting to medium config');
      return MEDIUM_TIER_CONFIG;
  }
}

/**
 * Get configuration by tier name (for dynamic quality changes)
 *
 * Use Case: useAdaptivePerformance hook downgrades tier when FPS drops.
 * This function allows retrieving a specific tier config without re-detecting hardware.
 *
 * @param tier - Quality tier name
 * @returns Configuration for the specified tier
 */
export function getConfigByTier(tier: QualityTier): AdaptiveAnimationConfig {
  switch (tier) {
    case 'high':
      return HIGH_TIER_CONFIG;
    case 'medium':
      return MEDIUM_TIER_CONFIG;
    case 'low':
      return LOW_TIER_CONFIG;
    case 'reduced-motion':
      return REDUCED_MOTION_CONFIG;
    default:
      console.warn('[AdaptiveConfig] Unknown tier in getConfigByTier, defaulting to medium');
      return MEDIUM_TIER_CONFIG;
  }
}

/**
 * Validate if tier downgrade is possible
 *
 * Use Case: useAdaptivePerformance hook checks if downgrade is available
 * before attempting to reduce quality tier.
 *
 * Downgrade Path:
 * - high → medium → low (stop at low, can't downgrade further)
 * - reduced-motion: No downgrades (accessibility mode locked)
 *
 * @param currentTier - Current quality tier
 * @returns true if downgrade is possible, false otherwise
 */
export function canDowngradeTier(currentTier: QualityTier): boolean {
  // Can't downgrade from reduced-motion (accessibility mode)
  if (currentTier === 'reduced-motion') return false;

  // Can't downgrade from low (already minimum quality)
  if (currentTier === 'low') return false;

  return true;
}

/**
 * Get next lower tier in quality sequence
 *
 * Use Case: useAdaptivePerformance hook downgrades tier on sustained low FPS.
 *
 * @param currentTier - Current quality tier
 * @returns Next lower tier, or current tier if already at minimum
 */
export function getDowngradedTier(currentTier: QualityTier): QualityTier {
  if (!canDowngradeTier(currentTier)) return currentTier;

  if (currentTier === 'high') return 'medium';
  if (currentTier === 'medium') return 'low';

  return currentTier; // Fallback: no change
}

/**
 * Validate if tier upgrade is possible
 *
 * Use Case: useAdaptivePerformance hook checks if upgrade is available
 * when FPS recovers above threshold.
 *
 * Upgrade Path:
 * - low → medium → high (stop at initial detected tier)
 * - reduced-motion: No upgrades (accessibility mode locked)
 *
 * @param currentTier - Current quality tier
 * @param initialTier - Original tier detected on mount
 * @returns true if upgrade is possible, false otherwise
 */
export function canUpgradeTier(currentTier: QualityTier, initialTier: QualityTier): boolean {
  // Can't upgrade from reduced-motion (accessibility mode)
  if (currentTier === 'reduced-motion') return false;

  // Can't upgrade beyond initial detected tier (hardware limit)
  if (currentTier === initialTier) return false;

  return true;
}

/**
 * Get next higher tier in quality sequence
 *
 * Use Case: useAdaptivePerformance hook upgrades tier when FPS recovers.
 *
 * @param currentTier - Current quality tier
 * @param initialTier - Original tier detected on mount (upgrade ceiling)
 * @returns Next higher tier, or current tier if already at maximum
 */
export function getUpgradedTier(currentTier: QualityTier, initialTier: QualityTier): QualityTier {
  if (!canUpgradeTier(currentTier, initialTier)) return currentTier;

  if (currentTier === 'low') return 'medium';
  if (currentTier === 'medium' && initialTier === 'high') return 'high';

  return currentTier; // Fallback: no change
}
