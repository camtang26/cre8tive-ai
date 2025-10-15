/**
 * GsapFadeIn Component
 *
 * PHASE 2 PERFORMANCE FIX: Lightweight GSAP alternative to framer-motion's FadeIn
 *
 * Benefits:
 * - Eliminates 2,328ms framer-motion overhead (per Chrome DevTools trace)
 * - Reduces bundle size by ~50KB
 * - GPU-accelerated transforms (no React reconciliation)
 * - Consistent animation library (GSAP everywhere)
 *
 * @see docs/gsap-performance-report-2025-10-14.md
 */

import { useEffect, useRef, ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface GsapFadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
}

export const GsapFadeIn = ({
  children,
  delay = 0,
  duration = 0.8
}: GsapFadeInProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [delay, duration])

  return <div ref={containerRef}>{children}</div>
}
