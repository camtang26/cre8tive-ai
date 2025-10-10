/**
 * StarRating - Sequential star reveal animation
 *
 * Displays 5-star rating with sequential scale-in micro-animation using GSAP.
 * Stars appear AFTER card reveals with spring/elastic easing for premium feel.
 *
 * Performance: GPU-accelerated scale + opacity, 0.05s stagger (0.25s total)
 *
 * @see docs/stories/story-2.4.md AC #5 (lines 76-88)
 */

import { useEffect, useRef } from 'react'
import { Star } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CRE8TIVE_EASINGS } from '@/components/epic2/animations/easings'

gsap.registerPlugin(ScrollTrigger)

export interface StarRatingProps {
  rating: number
  /** Delay before stars animate (after card reveal), default: 0.4s */
  delay?: number
  /** Color of stars, default: #F59E0B (golden) */
  color?: string
  /** Trigger element for ScrollTrigger (parent card selector) */
  scrollTrigger?: string
  /** Enable animations, default: true */
  animated?: boolean
}

/**
 * StarRating Component
 *
 * @example Basic usage
 * ```tsx
 * <StarRating rating={5} />
 * ```
 *
 * @example With custom delay and color
 * ```tsx
 * <StarRating
 *   rating={5}
 *   delay={0.6}
 *   color="#EA580C"
 *   scrollTrigger=".testimonial-card"
 * />
 * ```
 */
export function StarRating({
  rating,
  delay = 0.4,
  color = '#F59E0B',
  scrollTrigger,
  animated = true,
}: StarRatingProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!animated || !containerRef.current) return

    const stars = containerRef.current.querySelectorAll('.star-icon')
    if (stars.length === 0) return

    const ctx = gsap.context(() => {
      gsap.from(stars, {
        scale: 0,
        opacity: 0,
        stagger: 0.05, // 0.05s between each star
        duration: 0.25, // Fast pop-in
        ease: CRE8TIVE_EASINGS.spring, // Elastic bounce
        delay, // Wait for card reveal
        scrollTrigger: scrollTrigger
          ? {
              trigger: scrollTrigger,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            }
          : undefined,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [animated, delay, scrollTrigger])

  return (
    <div
      ref={containerRef}
      className="flex justify-center gap-1 mb-4"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: rating }).map((_, i) => (
        <Star
          key={i}
          className="star-icon w-5 h-5 fill-current"
          style={{ color }}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}
