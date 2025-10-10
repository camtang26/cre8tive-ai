/**
 * CitationBadge - Industry/company label with organic glow pulse
 *
 * Glassmorphism badge with CSS-animated glow pulse (not JS RAF).
 * Each badge pulses with 0.3s offset for staggered rhythm.
 *
 * Performance: CSS animation offloaded to compositor thread, 2s infinite loop
 *
 * @see docs/stories/story-2.4.md AC #4 (lines 63-75)
 */

import { useId } from 'react'
import { cn } from '@/lib/utils'

export interface CitationBadgeProps {
  /** Badge text (company or industry label) */
  label: string
  /** Glow color, default: Studios orange (#EA580C) */
  glowColor?: string
  /** Badge index for staggered pulse timing (0, 1, 2) */
  badgeIndex?: number
  /** Custom className for positioning */
  className?: string
}

/**
 * CitationBadge Component
 *
 * @example Basic usage
 * ```tsx
 * <CitationBadge label="B2B SaaS" badgeIndex={0} />
 * ```
 *
 * @example Custom glow color and position
 * ```tsx
 * <CitationBadge
 *   label="Creative Agency"
 *   glowColor="#06B6D4"
 *   badgeIndex={1}
 *   className="bottom-4 right-4"
 * />
 * ```
 */
export function CitationBadge({
  label,
  glowColor = '#EA580C',
  badgeIndex = 0,
  className,
}: CitationBadgeProps) {
  const filterId = useId()

  return (
    <>
      {/* SVG glow filter definition */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feFlood floodColor={glowColor} result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Badge with enhanced glow pulse (Design Enhancement Story 2.4) */}
      <div
        className={cn(
          'citation-badge',
          'absolute bottom-4 right-4 z-10',
          'px-3 py-1.5 rounded-full',
          'backdrop-blur-lg',
          'text-sm font-medium text-white/95',
          'transition-all duration-200 hover:scale-105',
          'will-change-[filter,transform]', // GPU acceleration hint
          className
        )}
        style={{
          background: 'rgba(234, 88, 12, 0.15)', // Orange tint
          border: '1px solid rgba(234, 88, 12, 0.4)', // Orange border
          filter: `url(#${filterId})`,
          // @ts-expect-error CSS custom property for animation delay
          '--badge-index': badgeIndex,
          animation: 'glow-pulse 2s ease-in-out infinite',
          animationDelay: `calc(var(--badge-index) * 0.3s)`,
        }}
      >
        {label}
      </div>

      {/* Inline CSS for enhanced glow-pulse keyframes (Design Enhancement Story 2.4) */}
      <style>
        {`
          @keyframes glow-pulse {
            0%, 100% {
              filter: url(#${filterId}) drop-shadow(0 0 8px rgba(234, 88, 12, 0.4));
              opacity: 0.5;
            }
            50% {
              filter: url(#${filterId}) drop-shadow(0 0 16px rgba(234, 88, 12, 0.8));
              opacity: 1.0;
            }
          }

          /* Mobile optimization: faster pulse, less CPU */
          @media (max-width: 768px) {
            .citation-badge {
              animation-duration: 1.5s !important;
            }
          }

          /* Respect prefers-reduced-motion */
          @media (prefers-reduced-motion: reduce) {
            .citation-badge {
              animation: none !important;
              filter: url(#${filterId}) opacity(0.4) !important;
            }
          }
        `}
      </style>
    </>
  )
}
