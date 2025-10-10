/**
 * TestimonialsSection - Premium client testimonials with staggered reveals
 *
 * Features:
 * - OrganicCard blob shapes with glassmorphism
 * - GSAP staggered quote reveals (0.2s, organic easing)
 * - Star rating sequential scale-in micro-animation
 * - Citation badge glow pulse (CSS-animated)
 * - Responsive 1/2/3 column grid
 *
 * Performance: 60fps target, all animations GPU-accelerated
 *
 * @see docs/stories/story-2.4.md for complete requirements
 */

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Quote } from 'lucide-react'
import { OrganicCard } from '@/components/epic2/shapes/OrganicCard'
import { CRE8TIVE_EASINGS } from '@/components/epic2/animations/easings'
import { StarRating } from './StarRating'
import { CitationBadge } from './CitationBadge'
import {
  TESTIMONIALS_DATA,
  TESTIMONIALS_HEADER,
  type TestimonialConfig,
} from '@/data/studios/testimonials-data'

gsap.registerPlugin(ScrollTrigger)

export interface TestimonialsSectionProps {
  /** Override testimonials data */
  testimonials?: TestimonialConfig[]
  /** Override section title */
  title?: string
  /** Override section subtitle */
  subtitle?: string
}

/**
 * TestimonialsSection Component
 *
 * @example Default usage
 * ```tsx
 * <TestimonialsSection />
 * ```
 *
 * @example Custom testimonials
 * ```tsx
 * <TestimonialsSection
 *   testimonials={customTestimonials}
 *   title="Client Success Stories"
 * />
 * ```
 */
export function TestimonialsSection({
  testimonials = TESTIMONIALS_DATA,
  title = TESTIMONIALS_HEADER.title,
  subtitle = TESTIMONIALS_HEADER.subtitle,
}: TestimonialsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const cards = sectionRef.current.querySelectorAll('.testimonial-card')
    if (cards.length === 0) return

    // Check user motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReducedMotion) {
      // Skip animations, show content immediately
      gsap.set(cards, { opacity: 1, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      // Staggered card reveals with organic easing
      gsap.from(cards, {
        opacity: 0,
        y: 60, // Fade in from below
        stagger: 0.2, // 0.2s between each card
        duration: 0.8,
        ease: CRE8TIVE_EASINGS.organic, // Smooth deceleration
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%', // Animate when section 75% into viewport
          toggleActions: 'play none none reverse',
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="testimonials-section py-12 md:py-24 relative overflow-hidden"
      aria-label="Client testimonials"
    >
      {/* Studios Color Accents - Orange/Teal Theme */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            'radial-gradient(circle at 30% 20%, rgba(249, 115, 22, 0.15) 0%, transparent 50%), ' +
            'radial-gradient(circle at 70% 80%, rgba(20, 184, 166, 0.15) 0%, transparent 50%)',
          filter: 'blur(120px)',
          zIndex: 1,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gradient mb-4 tracking-tighter leading-none">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Testimonial Cards Grid - Responsive 1/2/3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.company}
              className="testimonial-card relative will-change-transform"
              style={{ transform: 'translateZ(0)' }} // GPU acceleration
            >
              <OrganicCard
                shape="blob"
                glowColor="#EA580C" // Studios orange
                className="h-full group"
              >
                {/* Card Content with Enhanced Glassmorphism (Design Enhancement Story 2.4) */}
                <div
                  className="relative p-10 md:p-12 h-full flex flex-col transition-all duration-300"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(15,23,42,0.4), rgba(30,41,59,0.6))',
                    backdropFilter: 'blur(24px) saturate(1.2)',
                    border: '1px solid rgba(234,88,12,0.15)',
                    boxShadow: '0 0 40px rgba(234,88,12,0.1)',
                  }}
                >
                  {/* Star Rating with Sequential Animation */}
                  <div className="flex gap-1.5 mb-6">
                    <StarRating
                      rating={testimonial.starRating}
                      delay={0.4 + index * 0.2} // Stagger after card reveals
                      color="#F59E0B" // Golden stars
                    />
                  </div>

                  {/* Quote Text with Enhanced Spacing (Design Enhancement Story 2.4) */}
                  <blockquote className="text-base md:text-lg leading-relaxed text-white/95 mb-6 flex-grow relative">
                    {/* Large Decorative Quote Mark */}
                    <Quote
                      className="absolute -top-4 -left-2 w-16 h-16 md:w-20 md:h-20 opacity-10 text-orange-500 pointer-events-none"
                      aria-hidden="true"
                    />
                    <p className="relative z-10">"{testimonial.quote}"</p>
                  </blockquote>

                  {/* Client Attribution with Enhanced Hierarchy (Design Enhancement Story 2.4) */}
                  <div className="mt-8 space-y-1">
                    <div className="font-semibold text-white/95">
                      {testimonial.clientName}
                    </div>
                    <div className="text-sm text-white/75">
                      {testimonial.clientTitle}
                    </div>
                    <div className="text-xs text-white/60 mt-2">
                      {testimonial.company}
                    </div>
                  </div>

                  {/* Citation Badge with Glow Pulse */}
                  {testimonial.industry && (
                    <CitationBadge
                      label={testimonial.industry}
                      glowColor="#EA580C"
                      badgeIndex={index}
                    />
                  )}
                </div>
              </OrganicCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
