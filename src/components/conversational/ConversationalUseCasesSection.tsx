import { useState, useCallback } from "react"
import { GlassmorphicCard } from "./shared/GlassmorphicCard"
import { Headset, Target, TrendingUp, Rocket, Users, MessageSquare } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface UseCase {
  id: string
  title: string
  description: string
  icon: LucideIcon
  accentColor: string
  accentGradient: string
  accentGlow: string
  gridArea: string
  animationDelay: number
}

const USE_CASES: UseCase[] = [
  {
    id: "support",
    title: "24/7 Customer Support",
    description:
      "Handle thousands of simultaneous conversations with consistent quality and instant responses. Reduce support costs 60% while improving satisfaction.",
    icon: Headset,
    accentColor: "#10B981",
    accentGradient: "from-[rgba(16,185,129,0.36)] via-[rgba(16,185,129,0.12)] to-transparent",
    accentGlow: "rgba(16,185,129,0.28)",
    gridArea: "1 / 1 / 3 / 3", // Large card, 2x2
    animationDelay: 0,
  },
  {
    id: "qualification",
    title: "Lead Qualification & Routing",
    description:
      "Intelligent 24/7 lead scoring with automatic routing and meeting scheduling. Convert 40% more leads by engaging them instantly.",
    icon: Target,
    accentColor: "#14F195",
    accentGradient: "from-[rgba(20,241,149,0.36)] via-[rgba(20,241,149,0.12)] to-transparent",
    accentGlow: "rgba(20,241,149,0.28)",
    gridArea: "1 / 3 / 4 / 4", // Tall card, spans 3 rows
    animationDelay: 150,
  },
  {
    id: "sales",
    title: "Sales Assistance",
    description:
      "Guide customers with personalized recommendations and real-time answers. Increase average order value 35% with intelligent upsells.",
    icon: TrendingUp,
    accentColor: "#34D399",
    accentGradient: "from-[rgba(52,211,153,0.36)] via-[rgba(52,211,153,0.12)] to-transparent",
    accentGlow: "rgba(52,211,153,0.28)",
    gridArea: "3 / 1 / 4 / 2", // Standard card
    animationDelay: 300,
  },
  {
    id: "onboarding",
    title: "Customer Onboarding",
    description:
      "Interactive onboarding flows with contextual help and setup guidance. Reduce onboarding time 50% and boost activation rates 45%.",
    icon: Rocket,
    accentColor: "#6EE7B7",
    accentGradient: "from-[rgba(110,231,183,0.36)] via-[rgba(110,231,183,0.12)] to-transparent",
    accentGlow: "rgba(110,231,183,0.28)",
    gridArea: "3 / 2 / 4 / 3", // Standard card
    animationDelay: 450,
  },
]

