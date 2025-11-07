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

    if (cards.length === 0) {
      console.warn('[PortfolioAnimation] No cards found with data-motion="portfolio-card"');
      return;
    }

    // Set initial hidden state for ALL cards
    gsap.set(cards, {
      opacity: 0,
      scale: 0.95,
      willChange: 'transform, opacity'  // GPU acceleration hint
    });

    // Accessibility: Reduced motion fallback (fade only, no movement)
    if (prefersReducedMotion) {
      gsap.to(cards, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.3,
        clearProps: 'willChange'  // Remove hint after animation
      });
      console.log('[PortfolioAnimation] Reduced motion: fade only (' + cards.length + ' cards)');
      return;
    }

    // Full directional choreography (premium experience)
    const evenCards = cards.filter((_, i) => i % 2 === 0); // Cards 0,2,4 (LEFT)
    const oddCards = cards.filter((_, i) => i % 2 !== 0);  // Cards 1,3,5 (RIGHT)

    // Set starting positions for even/odd cards
    gsap.set(evenCards, { x: -60 });
    gsap.set(oddCards, { x: 60 });

    // Animate even cards from LEFT
    gsap.to(evenCards, {
      x: 0,
      scale: 1,
      opacity: 1,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power4.out',   // Ultra-smooth for luxurious 1.2s duration (was power3)
      clearProps: 'willChange',  // Remove GPU hint after animation
      scrollTrigger: {
        trigger: '#studios-portfolio',
        start: 'top 50%',
        toggleActions: 'play none none none',
      }
    });

    // Animate odd cards from RIGHT (120ms delay for wave)
    gsap.to(oddCards, {
      x: 0,
      scale: 1,
      opacity: 1,
      duration: 1.2,
      stagger: 0.15,
      ease: 'power4.out',   // Ultra-smooth
      delay: 0.12,
      clearProps: 'willChange',
      scrollTrigger: {
        trigger: '#studios-portfolio',
        start: 'top 50%',
        toggleActions: 'play none none none',
      }
    });

    console.log('[PortfolioAnimation] ✅ Directional L/R choreography initialized (' + cards.length + ' cards: ' + evenCards.length + ' left, ' + oddCards.length + ' right)');

  }, [prefersReducedMotion]);
}
