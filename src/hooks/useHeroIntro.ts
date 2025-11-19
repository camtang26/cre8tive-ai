import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'

/**
 * Lightweight hero intro animation without SplitText.
 * Ensures text is visible even if animations are skipped and avoids StrictMode issues.
 */
export function useHeroIntro(onComplete?: () => void) {
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAP(() => {
    const targets = [
      '.headline-premium',
      '[data-motion="hero-tagline"]',
      '[data-motion="hero-cta"]'
    ]

    if (prefersReducedMotion) {
      gsap.set(targets, { opacity: 1, y: 0, scale: 1 })
      onComplete?.()
      return
    }

    gsap.set('.headline-premium', { y: 40 })
    gsap.set('[data-motion="hero-tagline"]', { y: 20 })
    gsap.set('[data-motion="hero-cta"]', { scale: 0.9 })

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

    tl.to('.headline-premium', {
      opacity: 1,
      y: 0,
      duration: 0.9,
    })
      .to(
        '[data-motion="hero-tagline"]',
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        '-=0.4'
      )
      .to(
        '[data-motion="hero-cta"]',
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
        },
        '-=0.3'
      )
      .eventCallback('onComplete', () => onComplete?.())

  }, [prefersReducedMotion, onComplete])
}
