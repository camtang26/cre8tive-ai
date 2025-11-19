import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

/**
 * usePortfolioAnimation
 *
 * Directional L/R grid choreography for portfolio cards (Phase 3)
 *
 * Features:
 * - Alternating L/R slide-in pattern (separate even/odd animations)
 * - 120ms stagger creates visual wave effect
 * - Respects prefers-reduced-motion (fade only)
 * - React Strict Mode compatible (initialization guard)
 *
 * Animation Strategy:
 * - Even cards (0,2,4) slide from LEFT (-60px)
 * - Odd cards (1,3,5) slide from RIGHT (+60px)
 * - Odd cards delayed by 120ms for alternating wave
 *
 * Timeline:
 * Card 0 (even): 300ms + 0ms = 300ms
 * Card 1 (odd):  420ms + 0ms = 420ms (120ms after card 0)
 * Card 2 (even): 300ms + 240ms = 540ms
 * Card 3 (odd):  420ms + 240ms = 660ms
 * Card 4 (even): 300ms + 480ms = 780ms
 * Card 5 (odd):  420ms + 480ms = 900ms
 *
 * Research Citations:
 * - Archon MCP: GSAP grid stagger patterns validated 120ms timing
 * - Context7: Separate animations more reliable than function-based values
 *
 * @see docs/GSAP-HANDOFF-POST-COMPACT.md - Phase 3 specification
 */

// Register GSAP plugins at module level
gsap.registerPlugin(ScrollTrigger);

export function usePortfolioAnimation() {
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('[data-motion="portfolio-card"]');
    if (!cards.length) {
      return;
    }

    if (prefersReducedMotion) {
      gsap.set(cards, { opacity: 1, y: 0, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.batch(cards, {
        start: 'top 80%',
        once: true,
        onEnter: batch => {
          gsap.fromTo(
            batch,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: 'power2.out'
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, [prefersReducedMotion]);
}
