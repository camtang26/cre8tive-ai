import { useRef } from "react"
import { Upload, TestTube, Rocket } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"

gsap.registerPlugin(useGSAP, ScrollTrigger)

interface ProcessStep {
  number: number
  title: string
  description: string
  details: string[]
  icon: LucideIcon
  accentColor: string
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Train",
    description: "Upload brand guidelines and sample conversations",
    details: [
      "Import brand voice documentation",
      "Upload historical customer conversations",
      "Define tone, terminology, and style preferences",
      "Set response templates and guardrails",
    ],
    icon: Upload,
    accentColor: "#10B981",
  },
  {
    number: 2,
    title: "Test",
    description: "Review AI responses and refine tone",
    details: [
      "Simulate real customer scenarios",
      "Review AI-generated responses",
      "Fine-tune vocabulary and phrasing",
      "Adjust confidence thresholds",
    ],
    icon: TestTube,
    accentColor: "#14F195",
  },
  {
    number: 3,
    title: "Deploy",
    description: "Launch across channels with confidence",
    details: [
      "Connect to chat, email, phone, SMS",
      "Configure escalation workflows",
      "Set up real-time monitoring",
      "Go live with rollback capability",
    ],
    icon: Rocket,
    accentColor: "#34D399",
  },
]

export function ConversationalBrandSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const step1Ref = useRef<HTMLDivElement>(null)
  const step2Ref = useRef<HTMLDivElement>(null)
  const step3Ref = useRef<HTMLDivElement>(null)
  const cardsContainerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  // 🎬 PREMIUM GSAP TIMELINE SEQUENCE
  useGSAP(() => {
    if (prefersReducedMotion) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        toggleActions: "play none none none"
      }
    })

    // Animate progress bar width (0 to 100%)
    tl.fromTo(progressBarRef.current,
      { width: "0%" },
      { width: "100%", duration: 2, ease: "power2.out" }
    )

    // Activate step indicators sequentially
    .to([step1Ref.current, step2Ref.current, step3Ref.current], {
      scale: 1.1,
      opacity: 1,
      duration: 0.6,
      stagger: 0.8, // 800ms between each step (matches original)
      ease: "back.out(1.4)"
    }, 0.3) // Start 300ms after progress bar starts

    // Animate cards in with stagger
    .from(cardsContainerRef.current?.children || [], {
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    }, 0.6) // Start overlapping with steps

  }, { scope: sectionRef, dependencies: [prefersReducedMotion] })

  return (
    <section
      id="conversational-brand"
      ref={sectionRef}
      aria-labelledby="conversational-brand-title"
      className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_25%_14%,rgba(16,185,129,0.16),transparent_54%),radial-gradient(circle_at_75%_18%,rgba(20,241,149,0.14),transparent_58%),linear-gradient(144deg,rgba(4,18,30,0.99)0%,rgba(6,32,47,0.99)54%,rgba(4,19,31,0.99)100%)] py-24 md:py-32"
    >
      {/* Noise texture */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.1] [background-image:url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.7\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.8\'/%3E%3C/svg%3E')]" />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.18)_0%,rgba(16,185,129,0)_70%)] blur-[160px]" aria-hidden />

      <div className="container relative mx-auto max-w-6xl px-4 md:px-6 xl:px-0">
        {/* Section header */}
        <div className="mx-auto mb-20 max-w-3xl space-y-6 text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-white/55">
            Simple Onboarding
          </div>

          <h2
            id="conversational-brand-title"
            className="text-4xl font-black tracking-tight text-conversational-headline md:text-[3.2rem] md:leading-[1.08]"
          >
            Perfectly On-Brand in 3 Steps
          </h2>

          <p className="text-lg leading-relaxed text-conversational-body md:text-[1.25rem]">
            From brand guidelines to live deployment in under 48 hours. No AI expertise required.
          </p>
        </div>

        {/* Process Timeline - Desktop */}
        <div className="hidden md:block">
          {/* Timeline connector line */}
          <div className="relative mx-auto mb-16 max-w-4xl">
            <div className="relative h-2 rounded-full bg-white/10">
              {/* Animated progress fill */}
              <div
                ref={progressBarRef}
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-conversational-primary via-conversational-accent to-conversational-primary-soft"
              />

              {/* Step indicators */}
              <div className="absolute inset-0 flex justify-between px-4">
                {PROCESS_STEPS.map((step, index) => {
                  const stepRef = index === 0 ? step1Ref : index === 1 ? step2Ref : step3Ref
                  return (
                    <div key={index} className="relative flex items-center justify-center">
                      <div
                        ref={stepRef}
                        className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white/20 bg-gradient-to-br shadow-[0_0_24px_rgba(16,185,129,0.6)] opacity-30"
                        style={{
                          backgroundImage: `linear-gradient(135deg, ${step.accentColor}, ${step.accentColor}CC)`
                        }}
                      >
                        <span className="text-2xl font-black text-white">{step.number}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Step Cards - Desktop Grid */}
          <div ref={cardsContainerRef} className="grid grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <ProcessStepCard key={index} step={step} />
            ))}
          </div>
        </div>

        {/* Mobile - Vertical Timeline */}
        <div className="space-y-8 md:hidden">
          {PROCESS_STEPS.map((step, index) => (
            <ProcessStepCardMobile key={index} step={step} delay={index * 150} />
          ))}
        </div>
      </div>

      {/* GSAP handles all animations now - no CSS keyframes needed! */}
    </section>
  )
}

interface ProcessStepCardProps {
  step: ProcessStep
}

function ProcessStepCard({ step }: ProcessStepCardProps) {
  const Icon = step.icon

  return (
    <div className="relative overflow-hidden rounded-[24px] border border-white/18 bg-white/[0.05] p-8">
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          background: `radial-gradient(circle at top left, ${step.accentColor}20, transparent 60%)`,
        }}
      />

      <div className="relative">
        {/* Icon */}
        <div
          className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border"
          style={{
            backgroundColor: `${step.accentColor}20`,
            borderColor: `${step.accentColor}40`,
          }}
        >
          <Icon className="h-7 w-7" style={{ color: step.accentColor }} />
        </div>

        {/* Title */}
        <h3 className="mb-3 text-2xl font-black text-conversational-headline">{step.title}</h3>

        {/* Description */}
        <p className="mb-6 text-sm text-conversational-body">{step.description}</p>

        {/* Details */}
        <ul className="space-y-2">
          {step.details.map((detail, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-conversational-body-muted">
              <div
                className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                style={{ backgroundColor: step.accentColor }}
              />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function ProcessStepCardMobile({ step, delay }: { step: ProcessStep; delay: number }) {
  const Icon = step.icon

  return (
    <div
      className="flex gap-4"
      style={{
        animation: `mobile-step-fade-in 500ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms both`,
      }}
    >
      {/* Number circle */}
      <div
        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 font-black text-white shadow-lg"
        style={{
          background: `linear-gradient(135deg, ${step.accentColor}, ${step.accentColor}CC)`,
          borderColor: `${step.accentColor}40`,
        }}
      >
        {step.number}
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="mb-4 flex items-center gap-3">
          <Icon className="h-6 w-6" style={{ color: step.accentColor }} />
          <h3 className="text-xl font-black text-conversational-headline">{step.title}</h3>
        </div>
        <p className="mb-4 text-sm text-conversational-body">{step.description}</p>
        <ul className="space-y-2">
          {step.details.map((detail, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-conversational-body-muted">
              <div
                className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                style={{ backgroundColor: step.accentColor }}
              />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        @keyframes mobile-step-fade-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          div {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  )
}
