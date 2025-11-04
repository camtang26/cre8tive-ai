import { useState, useEffect, useRef } from "react"
import { Upload, TestTube, Rocket } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

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
  const [activeStep, setActiveStep] = useState(0)
  const [progressWidth, setProgressWidth] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate progress line on scroll into view
          setTimeout(() => {
            setProgressWidth(100)
            // Activate steps sequentially
            PROCESS_STEPS.forEach((_, index) => {
              setTimeout(() => {
                setActiveStep(index)
              }, index * 800)
            })
          }, 300)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

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
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-conversational-primary via-conversational-accent to-conversational-primary-soft transition-all duration-2000 ease-out"
                style={{ width: `${progressWidth}%` }}
              />

              {/* Step indicators */}
              <div className="absolute inset-0 flex justify-between px-4">
                {PROCESS_STEPS.map((step, index) => (
                  <div key={index} className="relative flex items-center justify-center">
                    <div
                      className={cn(
                        "relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 transition-all duration-500",
                        index <= activeStep
                          ? "border-white/20 bg-gradient-to-br shadow-[0_0_24px_rgba(16,185,129,0.6)] scale-110"
                          : "border-white/10 bg-white/5 scale-100"
                      )}
                      style={{
                        backgroundImage:
                          index <= activeStep
                            ? `linear-gradient(135deg, ${step.accentColor}, ${step.accentColor}CC)`
                            : undefined,
                      }}
                    >
                      <span className="text-2xl font-black text-white">{step.number}</span>
                    </div>

                    {/* Pulse animation for active step */}
                    {index === activeStep && (
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                          animation: "pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                        }}
                      >
                        <div
                          className="h-20 w-20 rounded-full border-2 opacity-75"
                          style={{ borderColor: step.accentColor }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step Cards - Desktop Grid */}
          <div className="grid grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <ProcessStepCard key={index} step={step} isActive={index <= activeStep} delay={index * 200} />
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

      {/* Animations */}
      <style jsx>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .duration-2000 {
          transition-duration: 2000ms;
        }

        @media (prefers-reduced-motion: reduce) {
          div[style*="animation"] {
            animation: none !important;
          }
          .duration-2000 {
            transition-duration: 300ms;
          }
        }
      `}</style>
    </section>
  )
}

interface ProcessStepCardProps {
  step: ProcessStep
  isActive: boolean
  delay: number
}

function ProcessStepCard({ step, isActive, delay }: ProcessStepCardProps) {
  const Icon = step.icon

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[24px] border p-8 transition-all duration-500",
        isActive ? "border-white/18 bg-white/[0.05]" : "border-white/10 bg-white/[0.02]"
      )}
      style={{
        animation: `step-card-fade-in 600ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms both`,
      }}
    >
      {/* Gradient overlay */}
      <div
        className={cn("absolute inset-0 opacity-0 transition-opacity duration-500", isActive && "opacity-100")}
        style={{
          background: `radial-gradient(circle at top left, ${step.accentColor}20, transparent 60%)`,
        }}
      />

      <div className="relative">
        {/* Icon */}
        <div
          className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-colors duration-500"
          style={{
            backgroundColor: isActive ? `${step.accentColor}20` : undefined,
            borderColor: isActive ? `${step.accentColor}40` : undefined,
          }}
        >
          <Icon className="h-7 w-7" style={{ color: isActive ? step.accentColor : "#ffffff60" }} />
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

      <style jsx>{`
        @keyframes step-card-fade-in {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
