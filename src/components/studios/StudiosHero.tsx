/**
 * StudiosHero - Premium Video Production Hero with Epic 2 Orchestration
 *
 * Design Philosophy: Confidence + Premium Execution + Epic 2 Patterns
 * - Organic blob shapes (Epic 2 OrganicCard) replace static gradients
 * - GSAP orchestrated entrance (5-phase staggered reveal)
 * - Magnetic pull CTAs for cursor-following interaction
 * - Scroll-linked parallax for depth and premium layering
 * - Typography hierarchy with dramatic cinematic easing
 *
 * Copy Source: docs/COPY_IMPLEMENTATION_GUIDE.md#Studios Hero Section (lines 20-48)
 * Patterns: src/components/epic2/PREMIUM_USAGE.md
 */

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from "@/components/ui/button"
import { OrganicCard, useMagneticPull, CRE8TIVE_EASINGS } from '@/components/epic2'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

export const StudiosHero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const citationRef = useMagneticPull({ strength: 0.15, maxDistance: 10 })
  const primaryCTARef = useMagneticPull({ strength: 0.4, maxDistance: 40, rotation: true, rotationIntensity: 0.15 })
  const secondaryCTARef = useMagneticPull({ strength: 0.3, maxDistance: 30 })

  // Entrance animation timeline (7 phases) - uses useGSAP for automatic cleanup
  useGSAP(() => {
    console.log('[StudiosHero] GSAP entrance timeline initializing...');
    console.log('[StudiosHero] Epic 2 imports:', { OrganicCard, useMagneticPull, CRE8TIVE_EASINGS });

    const tl = gsap.timeline({
      onStart: () => console.log('[StudiosHero] Entrance animation started'),
      onComplete: () => console.log('[StudiosHero] Entrance animation complete')
    })

    // Phase 0: Blob shapes fade-in (CRITICAL FIX - was missing!)
    tl.to(['.bg-blob-1', '.bg-blob-2', '.bg-blob-3'], {
      opacity: 0.6,
      duration: 1.2,
      ease: 'power2.inOut',
    }, 0)

    // Phase 1: Citation badge fade-up
    tl.to('.hero-citation', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: CRE8TIVE_EASINGS.smooth,
    }, 0.3)

    // Phase 2: Headline word-by-word reveal (dramatic entrance)
    tl.to('.hero-headline', {
      opacity: 1,
      y: 0,
      duration: 1.0,
      ease: CRE8TIVE_EASINGS.cinematic,
      stagger: 0.15,
    }, '+=0.2')

    // Phase 3: Subheadline fade-in
    tl.to('.hero-subhead', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: CRE8TIVE_EASINGS.organic,
    }, '+=0.4')

    // Phase 4: Supporting copy fade-in
    tl.to('.hero-copy', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: CRE8TIVE_EASINGS.smooth,
    }, '+=0.2')

    // Phase 5: CTA buttons spring entrance
    tl.to('.hero-cta', {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: CRE8TIVE_EASINGS.spring,
      stagger: 0.1,
    }, '+=0.2')

    // Phase 6: Scroll indicator subtle fade
    tl.to('.scroll-indicator', {
      opacity: 0.4,
      duration: 0.8,
      ease: CRE8TIVE_EASINGS.smooth,
    }, '+=0.4')
  }, { scope: containerRef })

  // Parallax scroll effect for background blobs
  useGSAP(() => {
    console.log('[StudiosHero] Parallax animation initializing...');

    // Blob 1 - Fast parallax (top-left indigo)
    gsap.to('.bg-blob-1', {
      y: 150,
      opacity: 0.3, // Fades from 0.6 (entrance) to 0.3 on scroll
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      }
    })

    // Blob 2 - Medium parallax (center-right purple)
    gsap.to('.bg-blob-2', {
      y: 100,
      opacity: 0.4,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      }
    })

    // Blob 3 - Slow parallax (bottom-left orange)
    gsap.to('.bg-blob-3', {
      y: 60,
      opacity: 0.3,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      }
    })
  }, { scope: containerRef, dependencies: [] })

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
      role="banner"
      aria-label="Studios hero section"
    >
      {/* Dark base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-900 to-black" />

      {/* Epic 2 Organic Blob Shapes - Background Layer */}
      {/* Blob 1: Dark indigo (top-left) - Large floating shape */}
      <div className="bg-blob-1 absolute -top-[30%] -left-[15%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] opacity-0">
        <OrganicCard
          shape="blob"
          morphing
          morphIntensity={0.05}
          glowColor="#4f46e5" // Indigo-600
          className="w-full h-full"
        >
          <div className="w-full h-full bg-gradient-radial from-indigo-600/30 via-indigo-900/15 to-transparent" />
        </OrganicCard>
      </div>

      {/* Blob 2: Purple accent (center-right) - Medium organic shape */}
      <div className="bg-blob-2 absolute top-[15%] -right-[10%] w-[450px] h-[450px] md:w-[600px] md:h-[600px] opacity-0">
        <OrganicCard
          shape="organic"
          morphing
          morphIntensity={0.04}
          glowColor="#a855f7" // Purple-500
          className="w-full h-full"
        >
          <div className="w-full h-full bg-gradient-radial from-purple-600/25 via-purple-900/12 to-transparent" />
        </OrganicCard>
      </div>

      {/* Blob 3: Orange Studios accent (bottom-left) - Floating shape */}
      <div className="bg-blob-3 absolute -bottom-[20%] left-[5%] w-[400px] h-[400px] md:w-[550px] md:h-[550px] opacity-0">
        <OrganicCard
          shape="floating"
          morphing
          morphIntensity={0.06}
          glowColor="#ea580c" // Orange-600 (Studios brand color)
          className="w-full h-full"
        >
          <div className="w-full h-full bg-gradient-radial from-orange-600/30 via-orange-900/15 to-transparent" />
        </OrganicCard>
      </div>

      {/* Subtle grid overlay for tech/futuristic feel */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Film grain texture overlay - premium touch */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px'
        }}
      />

      {/* Vignette overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />

      {/* Content - asymmetric left-aligned layout */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-6xl">

          {/* Citation badge - floating top, creates asymmetric balance */}
          <div className="mb-8 md:mb-12">
            <div
              ref={citationRef}
              className="hero-citation inline-block opacity-0 translate-y-4"
            >
              <p className="font-inter font-light text-xs md:text-sm text-orange-400 tracking-wide uppercase">
                86% of enterprise brands adopting AI video by 2026 — Lemonlight Industry Report, 2025
              </p>
            </div>
          </div>

          {/* Headline - massive, commanding, geometric - word-by-word reveal */}
          <h1
            className="font-outfit font-black text-6xl md:text-7xl lg:text-7xl xl:text-8xl
                       tracking-tighter leading-[0.9] text-white mb-12 md:mb-16"
            style={{ fontFamily: 'Outfit, Inter, system-ui, sans-serif' }}
          >
            <span className="hero-headline inline-block opacity-0 translate-y-8">Premium</span>{' '}
            <span className="hero-headline inline-block opacity-0 translate-y-8">AI</span>{' '}
            <span className="hero-headline inline-block opacity-0 translate-y-8">Video</span>
            <br />
            <span className="hero-headline inline-block opacity-0 translate-y-8">Production</span>
            <br />
            <span className="hero-headline inline-block opacity-0 translate-y-8">Native</span>{' '}
            <span className="hero-headline inline-block opacity-0 translate-y-8">for</span>{' '}
            <span className="hero-headline inline-block opacity-0 translate-y-8">Every</span>{' '}
            <span className="hero-headline inline-block opacity-0 translate-y-8">Platform</span>
          </h1>

          {/* Subheadline - two-part structure with visual hierarchy */}
          <div className="max-w-3xl mb-16 md:mb-20">
            <p className="hero-subhead font-inter font-medium text-xl md:text-2xl text-white/90 leading-relaxed mb-4 opacity-0 translate-y-4">
              Full-stack video production combining AI innovation with professional-grade creative direction, sound design, and multi-platform optimization.
            </p>
            <p className="hero-copy font-inter font-normal text-lg md:text-xl text-white/70 leading-relaxed opacity-0 translate-y-4">
              Not automated clips—bespoke videos crafted for YouTube, TikTok, Instagram, LinkedIn, X, and Facebook. Image-to-video workflows for maximum quality and control.
            </p>
          </div>

          {/* CTAs - generous spacing, clear hierarchy with magnetic pull */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-8">
            <Button
              ref={primaryCTARef}
              size="lg"
              className={cn(
                "hero-cta font-inter font-medium text-base md:text-lg px-8 md:px-10 py-6 md:py-7",
                "bg-orange-600 hover:bg-orange-700 text-white",
                "transition-all duration-300 hover:scale-[1.02]",
                "shadow-lg shadow-orange-600/20 hover:shadow-xl hover:shadow-orange-600/30",
                "opacity-0 scale-90"
              )}
              onClick={() => {
                const portfolioSection = document.getElementById('portfolio-section');
                portfolioSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See Our Work
            </Button>
            <Button
              ref={secondaryCTARef}
              size="lg"
              variant="outline"
              className={cn(
                "hero-cta font-inter font-medium text-base md:text-lg px-8 md:px-10 py-6 md:py-7",
                "bg-transparent border-2 border-white/20 text-white",
                "hover:bg-white/5 hover:border-white/40",
                "transition-all duration-300",
                "opacity-0 scale-90"
              )}
              onClick={() => window.open("https://cal.com/cameron-tang-121990/30min", "_blank")}
            >
              Start a Project
            </Button>
          </div>

          {/* Subtle indicator for scroll */}
          <div className="mt-20 md:mt-32 scroll-indicator opacity-0">
            <div className="flex items-center gap-3 text-white/40 font-inter font-light text-sm">
              <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
              <span className="tracking-wider uppercase text-xs">Scroll to explore</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
