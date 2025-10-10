/**
 * Epic 2 Hooks - Barrel Export
 *
 * Custom React hooks for magnetic pull, orchestration, and parallax
 */

// Premium interaction hooks
export { useMagneticPull } from './useMagneticPull'
export { useOrchestrator } from './useOrchestrator'
export { usePerformanceMonitor, useGlobalPerformanceFallback } from './usePerformanceMonitor'
// export { useParallaxDepth } from './useParallaxDepth'

// Re-export hook types from parent
export type {
  MagneticPullOptions,
  OrchestratorOptions,
  AnimationPhase,
  UseOrchestratorReturn,
} from '../types'
