/**
 * WorkflowTransformation Component
 *
 * Story 1.8: Speed comparison section showing Traditional Process vs AI Briefing Engine
 * - Timeline comparison (2-4 weeks vs 2-5 minutes) with horizontal progress bars
 * - 4 TransformationValueCard components (Speed to Market, Brand Consistency, Creative Freedom, Seamless Handoff)
 * - GSAP reveal animations (timeline draw left-to-right, cards stagger fade-in)
 * - Responsive: 2×2 grid (desktop) / 1 column (mobile)
 *
 * @see docs/stories/story-1.8.md
 * @see docs/story-context-1.8.xml
 */

import { useEffect, useRef } from "react"
import { Zap, Shield, Palette, Handshake } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TransformationValueCard } from "@/components/briefing/TransformationValueCard"
import { briefingPalette } from "@/components/briefing/palette"

gsap.registerPlugin(ScrollTrigger)

// Timeline workflow data (AC1)
const workflows = [
  {
    name: "Traditional Process",
    duration: "2-4 weeks",
    stages: [
      "Brief intake",
      "Creative ideation",
      "Storyboard drafts",
      "Revisions",
      "Final approval"
    ],
    color: "gray",
  },
  {
    name: "AI Briefing Engine",
    duration: "2-5 minutes",
    stages: ["Brief → AI → Storyboard"],
    color: "indigo",
  },
]

// Value proposition cards (AC3)
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

  // GSAP animations (AC5) with React cleanup (AC7)
  // Reference: docs/architecture/animation-patterns.md - Pattern 1 + Pattern 4
  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      // Pattern 1: Timeline bars draw left-to-right (GPU-optimized scaleX)
      const timelineBars = containerRef.current?.querySelectorAll(".timeline-bar")
      if (timelineBars && timelineBars.length > 0) {
        gsap.set(timelineBars, { scaleX: 0, transformOrigin: "left center" })

        gsap.to(timelineBars, {
          scaleX: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".workflow-transformation",
            start: "top 80%",
            once: true
          }
        })
      }

      // Pattern 4: Value cards stagger fade-in
      const cards = containerRef.current?.querySelectorAll(".value-card")
      if (cards && cards.length > 0) {
        // Set initial state
        gsap.set(cards, { opacity: 0, y: 30 })

        // Animate in with stagger
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".value-cards-grid",
            start: "top 80%",
            once: true
          }
        })
      }

      // Force ScrollTrigger refresh after setup
      ScrollTrigger.refresh()
    }, containerRef)

    // CRITICAL (AC7): Cleanup to prevent memory leaks
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="workflow-transformation relative isolate mx-auto max-w-[1600px] px-4 py-24 md:px-12"
    >
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/60">
          Speed Comparison
        </p>
        <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl lg:text-[52px]">
          Workflow Transformation
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-white/70 md:text-xl">
          Transform weeks into minutes. AI Briefing Engine accelerates your creative workflow.
        </p>

        {/* Timeline Comparison (AC1, AC2) */}
        <div className="mt-16 space-y-8">
          {workflows.map((workflow, index) => (
            <div key={workflow.name} className="relative">
              {/* Workflow Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg md:text-xl font-bold text-white">
                  {workflow.name}
                </h3>
                <span
                  className="text-base md:text-lg font-semibold px-4 py-1 rounded-full"
                  style={{
                    color: workflow.color === "indigo" ? briefingPalette.colors.indigo : "#9CA3AF",
                    background: workflow.color === "indigo" ? `${briefingPalette.colors.indigo}20` : "rgba(156, 163, 175, 0.2)",
                  }}
                >
                  {workflow.duration}
                </span>
              </div>

              {/* Timeline Bar (AC2 - horizontal progress bar) */}
              <div className="relative h-3 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="timeline-bar absolute inset-y-0 left-0 rounded-full"
                  style={{
                    width: "100%",
                    background: workflow.color === "indigo"
                      ? `linear-gradient(90deg, ${briefingPalette.colors.indigo}, ${briefingPalette.colors.cyan})`
                      : "linear-gradient(90deg, #6B7280, #9CA3AF)",
                  }}
                />
              </div>

              {/* Stages */}
              <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                {workflow.stages.map((stage, stageIndex) => (
                  <span
                    key={stageIndex}
                    className="text-xs md:text-sm px-3 py-1 rounded-md bg-white/5 text-white/60 border border-white/10"
                  >
                    {stage}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Value Cards Grid (AC3, AC4) */}
        <div className="value-cards-grid mt-20 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {valueProps.map((prop, index) => (
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
