/**
 * Cre8tive Signature Easing Curves
 *
 * Brand-specific easing functions for GSAP animations. These curves create the
 * distinctive "Cre8tive feel" across all premium components. Uses built-in GSAP
 * easings as fallbacks, with optional CustomEase upgrade path for unique curves.
 *
 * @see https://gsap.com/docs/v3/Eases/ for GSAP easing reference
 * @see https://gsap.com/docs/v3/Eases/CustomEase/ for GreenSock Club upgrade
 * @see src/components/epic2/PREMIUM_USAGE.md for usage examples
 */

/**
 * Cre8tive Signature Easing Curves (Built-in Fallbacks)
 *
 * These easings use GSAP's built-in curves as fallbacks. For truly unique brand curves,
 * upgrade to GreenSock Club ($99/year) and replace with CustomEase definitions.
 *
 * @example Basic usage
 * ```tsx
 * gsap.to('.element', {
 *   x: 100,
 *   duration: 1,
 *   ease: CRE8TIVE_EASINGS.organic
 * })
 * ```
 *
 * @example With magnetic pull
 * ```tsx
 * const ref = useMagneticPull({
 *   strength: 0.3,
 *   ease: CRE8TIVE_EASINGS.smooth
 * })
 * ```
 */
export const CRE8TIVE_EASINGS = {
  /**
   * Organic - Smooth deceleration for natural movements
   * Use for: Shape morphing, organic card animations, parallax scrolling
   * Fallback: power4.out (strong deceleration at end)
   */
  organic: 'power4.out',

  /**
   * Smooth - Apple-like refinement for premium interactions
   * Use for: Magnetic pull, hover effects, micro-interactions
   * Fallback: power2.out (moderate deceleration)
   */
  smooth: 'power2.out',

  /**
   * Spring - Energetic bounce for playful moments
   * Use for: CTA buttons, modal entrances, success states
   * Fallback: elastic.out(1, 0.5) (built-in bounce)
   */
  spring: 'elastic.out(1, 0.5)',

  /**
   * Cinematic - Dramatic slowdown for hero moments
   * Use for: Hero section reveals, portfolio entrances, story transitions
   * Fallback: power4.inOut (symmetrical slowdown)
   */
  cinematic: 'power4.inOut',
} as const

/**
 * Type for easing curve names
 */
export type CRE8TIVEEasingName = keyof typeof CRE8TIVE_EASINGS

/**
 * GreenSock Club Upgrade Path (Optional - $99/year)
 *
 * For truly unique brand curves, upgrade to GreenSock Club and replace the above
 * fallbacks with CustomEase definitions. This allows SVG-based easing curves designed
 * in tools like https://gsap.com/docs/v3/Eases/CustomEase/#visual-ease-builder
 *
 * @example CustomEase upgrade (requires GreenSock Club membership)
 * ```ts
 * import { CustomEase } from 'gsap/CustomEase'
 *
 * gsap.registerPlugin(CustomEase)
 *
 * export const CRE8TIVE_EASINGS = {
 *   organic: CustomEase.create('cre8tive-organic', '0.68, -0.55, 0.27, 1.55'),
 *   smooth: CustomEase.create('cre8tive-smooth', '0.25, 0.46, 0.45, 0.94'),
 *   spring: CustomEase.create('cre8tive-spring', 'M0,0 C0.126,0.382 0.282,0.674 0.44,1.5 0.632,0.818 0.818,1.001 1,1'),
 *   cinematic: CustomEase.create('cre8tive-cinematic', '0.83, 0, 0.17, 1')
 * } as const
 * ```
 *
 * Benefits of CustomEase:
 * - Unique curves designed specifically for Cre8tive brand
 * - SVG-based curves provide more control than built-in easings
 * - Visual ease builder for iterative design
 * - Better differentiation from competitors
 *
 * Cost: $99/year (GreenSock Club membership)
 * Decision: Evaluate after Story 2.1-2.2 completion (see tech spec Risk #2)
 */

/**
 * Default easing for Epic 2 components (when no easing specified)
 */
export const DEFAULT_EASING: CRE8TIVEEasingName = 'smooth'
