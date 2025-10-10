/**
 * MultiPlatformCards - Studios Multi-Platform Native Section
 *
 * Epic 2, Story 2.2 - Premium section showcasing 6 major platforms
 *
 * Features:
 * - 3-layer parallax depth backgrounds (AC-3)
 * - 6 hexagon-shaped platform cards with OrganicCard (AC-1, AC-2)
 * - 3D Y-axis rotation reveal (rotationY: 90 → 0, stagger from center) (AC-4)
 * - Magnetic pull cursor-following interaction on all cards (AC-5)
 * - Responsive grid (1/2/3 columns) with mobile optimization (AC-7)
 *
 * Copy source: COPY_IMPLEMENTATION_GUIDE.md lines 110-192
 * Patterns: docs/architecture/animation-patterns.md#GSAP ScrollTrigger
 */

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useMagneticPull } from '@/components/epic2';
import { PlatformCard } from './PlatformCard';
import { PLATFORM_DATA, SECTION_COPY } from '@/data/studios/platform-data';
import type { PlatformConfig } from '@/data/studios/platform-data';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

export interface MultiPlatformCardsProps {
  className?: string;
}

/**
 * MultiPlatformCards Component
 *
 * Main container with:
 * - Section header and subheader
 * - 3 parallax background layers (different scroll speeds)
 * - Responsive grid of 6 platform cards
 * - Closing copy paragraph
 */
export const MultiPlatformCards = ({ className }: MultiPlatformCardsProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // AC-7: Responsive & Performance Optimization
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  // GSAP Context for ScrollTrigger (AC-4: 3D Rotation Reveal, AC-7: Responsive Optimization)
  useGSAP(() => {
    if (!cardsContainerRef.current) return;

    const cards = cardsContainerRef.current.querySelectorAll('.platform-card-wrapper');

    // AC-7: prefers-reduced-motion - instant reveals, no animation
    if (prefersReducedMotion) {
      gsap.set(cards, { opacity: 1, rotationY: 0 });
      return;
    }

    if (isMobile) {
      // Mobile: Simple fade-in (no 3D rotation for performance)
      gsap.from(cards, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: {
          amount: 0.9, // Total 0.9s for all 6 cards
          from: 'start',
        },
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });
    } else {
      // Desktop/Tablet: 3D Y-axis rotation reveal (rotationY: 90 → 0)
      gsap.from(cards, {
        rotationY: 90, // Edge-on initial state
        opacity: 0,
        duration: 1.2,
        stagger: {
          amount: 1.2, // Total 1.2s for all 6 cards
          from: 'center', // Stagger from center outward
          ease: 'power2.inOut',
        },
        ease: 'back.out(1.4)', // Overshoot effect for premium feel
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  }, { scope: sectionRef, dependencies: [isMobile, prefersReducedMotion] });

  // GSAP Context for Parallax Layers (AC-3: 3-Layer Background Animation, AC-7: Reduced Motion)
  useGSAP(() => {
    if (!sectionRef.current || prefersReducedMotion) return; // Disable parallax if reduced motion

    // Layer 1 (Background): Slowest scroll (0.2x speed)
    gsap.to('.parallax-layer-1', {
      y: '50%', // Moves down 50% during scroll
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1, // Smooth scroll-linked animation
      },
    });

    // Layer 2 (Midground): Medium scroll (0.5x speed)
    gsap.to('.parallax-layer-2', {
      y: '30%', // Moves down 30% during scroll
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
    });

    // Note: Layer 3 (Foreground - cards) scrolls normally (1.0x speed, no parallax)
  }, { scope: sectionRef, dependencies: [prefersReducedMotion] });

  return (
    <section
      ref={sectionRef}
      className={`relative py-20 md:py-32 overflow-hidden bg-black ${className || ''}`}
      aria-label="Multi-platform native video section"
    >
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-black" />

      {/* AC-3: Parallax Depth Layer 1 (Background - Slowest) */}
      <div
        className="parallax-layer-1 absolute -top-[20%] -left-[10%] w-[600px] h-[600px] md:w-[800px] md:h-[800px]
                   bg-gradient-radial from-indigo-600/20 via-cyan-600/10 to-transparent
                   rounded-full blur-3xl pointer-events-none will-change-transform"
        aria-hidden="true"
      />

      {/* AC-3: Parallax Depth Layer 2 (Midground - Medium) */}
      <div
        className="parallax-layer-2 absolute top-[30%] -right-[5%] w-[500px] h-[500px] md:w-[700px] md:h-[700px]
                   bg-gradient-radial from-fuchsia-600/15 via-orange-600/8 to-transparent
                   rounded-full blur-3xl pointer-events-none will-change-transform"
        aria-hidden="true"
      />

      {/* Content Container (Layer 3 - Foreground, normal scroll) */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header (AC-6: Section Copy) */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <h2 className="font-outfit font-black text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            {SECTION_COPY.header}
          </h2>
          <p className="font-inter text-lg md:text-xl text-white/80 leading-relaxed whitespace-pre-line">
            {SECTION_COPY.subheader}
          </p>
        </div>

        {/* Platform Cards Grid (AC-1: Responsive Grid) */}
        {/* CSS: perspective for 3D rotation container */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16 md:mb-20"
          style={{
            perspective: '1000px', // AC-4: 3D perspective for rotation effect
          }}
        >
          {PLATFORM_DATA.map((platform, index) => (
            <PlatformCardWithMagneticPull
              key={platform.name}
              platform={platform}
              index={index}
            />
          ))}
        </div>

        {/* Closing Copy (AC-6: Platform Section CTA) */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-inter text-base md:text-lg text-white/70 leading-relaxed whitespace-pre-line">
            {SECTION_COPY.closingCopy}
          </p>
        </div>
      </div>
    </section>
  );
};

/**
 * PlatformCardWithMagneticPull - Wrapper component applying magnetic pull to each card
 *
 * AC-5: Magnetic Pull Interaction
 * - Strength: 0.3
 * - Max distance: 30px
 * - Trigger radius: 150px (hardcoded in useMagneticPull hook)
 * - Throttled to 60fps (16ms)
 * - Disabled on mobile (<768px)
 */
interface PlatformCardWithMagneticPullProps {
  platform: PlatformConfig;
  index: number;
}

const PlatformCardWithMagneticPull = ({ platform, index }: PlatformCardWithMagneticPullProps) => {
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  // AC-5: Apply magnetic pull hook (disabled on mobile automatically by hook)
  const cardRef = useMagneticPull({
    strength: 0.3,
    maxDistance: 30,
    ease: 'power2.out',
  });

  return (
    <div
      ref={cardRef}
      className="platform-card-wrapper"
      style={{
        // AC-4: CSS for 3D transforms
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
        willChange: 'transform', // GPU acceleration hint
      }}
    >
      <PlatformCard platform={platform} />
    </div>
  );
};
