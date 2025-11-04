/**
 * Type definitions for hero section components
 *
 * Research-backed hero patterns for Epic 2 (Studios) and Epic 3 (Conversational AI)
 * All types support premium quality, accessibility, and conversion optimization
 */

import type { ReactNode } from 'react';

/**
 * Color palette variants for hero sections
 * - film-noir: Studios page (Film Noir Gradient - codex-studios-a)
 * - abyssal-emerald: Conversational AI page (Abyssal Emerald - codex-studios-b)
 */
export type PaletteVariant = 'film-noir' | 'abyssal-emerald';

/**
 * Service type for hero sections
 * - studios: Video production service
 * - conversational-ai: Support automation service
 */
export type ServiceVariant = 'studios' | 'conversational-ai';

/**
 * Base props for hero layout component
 * Provides gradient background, responsive grid, and glassmorphism utilities
 */
export interface HeroLayoutProps {
  /** Service variant determines page context */
  variant: ServiceVariant;

  /** Color palette for gradients and accents */
  palette: PaletteVariant;

  /** Hero content (headline, subhead, CTAs, trust signals) */
  children: ReactNode;

  /** Optional video placeholder component */
  videoPlaceholder?: ReactNode;

  /** Additional CSS classes */
  className?: string;

  /** Accessibility label for hero section */
  ariaLabel?: string;
}

/**
 * Trust signal types for social proof
 * - logos: Client logos (Fortune 500 focus)
 * - metrics: Quantitative proof points (10M views, 98% CSAT)
 * - badges: Awards, certifications, security badges
 * - mixed: Combination of types
 */
export type TrustSignalType = 'logos' | 'metrics' | 'badges' | 'mixed';

/**
 * Trust signal item for social proof display
 */
export interface TrustItem {
  /** Unique identifier */
  id: string;

  /** Trust signal type */
  type: 'logo' | 'metric' | 'badge';

  /** Display text or metric value */
  label: string;

  /** Optional image URL (for logos/badges) */
  imageUrl?: string;

  /** Alt text for accessibility */
  alt?: string;

  /** Optional link URL */
  href?: string;

  /** Optional metric value for count-up animation */
  value?: number;

  /** Optional unit for metrics (%, M+, etc.) */
  unit?: string;
}

/**
 * Props for TrustBar component
 * Displays client logos, metrics, or badges with glassmorphism
 */
export interface TrustBarProps {
  /** Trust signal type */
  type: TrustSignalType;

  /** Trust items to display */
  items: TrustItem[];

  /** Layout orientation */
  layout?: 'horizontal' | 'grid';

  /** Apply glassmorphism effect */
  glassEffect?: boolean;

  /** Color palette for styling */
  palette: PaletteVariant;

  /** Additional CSS classes */
  className?: string;
}

/**
 * CTA button variant based on palette
 * - gold: Studios primary CTA (Spotlight Gold #E1B341)
 * - emerald: AI primary CTA (Emerald Neon #16F0A1)
 * - outline-gold: Studios secondary CTA
 * - outline-emerald: AI secondary CTA
 */
export type CTAVariant = 'gold' | 'emerald' | 'outline-gold' | 'outline-emerald';

/**
 * CTA button configuration
 */
export interface CTAButton {
  /** Button text (verb-first, 1-3 words) */
  text: string;

  /** Button href */
  href: string;

  /** Visual variant */
  variant: CTAVariant;

  /** Optional ARIA label */
  ariaLabel?: string;
}

/**
 * Props for ConversionCTA component
 * Research-backed CTA patterns with GSAP hover animations
 */
export interface ConversionCTAProps {
  /** Primary CTA (most prominent) */
  primary: CTAButton;

  /** Optional secondary CTA (outline style) */
  secondary?: CTAButton;

  /** Layout orientation */
  layout?: 'horizontal' | 'vertical';

  /** Color palette for styling */
  palette: PaletteVariant;

  /** Additional CSS classes */
  className?: string;
}

/**
 * Props for MetricCounter component
 * Animated count-up with GSAP for metrics display
 */
export interface MetricCounterProps {
  /** Target value to count up to */
  targetValue: number;

  /** Optional prefix (e.g., "+", "$") */
  prefix?: string;

  /** Optional suffix/unit (e.g., "%", "x", "M+") */
  suffix?: string;

  /** Animation duration in seconds */
  duration?: number;

  /** Color palette for styling */
  palette: PaletteVariant;

  /** Additional CSS classes */
  className?: string;

  /** Optional ARIA label */
  ariaLabel?: string;
}

/**
 * Hero content configuration
 * Research-backed messaging structure (5-7 word headlines, verb-first CTAs)
 */
export interface HeroContent {
  /** Headline (5-7 words, outcome-driven) */
  headline: string;

  /** Subhead (10-15 words, proof + pain/aspiration) */
  subhead: string;

  /** Primary CTA configuration */
  primaryCTA: CTAButton;

  /** Optional secondary CTA */
  secondaryCTA?: CTAButton;

  /** Trust signals above fold */
  trustSignals?: TrustItem[];
}

/**
 * Video placeholder configuration for hero
 */
export interface HeroVideoConfig {
  /** Thumbnail URL (for lazy loading) */
  thumbnailUrl: string;

  /** Video title (for accessibility) */
  title: string;

  /** Optional video URL (if click-to-play) */
  videoUrl?: string;

  /** Autoplay (for hero background videos) */
  autoplay?: boolean;

  /** Muted (required for autoplay) */
  muted?: boolean;

  /** Loop (for autoplay videos) */
  loop?: boolean;
}

/**
 * Complete hero section configuration
 * Combines content, video, palette, and variant
 */
export interface HeroConfig {
  /** Service variant */
  variant: ServiceVariant;

  /** Color palette */
  palette: PaletteVariant;

  /** Hero content (headline, subhead, CTAs) */
  content: HeroContent;

  /** Optional video configuration */
  video?: HeroVideoConfig;

  /** Accessibility label */
  ariaLabel: string;
}
