/**
 * Epic 2 Premium Components - Main Barrel Export
 *
 * Reusable premium foundation for Stories 2.1-2.8:
 * - Organic shapes with SVG masking and morphing
 * - Magnetic pull cursor interactions
 * - GSAP orchestration utilities
 * - Signature easing curves and animation patterns
 *
 * @see src/components/epic2/PREMIUM_USAGE.md for usage examples
 * @see docs/tech-spec-epic-2.md for technical specifications
 */

// ===== SHAPES =====
// Export shape components (will be populated as implemented)
export * from './shapes'

// ===== HOOKS =====
// Export custom hooks (will be populated as implemented)
export * from './hooks'

// ===== ANIMATIONS =====
// Export animation utilities (will be populated as implemented)
export * from './animations'

// ===== TYPES =====
// Re-export all types from types.ts for convenience
export type {
  // Shape types
  ShapeVariant,
  ShapePath,
  OrganicCardProps,
  // Magnetic pull types
  MagneticPullOptions,
  // Orchestrator types
  OrchestratorOptions,
  AnimationPhase,
  UseOrchestratorReturn,
  // Performance types
  PerformanceMetrics,
  PerformanceFallbackConfig,
} from './types'
