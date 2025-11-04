import type { ReactNode, CSSProperties } from "react"
import { cn } from "@/lib/utils"

interface GlassmorphicCardProps {
  children: ReactNode
  className?: string
  accentColor?: string
  accentGradient?: string
  accentGlow?: string
  style?: CSSProperties
  onClick?: () => void
  tabIndex?: number
  "aria-label"?: string
  onMouseMove?: (e: React.MouseEvent<HTMLDivElement>) => void
  onMouseLeave?: () => void
}

/**
 * Premium glassmorphic card component following Codex's pattern
 * - Nested borders (32px → 28px) with gradient glow
 * - Backdrop blur with low opacity white background
 * - Per-card accent color system
 * - Hover states with lift and shadow expansion
 * - Full accessibility support
 */
export function GlassmorphicCard({
  children,
  className,
  accentColor = "#10B981", // Default emerald
  accentGradient = "from-[rgba(16,185,129,0.36)] via-[rgba(16,185,129,0.12)] to-transparent",
  accentGlow = "rgba(16,185,129,0.28)",
  style,
  onClick,
  tabIndex,
  "aria-label": ariaLabel,
  onMouseMove,
  onMouseLeave,
}: GlassmorphicCardProps) {
  return (
    <div
      className={cn("group relative", className)}
      style={style}
      onClick={onClick}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Background glow orb (follows accent color) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full rounded-full blur-[140px] transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle, ${accentGlow} 0%, rgba(0,0,0,0) 70%)`,
          opacity: 0.6,
        }}
        aria-hidden
      />

      {/* Outer border container (glassmorphic layer 1) */}
      <div
        className={cn(
          "group relative overflow-hidden rounded-[32px] border border-white/12 bg-white/[0.02] p-[1.5px]",
          "shadow-[0_80px_200px_-110px_rgba(8,15,32,0.92)]",
          "transition-all duration-500 ease-out",
          "hover:-translate-y-2 hover:border-white/18",
          "hover:shadow-[0_120px_260px_-120px_rgba(9,18,36,0.95)]",
          onClick && "cursor-pointer",
          tabIndex !== undefined && [
            "focus-visible:-translate-y-2 focus-visible:border-white/18",
            "focus-visible:shadow-[0_120px_260px_-120px_rgba(9,18,36,0.95)]",
            "focus-visible:outline-2 focus-visible:outline-offset-4",
          ]
        )}
        style={{
          outlineColor: tabIndex !== undefined ? `${accentColor}99` : undefined, // 60% opacity
        }}
      >
        {/* Inner glassmorphic surface (layer 2) */}
        <div className="relative overflow-hidden rounded-[28px] bg-white/[0.05] backdrop-blur-[18px] md:backdrop-blur-[12px] lg:backdrop-blur-[18px]">
          {/* Gradient overlay (layer 3) */}
          <div
            className={cn(
              "absolute inset-0 rounded-[28px] bg-gradient-to-br opacity-80 mix-blend-screen",
              accentGradient
            )}
            aria-hidden
          />

          {/* Ring-inset effect for premium depth */}
          <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/14" aria-hidden />

          {/* Content container (layer 4) */}
          <div className="relative">{children}</div>
        </div>
      </div>

      {/* Inline styles for GPU acceleration and reduced motion */}
      <style jsx>{`
        /* GPU acceleration */
        .group {
          transform: translateZ(0);
          will-change: transform;
          backface-visibility: hidden;
        }

        /* Mobile blur optimization */
        @media (max-width: 767px) {
          .backdrop-blur-\\[18px\\] {
            backdrop-filter: blur(8px);
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .group {
            animation: none !important;
            transition: all 150ms ease-out !important;
          }

          .group:hover {
            transform: translateY(-2px) !important;
          }
        }
      `}</style>
    </div>
  )
}
