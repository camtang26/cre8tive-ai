/**
 * Adaptive Performance Hook - Real-time Quality Tier Management
 *
 * Monitors FPS and automatically adjusts quality tier (high → medium → low)
 * when sustained performance drops are detected. Implements hysteresis and
 * debouncing to prevent oscillation and unnecessary tier changes.
 *
 * Key Features:
 * - Hysteresis: Downgrade at <48fps, upgrade at >52fps (4fps buffer)
 * - Debouncing: Minimum 2-second delay between tier changes
 * - Memory-safe: useRef for high-frequency FPS reads, setState only on tier change
 * - Respects initial tier ceiling: Can't upgrade beyond hardware capability
 *
 * Research References:
 * - Hysteresis pattern: Prevents oscillation when FPS hovers near threshold
 * - Debouncing: Filters transient FPS drops (GC pauses, tab switching)
 * - EMA smoothing from usePerformance.ts: Already filters single-frame spikes
 *
 * Usage Pattern:
 * ```typescript
 * const { qualityTier, config } = useAdaptivePerformance(initialTier);
 *
 * // qualityTier updates only when sustained FPS drops/recovers
 * // config automatically updates to match new tier
 * ```
 */

import { useEffect, useState, useRef } from 'react';
import { usePerformanceMonitor } from './usePerformance';
import { getConfigByTier, canDowngradeTier, getDowngradedTier, canUpgradeTier, getUpgradedTier } from '@/utils/adaptive-config';
import type { QualityTier } from '@/utils/performance-adapter';
import type { AdaptiveAnimationConfig } from '@/utils/adaptive-config';

/**
 * FPS Thresholds with Hysteresis
 *
 * Hysteresis Pattern Explanation:
 * - Downgrade threshold: 48fps (below 80% of 60fps target)
 * - Upgrade threshold: 52fps (above 85% of 60fps target)
 * - Buffer zone: 48-52fps (4fps hysteresis gap)
 *
 * Why Hysteresis:
 * Without hysteresis, FPS hovering at 50fps would cause:
 * - Frame 1: 49fps → downgrade to medium
 * - Frame 2: 51fps → upgrade to high
 * - Frame 3: 49fps → downgrade to medium (oscillation!)
 *
 * With hysteresis:
 * - At 49fps: Downgrade to medium (crosses downgrade threshold)
 * - At 51fps: Stay medium (below upgrade threshold)
 * - Must reach 53fps to upgrade back (stable behavior)
 *
 * Reason: Prevents tier oscillation, provides stable user experience.
 * Research: Standard control systems pattern (thermostats, voltage regulators).
 */
const FPS_DOWNGRADE_THRESHOLD = 48;
const FPS_UPGRADE_THRESHOLD = 52;
const TIER_CHANGE_DEBOUNCE_MS = 2000; // 2 seconds minimum between tier changes

/**
 * useAdaptivePerformance Hook
 *
 * Provides real-time quality tier management based on FPS monitoring.
 * Automatically downgrades/upgrades tier in response to performance changes.
 *
 * Implementation Details:
 * - Monitors FPS via usePerformanceMonitor hook
 * - Checks thresholds every frame (via RAF callback)
 * - Updates qualityTier state only when tier changes (not every frame)
 * - Respects debounce delay (2s minimum between changes)
 * - Logs tier changes to console (dev mode only)
 *
 * Memory Safety:
 * - lastChangeTime stored in useRef (no re-render on update)
 * - initialTier stored in useRef (persists across renders)
 * - FPS checking in RAF callback (high-frequency, no state updates)
 * - setState called only on tier change (~2-3 times per session)
 *
 * @param initialTier - Initial quality tier from device detection
 * @returns Object with current qualityTier and corresponding config
 */
export function useAdaptivePerformance(initialTier: QualityTier) {
  const [qualityTier, setQualityTier] = useState<QualityTier>(initialTier);
  const initialTierRef = useRef<QualityTier>(initialTier);
  const lastChangeTime = useRef<number>(0);

  const { currentFPSRef, startMonitoring, stopMonitoring } = usePerformanceMonitor();

  useEffect(() => {
    // Don't start monitoring for reduced-motion tier (accessibility mode locked)
    if (initialTier === 'reduced-motion') {
      return;
    }

    // Start FPS monitoring with tier adjustment logic
    startMonitoring((smoothedFPS) => {
      const now = performance.now();
      const timeSinceLastChange = now - lastChangeTime.current;

      // Debounce: Ignore tier changes within 2 seconds of last change
      // Reason: Prevents rapid oscillation, allows new tier to stabilize
      if (timeSinceLastChange < TIER_CHANGE_DEBOUNCE_MS) {
        return;
      }

      // Check for downgrade condition (sustained low FPS)
      if (smoothedFPS < FPS_DOWNGRADE_THRESHOLD) {
        setQualityTier((currentTier) => {
          // Verify downgrade is possible (not already at low tier)
          if (!canDowngradeTier(currentTier)) {
            return currentTier; // No change
          }

          const newTier = getDowngradedTier(currentTier);

          // Log tier change (dev mode only)
          if (import.meta.env.DEV && newTier !== currentTier) {
            console.warn(
              `[AdaptivePerformance] Performance drop detected (${smoothedFPS.toFixed(1)}fps < ${FPS_DOWNGRADE_THRESHOLD}fps)`,
              `\nDowngrading: ${currentTier} → ${newTier}`
            );
          }

          // Update last change time
          lastChangeTime.current = now;

          return newTier;
        });
      }

      // Check for upgrade condition (sustained high FPS)
      else if (smoothedFPS > FPS_UPGRADE_THRESHOLD) {
        setQualityTier((currentTier) => {
          // Verify upgrade is possible (not already at initial/max tier)
          if (!canUpgradeTier(currentTier, initialTierRef.current)) {
            return currentTier; // No change
          }

          const newTier = getUpgradedTier(currentTier, initialTierRef.current);

          // Log tier change (dev mode only)
          if (import.meta.env.DEV && newTier !== currentTier) {
            console.log(
              `[AdaptivePerformance] Performance recovered (${smoothedFPS.toFixed(1)}fps > ${FPS_UPGRADE_THRESHOLD}fps)`,
              `\nUpgrading: ${currentTier} → ${newTier}`
            );
          }

          // Update last change time
          lastChangeTime.current = now;

          return newTier;
        });
      }

      // Else: FPS in buffer zone (48-52fps), no action
      // Reason: Hysteresis pattern prevents oscillation
    });

    // Cleanup on unmount
    return () => {
      stopMonitoring();
    };
  }, [initialTier, startMonitoring, stopMonitoring]);

  // Get current config for the quality tier
  const config = getConfigByTier(qualityTier);

  return {
    qualityTier,
    config,
    currentFPS: currentFPSRef.current // Exposed for debugging/metrics
  };
}

