/**
 * WorkflowTransformation Component v2 - Premium Redesign
 *
 * Story 1.8 v2: DRAMATIC speed comparison with proportional timeline bars
 * - Hero stat: "60x FASTER" with animated counter (AC1)
 * - Proportional timeline comparison: 100% vs 15% width (AC2)
 * - Master timeline animation: 8-step sequence with dramatic pause (AC3)
 * - Enhanced value cards: Larger sizes, icons, hover effects (AC4)
 * - Above-fold priority layout (AC5)
 * - GPU-optimized animations: 60fps target (AC6)
 * - React cleanup: Memory leak prevention (AC7)
 *
 * @see docs/stories/story-1.8-v2-premium.md
 * @see docs/story-context-1.1.8.xml
 */

import { useEffect, useRef } from "react"
import { Zap, Shield, Palette, Handshake } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TransformationValueCard } from "@/components/briefing/TransformationValueCard"
import { briefingPalette } from "@/components/briefing/palette"

gsap.registerPlugin(ScrollTrigger)

// Timeline workflow data (AC2)
const workflows = [
  {
    name: "Traditional Process",
    duration: "2-4 WEEKS",
    stages: [
      "Brief intake",
      "Creative ideation",
      "Storyboard drafts",
      "Revisions",
      "Final approval"
    ],
    width: "100%", // AC2: Full container width
    animationDuration: 4, // AC2: 4s slow crawl
    easing: "power1.inOut", // AC2: Slow, steady
    color: "gray",
  },
  {
    name: "AI Briefing Engine",
    duration: "2-5 MINUTES",
    stages: ["Brief → AI → Storyboard"],
    width: "15%", // AC2: 15% width (6.7:1 ratio)
    animationDuration: 0.8, // AC2: 0.8s fast zoom (< 1s threshold)
    easing: "back.out(2)", // AC2: Dramatic overshoot
    color: "indigo",
  },
]

// Value proposition cards (AC4)
const valueProps = [
  {
    title: "Speed to Market",
    description: "Minutes not weeks",
    icon: Zap,
    accentColor: "indigo" as const,
  },
  {
    title: "Brand Consistency",
    description: "Every ad aligns with brand",
    icon: Shield,
    accentColor: "cyan" as const,
  },
  {
    title: "Creative Freedom",
    description: "8 styles to match any vision",
    icon: Palette,
    accentColor: "fuchsia" as const,
  },
  {
    title: "Seamless Handoff",
    description: "Studios production ready",
    icon: Handshake,
    accentColor: "orange" as const,
  },
]

