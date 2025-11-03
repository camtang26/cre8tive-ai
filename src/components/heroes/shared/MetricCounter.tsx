/**
 * MetricCounter Component
 *
 * Animated count-up component for metrics display with GSAP
 * Research: Specific metrics (10x, 67%, 2x) proven to increase conversion
 *
 * Features:
 * - GSAP-powered count-up animation
 * - ScrollTrigger integration (animates when visible)
 * - prefers-reduced-motion support
 * - Prefix/suffix support (%, x, M+, etc.)
 * - Decimal precision handling
 * - Full WCAG 2.1 AA accessibility
 */

import { useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { MetricCounterProps, PaletteVariant } from './types/hero.types';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Accent colors for metrics from locked palettes
 */
const METRIC_COLORS: Record<PaletteVariant, string> = {
  'film-noir': '#E1B341', // Spotlight Gold
  'abyssal-emerald': '#16F0A1', // Emerald Neon
};

/**
 * MetricCounter Component
 *
 * Animated numerical display with GSAP count-up effect
 */
export function MetricCounter({
  targetValue,
  prefix = '',
  suffix = '',
  duration = 2,
  palette,
  className = '',
  ariaLabel,
}: MetricCounterProps): ReactNode {
  const counterRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  const metricColor = METRIC_COLORS[palette];

  // Determine decimal places from target value
  const decimalPlaces = targetValue % 1 === 0 ? 0 : 1;

  useEffect(() => {
    const element = counterRef.current;
    if (!element || hasAnimated.current) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // No animation, just display final value
      element.textContent = targetValue.toFixed(decimalPlaces);
      hasAnimated.current = true;
      return;
    }

    // GSAP count-up animation with ScrollTrigger
    const animation = gsap.to(element, {
      innerHTML: targetValue,
      duration,
      ease: 'power1.out',
      snap: { innerHTML: decimalPlaces === 0 ? 1 : 0.1 }, // Snap to integers or 0.1
      scrollTrigger: {
        trigger: element,
        start: 'top 80%', // Animate when element enters viewport
        once: true, // Only animate once
        onEnter: () => {
          hasAnimated.current = true;
        },
      },
      onUpdate: function () {
        // Format number during animation
        const currentValue = parseFloat(this.targets()[0].innerHTML);
        this.targets()[0].textContent = currentValue.toFixed(decimalPlaces);
      },
    });

    return () => {
      // Kill animation (which automatically cleans up its ScrollTrigger)
      animation.kill();
    };
  }, [targetValue, duration, decimalPlaces]);

  return (
    <span
      className={`metric-counter inline-flex items-baseline gap-0.5 font-bold tabular-nums ${className}`}
      style={{
        color: metricColor,
      }}
      aria-label={ariaLabel || `${prefix}${targetValue}${suffix}`}
    >
      {prefix && (
        <span className="metric-prefix" aria-hidden="true">
          {prefix}
        </span>
      )}
      <span
        ref={counterRef}
        className="metric-value"
        aria-hidden="true"
      >
        0
      </span>
      {suffix && (
        <span className="metric-suffix" aria-hidden="true">
          {suffix}
        </span>
      )}
    </span>
  );
}

/**
 * Preset metric configurations for common patterns
 */
export const MetricPresets = {
  /**
   * Studios: 2x engagement metric
   * Research: Specific multipliers outperform vague "better"
   */
  engagementMultiplier: (palette: PaletteVariant) => ({
    targetValue: 2,
    suffix: 'x',
    duration: 2,
    palette,
    ariaLabel: '2 times engagement increase',
  }),

  /**
   * Studios: 60% first-draft approval
   * Research: Studios-specific proof point
   */
  approvalRate: (palette: PaletteVariant) => ({
    targetValue: 60,
    suffix: '%',
    duration: 2,
    palette,
    ariaLabel: '60 percent first-draft approval rate',
  }),

  /**
   * Conversational AI: 10x scale multiplier
   * Research: Dramatic efficiency gains = +98% engagement
   */
  scaleMultiplier: (palette: PaletteVariant) => ({
    targetValue: 10,
    suffix: 'x',
    duration: 2.5,
    palette,
    ariaLabel: '10 times more conversations handled',
  }),

  /**
   * Conversational AI: 67% cost reduction
   * Research: Specific savings percentage converts better than vague claims
   */
  costSavings: (palette: PaletteVariant) => ({
    targetValue: 67,
    suffix: '%',
    duration: 2,
    palette,
    ariaLabel: '67 percent cost reduction',
  }),

  /**
   * Conversational AI: 98% satisfaction
   * Research: Human-like quality metric
   */
  satisfaction: (palette: PaletteVariant) => ({
    targetValue: 98,
    suffix: '%',
    duration: 2,
    palette,
    ariaLabel: '98 percent customer satisfaction',
  }),
};
