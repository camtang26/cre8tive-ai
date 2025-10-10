/**
 * ImageToVideoComparison - Premium split-scroll comparison component
 *
 * Epic 2, Story 2.3 - Image-to-Video vs Text-to-Video quality comparison
 * Implements premium patterns: split scroll, VS divider rotation, ScrollTrigger pinning
 *
 * Features:
 * - OrganicCard shapes with cyan/gray glow accents
 * - Split scroll effect: left column scrolls up (-20%), right scrolls down (+20%)
 * - VS divider with 180° rotation and back.out overshoot
 * - ScrollTrigger pinning during scroll animation
 * - Responsive: 1 column mobile (no split scroll), 2 columns desktop
 * - GPU-accelerated with 60fps target
 *
 * @see docs/COPY_IMPLEMENTATION_GUIDE.md#Image-to-Video Quality Section lines 196-243
 * @see docs/tech-spec-epic-2.md#Premium Execution Features lines 931-947
 */

import { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { OrganicCard } from '@/components/epic2'
import { cn } from '@/lib/utils'
import type { ComparisonConfig } from '@/data/studios/comparison-data'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

/**
 * Props interface for ImageToVideoComparison component
 */
export interface ImageToVideoComparisonProps {
  /** Section title (e.g., "Image-to-Video: Quality Over Speed") */
  title: string
  /** Section subtitle explaining the comparison */
  subtitle: string
  /** Comparison data structure (benefits vs limitations) */
  comparison: ComparisonConfig
  /** Optional className for styling overrides */
  className?: string
}

/**
 * ImageToVideoComparison Component
 *
 * @example
 * ```tsx
 * import { ImageToVideoComparison } from '@/components/studios'
 * import { COMPARISON_DATA, COMPARISON_HEADER } from '@/data/studios/comparison-data'
 *
 * <ImageToVideoComparison
 *   title={COMPARISON_HEADER.title}
 *   subtitle={COMPARISON_HEADER.subtitle}
 *   comparison={COMPARISON_DATA}
 * />
 * ```
 */
export const ImageToVideoComparison = ({
  title,
  subtitle,
  comparison,
  className,
}: ImageToVideoComparisonProps) => {
  const sectionRef = useRef<HTMLElement>(null)
  const leftColumnRef = useRef<HTMLDivElement>(null)
  const rightColumnRef = useRef<HTMLDivElement>(null)
  const dividerRef = useRef<HTMLDivElement>(null)

  // GSAP ScrollTrigger animations with React cleanup
  useGSAP(
    () => {
      // Mobile detection: disable split scroll and pinning on <768px
      const isMobile = window.innerWidth < 768
      if (isMobile || !sectionRef.current || !leftColumnRef.current || !rightColumnRef.current || !dividerRef.current) {
        return
      }

      // Split scroll effect: left up (-20%), right down (+20%)
      // Pinning: section stays pinned during scroll animation
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 20%', // Pin starts when section enters viewport near top
          end: 'bottom 80%', // Pin ends when section exits near bottom
          pin: true, // Keep section pinned during animation
          scrub: true, // Scroll-linked animation (not time-based)
          anticipatePin: 1, // Smooth pinning start
        },
      })

      // Animate left column UP (negative y)
      timeline.to(
        leftColumnRef.current,
        {
          y: '-20%',
          ease: 'none', // Linear with scrub
        },
        0 // Start at timeline position 0
      )

      // Animate right column DOWN (positive y)
      timeline.to(
        rightColumnRef.current,
        {
          y: '20%',
          ease: 'none',
        },
        0 // Start at same time as left column
      )

      // VS divider rotation: 180° with back.out overshoot
      timeline.to(
        dividerRef.current,
        {
          rotationZ: 180,
          ease: 'back.out(1.4)', // Overshoot effect
          duration: 1,
        },
        0 // Start at same time as split scroll
      )

      // Cleanup handled by useGSAP automatically
    },
    { scope: sectionRef, dependencies: [] }
  )

  return (
    <section
      ref={sectionRef}
      className={cn(
        'relative py-16 md:py-32 overflow-hidden',
        className
      )}
      aria-label="Image-to-Video Quality Comparison"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gradient mb-6 tracking-tighter leading-none">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Image-to-Video (Our Approach) */}
          <div
            ref={leftColumnRef}
            className="will-change-transform"
            style={{ transform: 'translateZ(0)' }} // GPU acceleration
          >
            <OrganicCard
              shape="organic"
              glowColor="#06b6d4" // Cyan glow accent
              className="h-full"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 h-full flex flex-col">
                {/* Card Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  {comparison.imageToVideo.title}
                </h3>

                {/* Benefits List (✓ checkmarks) */}
                <ul className="space-y-4 mb-8 flex-1">
                  {comparison.imageToVideo.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-cyan-400 text-xl mt-0.5 flex-shrink-0">✓</span>
                      <span className="text-base md:text-lg text-white/90">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Supporting Text */}
                <p className="text-sm md:text-base text-white/70 italic border-t border-white/10 pt-6 mt-auto">
                  {comparison.imageToVideo.supportingText}
                </p>
              </div>
            </OrganicCard>
          </div>

          {/* VS Divider (180° rotation reveal) */}
          <div
            ref={dividerRef}
            className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 will-change-transform"
            style={{ transform: 'translateZ(0) rotateZ(0deg)' }} // Initial state + GPU hint
            aria-hidden="true"
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {/* VS Badge */}
              <div className="relative">
                {/* Glassmorphism background */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-full w-20 h-20 flex items-center justify-center shadow-2xl">
                  <span className="text-3xl font-black text-gradient">
                    VS
                  </span>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl -z-10" />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Text-to-Video (Comparison) */}
          <div
            ref={rightColumnRef}
            className="will-change-transform"
            style={{ transform: 'translateZ(0)' }} // GPU acceleration
          >
            <OrganicCard
              shape="organic"
              glowColor="#6b7280" // Muted gray glow
              className="h-full"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 h-full flex flex-col">
                {/* Card Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  {comparison.textToVideo.title}
                </h3>

                {/* Limitations List (• bullets) */}
                <ul className="space-y-4 mb-8 flex-1">
                  {comparison.textToVideo.limitations.map((limitation, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-white/40 text-xl mt-0.5 flex-shrink-0">•</span>
                      <span className="text-base md:text-lg text-white/70">
                        {limitation}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Supporting Text */}
                <p className="text-sm md:text-base text-white/60 italic border-t border-white/10 pt-6 mt-auto">
                  {comparison.textToVideo.supportingText}
                </p>
              </div>
            </OrganicCard>
          </div>
        </div>
      </div>
    </section>
  )
}
