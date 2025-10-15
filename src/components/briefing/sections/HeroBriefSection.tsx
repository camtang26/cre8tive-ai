import { useCallback, useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"
import { heroDetailPills, heroFieldTiles, platformCards, StageMetadata } from "./section-data"
import { useScrollTriggerAnimation } from "@/hooks/useScrollTriggerAnimation"
import { ReducedMotionIllustration } from "@/components/briefing/ReducedMotionIllustration"
import { StepLabel } from "@/components/briefing/StepLabel"
import {
  DESKTOP_MEDIA_QUERIES,
  HERO_MOTION,
  HERO_SCROLL_OFFSETS,
  HeroMotionConfig,
  ScrollOffsetConfig,
  resolveMotionTier,
} from "./motion-config"

gsap.registerPlugin(ScrollTrigger)

interface HeroBriefSectionProps {
  stage: StageMetadata
  onStageEnter?: (stageId: string) => void
  onStageLeave?: (stageId: string) => void
}

export function HeroBriefSection({ stage, onStageEnter, onStageLeave }: HeroBriefSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const headlineRef = useRef<HTMLHeadingElement | null>(null)
  const subheadlineRef = useRef<HTMLParagraphElement | null>(null)
  const descriptionRef = useRef<HTMLParagraphElement | null>(null)
  const detailRef = useRef<HTMLDivElement | null>(null)
  const instructionRef = useRef<HTMLDivElement | null>(null)
  const heroCardRef = useRef<HTMLDivElement | null>(null)
  const fieldRefs = useRef<HTMLDivElement[]>([])
  const detailPillRefs = useRef<HTMLDivElement[]>([])

  const onStageEnterRef = useRef<HeroBriefSectionProps["onStageEnter"]>(undefined)
  const onStageLeaveRef = useRef<HeroBriefSectionProps["onStageLeave"]>(undefined)

  fieldRefs.current = []
  detailPillRefs.current = []

  useEffect(() => {
    onStageEnterRef.current = onStageEnter
  }, [onStageEnter])

  useEffect(() => {
    onStageLeaveRef.current = onStageLeave
  }, [onStageLeave])

  const runAnimation = useCallback(
    ({
      prefersReducedMotion,
      matchMedia,
    }: {
      prefersReducedMotion: boolean
      matchMedia: gsap.MatchMedia
    }) => {
      const container = containerRef.current
      if (!container) return

      if (prefersReducedMotion) {
        container.setAttribute("data-motion", "reduced")
        ScrollTrigger.create({
          trigger: container,
          start: "top 75%",
          end: "bottom 45%",
          onEnter: () => onStageEnterRef.current?.(stage.id),
          onEnterBack: () => onStageEnterRef.current?.(stage.id),
          onLeave: () => onStageLeaveRef.current?.(stage.id),
          onLeaveBack: () => onStageLeaveRef.current?.(stage.id),
        })
        return
      }

      container.setAttribute("data-motion", "full")

      const backgrounds = Array.from(container.querySelectorAll("[data-hero-background]"))
      const animatedElements = [
        ...backgrounds,
        instructionRef.current,
        headlineRef.current,
        subheadlineRef.current,
        descriptionRef.current,
        detailRef.current,
        ...detailPillRefs.current,
        heroCardRef.current,
        ...fieldRefs.current,
      ].filter(Boolean) as HTMLElement[]

      const applyWillChange = () => {
        if (!animatedElements.length) return
        requestAnimationFrame(() => {
          gsap.set(animatedElements, { willChange: "transform, opacity" })
        })
      }

      const clearWillChange = () => {
        if (!animatedElements.length) return
        gsap.set(animatedElements, { clearProps: "willChange" })
      }

      const createTimeline = (motion: HeroMotionConfig, offsets: ScrollOffsetConfig) => {
        if (animatedElements.length) {
          gsap.set(animatedElements, { autoAlpha: 0 })
        }
        applyWillChange()

        // Animation timeline - plays once and kills itself for memory efficiency
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: () => `top ${Math.round(offsets.startPercent * 100)}%`,
            end: () => `bottom ${Math.round(offsets.endPercent * 100)}%`,
            once: true, // Kill trigger after reaching end once
            toggleActions: "play none none none", // CRITICAL: Only play on enter, never on scrollback
            invalidateOnRefresh: true,
            refreshPriority: 5,
            lazy: false,
          },
        })

        // Separate tracking trigger - stays alive for stage tracking & analytics
        ScrollTrigger.create({
          trigger: container,
          start: () => `top ${Math.round(offsets.startPercent * 100)}%`,
          end: () => `bottom ${Math.round(offsets.endPercent * 100)}%`,
          onEnter: () => onStageEnterRef.current?.(stage.id),
          onEnterBack: () => onStageEnterRef.current?.(stage.id),
          onLeave: () => onStageLeaveRef.current?.(stage.id),
          onLeaveBack: () => onStageLeaveRef.current?.(stage.id),
        })

        const headlineTargets = [headlineRef.current, subheadlineRef.current, descriptionRef.current].filter(
          Boolean
        ) as HTMLElement[]
        const pillTargets = detailPillRefs.current.filter(Boolean)
        const fieldTargets = fieldRefs.current.filter(Boolean)

        timeline.fromTo(
          backgrounds,
          { autoAlpha: 0, scale: 0.98 },
          {
            autoAlpha: 1,
            scale: 1,
            duration: motion.backgroundDuration,
            ease: motion.backgroundEase,
          }
        )

        if (instructionRef.current) {
          timeline.fromTo(
            instructionRef.current,
            { autoAlpha: 0, y: -16 },
            { autoAlpha: 1, y: 0, duration: motion.detailDuration, ease: motion.detailEase },
            "-=0.4"
          )
        }

        if (headlineTargets.length) {
          timeline.fromTo(
            headlineTargets,
            { autoAlpha: 0, y: 80 },
            {
              autoAlpha: 1,
              y: 0,
              duration: motion.headlineDuration,
              ease: motion.headlineEase,
              stagger: 0.15,
            },
            motion.headlineOverlap
          )
        }

        if (detailRef.current) {
          timeline.fromTo(
            detailRef.current,
            { autoAlpha: 0, y: 20 },
            { autoAlpha: 1, y: 0, duration: motion.detailDuration, ease: motion.detailEase },
            motion.detailOverlap
          )
        }

        if (pillTargets.length) {
          timeline.fromTo(
            pillTargets,
            { autoAlpha: 0, y: 24 },
            {
              autoAlpha: 1,
              y: 0,
              duration: motion.detailDuration,
              stagger: 0.08,
              ease: motion.detailEase,
            },
            ">-0.2"
          )
        }

        if (heroCardRef.current) {
          timeline.fromTo(
            heroCardRef.current,
            { autoAlpha: 0, y: 60, scale: 0.95 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: motion.cardDuration,
              ease: motion.cardEase,
              force3D: true,
            },
            motion.cardOverlap
          )
        }

        if (fieldTargets.length) {
          timeline.fromTo(
            fieldTargets,
            { autoAlpha: 0, y: 32 },
            {
              autoAlpha: 1,
              y: 0,
              duration: motion.tileDuration,
              stagger: motion.tileStagger,
              ease: motion.tileEase,
              force3D: true,
            },
            motion.tileOverlap
          )
        }

        if (animatedElements.length) {
          const releaseWillChange = () => clearWillChange()
          timeline.eventCallback("onComplete", releaseWillChange)
          timeline.eventCallback("onReverseComplete", releaseWillChange)
          timeline.eventCallback("onInterrupt", releaseWillChange)
        }

        return timeline
      }

      matchMedia.add("(max-width: 1023px)", () => {
        const timeline = createTimeline(HERO_MOTION.base, HERO_SCROLL_OFFSETS.base)
        return () => {
          timeline?.kill()
          clearWillChange()
        }
      })

      matchMedia.add(DESKTOP_MEDIA_QUERIES, (context) => {
        if (!context.conditions.desktopUp) {
          return
        }

        const tier = resolveMotionTier(context.conditions)
        const timeline = createTimeline(HERO_MOTION[tier], HERO_SCROLL_OFFSETS[tier])

        return () => {
          timeline?.kill()
          clearWillChange()
        }
      })
    },
    [stage.id]
  )

  useScrollTriggerAnimation(containerRef, runAnimation)

  return (
    <section
      id={stage.id}
      ref={containerRef}
      className="relative isolate min-h-screen scroll-mt-24 overflow-hidden bg-black/95 px-6 sm:px-12 lg:px-24 xl:px-32 py-32 sm:py-36 md:scroll-mt-32"
      aria-labelledby={`${stage.id}-heading`}
    >
      <div
        data-hero-background
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background: `radial-gradient(circle at 15% 20%, rgba(99,102,241,0.18) 0%, transparent 48%),
            radial-gradient(circle at 82% 78%, rgba(192,38,211,0.14) 0%, transparent 52%),
            linear-gradient(180deg, rgba(4,4,12,0.92) 0%, rgba(8,8,18,0.95) 40%, rgba(4,4,12,0.9) 100%)`,
        }}
        aria-hidden
      />
      <div
        data-hero-background
        className="pointer-events-none absolute -inset-24 blur-[160px] opacity-40"
        style={{
          background:
            "linear-gradient(135deg, rgba(99,102,241,0.65), rgba(34,211,238,0.45), rgba(192,38,211,0.35))",
        }}
        aria-hidden
      />

      <div className="relative z-10 timeline-section-container">
        <div className="flex flex-col gap-8 text-white md:max-w-[900px]">
          <header
            ref={instructionRef}
            className="flex flex-col-reverse gap-6 text-white md:flex-row md:items-center md:gap-12"
          >
            <div className="flex flex-col gap-4 md:flex-1">
              <h2
                id={`${stage.id}-heading`}
                ref={headlineRef}
                className="text-5xl font-black tracking-tight text-white drop-shadow-[0_18px_48px_rgba(0,0,0,0.55)] md:text-6xl"
              >
                Lock Your Brief in Minutes
              </h2>
              <p
                ref={(node) => {
                  subheadlineRef.current = node
                  descriptionRef.current = node
                }}
                className="timeline-subheading font-semibold text-white/85"
              >
                Answer seven cues and the storyboard scaffold is ready for review.
              </p>
            </div>
            <StepLabel
              id={`${stage.id}-step`}
              step={stage.step}
              label=""
              size="lg"
              align="center"
              forceAccent
              className="self-center scale-[1.25] md:ml-auto md:mr-auto md:self-start md:translate-x-10"
            />
          </header>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-stretch">
          <div className="flex flex-col gap-10">
            <div
              ref={detailRef}
              className="flex flex-wrap items-center gap-3 lg:max-w-xl"
            >
              {heroDetailPills.map((detail, index) => (
                <div
                  key={detail.label}
                  ref={(el) => {
                    if (!el) return
                    detailPillRefs.current[index] = el
                  }}
                  className={cn(
                    "inline-flex items-center gap-3 rounded-full border px-4 py-2 text-sm font-semibold text-white/80",
                    detail.platform === "youtube"
                      ? "border-red-400/35 bg-red-500/15"
                      : detail.platform === "tiktok"
                        ? "border-emerald-400/35 bg-emerald-500/15"
                        : "border-white/25 bg-white/10"
                  )}
                >
                  <span className="uppercase tracking-[0.3em] text-xs text-white/60">
                    {detail.label}
                  </span>
                  <span>{detail.value}</span>
                </div>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {heroFieldTiles.map((tile, index) => (
                <div
                  key={tile.label}
                  ref={(el) => {
                    if (!el) return
                    fieldRefs.current[index] = el
                  }}
                  className="rounded-3xl border border-white/15 bg-[rgba(18,20,40,0.85)] p-8 backdrop-blur"
                >
                  <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-white/60">
                    {tile.label}
                  </div>
                  <p className="text-lg font-semibold leading-snug text-white/90">{tile.value}</p>
                  {tile.hint ? <p className="mt-3 text-sm text-white/55">{tile.hint}</p> : null}
                </div>
              ))}
            </div>
          </div>

          <div
            ref={heroCardRef}
            data-motion-hide
            className="relative flex h-full min-h-[500px] w-full flex-col justify-between overflow-hidden rounded-[36px] border border-white/12 bg-gradient-to-r from-[#312e81]/25 via-[#111322]/90 to-[#0b1220]/95 p-10 shadow-[0_50px_200px_-120px_rgba(79,70,229,0.85)]"
          >
            <div
              className="absolute inset-2 rounded-[30px] border border-white/8 opacity-50"
              aria-hidden
            />
            <div
              className="absolute -top-12 -right-6 h-40 w-40 rounded-full bg-gradient-to-br from-indigo-500/40 via-fuchsia-400/30 to-cyan-400/30 blur-3xl"
              aria-hidden
            />
            <div className="relative flex h-full w-full flex-col justify-between gap-10">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.45em] text-indigo-100/80">
                  Platforms, Formats, Durations
                </div>
              </div>
              <div className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {platformCards.map((card) => (
                    <div
                      key={card.name}
                      className={`rounded-3xl border border-white/10 bg-gradient-to-br ${card.accent} px-5 py-6 text-white shadow-[0_30px_90px_-70px_rgba(99,102,241,0.6)] backdrop-blur`}
                    >
                      <p className="text-xs uppercase tracking-[0.35em] text-white/65">
                        {card.name}
                      </p>
                      <p className="mt-2 text-lg font-semibold">{card.headline}</p>
                      <p className="mt-3 text-sm text-white/70">{card.description}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-white/70">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-white/40">Delivery</p>
                    <p className="mt-1 font-semibold text-white">PDF + Studio handoff</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-white/40">Durations</p>
                    <p className="mt-1 font-semibold text-white">60s · 30s · 15s</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-white/40">Team</p>
                    <p className="mt-1 font-semibold text-white">Producer assigned Day 1</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-white/40">Status</p>
                    <p className="mt-1 font-semibold text-white">Ready for Studio review</p>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="inline-flex w-max items-center gap-3 rounded-full bg-gradient-to-r from-[#4F46E5] via-[#6366F1] to-[#22D3EE] px-9 py-4 text-xs font-bold uppercase tracking-[0.35em] text-white shadow-[0_32px_120px_-60px_rgba(99,102,241,0.9)] transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
                >
                  Start Your Brief
                  <span className="text-white/70">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-motion-show className="reduced-motion-card relative hidden w-full bg-black/40">
        <div className="grid gap-6 md:grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)] md:items-center">
          <ReducedMotionIllustration
            variant="hero"
            className="mx-auto max-w-[320px] drop-shadow-[0_18px_60px_rgba(99,102,241,0.35)]"
          />
          <div className="space-y-4 text-white/75">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70">
              Guided Intake
            </div>
            <h3 className="text-2xl font-black text-white">Brief Snapshot</h3>
            <p className="text-sm leading-relaxed text-white/70">
              Campaign details, target audiences, tone, and guardrails collect
              instantly—reduced-motion visitors see the complete form without animated reveals.
            </p>
            <ul className="space-y-2 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <span aria-hidden className="h-2 w-2 rounded-full bg-white/40" />
                Luxury Harbors · Coastal Elevation campaign intake
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden className="h-2 w-2 rounded-full bg-white/40" />
                Audience, tone, and creative guardrails pinned before AI synthesis
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden className="h-2 w-2 rounded-full bg-white/40" />
                CTA surfaces stay accessible without motion
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
