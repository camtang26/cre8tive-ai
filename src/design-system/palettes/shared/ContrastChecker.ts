/**
 * WCAG 2.1 Contrast Checker Utility
 *
 * Implementation based on:
 * - WCAG 2.1 Success Criterion 1.4.3 (Contrast Minimum - Level AA)
 * - WCAG 2.1 Success Criterion 1.4.6 (Contrast Enhanced - Level AAA)
 * - W3C Relative Luminance algorithm
 *
 * Research Sources:
 * - WebAIM Contrast Checker (webaim.org/resources/contrastchecker/)
 * - W3C WCAG 2.1 Guidelines
 * - Color accessibility studies
 *
 * CRITICAL: This utility uses scientifically validated formulas for calculating
 * relative luminance and contrast ratios. Do not modify formulas without
 * consulting WCAG specifications.
 */

import type { ContrastRatio, WCAGLevel } from './palette.types';

/**
 * Convert hex color to RGB values
 *
 * @param hex - Hex color code (with or without #)
 * @returns RGB object with r, g, b values (0-255)
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  // Remove # if present
  const cleanHex = hex.replace('#', '');

  // Parse hex values
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);

  return { r, g, b };
}

/**
 * Convert RGB to HSL
 *
 * @param r - Red value (0-255)
 * @param g - Green value (0-255)
 * @param b - Blue value (0-255)
 * @returns HSL object with h (0-360), s (0-100), l (0-100)
 */
export function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

/**
 * Calculate relative luminance of a color
 *
 * Based on W3C formula:
 * https://www.w3.org/TR/WCAG21/#dfn-relative-luminance
 *
 * Relative luminance is the relative brightness of any point in a colorspace,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * @param hex - Hex color code
 * @returns Relative luminance (0-1)
 */
export function getRelativeLuminance(hex: string): number {
  const { r, g, b } = hexToRgb(hex);

  // Convert to 0-1 range
  const rsRGB = r / 255;
  const gsRGB = g / 255;
  const bsRGB = b / 255;

  // Apply gamma correction
  // If RsRGB <= 0.03928 then R = RsRGB/12.92 else R = ((RsRGB+0.055)/1.055)^2.4
  const rLinear = rsRGB <= 0.03928 ? rsRGB / 12.92 : Math.pow((rsRGB + 0.055) / 1.055, 2.4);
  const gLinear = gsRGB <= 0.03928 ? gsRGB / 12.92 : Math.pow((gsRGB + 0.055) / 1.055, 2.4);
  const bLinear = bsRGB <= 0.03928 ? bsRGB / 12.92 : Math.pow((bsRGB + 0.055) / 1.055, 2.4);

  // Calculate luminance using ITU-R BT.709 coefficients
  // L = 0.2126 * R + 0.7152 * G + 0.0722 * B
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
}

/**
 * Calculate contrast ratio between two colors
 *
 * Based on W3C formula:
 * https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio
 *
 * Contrast ratio = (L1 + 0.05) / (L2 + 0.05)
 * where L1 is the relative luminance of the lighter color
 * and L2 is the relative luminance of the darker color
 *
 * @param foreground - Foreground color hex code
 * @param background - Background color hex code
 * @returns Contrast ratio (1-21)
 */
export function getContrastRatio(foreground: string, background: string): number {
  const l1 = getRelativeLuminance(foreground);
  const l2 = getRelativeLuminance(background);

  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);

  const ratio = (lighter + 0.05) / (darker + 0.05);

  // Round to 2 decimal places
  return Math.round(ratio * 100) / 100;
}

/**
 * Check WCAG compliance level for a color combination
 *
 * WCAG 2.1 Requirements:
 * - AA Level (Normal Text): 4.5:1 minimum
 * - AA Level (Large Text): 3:1 minimum
 * - AAA Level (Normal Text): 7:1 minimum
 * - AAA Level (Large Text): 4.5:1 minimum
 * - UI Components: 3:1 minimum
 *
 * Large text = 18pt+ or 14pt+ bold
 *
 * @param foreground - Foreground color hex code
 * @param background - Background color hex code
 * @param isLargeText - Whether text is large (18pt+ or 14pt+ bold)
 * @returns Complete contrast analysis with WCAG compliance
 */
export function checkContrast(
  foreground: string,
  background: string,
  isLargeText: boolean = false
): ContrastRatio {
  const ratio = getContrastRatio(foreground, background);

  // WCAG thresholds
  const normalAA = 4.5;
  const largeAA = 3.0;
  const normalAAA = 7.0;
  const largeAAA = 4.5;

  const threshold = isLargeText ? largeAA : normalAA;
  const thresholdAAA = isLargeText ? largeAAA : normalAAA;

  const passesAA = ratio >= threshold;
  const passesAAA = ratio >= thresholdAAA;

  let level: WCAGLevel;
  let recommendation: string | undefined;

  if (passesAAA) {
    level = 'AAA';
  } else if (passesAA) {
    level = 'AA';
    recommendation = `Passes AA but not AAA. For AAA compliance, aim for ${thresholdAAA}:1 ratio.`;
  } else {
    level = 'FAIL';
    recommendation = `Fails WCAG AA. Minimum required: ${threshold}:1, current: ${ratio}:1. Consider darkening foreground or lightening background.`;
  }

  return {
    ratio,
    wcagAA: passesAA,
    wcagAAA: passesAAA,
    level,
    recommendation
  };
}

