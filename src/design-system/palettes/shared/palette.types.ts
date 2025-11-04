/**
 * Type definitions for color palette system
 *
 * Based on comprehensive research from:
 * - Color psychology studies (University of Winnipeg, color perception research)
 * - WCAG 2.1 AA/AAA accessibility standards
 * - 2024-2025 design trend analysis
 * - Competitive intelligence from top video production and AI platforms
 */

/**
 * WCAG compliance levels
 */
export type WCAGLevel = 'AAA' | 'AA' | 'FAIL';

/**
 * Contrast ratio information for accessibility
 */
export interface ContrastRatio {
  /**
   * Calculated contrast ratio (e.g., 4.5, 7.0, 14.0)
   */
  ratio: number;

  /**
   * WCAG AA compliance (4.5:1 for normal text, 3:1 for large text)
   */
  wcagAA: boolean;

  /**
   * WCAG AAA compliance (7:1 for normal text, 4.5:1 for large text)
   */
  wcagAAA: boolean;

  /**
   * Overall WCAG level achieved
   */
  level: WCAGLevel;

  /**
   * Recommendation if contrast is insufficient
   */
  recommendation?: string;
}

/**
 * Color definition with metadata
 */
export interface ColorDefinition {
  /**
   * Color name (e.g., "Gold", "Charcoal", "Navy")
   */
  name: string;

  /**
   * Hex color code
   */
  hex: string;

  /**
   * RGB values
   */
  rgb: {
    r: number;
    g: number;
    b: number;
  };

  /**
   * HSL values
   */
  hsl: {
    h: number;
    s: number;
    l: number;
  };

  /**
   * Tailwind CSS class name (e.g., "bg-gold", "text-charcoal")
   */
  tailwind: string;

  /**
   * CSS custom property name (e.g., "--color-gold")
   */
  cssVar: string;

  /**
   * Usage context (primary, accent, highlight, secondary)
   */
  role: 'primary' | 'accent' | 'highlight' | 'secondary' | 'background' | 'text';

  /**
   * Percentage of palette usage (10-20% for accents, 60-70% for primary)
   */
  usagePercentage: number;

  /**
   * Psychological associations (e.g., "luxury", "trust", "innovation")
   */
  psychology: string[];

  /**
   * Best used with (list of compatible colors from palette)
   */
  bestWith: string[];
}

/**
 * Gradient definition with color stops
 */
export interface GradientDefinition {
  /**
   * Gradient name (e.g., "Hero Overlay", "CTA Button")
   */
  name: string;

  /**
   * CSS gradient string
   */
  css: string;

  /**
   * Gradient direction (e.g., "135deg", "to right")
   */
  direction: string;

  /**
   * Color stops
   */
  stops: Array<{
    color: string;
    position: string;
  }>;

  /**
   * Usage context
   */
  usage: string[];

  /**
   * Tailwind class equivalent (if available)
   */
  tailwind?: string;
}

/**
 * Color palette definition
 */
export interface ColorPalette {
  /**
   * Palette name (e.g., "Film Noir", "Warm Trust")
   */
  name: string;

  /**
   * Palette category (studios, conversational-ai)
   */
  category: 'studios' | 'conversational-ai';

  /**
   * Variant identifier (a, b, c, d)
   */
  variant: 'a' | 'b' | 'c' | 'd';

  /**
   * Short description
   */
  description: string;

  /**
   * Research-backed recommendation score (1-10)
   */
  researchScore: number;

  /**
   * Accessibility score (1-10)
   */
  accessibilityScore: number;

  /**
   * Distinctiveness score vs competitors (1-10)
   */
  distinctivenessScore: number;

  /**
   * 2-3 year longevity score (1-10)
   */
  longevityScore: number;

  /**
   * Core colors in the palette
   */
  colors: {
    primary: ColorDefinition;
    accent: ColorDefinition;
    highlight: ColorDefinition;
    secondary?: ColorDefinition[];
  };

  /**
   * Predefined gradients
   */
  gradients: GradientDefinition[];

  /**
   * Contrast ratios between key color combinations
   */
  contrastRatios: Array<{
    foreground: string;
    background: string;
    ratio: ContrastRatio;
  }>;

  /**
   * Mood and emotional associations
   */
  mood: {
    primary: string;
    emotions: string[];
    targetAudience: string[];
  };

  /**
   * Research validation
   */
  research: {
    /**
     * Key research findings supporting this palette
     */
    findings: string[];

    /**
     * Competitive examples using similar palettes
     */
    competitors: Array<{
      name: string;
      colors: string[];
      success: string;
    }>;

    /**
     * 2024-2025 trend alignment
     */
    trendAlignment: string;

    /**
     * Cultural considerations
     */
    culturalNotes?: string;
  };

  /**
   * Usage guidelines
   */
  usage: {
    /**
     * When to use this palette
     */
    bestFor: string[];

    /**
     * When NOT to use this palette
     */
    avoidFor: string[];

    /**
     * Modern execution guidelines
     */
    executionGuidelines: string[];

    /**
     * Common pitfalls
     */
    pitfalls: string[];
  };

  /**
   * Accessibility warnings and recommendations
   */
  accessibility: {
    /**
     * Colors that fail WCAG on white backgrounds
     */
    whiteBackgroundWarnings: string[];

    /**
     * Recommended background colors
     */
    recommendedBackgrounds: string[];

    /**
     * Color blindness considerations
     */
    colorBlindness: {
      protanopia: string;
      deuteranopia: string;
      tritanopia: string;
    };

    /**
     * Required fixes or refinements
     */
    requiredFixes?: string[];
  };
}

/**
 * Palette comparison metrics
 */
export interface PaletteComparison {
  /**
   * Palette being compared
   */
  palette: ColorPalette;

  /**
   * Overall recommendation score (weighted average)
   */
  overallScore: number;

  /**
   * Strengths
   */
  strengths: string[];

  /**
   * Weaknesses
   */
  weaknesses: string[];

  /**
   * Critical warnings
   */
  criticalWarnings?: string[];

  /**
   * Research-backed verdict
   */
  verdict: string;
}

/**
 * Color blindness simulation types
 */
export type ColorBlindnessType = 'normal' | 'protanopia' | 'deuteranopia' | 'tritanopia' | 'achromatopsia';

/**
 * Color blindness simulation result
 */
export interface ColorBlindnessSimulation {
  /**
   * Type of color blindness
   */
  type: ColorBlindnessType;

  /**
   * Original color
   */
  original: string;

  /**
   * Simulated color as perceived
   */
  simulated: string;

  /**
   * Description of how it appears
   */
  description: string;

  /**
   * Severity of impact (1-5, 1=minimal, 5=severe)
   */
  impactSeverity: number;
}
