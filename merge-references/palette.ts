export const briefingPalette = {
  indigo: {
    from: "#6366F1",
    DEFAULT: "#4F46E5",
    to: "#4338CA"
  },
  cyan: {
    from: "#06B6D4",
    DEFAULT: "#0891B2",
    to: "#0E7490"
  },
  fuchsia: {
    from: "#D946EF",
    DEFAULT: "#C026D3",
    to: "#A21CAF"
  },
  orange: {
    DEFAULT: "#EA580C"
  },
  holographic: {
    glow: "#818CF8",
    emerald: "#34D399",
    cyan: "#22D3EE"
  },
  neutral: {
    bg: "rgba(6,6,14,0.82)",
    surface: "rgba(4,4,12,0.9)",
    outline: "rgba(255,255,255,0.16)"
  }
} as const;

export type BriefingPalette = typeof briefingPalette;