/**
 * Simple Adaptive Hook (No Automatic Tier Changes)
 *
 * Provides FPS monitoring without automatic tier changes. Useful for
 * components that want to observe FPS but manually control quality tier.
 *
 * Use Case: Debugging, analytics, manual tier control UI
 *
 * @param initialTier - Initial quality tier
 * @returns Object with qualityTier (unchanging), config, and current FPS
 */
export function useAdaptivePerformancePassive(initialTier: QualityTier) {
  const [qualityTier] = useState<QualityTier>(initialTier);
  const { currentFPSRef, startMonitoring, stopMonitoring } = usePerformanceMonitor();

  useEffect(() => {
    if (initialTier === 'reduced-motion') {
      return;
    }

    startMonitoring(() => {
      // Monitor FPS but don't change tier
      // Consumer can read currentFPS for analytics/debugging
    });

    return () => {
      stopMonitoring();
    };
  }, [initialTier, startMonitoring, stopMonitoring]);

  const config = getConfigByTier(qualityTier);

  return {
    qualityTier, // Never changes
    config,
    currentFPS: currentFPSRef.current
  };
}

/**
 * Manual Tier Control Hook
 *
 * Provides FPS monitoring with manual tier control. Exposes upgradeTier
 * and downgradeTier functions for external control (e.g., UI settings).
 *
 * Use Case: User-controlled quality settings with FPS monitoring
 *
 * @param initialTier - Initial quality tier
 * @returns Object with qualityTier, config, currentFPS, and manual control functions
 */
export function useAdaptivePerformanceManual(initialTier: QualityTier) {
  const [qualityTier, setQualityTier] = useState<QualityTier>(initialTier);
  const initialTierRef = useRef<QualityTier>(initialTier);
  const { currentFPSRef, startMonitoring, stopMonitoring } = usePerformanceMonitor();

  useEffect(() => {
    if (initialTier === 'reduced-motion') {
      return;
    }

    startMonitoring(() => {
      // Monitor FPS but don't auto-adjust tier
    });

    return () => {
      stopMonitoring();
    };
  }, [initialTier, startMonitoring, stopMonitoring]);

  /**
   * Manually downgrade quality tier
   */
  const downgradeTier = () => {
    setQualityTier((currentTier) => {
      if (!canDowngradeTier(currentTier)) {
        console.warn('[AdaptivePerformance] Cannot downgrade further (already at minimum)');
        return currentTier;
      }

      const newTier = getDowngradedTier(currentTier);

      if (import.meta.env.DEV) {
        console.log(`[AdaptivePerformance] Manual downgrade: ${currentTier} → ${newTier}`);
      }

      return newTier;
    });
  };

  /**
   * Manually upgrade quality tier
   */
  const upgradeTier = () => {
    setQualityTier((currentTier) => {
      if (!canUpgradeTier(currentTier, initialTierRef.current)) {
        console.warn('[AdaptivePerformance] Cannot upgrade further (at hardware ceiling)');
        return currentTier;
      }

      const newTier = getUpgradedTier(currentTier, initialTierRef.current);

      if (import.meta.env.DEV) {
        console.log(`[AdaptivePerformance] Manual upgrade: ${currentTier} → ${newTier}`);
      }

      return newTier;
    });
  };

  /**
   * Reset to initial detected tier
   */
  const resetTier = () => {
    if (import.meta.env.DEV) {
      console.log(`[AdaptivePerformance] Reset tier to initial: ${initialTierRef.current}`);
    }
    setQualityTier(initialTierRef.current);
  };

  const config = getConfigByTier(qualityTier);

  return {
    qualityTier,
    config,
    currentFPS: currentFPSRef.current,
    downgradeTier,
    upgradeTier,
    resetTier
  };
}
