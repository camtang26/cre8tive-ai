/**
 * ParticleField Component
 *
 * Premium floating particle effect for hero backgrounds
 * Apple/high-end tech site quality - subtle but stunning
 *
 * Features:
 * - 20-30 particles floating across screen
 * - GSAP-animated slow drift (vertical + horizontal)
 * - Varying sizes, opacity, and blur for depth effect
 * - GPU-accelerated (translate3d)
 * - Continuous loop animation
 * - Color-matched to palette (gold/emerald)
 * - prefers-reduced-motion support
 */

import { useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import type { PaletteVariant } from './types/hero.types';

/**
 * Particle colors from locked palettes
 */
const PARTICLE_COLORS: Record<PaletteVariant, string> = {
  'film-noir': '#E1B341', // Spotlight Gold
  'abyssal-emerald': '#16F0A1', // Emerald Neon
};

/**
 * ParticleField Props
 */
interface ParticleFieldProps {
  palette: PaletteVariant;
  particleCount?: number;
  className?: string;
}

/**
 * Individual particle configuration
 */
interface Particle {
  id: number;
  x: number; // Starting X position (%)
  y: number; // Starting Y position (%)
  size: number; // Diameter in pixels
  opacity: number; // 0.1 to 0.4
  blur: number; // 0 to 3px (depth effect)
  duration: number; // Animation duration in seconds
  xOffset: number; // Horizontal drift distance
  yOffset: number; // Vertical drift distance
}

/**
 * Generate random particle configuration
 */
function generateParticle(id: number): Particle {
  return {
    id,
    x: Math.random() * 100, // Random X position (0-100%)
    y: Math.random() * 100, // Random Y position (0-100%)
    size: Math.random() * 6 + 2, // Size: 2px to 8px
    opacity: Math.random() * 0.3 + 0.1, // Opacity: 0.1 to 0.4
    blur: Math.random() * 3, // Blur: 0 to 3px (depth)
    duration: Math.random() * 20 + 15, // Duration: 15s to 35s
    xOffset: (Math.random() - 0.5) * 30, // Horizontal drift: -15% to +15%
    yOffset: Math.random() * -40 - 20, // Vertical drift: -20% to -60% (float up)
  };
}

/**
 * ParticleField Component
 *
 * Premium floating particle background effect
 */
export function ParticleField({
  palette,
  particleCount = 25,
  className = '',
}: ParticleFieldProps): ReactNode {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationsRef = useRef<gsap.core.Tween[]>([]);

  const particleColor = PARTICLE_COLORS[palette];

  // Generate particles on mount
  useEffect(() => {
    particlesRef.current = Array.from({ length: particleCount }, (_, i) => generateParticle(i));
  }, [particleCount]);

  // Animate particles
  useEffect(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // No animation if reduced motion preferred
      return;
    }

    const particleElements = containerRef.current.querySelectorAll('.particle');

    particleElements.forEach((element, index) => {
      const particle = particlesRef.current[index];
      if (!particle) return;

      // Continuous floating animation (loop infinitely)
      const animation = gsap.to(element, {
        x: `${particle.xOffset}%`, // Horizontal drift
        y: `${particle.yOffset}%`, // Vertical drift (float up)
        duration: particle.duration,
        ease: 'sine.inOut',
        repeat: -1, // Infinite loop
        yoyo: true, // Reverse direction on repeat
      });

      animationsRef.current.push(animation);
    });

    return () => {
      // Kill all animations on cleanup
      animationsRef.current.forEach((animation) => animation.kill());
      animationsRef.current = [];
    };
  }, [particleCount]);

  return (
    <div
      ref={containerRef}
      className={`particle-field pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {particlesRef.current.map((particle) => (
        <div
          key={particle.id}
          className="particle absolute"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            filter: `blur(${particle.blur}px)`,
            backgroundColor: particleColor,
            borderRadius: '50%',
            boxShadow: `0 0 ${particle.size * 2}px ${particleColor}`,
            willChange: 'transform', // GPU acceleration hint
            transform: 'translate3d(0, 0, 0)', // Force GPU layer
          }}
        />
      ))}
    </div>
  );
}

/**
 * Preset particle configurations
 */
export const ParticlePresets = {
  /**
   * Studios: Gold particles (subtle, elegant)
   */
  studiosGold: (palette: PaletteVariant = 'film-noir') => ({
    palette,
    particleCount: 25,
  }),

  /**
   * Conversational AI: Emerald particles (tech-forward)
   */
  conversationalAIEmerald: (palette: PaletteVariant = 'abyssal-emerald') => ({
    palette,
    particleCount: 30,
  }),

  /**
   * Dense: More particles for dramatic effect
   */
  dense: (palette: PaletteVariant) => ({
    palette,
    particleCount: 40,
  }),

  /**
   * Sparse: Minimal particles for subtle effect
   */
  sparse: (palette: PaletteVariant) => ({
    palette,
    particleCount: 15,
  }),
};
