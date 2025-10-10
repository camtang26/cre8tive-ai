/**
 * PortfolioCard Component
 *
 * Individual portfolio item card using Epic 2 OrganicCard with blob shape.
 * Displays client case study with challenge → solution → deliverables format.
 *
 * @see docs/COPY_IMPLEMENTATION_GUIDE.md#Portfolio Card Template (lines 66-104)
 * @see docs/tech-spec-epic-2.md#Portfolio Section (lines 217-240)
 */

import { useState, useEffect } from 'react';
import { OrganicCard, useMagneticPull } from '@/components/epic2';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import type { PortfolioItem } from '@/data/studios/portfolio-data';
import { cn } from '@/lib/utils';

export interface PortfolioCardProps {
  /** Portfolio item data */
  item: PortfolioItem;
  /** Additional Tailwind classes */
  className?: string;
}

/**
 * PortfolioCard component
 *
 * Renders a single portfolio case study in a blob-shaped OrganicCard.
 * Features magnetic pull interaction (strength 0.3, maxDistance 30px).
 * Content structure: client name, industry, challenge, production steps,
 * deliverables, spec pills, optional video embed.
 */
export const PortfolioCard = ({ item, className }: PortfolioCardProps) => {
  // Accessibility: Check for prefers-reduced-motion
  const prefersReducedMotion = usePrefersReducedMotion();

  // Responsive: Check for desktop viewport (>=1024px)
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);

    return () => {
      window.removeEventListener('resize', checkViewport);
    };
  }, []);

  // Enable morphing only on desktop (>=1024px) and if user doesn't prefer reduced motion
  const enableMorphing = isDesktop && !prefersReducedMotion;

  // Magnetic pull hook (automatically disabled on mobile <768px)
  const cardRef = useMagneticPull({
    strength: 0.3,
    maxDistance: 30,
    ease: 'power2.out',
  });

  return (
    <div ref={cardRef} className="w-full h-full">
      <OrganicCard
        shape="blob"
        glowColor="#0891B2" // Studios teal accent
        morphing={enableMorphing} // Enable breathing morphing on desktop only (>=1024px) and if motion allowed
        morphIntensity={0.05} // ±5% shape variance
      className={cn(
        'portfolio-card relative h-full',
        'bg-gradient-to-br from-orange-500/10 via-teal-500/10 to-orange-500/5',
        'backdrop-blur-lg border border-white/10',
        className
      )}
    >
      {/* Card Content */}
      <div className="p-6 md:p-8 h-full flex flex-col">
        {/* Client Name & Industry */}
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-orange-500 mb-1">
            {item.clientName}
          </h3>
          <p className="text-sm md:text-base text-teal-400 font-medium">
            {item.industry}
          </p>
        </div>

        {/* Challenge */}
        <div className="mb-4">
          <h4 className="text-xs uppercase tracking-wide text-white/60 font-semibold mb-2">
            Challenge
          </h4>
          <p className="text-sm md:text-base text-white/80 leading-relaxed">
            {item.challenge}
          </p>
        </div>

        {/* Full-Stack Production (5 bullet points) */}
        <div className="mb-4 flex-grow">
          <h4 className="text-xs uppercase tracking-wide text-white/60 font-semibold mb-2">
            Full-Stack Production
          </h4>
          <ul className="space-y-2">
            {item.fullStackProduction.map((step, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-xs md:text-sm text-white/70"
              >
                <span className="text-teal-400 mt-0.5 flex-shrink-0">•</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Delivered */}
        <div className="mb-4">
          <h4 className="text-xs uppercase tracking-wide text-white/60 font-semibold mb-2">
            Delivered
          </h4>
          <p className="text-sm md:text-base text-white/80 leading-relaxed">
            {item.delivered}
          </p>
        </div>

        {/* Spec Pills */}
        <div className="spec-pills flex flex-wrap gap-2 mt-auto">
          <span className="px-3 py-1 bg-teal-500/20 border border-teal-400/30 rounded-full text-xs font-medium text-teal-300">
            {item.specs.formats}
          </span>
          <span className="px-3 py-1 bg-orange-500/20 border border-orange-400/30 rounded-full text-xs font-medium text-orange-300">
            {item.specs.resolution}
          </span>
          <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-white/80">
            {item.specs.duration}
          </span>
        </div>

        {/* Optional Video Embed (Click-to-play, not autoplay) */}
        {item.videoUrl && (
          <div className="mt-4 aspect-video rounded-lg overflow-hidden bg-black/20 border border-white/10">
            <iframe
              src={item.videoUrl}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={`${item.clientName} portfolio video`}
              loading="lazy"
            />
          </div>
        )}
      </div>
    </OrganicCard>
    </div>
  );
};
