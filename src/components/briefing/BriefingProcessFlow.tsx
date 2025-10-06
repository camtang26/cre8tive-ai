import { useEffect, useRef } from "react"
import { CheckSquare, Palette, Sparkles, FileText } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ProcessStepCard } from "@/components/briefing/ProcessStepCard"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"
import { briefingPalette } from "@/components/briefing/palette"

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger)

const processSteps = [
  {
    number: 1,
    title: "Define Your Brand",
    subtitle: "7 brief inputs with checkboxes",
    icon: CheckSquare,
    accentColor: "cyan" as const, // #0891B2
  },
  {
    number: 2,
    title: "Choose Your Visual Style",
    subtitle: "Select from 8 professional styles",
    icon: Palette,
    accentColor: "fuchsia" as const, // #C026D3
  },
  {
    number: 3,
    title: "AI Generates Your Storyboard",
    subtitle: "Synopsis + storyboard creation in minutes",
    icon: Sparkles,
    accentColor: "indigo" as const, // #4F46E5
  },
  {
    number: 4,
    title: "Review & Handoff to Studios",
    subtitle: "PDF delivery + production-ready handoff",
    icon: FileText,
    accentColor: "orange" as const, // #EA580C
  },
]

export function BriefingProcessFlow() {
  const containerRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  // GSAP Stagger Animation on Scroll (Pattern 1: Basic Scroll-Triggered Animation)
  useEffect(() => {
    if (prefersReducedMotion) {
      // Skip animation for users with prefers-reduced-motion
      gsap.set(".process-step", { opacity: 1, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.from(".process-step", {
        opacity: 0,
        y: 60,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
    }, containerRef)

    // CRITICAL: Cleanup to prevent memory leaks
    return () => ctx.revert()
  }, [prefersReducedMotion])

  return (
    <section
      ref={containerRef}
      className="process-flow py-16 md:py-24 px-4"
      style={{
        background: `radial-gradient(circle at center, rgba(67, 56, 202, 0.03) 0%, transparent 70%)`,
      }}
      aria-label="Briefing process workflow"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6">
            How It Works
          </h2>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: briefingPalette.text.secondary }}
          >
            Our streamlined 4-step process transforms your brand brief into a
            production-ready storyboard in minutes.
          </p>
        </div>

        {/* Process Steps - Responsive Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {processSteps.map((step, index) => (
            <ProcessStepCard
              key={step.number}
              {...step}
              isLast={index === processSteps.length - 1}
            />
          ))}
        </div>

        {/* Bottom CTA Text */}
        <div className="text-center mt-12 md:mt-16">
          <p
            className="text-base md:text-lg"
            style={{ color: briefingPalette.text.secondary }}
          >
            From initial brief to professional PDF in{" "}
            <span
              className="font-bold"
              style={{ color: briefingPalette.cyan.glow }}
            >
              under 10 minutes
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