export const WorkflowTransformation = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  // AC3: Master Timeline Animation with AC7: React cleanup
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // CRITICAL: Wait for Lenis to be ready before setting up ScrollTrigger
    // Without this, ScrollTrigger won't detect Lenis scroll events on initial page load
    const setupAnimations = () => {
      const ctx = gsap.context(() => {
      // Find elements using selectors
      const heroStatContainer = container.querySelector('.hero-stat-container')
      const counterSpan = heroStatContainer?.querySelector('span')
      const traditionalBar = container.querySelector('.traditional-bar')
      const traditionalLabel = container.querySelector('.traditional-label')
      const aiBar = container.querySelector('.ai-bar')
      const aiLabel = container.querySelector('.ai-label')
      const cards = container.querySelectorAll('.value-card')

      // Early exit if critical elements not found
      if (!heroStatContainer || !counterSpan || !traditionalBar || !aiBar) {
        return
      }

      // AC3: Master timeline orchestrates 8-step sequence (~9 seconds total)
      const masterTL = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 75%", // AC3: Earlier than default 80% for better UX
          once: true, // AC3: Play once, no re-trigger
        }
      })

      // Step 1: Hero stat reveal (0.8s) - AC1
      masterTL.to(heroStatContainer, {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "back.out(2)"
      })

      // Step 2: Number counter animation (2s) - AC1
      // Use proxy object for reliable counter animation (GSAP best practice)
      const counterObj = { value: 1 }
      masterTL.to(counterObj, {
        value: 60,
        duration: 2,
        ease: "power2.out",
        snap: { value: 1 }, // AC1: Snap to integers
        onUpdate: () => {
          counterSpan.textContent = Math.round(counterObj.value) + "x"
        }
      }, "<0.3") // Start 0.3s after stat reveal begins

      // Step 3: Traditional bar slow crawl (4s) - AC2
      masterTL.to(traditionalBar, {
        scaleX: 1,
        transformOrigin: "left center",
        duration: 4,
        ease: "power1.inOut"
      }, ">") // Start after counter completes

      // Step 4: Traditional label fade (0.6s near bar completion) - AC2
      if (traditionalLabel) {
        masterTL.to(traditionalLabel, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out"
        }, "<3.5") // Start 3.5s into the 4s bar animation
      }

      // Step 5: DRAMATIC PAUSE (0.5s) - AC3: Let slow process sink in
      masterTL.add(() => {}, "+=0.5")

      // Step 6: AI bar FAST zoom (0.8s with overshoot) - AC2
      masterTL.to(aiBar, {
        scaleX: 1,
        transformOrigin: "left center",
        duration: 0.8,
        ease: "back.out(2)"
      }, ">")

      // Step 7: AI label pop (0.5s) - AC2
      if (aiLabel) {
        masterTL.to(aiLabel, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.7)"
        }, "<0.4") // Start 0.4s into AI bar animation
      }

      // Step 8: Value cards stagger (0.12s per card) - AC3
      if (cards.length > 0) {
        masterTL.to(cards, {
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "back.out(1.2)"
        }, "<0.3") // Start 0.3s into AI label animation
      }

        // Force ScrollTrigger refresh after setup
        ScrollTrigger.refresh()
      }, container)

      return ctx
    }

    // Check if Lenis is ready, or wait for it
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenis = (window as any).lenis
    let ctx: gsap.Context | null = null

    if (lenis) {
      // Lenis ready, setup immediately
      ctx = setupAnimations()
    } else {
      // Lenis not ready, wait for it with timeout fallback
      const lenisCheckInterval = setInterval(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((window as any).lenis) {
          clearInterval(lenisCheckInterval)
          ctx = setupAnimations()
        }
      }, 50) // Check every 50ms

      // Fallback: setup after 2s even if Lenis not detected
      const fallbackTimeout = setTimeout(() => {
        if (!ctx) {
          clearInterval(lenisCheckInterval)
          ctx = setupAnimations()
        }
      }, 2000)

      // CRITICAL (AC7): Cleanup to prevent memory leaks
      return () => {
        clearInterval(lenisCheckInterval)
        clearTimeout(fallbackTimeout)
        ctx?.revert()
      }
    }

    // CRITICAL (AC7): Cleanup to prevent memory leaks
    return () => ctx?.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="workflow-transformation relative isolate mx-auto max-w-[1600px] px-4 py-32 md:px-12"
      style={{ willChange: "transform" }} // AC6: GPU optimization hint
    >
      <div className="text-center">
        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60">
          Speed Comparison
        </p>

        {/* Headline */}
        <h2 className="mt-4 text-5xl font-black tracking-tight text-white md:text-6xl lg:text-[64px]">
          Workflow Transformation
        </h2>

        {/* Subheadline */}
        <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-white/70 md:text-xl">
          Transform weeks into minutes. AI Briefing Engine accelerates your creative workflow.
        </p>

        {/* AC1: Hero Speed Stat - IMMEDIATE VISUAL IMPACT */}
        <style>{`
          @keyframes gradient-shift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }

          .hero-stat-gradient {
            background: linear-gradient(
              135deg,
              ${briefingPalette.colors.indigo} 0%,
              ${briefingPalette.colors.indigo} 20%,
              ${briefingPalette.colors.cyan} 50%,
              ${briefingPalette.colors.fuchsia} 100%
            );
            background-size: 200% 100%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradient-shift 8s ease infinite;
            filter:
              drop-shadow(0 0 40px ${briefingPalette.colors.indigo}66)
              drop-shadow(0 0 20px ${briefingPalette.colors.cyan}66)
              drop-shadow(0 0 60px ${briefingPalette.colors.fuchsia}44)
              drop-shadow(0 4px 20px rgba(0, 0, 0, 0.8));
          }
        `}</style>
        <div
          className="hero-stat-container mt-24"
          style={{
            willChange: "transform", // AC6: GPU optimization
            opacity: 0, // Initial hidden for GSAP animation
            transform: "scale(0)" // Initial hidden for GSAP animation
          }}
        >
          <h2
            className="hero-stat-gradient text-9xl font-black leading-none inline-block"
            style={{
              display: "inline-block"
            }}
          >
            <span>1</span> FASTER
          </h2>
          <p className="mt-4 text-3xl text-white/80 font-light tracking-tight">
            Minutes not weeks
          </p>
        </div>

        {/* AC2: Timeline Comparison - PROPORTIONAL WIDTHS (100% vs 15%) */}
        <style>{`
          /* SVG Noise Texture for Traditional Bar */
          .traditional-bar::after {
            content: "";
            position: absolute;
            inset: 0;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E");
            border-radius: inherit;
            pointer-events: none;
          }

          /* Shimmer effect for AI Bar */
          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }

          .ai-bar::before {
            content: "";
            position: absolute;
            inset: 0;
            background: linear-gradient(
              90deg,
              transparent 0%,
              rgba(255, 255, 255, 0.3) 50%,
              transparent 100%
            );
            background-size: 200% 100%;
            animation: shimmer 3s ease-in-out infinite;
            border-radius: inherit;
            pointer-events: none;
          }

          /* Top highlight for 3D depth */
          .timeline-bar-3d::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 40%;
            background: linear-gradient(to bottom, rgba(255, 255, 255, 0.15), transparent);
            border-radius: inherit;
            pointer-events: none;
          }
        `}</style>
        <div className="mt-16 space-y-12 max-w-6xl mx-auto">
          {workflows.map((workflow, index) => (
            <div key={workflow.name} className="relative">
              {/* Workflow Name */}
              <div className="mb-6 text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {workflow.name}
                </h3>
              </div>

              {/* Timeline Bar Container - AC2: Proportional width */}
              <div className="relative">
                {/* Bar Background */}
                <div className="relative h-16 md:h-20 rounded-2xl bg-white/5 overflow-hidden">
                  <div
                    className={`timeline-bar-3d absolute inset-y-0 left-0 rounded-2xl ${index === 0 ? 'traditional-bar' : 'ai-bar'}`}
                    style={{
                      width: workflow.width, // AC2: 100% vs 15%
                      background: workflow.color === "indigo"
                        ? `linear-gradient(90deg, ${briefingPalette.colors.indigo} 0%, ${briefingPalette.colors.indigo} 20%, ${briefingPalette.colors.cyan} 60%, ${briefingPalette.colors.fuchsia} 100%)`
                        : "linear-gradient(90deg, #6B7280 0%, #6B7280 30%, #9CA3AF 100%)",
                      boxShadow: workflow.color === "indigo"
                        ? `inset 0 -2px 10px rgba(0, 0, 0, 0.3), 0 0 20px ${briefingPalette.colors.cyan}33`
                        : "inset 0 -2px 10px rgba(0, 0, 0, 0.5)",
                      willChange: "transform", // AC6: GPU optimization
                      transform: "scaleX(0)", // Initial hidden for GSAP animation
                      transformOrigin: "left center" // Match GSAP animation
                    }}
                  />
                </div>

                {/* Duration Label - AC2: HERO ELEMENT (not badge) */}
                <div
                  className={`mt-6 ${index === 0 ? 'traditional-label' : 'ai-label'}`}
                  style={{
                    willChange: "transform, opacity", // AC6: GPU optimization
                    opacity: 0, // Initial hidden for GSAP animation
                    transform: "translateY(10px)" // Initial hidden for GSAP animation
                  }}
                >
                  <p
                    className="text-4xl md:text-5xl font-black tracking-tighter"
                    style={{
                      color: workflow.color === "indigo"
                        ? briefingPalette.colors.cyan
                        : briefingPalette.text.secondary,
                    }}
                  >
                    {workflow.duration}
                  </p>
                </div>

                {/* Stages */}
                <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                  {workflow.stages.map((stage, stageIndex) => (
                    <span
                      key={stageIndex}
                      className="text-sm md:text-base px-4 py-2 rounded-lg bg-white/5 text-white/60 border border-white/10"
                    >
                      {stage}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AC4: Value Cards Grid - ABOVE FOLD (not hidden) */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {valueProps.map((prop) => (
            <TransformationValueCard
              key={prop.title}
              title={prop.title}
              description={prop.description}
              icon={prop.icon}
              accentColor={prop.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
