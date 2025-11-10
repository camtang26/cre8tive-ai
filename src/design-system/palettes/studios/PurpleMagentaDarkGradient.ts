/**
 * Studios Option B: Purple/Magenta - DARK GRADIENT VERSION (Futuristic)
 *
 * Directly inspired by Briefing Engine page aesthetic:
 * - Deep navy → purple gradient background
 * - Fuchsia/magenta/purple particle effects
 * - Space-like futuristic vibe
 * - Clean white typography
 *
 * This version matches your existing Briefing Engine particle aesthetic perfectly.
 * Purple innovation trend (2024-2025) combined with established dark gradient style.
 */

import type { ColorPalette } from '../shared/palette.types';
import { checkContrast, hexToRgb, rgbToHsl } from '../shared/ContrastChecker';

const DEEP_NAVY_HEX = '#0A0B1E';
const DARK_PURPLE_HEX = '#1A0F2E'; // Deep purple-tinted dark
const MIDNIGHT_PURPLE_HEX = '#2D1B4E'; // Richer purple

const MAGENTA_HEX = '#C026D3';
const FUCHSIA_HEX = '#E879F9';
const PURPLE_GLOW_HEX = '#A855F7';
const CYAN_ACCENT_HEX = '#06B6D4';
const WHITE_HEX = '#FFFFFF';

