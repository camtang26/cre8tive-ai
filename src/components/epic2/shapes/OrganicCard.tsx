/**
 * OrganicCard - Premium SVG-masked card component with morphing animations
 *
 * Provides 4 organic shape variants (blob, hexagon, organic, floating) with optional
 * breathing morphing animation and configurable glow effects. Uses SVG clip-path masking
 * for non-rectangular shapes and Framer Motion for smooth path morphing.
 *
 * @see src/components/epic2/PREMIUM_USAGE.md for usage examples
 * @see docs/tech-spec-epic-2.md for performance constraints
 *
 * Performance: GPU-accelerated, ±5% shape variance over 8s loop, max 3 glows per viewport
 */

import { useRef, useId } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import type { OrganicCardProps } from '../types'

/**
 * SVG path definitions for each shape variant
 * Paths are normalized to 100x100 viewBox for consistent scaling
 */
const SHAPE_PATHS = {
  blob: {
    // Enhanced organic asymmetric blob with irregular curves (Design Enhancement Story 2.4)
    // Features: asymmetric bulges, varied curve radii, natural imperfection
    base: 'M50,8 C72,5 88,18 92,38 C96,58 85,78 65,88 C50,95 32,92 18,78 C8,65 4,48 10,30 C16,15 32,11 50,8 Z',
    morph: 'M50,6 C74,4 90,20 94,40 C98,60 83,80 63,90 C48,97 30,94 16,80 C6,67 3,46 9,28 C15,12 30,8 50,6 Z',
  },
  hexagon: {
    base: 'M50,5 L85,27.5 L85,72.5 L50,95 L15,72.5 L15,27.5 Z',
    morph: 'M50,2 L88,25 L88,75 L50,98 L12,75 L12,25 Z',
  },
  organic: {
    base: 'M50,15 C65,12 82,28 88,45 C94,62 85,78 70,85 C55,92 38,88 25,78 C12,68 8,52 12,38 C16,24 35,18 50,15 Z',
    morph: 'M50,10 C68,8 85,25 92,42 C99,59 88,80 72,88 C56,96 35,90 22,80 C9,70 5,50 10,35 C15,20 32,12 50,10 Z',
  },
  floating: {
    base: 'M50,8 C72,8 88,20 92,38 C96,56 88,72 72,82 C56,92 38,92 24,82 C10,72 4,56 8,38 C12,20 28,8 50,8 Z',
    morph: 'M50,5 C75,5 92,18 96,38 C100,58 90,75 75,85 C60,95 35,95 20,85 C5,75 0,58 4,38 C8,18 25,5 50,5 Z',
  },
} as const

/**
 * OrganicCard Component
 *
 * @example Basic usage
 * ```tsx
 * <OrganicCard shape="blob">
 *   <img src="portfolio.jpg" alt="Project" />
 * </OrganicCard>
 * ```
 *
 * @example With morphing and glow
 * ```tsx
 * <OrganicCard
 *   shape="hexagon"
 *   morphing
 *   morphIntensity={0.05}
 *   glowColor="#06b6d4"
 * >
 *   <div>Content</div>
 * </OrganicCard>
 * ```
 */
export function OrganicCard({
  children,
  shape = 'blob',
  glowColor,
  morphing = false,
  morphIntensity = 0.05,
  className,
}: OrganicCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const clipPathId = useId()
  const filterId = useId()

  const paths = SHAPE_PATHS[shape]

  return (
    <div
      ref={containerRef}
      className={cn(
        'organic-card relative',
        'will-change-transform', // GPU acceleration hint
        className
      )}
      style={{
        transform: 'translateZ(0)', // Force GPU layer
      }}
    >
      {/* SVG definitions for clip-path and filter */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 pointer-events-none opacity-0"
        aria-hidden="true"
      >
        <defs>
          {/* Clip path with optional morphing animation */}
          <clipPath id={clipPathId} clipPathUnits="objectBoundingBox">
            {morphing ? (
              <motion.path
                initial={{ d: paths.base }}
                animate={{
                  d: [paths.base, paths.morph, paths.base],
                }}
                transition={{
                  duration: 8,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                transform="scale(0.01)"
              />
            ) : (
              <path d={paths.base} transform="scale(0.01)" />
            )}
          </clipPath>

          {/* Glow filter (only rendered if glowColor provided) */}
          {glowColor && (
            <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
              <feFlood floodColor={glowColor} floodOpacity="0.6" result="color" />
              <feComposite in="color" in2="blur" operator="in" result="glow" />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          )}
        </defs>
      </svg>

      {/* Content container with clip-path and filter applied */}
      <div
        className="organic-card__content relative w-full h-full overflow-hidden"
        style={{
          clipPath: `url(#${clipPathId})`,
          WebkitClipPath: `url(#${clipPathId})`, // Safari fallback
          filter: glowColor ? `url(#${filterId})` : undefined,
        }}
      >
        {children}
      </div>
    </div>
  )
}
