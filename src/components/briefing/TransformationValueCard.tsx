import { LucideIcon } from "lucide-react"
import { briefingPalette } from "@/components/briefing/palette"

export interface TransformationValueCardProps {
  title: string
  description: string
  icon: LucideIcon
  accentColor: "indigo" | "cyan" | "fuchsia" | "orange"
  className?: string
}

export function TransformationValueCard({
  title,
  description,
  icon: Icon,
  accentColor,
  className = "",
}: TransformationValueCardProps) {
  // Map accent color to palette hex values (AC4 requires exact colors)
  const colorMap = {
    indigo: briefingPalette.colors.indigo,
    cyan: briefingPalette.colors.cyan,
    fuchsia: briefingPalette.colors.fuchsia,
    orange: briefingPalette.colors.orange,
  }

  const accentHex = colorMap[accentColor]

  // SVG noise texture data URI
  const noiseTexture = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E"

  return (
    <div
      className={`value-card relative p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-3 group ${className}`}
      style={{
        minHeight: "280px", // AC4: Increased from ~200px
        background: `linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(26, 26, 46, 0.4) 100%)`,
        backgroundImage: `url("${noiseTexture}"), linear-gradient(135deg, rgba(26, 26, 46, 0.8) 0%, rgba(26, 26, 46, 0.4) 100%)`,
        backdropFilter: "blur(16px)", // AC4: Enhanced from blur(12px)
        borderColor: `${accentHex}40`,
        boxShadow: `0 4px 24px rgba(0, 0, 0, 0.3)`,
        opacity: 0, // Initial hidden for GSAP animation
        transform: "translateY(32px)" // PERF: Drop scale to avoid backdrop-filter repaints
      }}
    >
      {/* Hover Glow Effect - AC4: Expanded glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `0 0 60px ${accentHex}80, inset 0 0 30px ${accentHex}30`, // AC4: Expanded from 40px/20px
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        {/* Icon - AC4: Huge icons w-16 h-16 */}
        <div
          className="p-4 rounded-xl transition-all duration-300 group-hover:brightness-110"
          style={{
            background: `radial-gradient(circle at center, ${accentHex}30, ${accentHex}05)`,
            boxShadow: `0 0 40px ${accentHex}40`,
          }}
        >
          <Icon
            className="w-16 h-16" // AC4: Increased from w-8 h-8
            style={{ color: accentHex }}
            strokeWidth={2}
          />
        </div>

        {/* Title - AC4: Increased typography */}
        <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-base md:text-lg text-white/70 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
