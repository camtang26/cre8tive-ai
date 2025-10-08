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
  // Map accent color to palette hex values (AC3 requires exact colors)
  const colorMap = {
    indigo: briefingPalette.colors.indigo,
    cyan: briefingPalette.colors.cyan,
    fuchsia: briefingPalette.colors.fuchsia,
    orange: briefingPalette.colors.orange,
  }

  const accentHex = colorMap[accentColor]

  return (
    <div
      className={`value-card relative p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 group ${className}`}
      style={{
        background: "rgba(26, 26, 46, 0.6)",
        backdropFilter: "blur(12px)",
        borderColor: `${accentHex}40`,
        boxShadow: `0 4px 24px rgba(0, 0, 0, 0.3)`,
      }}
    >
      {/* Hover Glow Effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `0 0 40px ${accentHex}60, inset 0 0 20px ${accentHex}20`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        {/* Icon */}
        <div
          className="p-4 rounded-xl"
          style={{
            background: `${accentHex}15`,
          }}
        >
          <Icon
            className="w-8 h-8"
            style={{ color: accentHex }}
            strokeWidth={2}
          />
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-white/70 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