export const PurpleMagentaDarkGradient: ColorPalette = {
  name: 'Purple/Magenta - Dark Gradient',
  category: 'studios',
  variant: 'b',
  description: 'Futuristic innovation with Briefing Engine aesthetic. Purple particle effects on deep space gradients.',

  researchScore: 8, // Strong 2025 trend + matches existing brand
  accessibilityScore: 9, // White on dark = excellent
  distinctivenessScore: 9, // Maximum differentiation
  longevityScore: 9, // Purple rising trend + dark gradients are standard

  colors: {
    primary: {
      name: 'Deep Navy',
      hex: DEEP_NAVY_HEX,
      rgb: hexToRgb(DEEP_NAVY_HEX),
      hsl: rgbToHsl(10, 11, 30),
      tailwind: 'bg-[#0A0B1E]',
      cssVar: '--color-deep-navy',
      role: 'primary',
      usagePercentage: 35,
      psychology: ['futuristic', 'deep-space', 'tech-forward', 'infinite'],
      bestWith: ['White', 'Magenta', 'Fuchsia']
    },
    accent: {
      name: 'Magenta',
      hex: MAGENTA_HEX,
      rgb: hexToRgb(MAGENTA_HEX),
      hsl: rgbToHsl(192, 38, 211),
      tailwind: 'bg-fuchsia-600',
      cssVar: '--color-magenta',
      role: 'accent',
      usagePercentage: 15,
      psychology: ['innovative', 'energetic', 'creative', 'bold'],
      bestWith: ['Deep Navy', 'Dark Purple', 'White']
    },
    highlight: {
      name: 'Fuchsia Glow',
      hex: FUCHSIA_HEX,
      rgb: hexToRgb(FUCHSIA_HEX),
      hsl: rgbToHsl(232, 121, 249),
      tailwind: 'bg-fuchsia-400',
      cssVar: '--color-fuchsia-glow',
      role: 'highlight',
      usagePercentage: 10,
      psychology: ['luminous', 'particle-effect', 'attention', 'modern'],
      bestWith: ['Deep Navy', 'Magenta']
    },
    secondary: [
      {
        name: 'Dark Purple',
        hex: DARK_PURPLE_HEX,
        rgb: hexToRgb(DARK_PURPLE_HEX),
        hsl: rgbToHsl(26, 15, 46),
        tailwind: 'bg-[#1A0F2E]',
        cssVar: '--color-dark-purple',
        role: 'secondary',
        usagePercentage: 30,
        psychology: ['deep', 'mysterious', 'sophisticated'],
        bestWith: ['Deep Navy', 'White', 'Magenta']
      },
      {
        name: 'Purple Glow',
        hex: PURPLE_GLOW_HEX,
        rgb: hexToRgb(PURPLE_GLOW_HEX),
        hsl: rgbToHsl(168, 85, 247),
        tailwind: 'bg-purple-500',
        cssVar: '--color-purple-glow',
        role: 'secondary',
        usagePercentage: 10,
        psychology: ['particle', 'innovation', 'energy'],
        bestWith: ['Deep Navy', 'Fuchsia']
      }
    ]
  },

  gradients: [
    {
      name: 'Main Background (Briefing Engine Style)',
      css: 'linear-gradient(135deg, #0A0B1E 0%, #1A0F2E 100%)',
      direction: '135deg',
      stops: [
        { color: DEEP_NAVY_HEX, position: '0%' },
        { color: DARK_PURPLE_HEX, position: '100%' }
      ],
      usage: ['Page backgrounds', 'Primary canvas', 'Matches Briefing Engine'],
      tailwind: 'bg-gradient-to-br from-[#0A0B1E] to-[#1A0F2E]'
    },
    {
      name: 'Particle Glow',
      css: 'radial-gradient(circle at center, rgba(232, 121, 249, 0.2) 0%, rgba(10, 11, 30, 0) 60%)',
      direction: 'radial',
      stops: [
        { color: 'rgba(232, 121, 249, 0.2)', position: '0%' },
        { color: 'rgba(10, 11, 30, 0)', position: '60%' }
      ],
      usage: ['Particle effects', 'Hover states', 'Interactive glows'],
      tailwind: 'bg-[radial-gradient(circle_at_center,rgba(232,121,249,0.2)_0%,rgba(10,11,30,0)_60%)]'
    },
    {
      name: 'CTA Button',
      css: 'linear-gradient(135deg, #C026D3 0%, #E879F9 100%)',
      direction: '135deg',
      stops: [
        { color: MAGENTA_HEX, position: '0%' },
        { color: FUCHSIA_HEX, position: '100%' }
      ],
      usage: ['Primary CTAs', 'Interactive elements'],
      tailwind: 'bg-gradient-to-br from-fuchsia-600 to-fuchsia-400'
    }
  ],

  contrastRatios: [
    {
      foreground: 'White',
      background: 'Deep Navy',
      ratio: checkContrast(WHITE_HEX, DEEP_NAVY_HEX)
    },
    {
      foreground: 'Magenta',
      background: 'Deep Navy',
      ratio: checkContrast(MAGENTA_HEX, DEEP_NAVY_HEX)
    },
    {
      foreground: 'Fuchsia',
      background: 'Deep Navy',
      ratio: checkContrast(FUCHSIA_HEX, DEEP_NAVY_HEX)
    }
  ],

  mood: {
    primary: 'Futuristic innovation',
    emotions: ['innovative', 'creative', 'energetic', 'futuristic', 'bold', 'modern'],
    targetAudience: [
      'Tech-forward creative agencies',
      'Innovation-focused brands',
      'Modern B2B (SaaS, fintech)',
      'Music/entertainment video production',
      'Brands wanting maximum differentiation'
    ]
  },

  research: {
    findings: [
      'Purple is RISING TREND in tech/media 2024-2025 (Twitch, Roku, Yahoo)',
      'Matches Cre8tive AI Briefing Engine particle aesthetic perfectly',
      'Dark navy → purple gradients = space-age futuristic',
      'Fuchsia/magenta particles = innovation signal',
      'White typography on dark gradients = maximum accessibility'
    ],
    competitors: [
      {
        name: 'Twitch',
        colors: ['Purple particles', 'Dark backgrounds'],
        success: 'Dominant streaming platform, purple = creativity'
      },
      {
        name: 'Linear',
        colors: ['Purple gradients', 'Particle effects'],
        success: 'Best-in-class modern SaaS design'
      }
    ],
    trendAlignment: '2024-2025 STRONG TREND: Purple rising in tech. Matches existing Briefing Engine aesthetic. Maximum differentiation.',
    culturalNotes: 'Purple = innovation, creativity, future-forward. Universal positive in tech contexts.'
  },

  usage: {
    bestFor: [
      'Matching Briefing Engine aesthetic',
      'Innovation-focused positioning',
      'Maximum visual differentiation',
      'Creative agency targeting',
      'Tech-forward brand identity',
      'Music video production',
      'Futuristic content'
    ],
    avoidFor: [
      'Traditional corporate/enterprise',
      'Conservative industries',
      'Brands requiring subtle aesthetics'
    ],
    executionGuidelines: [
      'Background: Navy → purple gradients always',
      'Particles: Fuchsia/magenta glows (like Briefing Engine)',
      'Typography: Clean white, generous spacing',
      'CTAs: Magenta → fuchsia gradient buttons',
      'Hover: Particle glow effects',
      'Cards: Dark gradient + glassmorphism',
      'Spacing: Minimal, futuristic (lots of breathing room)'
    ],
    pitfalls: [
      '❌ Too many particles (subtle is key)',
      '❌ Flat backgrounds (use gradients)',
      '❌ Light color schemes',
      '❌ Cluttered layouts'
    ]
  },

  accessibility: {
    whiteBackgroundWarnings: ['DARK MODE ONLY palette'],
    recommendedBackgrounds: ['Deep Navy → Dark Purple gradient (PRIMARY)'],
    colorBlindness: {
      protanopia: 'Purple appears blue-ish. Acceptable with contrast.',
      deuteranopia: 'Purple/magenta as blue tones. Ensure contrast.',
      tritanopia: 'Excellent - purple/magenta preserved.'
    },
    requiredFixes: []
  }
};

export default PurpleMagentaDarkGradient;