export function ConversationalUseCasesSection() {
  return (
    <section
      id="conversational-use-cases"
      aria-labelledby="conversational-use-cases-title"
      data-motion-group="use-cases"
      className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_20%_15%,rgba(16,185,129,0.2),transparent_58%),radial-gradient(circle_at_80%_25%,rgba(20,241,149,0.18),transparent_60%),linear-gradient(152deg,rgba(4,18,30,0.98)0%,rgba(6,32,47,0.96)50%,rgba(4,19,31,0.98)100%)] py-24 md:py-32"
    >
      {/* Noise texture overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.1] [background-image:url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.7\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.8\'/%3E%3C/svg%3E')]" />

      {/* Large glow orbs */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.28)_0%,rgba(16,185,129,0)_70%)] blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(20,241,149,0.26)_0%,rgba(20,241,149,0)_72%)] blur-[130px]" aria-hidden />

      <div className="container relative mx-auto max-w-6xl px-4 md:px-6 xl:px-0">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-3xl space-y-6 text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-white/55">
            Proven Applications
          </div>

          <h2
            id="conversational-use-cases-title"
            className="text-4xl font-black tracking-tight text-conversational-headline md:text-[3.2rem] md:leading-[1.08]"
          >
            Where Conversational AI Excels
          </h2>

          <p className="text-lg leading-relaxed text-conversational-body md:text-[1.25rem]">
            Deploy AI agents across your customer journey. From first contact to ongoing support, our conversational AI
            scales your business without scaling your headcount.
          </p>
        </div>

        {/* Bento Grid - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:gap-8">
          {USE_CASES.map((useCase) => (
            <UseCaseCard key={useCase.id} useCase={useCase} />
          ))}
        </div>

        {/* Standard Grid - Tablet */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-8 lg:hidden">
          {USE_CASES.map((useCase) => (
            <UseCaseCardSimple key={useCase.id} useCase={useCase} />
          ))}
        </div>

        {/* Vertical Stack - Mobile */}
        <div className="flex flex-col gap-8 md:hidden">
          {USE_CASES.map((useCase) => (
            <UseCaseCardSimple key={useCase.id} useCase={useCase} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface UseCaseCardProps {
  useCase: UseCase
}

function UseCaseCard({ useCase }: UseCaseCardProps) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * 18 // Max 18deg (Studios pattern)
      const rotateY = ((x - centerX) / centerX) * -48 // Max 48deg (premium depth)

      setTilt({ rotateX, rotateY })
    },
    []
  )

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 })
  }, [])

  const Icon = useCase.icon

  return (
    <GlassmorphicCard
      className="h-full"
      accentColor={useCase.accentColor}
      accentGradient={useCase.accentGradient}
      accentGlow={useCase.accentGlow}
      style={{
        gridArea: useCase.gridArea,
        animation: `use-case-fade-in 500ms cubic-bezier(0.34, 1.56, 0.64, 1) ${useCase.animationDelay}ms both`,
        transform: `perspective(1400px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateZ(0)`,
        transition: "transform 0.2s ease-out",
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="p-12">
        {/* Premium icon container - 80x80 with depth */}
        <div className="mb-8 inline-flex">
          <div
            className="relative h-20 w-20 overflow-hidden rounded-3xl"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${useCase.accentColor}80, ${useCase.accentColor}30)`,
              boxShadow: `0 8px 32px ${useCase.accentGlow}, inset 0 1px 2px rgba(255,255,255,0.15)`,
            }}
          >
            {/* Inner highlight for depth */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/12 via-transparent to-transparent" />

            {/* Icon centered and large */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon className="h-10 w-10 text-white" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }} />
            </div>
          </div>
        </div>

        {/* Title - bolder and more space */}
        <h3 className="mb-5 text-2xl font-black text-conversational-headline">{useCase.title}</h3>

        {/* Description - trimmed and line-clamped */}
        <p className="text-base leading-relaxed text-conversational-body line-clamp-3">{useCase.description}</p>
      </div>

      {/* Inline keyframe animation */}
      <style jsx>{`
        @keyframes use-case-fade-in {
          from {
            opacity: 0;
            transform: translateY(60px) perspective(1000px) rotateX(0deg) rotateY(0deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) perspective(1000px) rotateX(0deg) rotateY(0deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          div {
            animation: none !important;
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg) !important;
          }
        }
      `}</style>
    </GlassmorphicCard>
  )
}

function UseCaseCardSimple({ useCase }: UseCaseCardProps) {
  const Icon = useCase.icon

  return (
    <GlassmorphicCard
      accentColor={useCase.accentColor}
      accentGradient={useCase.accentGradient}
      accentGlow={useCase.accentGlow}
      style={{
        animation: `use-case-fade-in 500ms cubic-bezier(0.34, 1.56, 0.64, 1) ${useCase.animationDelay}ms both`,
      }}
    >
      <div className="p-10 md:p-12">
        {/* Premium icon container - responsive sizing */}
        <div className="mb-8 inline-flex">
          <div
            className="relative h-16 w-16 md:h-20 md:w-20 overflow-hidden rounded-3xl"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${useCase.accentColor}80, ${useCase.accentColor}30)`,
              boxShadow: `0 8px 32px ${useCase.accentGlow}, inset 0 1px 2px rgba(255,255,255,0.15)`,
            }}
          >
            {/* Inner highlight for depth */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/12 via-transparent to-transparent" />

            {/* Icon centered and large */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon className="h-8 w-8 md:h-10 md:w-10 text-white" style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }} />
            </div>
          </div>
        </div>

        <h3 className="mb-5 text-xl md:text-2xl font-black text-conversational-headline">{useCase.title}</h3>
        <p className="text-sm md:text-base leading-relaxed text-conversational-body line-clamp-3">{useCase.description}</p>
      </div>

      <style jsx>{`
        @keyframes use-case-fade-in {
          from {
            opacity: 0;
            transform: translateY(60px);
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
    </GlassmorphicCard>
  )
}
