/**
 * ConversionCTA Component
 *
 * Research-backed CTA buttons with GSAP hover animations
 * Research: Short verb-first CTAs ("View Work", "Book Demo") = +16.62% conversion
 *
 * Features:
 * - Palette-specific variants (gold/emerald)
 * - GSAP hover animations (scale + glow)
 * - Primary/secondary hierarchy
 * - Full WCAG 2.1 AA accessibility
 * - Keyboard navigation support
 * - prefers-reduced-motion support
 */

import { useRef, type ReactNode, type MouseEvent } from 'react';
import gsap from 'gsap';
import type { ConversionCTAProps, CTAButton, CTAVariant, PaletteVariant } from './types/hero.types';

/**
 * CTA color configurations from locked palettes
 */
const CTA_STYLES: Record<CTAVariant, {
  background: string;
  text: string;
  border: string;
  hoverGlow: string;
}> = {
  gold: {
    background: '#E1B341', // Spotlight Gold
    text: '#0A121E', // Dark text for contrast
    border: '#E1B341',
    hoverGlow: 'rgba(225, 179, 65, 0.6)',
  },
  emerald: {
    background: '#16F0A1', // Emerald Neon
    text: '#032219', // Dark text for contrast
    border: '#16F0A1',
    hoverGlow: 'rgba(22, 240, 161, 0.6)',
  },
  'outline-gold': {
    background: 'transparent',
    text: '#E1B341',
    border: '#E1B341',
    hoverGlow: 'rgba(225, 179, 65, 0.3)',
  },
  'outline-emerald': {
    background: 'transparent',
    text: '#16F0A1',
    border: '#16F0A1',
    hoverGlow: 'rgba(22, 240, 161, 0.3)',
  },
};

/**
 * ConversionCTA Component
 *
 * Conversion-optimized CTA group with primary/secondary hierarchy
 */
export function ConversionCTA({
  primary,
  secondary,
  layout = 'horizontal',
  palette,
  className = '',
}: ConversionCTAProps): ReactNode {
  return (
    <div
      className={`conversion-cta ${className}`}
      role="navigation"
      aria-label="Call to action buttons"
    >
      <div
        className={`
          flex gap-4
          ${layout === 'horizontal' ? 'flex-row flex-wrap' : 'flex-col'}
        `}
      >
        <CTAButton button={primary} isPrimary palette={palette} />
        {secondary && <CTAButton button={secondary} isPrimary={false} palette={palette} />}
      </div>
    </div>
  );
}

/**
 * Individual CTA button component with GSAP hover animation
 */
function CTAButton({
  button,
  isPrimary,
  palette,
}: {
  button: CTAButton;
  isPrimary: boolean;
  palette: PaletteVariant;
}): ReactNode {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const styles = CTA_STYLES[button.variant];

  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  /**
   * GSAP hover animation
   * Scale 1.05 + glow effect (matches Netflix-style interactions)
   */
  const handleMouseEnter = (e: MouseEvent<HTMLAnchorElement>) => {
    if (prefersReducedMotion || !buttonRef.current) return;

    gsap.to(buttonRef.current, {
      scale: 1.05,
      boxShadow: `0 0 24px ${styles.hoverGlow}`,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (e: MouseEvent<HTMLAnchorElement>) => {
    if (prefersReducedMotion || !buttonRef.current) return;

    gsap.to(buttonRef.current, {
      scale: 1,
      boxShadow: '0 0 0px rgba(0, 0, 0, 0)',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <a
      ref={buttonRef}
      href={button.href}
      className={`
        cta-button
        inline-flex items-center justify-center
        rounded-lg px-6 py-3 sm:px-8 sm:py-4
        font-semibold
        transition-all duration-300
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        ${isPrimary ? 'text-base sm:text-lg' : 'text-sm sm:text-base'}
      `}
      style={{
        backgroundColor: styles.background,
        color: styles.text,
        border: `2px solid ${styles.border}`,
        '--focus-ring-color': styles.border,
      } as React.CSSProperties}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={button.ariaLabel || button.text}
    >
      {button.text}
    </a>
  );
}

/**
 * Preset CTA configurations for common patterns
 */
export const CTAPresets = {
  /**
   * Studios: Portfolio-first pattern
   * Research: "View Work" = 45% usage rate among top studios
   */
  studiosPortfolio: (palette: PaletteVariant) => ({
    primary: {
      text: 'View Our Work',
      href: '/studios/portfolio',
      variant: 'gold' as CTAVariant,
      ariaLabel: 'View our video production portfolio',
    },
    secondary: {
      text: 'See Case Studies',
      href: '/studios/case-studies',
      variant: 'outline-gold' as CTAVariant,
      ariaLabel: 'Read detailed case studies',
    },
    layout: 'horizontal' as const,
    palette,
  }),

  /**
   * Studios: Speed + Excellence pattern
   */
  studiosSpeed: (palette: PaletteVariant) => ({
    primary: {
      text: 'Start Your Project',
      href: '/studios/start',
      variant: 'gold' as CTAVariant,
      ariaLabel: 'Start your video production project',
    },
    secondary: {
      text: 'See Our Process',
      href: '/studios/process',
      variant: 'outline-gold' as CTAVariant,
      ariaLabel: 'Learn about our production process',
    },
    layout: 'horizontal' as const,
    palette,
  }),

  /**
   * Conversational AI: Scale emphasis
   * Research: "Book Demo" = highest conversion for enterprise SaaS
   */
  conversationalAIScale: (palette: PaletteVariant) => ({
    primary: {
      text: 'Book Demo',
      href: '/conversational-ai/demo',
      variant: 'emerald' as CTAVariant,
      ariaLabel: 'Book a demonstration of our AI agents',
    },
    secondary: {
      text: 'See Pricing',
      href: '/conversational-ai/pricing',
      variant: 'outline-emerald' as CTAVariant,
      ariaLabel: 'View pricing and plans',
    },
    layout: 'horizontal' as const,
    palette,
  }),

  /**
   * Conversational AI: ROI focus
   */
  conversationalAIROI: (palette: PaletteVariant) => ({
    primary: {
      text: 'Calculate Savings',
      href: '/conversational-ai/roi-calculator',
      variant: 'emerald' as CTAVariant,
      ariaLabel: 'Calculate your potential cost savings',
    },
    secondary: {
      text: 'See Case Studies',
      href: '/conversational-ai/case-studies',
      variant: 'outline-emerald' as CTAVariant,
      ariaLabel: 'Read customer success stories',
    },
    layout: 'horizontal' as const,
    palette,
  }),
};
