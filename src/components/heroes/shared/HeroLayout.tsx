/**
 * HeroLayout Component
 *
 * Base layout component for hero sections with:
 * - Locked gradient backgrounds (Film Noir / Abyssal Emerald)
 * - Responsive grid system
 * - Video placeholder integration
 * - Glassmorphism utilities
 * - Full WCAG 2.1 AA accessibility
 *
 * Research-backed for Epic 2 (Studios) and Epic 3 (Conversational AI)
 */

import { type ReactNode } from 'react';
import type { HeroLayoutProps, PaletteVariant } from './types/hero.types';

/**
 * Gradient backgrounds from locked color palettes
 * Film Noir: codex-studios-a (Nightfall Obsidian → Indigo Shadow)
 * Abyssal Emerald: codex-studios-b (Abyss Blue → Emerald tint)
 */
const GRADIENT_BACKGROUNDS: Record<PaletteVariant, string> = {
  'film-noir': 'linear-gradient(135deg, #05060D 0%, #0C1526 48%, #13263B 100%)',
  'abyssal-emerald': 'linear-gradient(135deg, #04121E 0%, #06293B 45%, #074C4E 100%)',
};

/**
 * Typography colors from locked palettes
 */
const TYPOGRAPHY_COLORS: Record<PaletteVariant, { headline: string; body: string }> = {
  'film-noir': {
    headline: '#F5E7C7', // Champagne Mist
    body: 'rgba(255, 255, 255, 0.8)', // 80% white
  },
  'abyssal-emerald': {
    headline: '#E4F8FF', // Ice Blue
    body: '#B8D9DE', // Sea Glass
  },
};

/**
 * HeroLayout Component
 *
 * Provides foundational structure for hero sections with locked design system
 */
export function HeroLayout({
  variant,
  palette,
  children,
  videoPlaceholder,
  className = '',
  ariaLabel,
}: HeroLayoutProps): ReactNode {
  const gradientBg = GRADIENT_BACKGROUNDS[palette];
  const colors = TYPOGRAPHY_COLORS[palette];

  return (
    <section
      role="banner"
      aria-label={ariaLabel || `${variant === 'studios' ? 'Studios' : 'Conversational AI'} hero section`}
      className={`hero-layout relative min-h-[80vh] w-full overflow-hidden ${className}`}
      style={{
        background: gradientBg,
      }}
    >
      {/* Background video placeholder (if provided) */}
      {videoPlaceholder && (
        <div className="absolute inset-0 z-0">
          {videoPlaceholder}
        </div>
      )}

      {/* Content overlay with gradient for readability */}
      <div
        className="relative z-10 flex min-h-[80vh] items-center"
        style={{
          background: videoPlaceholder
            ? palette === 'film-noir'
              ? 'linear-gradient(135deg, rgba(5, 6, 13, 0.85) 0%, rgba(19, 38, 59, 0.75) 100%)'
              : 'linear-gradient(135deg, rgba(4, 18, 30, 0.85) 0%, rgba(7, 76, 78, 0.75) 100%)'
            : 'transparent',
        }}
      >
        {/* Responsive container */}
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          {/* Grid layout: 60/40 split on desktop, stack on mobile */}
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Main content area (60% on desktop) */}
            <div
              className="flex flex-col justify-center lg:col-span-7"
              style={{
                // CSS custom properties for children to use
                '--hero-headline-color': colors.headline,
                '--hero-body-color': colors.body,
              } as React.CSSProperties}
            >
              {children}
            </div>

            {/* Visual/interactive area (40% on desktop) */}
            {/* This space can be used for portfolio grids, metrics dashboards, etc. */}
            <div className="hidden lg:col-span-5 lg:flex lg:items-center lg:justify-center">
              {/* Empty by default - specific heroes can add content here */}
            </div>
          </div>
        </div>
      </div>

      {/* Glassmorphism utility overlay (for optional effects) */}
      <div className="pointer-events-none absolute inset-0 z-20">
        {/* Subtle noise texture for premium feel */}
        <div
          className="h-full w-full opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
    </section>
  );
}

/**
 * CSS custom properties available to children:
 * --hero-headline-color: Headline color from palette
 * --hero-body-color: Body text color from palette
 *
 * Usage in child components:
 * <h1 style={{ color: 'var(--hero-headline-color)' }}>Headline</h1>
 * <p style={{ color: 'var(--hero-body-color)' }}>Body text</p>
 */
