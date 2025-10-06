import { LucideIcon } from "lucide-react"
import { briefingPalette } from "@/components/briefing/palette"

export interface ProcessStepCardProps {
  number: number
  title: string
  subtitle: string
  icon: LucideIcon
  accentColor: "cyan" | "fuchsia" | "indigo" | "orange"
  isLast?: boolean
}

export function ProcessStepCard({
  number,
  title,
  subtitle,
  icon: Icon,
  accentColor,
  isLast = false,
}: ProcessStepCardProps) {
  // Map accent color to palette hex values
  const colorMap = {
    cyan: briefingPalette.colors.cyan,
    fuchsia: briefingPalette.colors.fuchsia,
    indigo: briefingPalette.colors.indigo,
    orange: briefingPalette.colors.orange,
  }

  const accentHex = colorMap[accentColor]

  return (
    <div className="relative flex-1 min-w-[250px] max-w-[300px] mx-auto lg:mx-0">
      {/* Process Step Card */}
      <div
        className="process-step relative p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-2 group"
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
          {/* Step Number */}
          <div
            className="flex items-center justify-center w-12 h-12 rounded-full font-black text-xl text-white"
            style={{
              background: `linear-gradient(135deg, ${accentHex}60, ${accentHex}40)`,
              border: `2px solid ${accentHex}`,
            }}
          >
            {number}
          </div>

          {/* Icon */}
          <div
            className="p-4 rounded-xl"
            style={{
              background: `${accentHex}15`,
            }}
          >
            <Icon
              className="w-10 h-10"
              style={{ color: accentHex }}
              strokeWidth={2}
            />
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
            {title}
          </h3>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-white/70 leading-relaxed">
            {subtitle}
          </p>
        </div>
      </div>

      {/* SVG Connector Arrow (Desktop Only, Hidden for Last Step) */}
      {!isLast && (
        <svg
          className="hidden lg:block absolute top-1/2 left-full w-16 h-2 -translate-y-1/2 z-0"
          aria-hidden="true"
        >
          <line
            x1="0"
            y1="1"
            x2="64"
            y2="1"
            stroke={`${briefingPalette.indigo.DEFAULT}50`}
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <polygon
            points="60,0 64,1 60,2"
            fill={`${briefingPalette.indigo.DEFAULT}50`}
          />
        </svg>
      )}
    </div>
  )
}
