import { useCallback, useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { StageMetadata, storyboardFrames } from "./section-data"
import { useScrollTriggerAnimation } from "@/hooks/useScrollTriggerAnimation"
import { ReducedMotionIllustration } from "@/components/briefing/ReducedMotionIllustration"
import { StepLabel } from "@/components/briefing/StepLabel"
import {
  DESKTOP_MEDIA_QUERIES,
  HANDOFF_MOTION,
  HANDOFF_SCROLL_OFFSETS,
  HandoffMotionConfig,
  MotionTier,
  ScrollOffsetConfig,
  resolveMotionTier
} from "./motion-config"

gsap.registerPlugin(ScrollTrigger)

const handoffScenes = [
  {
    id: "scene-01",
    frame: storyboardFrames[0],
    title: "Harbor Arrival",
    summary: "Dusk arrival glides toward the illuminated marina gateway that signals the Cre8tive experience.",
    duration: "00:06",
    shot: "Medium Wide · 24mm",
    note: "VO · Concierge welcome"
  },
  {
    id: "scene-02",
    frame: storyboardFrames[1],
    title: "Experience Deck",
    summary: "Concierge crew greet guests curbside, opening the door and orchestrating the handoff from travel to yacht.",
    duration: "00:09",
    shot: "Tracking · 35mm",
    note: "SFX · Arrival ambience"
  },
  {
    id: "scene-03",
    frame: storyboardFrames[2],
    title: "Private Lounge",
    summary: "Sunset lounge reveals the curated shoreline setting with panoramic harbor views and bespoke hospitality.",
    duration: "00:08",
    shot: "Close · 85mm",
    note: "Callout · Signature service"
  }
]

const heroStoryboard = {
  frame: storyboardFrames[3],
  heading: "Scene 04 · Story Engine Board",
  headline: "Executive Briefing Suite",
  summary:
    "Storyboard output confirms framing, copy, and delivery specs so Studios moves straight into production without rework.",
  stats: [
    { label: "Platform", value: "16:9 master · 9:16 / 1:1 cuts" },
    { label: "Deliverable", value: "Layered PSD + PDF storyboard pack" },
    { label: "Status", value: "Approved · Synced to Cre8tive Studios" }
  ],
  ribbon: "Storyboard PDF · Ready for Handoff"
}

interface StudiosHandoffSectionProps {
  stage: StageMetadata
  onStageEnter?: (stageId: string) => void
  onStageLeave?: (stageId: string) => void
}

export function StudiosHandoffSection({
  stage,
  onStageEnter,
  onStageLeave
}: StudiosHandoffSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const mockupRef = useRef<HTMLDivElement | null>(null)
  const onStageEnterRef = useRef<StudiosHandoffSectionProps["onStageEnter"]>(undefined)
  const onStageLeaveRef = useRef<StudiosHandoffSectionProps["onStageLeave"]>(undefined)

  useEffect(() => {
    onStageEnterRef.current = onStageEnter
  }, [onStageEnter])

  useEffect(() => {
    onStageLeaveRef.current = onStageLeave
  }, [onStageLeave])

  const runAnimation = useCallback(
    ({ prefersReducedMotion, matchMedia }: { prefersReducedMotion: boolean; matchMedia: gsap.MatchMedia }) => {
      const container = containerRef.current
      if (!container) return

      if (prefersReducedMotion) {
        container.setAttribute("data-motion", "reduced")
        ScrollTrigger.create({
          trigger: container,
          start: "top 70%",
          end: "bottom 45%",
          onEnter: () => onStageEnterRef.current?.(stage.id),
          onEnterBack: () => onStageEnterRef.current?.(stage.id),
          onLeave: () => onStageLeaveRef.current?.(stage.id),
          onLeaveBack: () => onStageLeaveRef.current?.(stage.id)
        })
        return
      }

      container.setAttribute("data-motion", "full")

      const backgrounds = Array.from(container.querySelectorAll("[data-stage-background]")) as HTMLElement[]
      const copy = container.querySelector("[data-handoff-copy]") as HTMLElement | null
      const mockup = mockupRef.current
      const animatedElements = [...backgrounds, copy, mockup].filter(Boolean) as HTMLElement[]

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

      const createTimeline = (motion: HandoffMotionConfig, offsets: ScrollOffsetConfig, tier: MotionTier) => {
        if (animatedElements.length) {
          gsap.set(animatedElements, { autoAlpha: 0 })
        }
        applyWillChange()

        const timeline = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: container,
            start: () => `top ${Math.round(offsets.startPercent * 100)}%`,
            end: () => `bottom ${Math.round(offsets.endPercent * 100)}%`,
            once: true,
            toggleActions: "play none none none",
            invalidateOnRefresh: true,
            refreshPriority: 1,
            lazy: false
          }
        })

        ScrollTrigger.create({
          trigger: container,
          start: () => `top ${Math.round(offsets.startPercent * 100)}%`,
          end: () => `bottom ${Math.round(offsets.endPercent * 100)}%`,
          onEnter: () => onStageEnterRef.current?.(stage.id),
          onEnterBack: () => onStageEnterRef.current?.(stage.id),
          onLeave: () => onStageLeaveRef.current?.(stage.id),
          onLeaveBack: () => onStageLeaveRef.current?.(stage.id)
        })

        timeline
          .fromTo(
            backgrounds,
            { autoAlpha: 0, scale: 0.98 },
            { autoAlpha: 1, scale: 1, duration: motion.backgroundDuration, ease: "power3.out" }
          )
          .fromTo(
            copy,
            { autoAlpha: 0, y: tier === "laptop" || tier === "base" ? 28 : 40 },
            { autoAlpha: 1, y: 0, duration: motion.copyDuration, ease: "power3.out" },
            motion.copyOverlap
          )
          .fromTo(
            mockup,
            { autoAlpha: 0, y: tier === "laptop" || tier === "base" ? 32 : 60, scale: tier === "laptop" || tier === "base" ? 0.96 : 0.94 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: motion.mockupDuration,
              ease: "power3.out",
              force3D: true
            },
            motion.mockupOverlap
          )

        if (animatedElements.length) {
          const releaseWillChange = () => clearWillChange()
          timeline.eventCallback("onComplete", releaseWillChange)
          timeline.eventCallback("onReverseComplete", releaseWillChange)
          timeline.eventCallback("onInterrupt", releaseWillChange)
        }

        return timeline
      }

      matchMedia.add("(max-width: 1023px)", () => {
        const timeline = createTimeline(HANDOFF_MOTION.base, HANDOFF_SCROLL_OFFSETS.base, "base")
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
        const timeline = createTimeline(HANDOFF_MOTION[tier], HANDOFF_SCROLL_OFFSETS[tier], tier)
        return () => {
          timeline?.kill()
          clearWillChange()
        }
      })
    },
    [stage.id]
  )

  useScrollTriggerAnimation(containerRef, runAnimation)

  const leftScenes = handoffScenes.slice(0, 2)
  const supportingScene = handoffScenes[2]

  return (
    <section
      id={stage.id}
      ref={containerRef}
      className="relative isolate min-h-screen scroll-mt-24 overflow-hidden bg-gradient-to-br from-[#110A0A] via-[#1E0F07] to-[#100B1A] px-6 sm:px-12 lg:px-24 xl:px-32 pt-20 pb-28 md:scroll-mt-28"
      aria-labelledby={`${stage.id}-heading`}
    >
      <div
        data-stage-background
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background: `radial-gradient(circle at 22% 24%, rgba(234,88,12,0.25) 0%, transparent 55%),
            radial-gradient(circle at 78% 72%, rgba(244,114,182,0.18) 0%, transparent 60%)`
        }}
        aria-hidden
      />

      <div className="relative z-10 timeline-section-container flex w-full flex-col gap-12">
        <header
          data-handoff-copy
          className="flex flex-col gap-6 text-white md:flex-row md:items-center md:justify-between md:gap-16 md:pl-20 md:pr-16"
        >
          <StepLabel
            id={`${stage.id}-heading`}
            step={stage.step}
            label="Studios Handoff"
            size="lg"
            className="md:-ml-6 md:min-w-[300px]"
          />
          <div className="md:ml-auto">
            <a
              href="/contact"
              className="inline-flex w-max items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white transition hover:border-white/40 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
            >
              Book A Studio Session
              <span className="text-white/60">→</span>
            </a>
          </div>
        </header>

        <div
          ref={mockupRef}
          data-motion-hide
          className="relative overflow-hidden rounded-[36px] border border-white/[0.14] bg-[rgba(22,16,31,0.85)] shadow-[0_65px_160px_-110px_rgba(234,88,12,0.55)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/7 via-transparent to-fuchsia-500/6" aria-hidden />
          <div className="absolute inset-y-6 left-1/2 hidden w-px bg-white/12 md:block" aria-hidden />
          <div className="relative grid gap-10 p-6 md:grid-cols-2 md:gap-x-10 md:gap-y-10 md:p-8">
            <div className="order-1 flex flex-col gap-6 pr-0 md:order-1 md:pr-8">
              <div className="flex items-center justify-between rounded-[24px] border border-white/[0.1] bg-white/[0.05] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/70 shadow-[0_24px_60px_-48px_rgba(12,12,32,0.75)]">
                <span>Storyboard Scenes</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-white/80 shadow-[0_18px_32px_-24px_rgba(255,255,255,0.2)]">
                  v1.3
                </span>
              </div>
              {leftScenes.map((scene, index) => (
                <div
                  key={scene.id}
                  className="grid gap-5 rounded-[30px] border border-white/[0.1] bg-[rgba(19,13,27,0.82)] p-5 shadow-[0_38px_100px_-80px_rgba(14,165,233,0.45)] md:grid-cols-[minmax(0,0.52fr)_minmax(0,0.48fr)] md:gap-6 md:p-6"
                >
                  <div className="relative overflow-hidden rounded-[26px] border border-white/15 shadow-[0_26px_76px_-58px_rgba(12,12,32,0.75)]">
                    <img
                      src={scene.frame.src}
                      alt={`${scene.title} storyboard still`}
                      width={scene.frame.width}
                      height={scene.frame.height}
                      loading={index === 0 ? "eager" : "lazy"}
                      className="h-full w-full object-cover object-center"
                    />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#141626] shadow-[0_18px_38px_-20px_rgba(17,22,52,0.7)]">
                      <span>Scene</span>
                      <span>{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 text-white/90">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.38em] text-white/65">{scene.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/85">{scene.summary}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/75">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-3 py-1 text-white/90">
                        {scene.duration}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-3 py-1">
                        {scene.shot}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-3 py-1 text-white/85">
                        {scene.note}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-2 flex flex-col gap-6 md:order-2 md:pl-8">
              <div className="relative overflow-hidden rounded-[30px] border border-white/[0.12] bg-[rgba(21,14,26,0.82)] p-5 shadow-[0_50px_130px_-95px_rgba(234,88,12,0.55)]">
                <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-orange-400/45 bg-orange-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.42em] text-orange-100 shadow-orange-500/20">
                  Live Sync
                </div>
                <div className="relative overflow-hidden rounded-[24px] border border-white/10">
                  <img
                    src={heroStoryboard.frame.src}
                    alt="Storyboard hero frame highlighting executive briefing suite"
                    width={heroStoryboard.frame.width}
                    height={heroStoryboard.frame.height}
                    loading="lazy"
                    className="w-full object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-5 pb-5 pt-12">
                    <p className="text-xs font-semibold uppercase tracking-[0.42em] text-white/55">{heroStoryboard.headline}</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/85">{heroStoryboard.summary}</p>
                  </div>
                </div>
              </div>
              {supportingScene ? (
                <div className="grid gap-4 rounded-[28px] border border-white/[0.1] bg-[rgba(19,13,27,0.78)] p-5 shadow-[0_40px_110px_-95px_rgba(14,165,233,0.4)] md:grid-cols-[minmax(0,0.5fr)_minmax(0,0.5fr)] md:p-6">
                  <div className="relative overflow-hidden rounded-[24px] border border-white/15">
                    <img
                      src={supportingScene.frame.src}
                      alt={`${supportingScene.title} storyboard still`}
                      width={supportingScene.frame.width}
                      height={supportingScene.frame.height}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#141626] shadow-[0_18px_38px_-20px_rgba(17,22,52,0.7)]">
                      <span>Scene</span>
                      <span>{handoffScenes.indexOf(supportingScene) + 1}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 text-white/85">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.38em] text-white/65">{supportingScene.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/80">{supportingScene.summary}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/75">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-3 py-1 text-white/88">
                        {supportingScene.duration}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-3 py-1">
                        {supportingScene.shot}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-3 py-1 text-white/85">
                        {supportingScene.note}
                      </span>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="order-3 grid gap-3 rounded-[20px] border border-white/10 bg-white/[0.06] p-5 text-white/85 md:order-3 md:col-span-1 md:col-start-1 md:grid-cols-3 md:gap-4 md:divide-x md:divide-white/10 md:pr-8">
              {heroStoryboard.stats.map((item, statIndex) => (
                <div
                  key={item.label}
                  className={`flex flex-col gap-1 ${statIndex > 0 ? "md:px-4" : "md:pr-4"}`}
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.38em] text-white/55">{item.label}</span>
                  <span className="text-sm leading-relaxed">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="order-4 flex flex-wrap items-center justify-between gap-3 rounded-full border border-white/12 bg-gradient-to-r from-[#221327]/90 via-[#1c1324]/85 to-[#241821]/90 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-white/80 md:order-4 md:col-span-1 md:col-start-1 md:pr-8">
              <span>{heroStoryboard.ribbon}</span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-white/85 shadow-[0_14px_34px_-24px_rgba(234,88,12,0.6)]">
                Cre8tive Studios
              </span>
            </div>
          </div>
        </div>

        <div
          data-motion-show
          className="reduced-motion-card hidden border-white/15 bg-black/40 text-white/75 shadow-[0_55px_160px_-110px_rgba(234,88,12,0.45)]"
        >
          <div className="grid gap-6 md:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] md:items-center">
            <ReducedMotionIllustration variant="handoff" className="w-full drop-shadow-[0_24px_80px_rgba(234,88,12,0.38)]" />
            <div className="space-y-4">
              <p className="timeline-body">
                Reduced-motion visitors receive an immediate view of the production bundle—cinematic stills, scene summaries, and the delivery ribbon that syncs to Cre8tive Studios.
              </p>
              <ul className="space-y-2 text-sm text-white/65">
                {[
                  "Export-ready storyboard PDF",
                  "Shot notes synchronized with Studios workflows",
                  "Calibrated aspect ratios for multi-platform delivery",
                  "Metadata ribbon highlighting approval status"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span aria-hidden className="h-2 w-2 rounded-full bg-white/35" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="inline-flex w-max items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-white transition hover:border-white/40 hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
              >
                Book A Studio Session
                <span className="text-white/60">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
