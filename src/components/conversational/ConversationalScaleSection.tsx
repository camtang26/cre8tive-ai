import { useRef } from "react"
import { MetricCounter } from "./shared/MetricCounter"
import { GlassmorphicCard } from "./shared/GlassmorphicCard"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"

const METRICS = [
  {
    end: 99.9,
    decimals: 1,
    suffix: "%",
    label: "Uptime SLA",
    sublabel: "Last 12 months",
    accentColor: "#10B981",
    accentGradient: "from-[rgba(16,185,129,0.36)] via-[rgba(16,185,129,0.12)] to-transparent",
    accentGlow: "rgba(16,185,129,0.28)",
  },
  {
    end: 50,
    decimals: 0,
    suffix: "M+",
    label: "Conversations Handled",
    sublabel: "Monthly across all clients",
    accentColor: "#14F195",
    accentGradient: "from-[rgba(20,241,149,0.36)] via-[rgba(20,241,149,0.12)] to-transparent",
    accentGlow: "rgba(20,241,149,0.28)",
  },
  {
    end: 26,
    decimals: 0,
    suffix: "%",
    label: "Average Conversion Lift",
    sublabel: "Across enterprise clients",
    accentColor: "#34D399",
    accentGradient: "from-[rgba(52,211,153,0.36)] via-[rgba(52,211,153,0.12)] to-transparent",
    accentGlow: "rgba(52,211,153,0.28)",
  },
]

export function ConversationalScaleSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const metricsContainerRef = useRef<HTMLDivElement>(null)
  const benefitsContainerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  // 🎬 GSAP Scroll Animations for cards
  useGSAP(() => {
    if (prefersReducedMotion) return

    // Animate metric cards with stagger
    gsap.from(metricsContainerRef.current?.children || [], {
      opacity: 0,
      x: 60,
      duration: 0.8,
      stagger: 0.2, // 200ms between each metric card
      ease: "power3.out",
      scrollTrigger: {
        trigger: metricsContainerRef.current,
        start: "top 75%",
        toggleActions: "play none none none"
      }
    })

    // Animate benefit cards with stagger
    gsap.from(benefitsContainerRef.current?.children || [], {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.15,
      ease: "back.out(1.2)",
      scrollTrigger: {
        trigger: benefitsContainerRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    })
  }, { scope: sectionRef, dependencies: [prefersReducedMotion] })

  return (
    <section
      ref={sectionRef}
      id="conversational-scale"
      aria-labelledby="conversational-scale-title"
      className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_15%_18%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_85%_22%,rgba(20,241,149,0.16),transparent_58%),linear-gradient(148deg,rgba(4,18,30,0.99)0%,rgba(6,32,47,0.97)52%,rgba(4,19,31,0.99)100%)] py-24 md:py-32"
    >
      {/* Noise texture */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.1] [background-image:url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.7\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.8\'/%3E%3C/svg%3E')]" />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute right-1/4 top-1/4 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.22)_0%,rgba(16,185,129,0)_70%)] blur-[130px]" aria-hidden />

      <div className="container relative mx-auto max-w-7xl px-4 md:px-6 xl:px-0">
        {/* Section badge */}
        <div className="mb-12 text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-white/55">
            The Hiring Alternative
          </div>
        </div>

        {/* Split Layout: Copy (60%) + Metrics (40%) */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Left Column: Copy */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              <h2
                id="conversational-scale-title"
                className="text-4xl font-black tracking-tight text-conversational-headline md:text-[3.2rem] md:leading-[1.08]"
              >
                Scale Without{" "}
                <span className="bg-gradient-to-r from-conversational-primary via-conversational-accent to-conversational-primary bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-x">
                  Headcount
                </span>
              </h2>

              <div className="space-y-6 text-lg leading-relaxed text-conversational-body md:text-[1.25rem]">
                <p>
                  Your support team is drowning. Every new customer means another support ticket, another conversation,
                  another hiring req. The bottleneck isn't technology—it's{" "}
                  <span className="font-semibold text-conversational-headline">human bandwidth</span>.
                </p>

                <p>
                  Conversational AI breaks that ceiling. Deploy AI agents that handle{" "}
                  <span className="font-semibold text-conversational-primary">thousands of simultaneous conversations</span>{" "}
                  with perfect brand voice adherence. Scale support, sales, and onboarding infinitely without adding
                  headcount.
                </p>

                <p>
                  Enterprise teams using our platform reduce support costs by{" "}
                  <span className="font-semibold text-conversational-accent">60%</span> while improving customer
                  satisfaction scores. No hiring freezes. No training delays. No scaling limits.
                </p>
              </div>

              {/* Key Benefits */}
              <div ref={benefitsContainerRef} className="grid grid-cols-1 gap-4 sm:grid-cols-2 pt-4">
                <BenefitCard
                  title="24/7 Availability"
                  description="Never miss a conversation, even at 3 AM on Sunday"
                  delay={0}
                />
                <BenefitCard
                  title="Instant Scaling"
                  description="Handle 10x traffic spikes without breaking a sweat"
                  delay={150}
                />
                <BenefitCard
                  title="Perfect Consistency"
                  description="Every customer gets the same premium experience"
                  delay={300}
                />
                <BenefitCard
                  title="Zero Onboarding"
                  description="Deploy new capabilities in hours, not months"
                  delay={450}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Metrics */}
          <div className="lg:col-span-2">
            <div ref={metricsContainerRef} className="sticky top-24 space-y-6">
              {METRICS.map((metric, index) => (
                <div key={index}>
                  <GlassmorphicCard
                    accentColor={metric.accentColor}
                    accentGradient={metric.accentGradient}
                    accentGlow={metric.accentGlow}
                  >
                    <div className="p-8">
                      <MetricCounter
                        end={metric.end}
                        decimals={metric.decimals}
                        suffix={metric.suffix}
                        label={metric.label}
                        sublabel={metric.sublabel}
                        duration={2000}
                      />
                    </div>
                  </GlassmorphicCard>
                </div>
              ))}

              {/* Interactive hover hint */}
              <p className="text-center text-sm text-conversational-body-muted opacity-60">
                Real metrics from enterprise deployments
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* GSAP handles all animations now - no CSS keyframes needed! */}
    </section>
  )
}

interface BenefitCardProps {
  title: string
  description: string
  delay: number
}

function BenefitCard({ title, description, delay }: BenefitCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-conversational-primary/30 hover:bg-white/[0.05]">
      {/* Gradient accent on hover */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-conversational-primary/10 via-transparent to-transparent" />
      </div>

      <div className="relative">
        <h4 className="mb-2 font-bold text-conversational-headline">{title}</h4>
        <p className="text-sm text-conversational-body-muted">{description}</p>
      </div>
    </div>
  )
}