/**
 * Get recommended text color (black or white) for a background
 *
 * Uses luminance to determine which text color provides better contrast.
 *
 * @param backgroundColor - Background color hex code
 * @returns Recommended text color ('#000000' or '#FFFFFF')
 */
export function getRecommendedTextColor(backgroundColor: string): '#000000' | '#FFFFFF' {
  const luminance = getRelativeLuminance(backgroundColor);

  // Use white text for dark backgrounds, black for light backgrounds
  // Threshold of 0.5 works well for most cases
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
}

/**
 * Generate accessible color variations
 *
 * Creates lighter and darker variations of a color that maintain
 * WCAG AA contrast with specified backgrounds.
 *
 * @param baseColor - Base color hex code
 * @param targetBackground - Background color to test against
 * @param targetRatio - Desired contrast ratio (default 4.5 for AA)
 * @returns Array of color variations that meet target ratio
 */
export function generateAccessibleVariations(
  baseColor: string,
  targetBackground: string,
  targetRatio: number = 4.5
): string[] {
  const variations: string[] = [];
  const { r, g, b } = hexToRgb(baseColor);

  // Try darkening the color
  for (let factor = 0.9; factor >= 0.1; factor -= 0.1) {
    const newR = Math.round(r * factor);
    const newG = Math.round(g * factor);
    const newB = Math.round(b * factor);

    const newHex = `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
    const ratio = getContrastRatio(newHex, targetBackground);

    if (ratio >= targetRatio) {
      variations.push(newHex);
    }
  }

  // Try lightening the color
  for (let factor = 1.1; factor <= 2.0; factor += 0.1) {
    const newR = Math.min(255, Math.round(r * factor));
    const newG = Math.min(255, Math.round(g * factor));
    const newB = Math.min(255, Math.round(b * factor));

    const newHex = `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
    const ratio = getContrastRatio(newHex, targetBackground);

    if (ratio >= targetRatio) {
      variations.push(newHex);
    }
  }

  return variations;
}

/**
 * Batch check contrast ratios for multiple color combinations
 *
 * Useful for validating entire color palettes at once.
 *
 * @param combinations - Array of {foreground, background} pairs
 * @returns Array of contrast results
 */
export function batchCheckContrast(
  combinations: Array<{ foreground: string; background: string; label?: string }>
): Array<{ label: string; foreground: string; background: string; result: ContrastRatio }> {
  return combinations.map(({ foreground, background, label }) => ({
    label: label || `${foreground} on ${background}`,
    foreground,
    background,
    result: checkContrast(foreground, background)
  }));
}

/**
 * Color blindness simulation
 *
 * Simulates how colors appear to individuals with different types of color blindness.
 *
 * Based on research from:
 * - Brettel, Viénot & Mollon (1997) computerized simulation of color appearance for dichromats
 * - Color blindness affects ~8% of males, ~0.5% of females
 *
 * Types:
 * - Protanopia: Red weakness (1% males)
 * - Deuteranopia: Green weakness (1% males)
 * - Tritanopia: Blue weakness (0.001% population)
 *
 * @param hex - Original color hex code
 * @param type - Type of color blindness
 * @returns Simulated color appearance
 */
export function simulateColorBlindness(
  hex: string,
  type: 'protanopia' | 'deuteranopia' | 'tritanopia'
): string {
  const { r, g, b } = hexToRgb(hex);

  let newR: number, newG: number, newB: number;

  switch (type) {
    case 'protanopia':
      // Red weakness - reds appear darker, red/green distinction lost
      newR = 0.567 * r + 0.433 * g;
      newG = 0.558 * r + 0.442 * g;
      newB = 0.242 * g + 0.758 * b;
      break;

    case 'deuteranopia':
      // Green weakness - similar to protanopia but slightly different
      newR = 0.625 * r + 0.375 * g;
      newG = 0.7 * r + 0.3 * g;
      newB = 0.3 * g + 0.7 * b;
      break;

    case 'tritanopia':
      // Blue weakness - blues/yellows confused
      newR = 0.95 * r + 0.05 * g;
      newG = 0.433 * r + 0.567 * g;
      newB = 0.475 * g + 0.525 * b;
      break;

    default:
      return hex;
  }

  // Clamp values to 0-255 range
  newR = Math.max(0, Math.min(255, Math.round(newR)));
  newG = Math.max(0, Math.min(255, Math.round(newG)));
  newB = Math.max(0, Math.min(255, Math.round(newB)));

  return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
}

/**
 * Check if a color combination is distinguishable for color blind users
 *
 * @param color1 - First color hex code
 * @param color2 - Second color hex code
 * @param type - Type of color blindness
 * @returns True if colors are sufficiently different
 */
export function isDistinguishableForColorBlind(
  color1: string,
  color2: string,
  type: 'protanopia' | 'deuteranopia' | 'tritanopia'
): boolean {
  const simulated1 = simulateColorBlindness(color1, type);
  const simulated2 = simulateColorBlindness(color2, type);

  // Calculate perceptual difference using Delta E (simplified)
  const rgb1 = hexToRgb(simulated1);
  const rgb2 = hexToRgb(simulated2);

  const deltaR = rgb1.r - rgb2.r;
  const deltaG = rgb1.g - rgb2.g;
  const deltaB = rgb1.b - rgb2.b;

  const distance = Math.sqrt(deltaR * deltaR + deltaG * deltaG + deltaB * deltaB);

  // Threshold of 50 provides good distinguishability
  return distance > 50;
}
