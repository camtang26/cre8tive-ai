/**
 * Briefing Engine Color Palette
 *
 * CRITICAL: This palette is ONLY for the Briefing Engine page.
 * DO NOT use Studios or Homepage colors. This ensures the bespoke
 * dark indigo/cyan/fuchsia theme identity remains unique.
 *
 * @see docs/architecture/frontend-architecture.md - Styling System section
 */

export const briefingPalette = {
  // Primary gradients (black-first for deep, dramatic aesthetic)
  gradients: {
    heroBg: 'bg-gradient-to-br from-black via-indigo-950 to-black',
    cardBg: 'bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10',
    sectionBg: 'bg-gradient-to-b from-black via-indigo-950/50 to-black',
    ctaBg: 'bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-500',
  },

  // Accent colors (hex values for direct use)
  colors: {
    indigo: '#4F46E5',
    cyan: '#0891B2',
    fuchsia: '#C026D3',
    orange: '#EA580C',  // CTA accent
  },

  // Color variants for gradients and states
  indigo: {
    from: '#6366F1',    // indigo-500 (lighter glow)
    DEFAULT: '#4F46E5', // indigo-600 (primary)
    to: '#4338CA'       // indigo-700 (deeper)
  },

  cyan: {
    from: '#06B6D4',    // cyan-500 (neon accents)
    DEFAULT: '#0891B2', // cyan-600 (primary)
    to: '#0E7490',      // cyan-700 (deeper)
    glow: '#22D3EE'     // cyan-400 (holographic)
  },

  fuchsia: {
    from: '#D946EF',    // fuchsia-500 (bright creative)
    DEFAULT: '#C026D3', // fuchsia-600 (primary) - QA verified WCAG AA
    to: '#A21CAF'       // fuchsia-700 (deeper magenta)
  },

  orange: {
    DEFAULT: '#EA580C', // orange-600 (Studios consistency)
  },

  // Holographic glows (for neon/holographic effects)
  holographic: {
    indigo: '#818CF8',
    cyan: '#22D3EE',
    green: '#34D399',
  },

  // Neutrals for panels and backgrounds
  neutrals: {
    panel: 'rgba(26, 26, 46, 0.6)',     // Dark indigo panel
    surface: 'rgba(17, 17, 34, 0.8)',   // Deeper surface
    border: 'rgba(99, 102, 241, 0.2)',  // Indigo border
  },

  // Typography colors (Tailwind class names for convenience)
  text: {
    primary: '#E0E7FF',     // text-indigo-100
    secondary: '#9CA3AF',   // text-gray-400
    muted: '#6B7280',       // text-gray-500
    accent: '#22D3EE',      // text-cyan-400 (for CTAs, links)
  },

  // Border colors
  borders: {
    default: 'border-indigo-500/20',
    hover: 'border-cyan-400/50',
    focus: 'border-fuchsia-500/60',
  },

  // Background overlays
  overlays: {
    card: 'bg-black/40 backdrop-blur-md',
    modal: 'bg-black/80 backdrop-blur-sm',
    hover: 'bg-indigo-500/10',
  },
} as const

/**
 * Type-safe palette access
 * Usage: const { colors, gradients, text } = briefingPalette
 */
export type BriefingPalette = typeof briefingPalette

/**
 * Helper: Get gradient class
 * @example getGradient('heroBg') => 'bg-gradient-to-br from-black via-indigo-950 to-black'
 */
export function getGradient(key: keyof typeof briefingPalette.gradients): string {
  return briefingPalette.gradients[key]
}

/**
 * Helper: Get color hex value
 * @example getColor('indigo') => '#4F46E5'
 */
export function getColor(key: keyof typeof briefingPalette.colors): string {
  return briefingPalette.colors[key]
}

/**
 * Helper: Get text color hex value
 * @example getTextColor('primary') => '#E0E7FF'
 */
export function getTextColor(key: keyof typeof briefingPalette.text): string {
  return briefingPalette.text[key]
}
