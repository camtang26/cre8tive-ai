/**
 * Studios Option C: Teal/Cyan - DARK GRADIENT VERSION (Futuristic)
 *
 * Directly inspired by Homepage aesthetic:
 * - Deep navy → teal gradient background
 * - Cyan accent line (under Satya Nadella quote)
 * - Clean, minimal, tech-forward
 * - Space-like depth with teal hints
 *
 * This version matches your homepage dark gradient + cyan accent perfectly.
 */

import type { ColorPalette } from '../shared/palette.types';
import { checkContrast, hexToRgb, rgbToHsl } from '../shared/ContrastChecker';

const DEEP_NAVY_HEX = '#0A0B1E';
const DARK_TEAL_HEX = '#0F1E1C'; // Dark with teal tint
const MIDNIGHT_TEAL_HEX = '#1A2E2A'; // Richer teal

const CYAN_HEX = '#06B6D4';
const TEAL_GLOW_HEX = '#14B8A6';
const EMERALD_ACCENT_HEX = '#10B981';
const WHITE_HEX = '#FFFFFF';

export const TealCyanDarkGradient: ColorPalette = {
  name: 'Teal/Cyan - Dark Gradient',
  category: 'studios',
  variant: 'c',
  description: 'Futuristic growth with Homepage aesthetic. Cyan accents on deep space gradients.',

  researchScore: 7, // Good trend alignment + matches existing brand
  accessibilityScore: 9, // White on dark = excellent
  distinctivenessScore: 8, // Differentiated from red/blue
  longevityScore: 8, // Tech standard + growing in SaaS

  colors: {
    primary: {
      name: 'Deep Navy',
      hex: DEEP_NAVY_HEX,
      rgb: hexToRgb(DEEP_NAVY_HEX),
      hsl: rgbToHsl(10, 11, 30),
      tailwind: 'bg-[#0A0B1E]',
      cssVar: '--color-deep-navy',
      role: 'primary',
      usagePercentage: 40,
      psychology: ['futuristic', 'deep', 'tech-forward', 'stable'],
      bestWith: ['White', 'Cyan', 'Teal']
    },
    accent: {
      name: 'Cyan',
      hex: CYAN_HEX,
      rgb: hexToRgb(CYAN_HEX),
      hsl: rgbToHsl(6, 182, 212),
      tailwind: 'bg-cyan-500',
      cssVar: '--color-cyan',
      role: 'accent',
      usagePercentage: 15,
      psychology: ['tech-forward', 'innovation', 'communication', 'modern'],
      bestWith: ['Deep Navy', 'Dark Teal', 'White']
    },
    highlight: {
      name: 'Teal Glow',
      hex: TEAL_GLOW_HEX,
      rgb: hexToRgb(TEAL_GLOW_HEX),
      hsl: rgbToHsl(20, 184, 166),
      tailwind: 'bg-teal-500',
      cssVar: '--color-teal-glow',
      role: 'highlight',
      usagePercentage: 15,
      psychology: ['growth', 'success', 'fresh', 'luminous'],
      bestWith: ['Deep Navy', 'Cyan']
    },
    secondary: [
      {
        name: 'Dark Teal',
        hex: DARK_TEAL_HEX,
        rgb: hexToRgb(DARK_TEAL_HEX),
        hsl: rgbToHsl(15, 30, 28),
        tailwind: 'bg-[#0F1E1C]',
        cssVar: '--color-dark-teal',
        role: 'secondary',
        usagePercentage: 30,
        psychology: ['deep', 'sophisticated', 'grounded'],
        bestWith: ['Deep Navy', 'White', 'Cyan']
      }
    ]
  },

  gradients: [
    {
      name: 'Main Background (Homepage Style)',
      css: 'linear-gradient(135deg, #0A0B1E 0%, #0F1E1C 100%)',
      direction: '135deg',
      stops: [
        { color: DEEP_NAVY_HEX, position: '0%' },
        { color: DARK_TEAL_HEX, position: '100%' }
      ],
      usage: ['Page backgrounds', 'Primary canvas', 'Matches Homepage'],
      tailwind: 'bg-gradient-to-br from-[#0A0B1E] to-[#0F1E1C]'
    },
    {
      name: 'Cyan Accent Line',
      css: 'linear-gradient(90deg, transparent 0%, #06B6D4 50%, transparent 100%)',
      direction: '90deg',
      stops: [
        { color: 'transparent', position: '0%' },
        { color: CYAN_HEX, position: '50%' },
        { color: 'transparent', position: '100%' }
      ],
      usage: ['Dividers', 'Accent lines', 'Section separators'],
      tailwind: 'bg-gradient-to-r from-transparent via-cyan-500 to-transparent'
    },
    {
      name: 'CTA Button',
      css: 'linear-gradient(135deg, #06B6D4 0%, #14B8A6 100%)',
      direction: '135deg',
      stops: [
        { color: CYAN_HEX, position: '0%' },
        { color: TEAL_GLOW_HEX, position: '100%' }
      ],
      usage: ['Primary CTAs', 'Interactive elements'],
      tailwind: 'bg-gradient-to-br from-cyan-500 to-teal-500'
    }
  ],

  contrastRatios: [
    {
      foreground: 'White',
      background: 'Deep Navy',
      ratio: checkContrast(WHITE_HEX, DEEP_NAVY_HEX)
    },
    {
      foreground: 'Cyan',
      background: 'Deep Navy',
      ratio: checkContrast(CYAN_HEX, DEEP_NAVY_HEX)
    }
  ],

  mood: {
    primary: 'Futuristic growth',
    emotions: ['innovative', 'growth', 'balance', 'tech-forward', 'fresh', 'modern'],
    targetAudience: [
      'Growth-focused tech companies',
      'SaaS platforms',
      'Innovative B2B brands',
      'Tech startups',
      'Modern enterprise'
    ]
  },

  research: {
    findings: [
      'Cyan/teal growing in tech/SaaS (Trello, Secureframe)',
      'Matches Cre8tive AI Homepage cyan accent perfectly',
      'Dark navy → teal gradients = depth + innovation',
      'Cyan = communication, tech-forward (perfect for video production)'
    ],
    competitors: [
      {
        name: 'Trello',
        colors: ['Teal primary', 'Growth positioning'],
        success: 'Industry standard productivity tool'
      }
    ],
    trendAlignment: 'Growing in SaaS. Matches existing Homepage aesthetic. Tech-forward differentiation.',
    culturalNotes: 'Cyan/teal = growth, innovation, communication. Universal positive in tech.'
  },

  usage: {
    bestFor: [
      'Matching Homepage aesthetic',
      'Growth/scale positioning',
      'Tech-forward brands',
      'SaaS video content',
      'Modern enterprise'
    ],
    avoidFor: [
      'Luxury premium positioning',
      'Traditional corporate'
    ],
    executionGuidelines: [
      'Background: Navy → teal gradients',
      'Accent lines: Cyan (Homepage style)',
      'Typography: Clean white',
      'CTAs: Cyan → teal gradient',
      'Minimal, spacious layouts'
    ],
    pitfalls: [
      '❌ Flat backgrounds',
      '❌ Too much cyan',
      '❌ Light schemes'
    ]
  },

  accessibility: {
    whiteBackgroundWarnings: ['DARK MODE ONLY'],
    recommendedBackgrounds: ['Deep Navy → Dark Teal gradient'],
    colorBlindness: {
      protanopia: 'Teal/cyan as brown-ish/gray. Ensure contrast.',
      deuteranopia: 'Teal/cyan as brown/gray. Use contrast + shape.',
      tritanopia: 'Excellent - teal/cyan preserved.'
    },
    requiredFixes: []
  }
};

export default TealCyanDarkGradient;
