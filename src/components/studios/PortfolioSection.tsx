/**
 * PortfolioSection Component
 *
 * Main portfolio showcase section for Studios page.
 * Features GSAP orchestrated timeline, magnetic pull interactions, and blob-shaped cards.
 *
 * Architecture:
 * - Container: Responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
 * - Cards: PortfolioCard with OrganicCard blob shapes
 * - Animations: 5-phase GSAP timeline (title, cards, angles, pills, CTA)
 * - Interactions: Magnetic pull on hover (desktop only)
 *
 * @see docs/COPY_IMPLEMENTATION_GUIDE.md#Our Work Section (lines 52-104)
 * @see docs/tech-spec-epic-2.md#Story 2.1 (lines 453-473)
 */

import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { PortfolioCard } from './PortfolioCard';
import type { PortfolioItem } from '@/data/studios/portfolio-data';
import { cn } from '@/lib/utils';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export interface PortfolioSectionProps {
  /** Section title (e.g., "Real Work. Real Results.") */
  title?: string;
  /** Section subtitle describing portfolio approach */
  subtitle?: string;
  /** Array of portfolio items to display */
  portfolioItems: PortfolioItem[];
  /** CTA button text */
  ctaText?: string;
  /** CTA button link */
  ctaLink?: string;
  /** Additional Tailwind classes */
  className?: string;
}

/**
 * PortfolioSection component
 *
 * Renders portfolio showcase with GSAP orchestration and magnetic pull.
 * Uses Epic 2 premium patterns for animations and interactions.
 */
export const PortfolioSection = ({
  title = 'Real Work. Real Results.',
  subtitle = 'Professional-grade AI video production across industries. Every project showcases our full-stack approach: creative planning, production excellence, sound design, and platform-specific optimization.',
  portfolioItems,
  ctaText = 'Start Your Project',
  ctaLink = '/contact',
  className
}: PortfolioSectionProps) => {
  // Refs for GSAP ScrollTrigger
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  /**
   * 5-Phase GSAP Orchestrated Timeline
   *
   * Phase 1 (0-0.8s): Title morphing entrance
   * Phase 2 (0.2-1.0s): Portfolio cards reveal with stagger
   * Phase 3 (0.4-1.2s): Card entrance angles (alternating rotation)
   * Phase 4 (0.6-1.4s): Spec pills stagger with elastic.out
   * Phase 5 (0.8-1.6s): CTA magnetic reveal
   *
   * Uses official useGSAP hook for automatic cleanup
   */
  useGSAP(
    () => {
      if (!sectionRef.current) return;

      // Create master timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%', // Trigger when top of section hits 75% of viewport
          toggleActions: 'play none none reverse', // play on enter, reverse on leave back
        },
      });

      // Phase 1 (0-0.8s): Title morphing entrance
      tl.from('.portfolio-title', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power4.out',
      }, 0); // Start at 0s

      // Phase 2 (0.2-1.0s): Portfolio cards reveal with stagger
      tl.from('.portfolio-card-wrapper', {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.2, // 0.2s between each card
        ease: 'power3.out',
      }, 0.2); // Start at 0.2s (overlaps title by 0.6s)

      // Phase 3 (0.4-1.2s): Card entrance with alternating angles
      // Rotation starts at -45°/+45° and ends at 0°
      const cards = gsap.utils.toArray('.portfolio-card-wrapper');
      cards.forEach((card, index) => {
        const rotation = index % 2 === 0 ? -45 : 45; // Alternate rotation
        tl.from(card as HTMLElement, {
          rotation: rotation,
          duration: 0.8,
          ease: 'back.out(1.2)',
        }, 0.4 + index * 0.2); // Start at 0.4s with stagger
      });

      // Phase 4 (0.6-1.4s): Spec pills stagger with elastic.out
      tl.from('.spec-pills', {
        opacity: 0,
        scale: 0.8,
        y: 20,
        duration: 0.8,
        stagger: 0.15,
        ease: 'elastic.out(1, 0.5)', // Visible bounce effect
      }, 0.6); // Start at 0.6s

      // Phase 5 (0.8-1.6s): CTA magnetic reveal with glow effect
      tl.from('.portfolio-cta', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
      }, 0.8); // Start at 0.8s

      // Cleanup handled automatically by useGSAP
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="portfolio-section"
      ref={sectionRef}
      className={cn(
        'portfolio-section relative py-16 md:py-24 lg:py-32',
        'bg-gradient-to-b from-black via-gray-900 to-black',
        className
      )}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          ref={titleRef}
          className="portfolio-title text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Portfolio Grid */}
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
        >
          {portfolioItems.map((item, index) => (
            <div
              key={`${item.clientName}-${index}`}
              className={`portfolio-card-wrapper card-${index + 1}`}
              data-card-index={index}
            >
              <PortfolioCard item={item} />
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div
          ref={ctaRef}
          className="portfolio-cta text-center"
        >
          <p className="text-base md:text-lg text-white/80 mb-6 max-w-2xl mx-auto">
            Ready to create professional-grade video for your platforms?
          </p>
          <Button
            size="lg"
            className="text-base md:text-lg px-8 py-6 bg-orange-600 hover:bg-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => {
              if (ctaLink.startsWith('http')) {
                window.open(ctaLink, '_blank');
              } else {
                window.location.href = ctaLink;
              }
            }}
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
};
