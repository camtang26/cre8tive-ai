import { useCallback, useEffect, useRef, useState } from "react"
import type { PointerEvent as ReactPointerEvent } from "react"
import { ArrowRight } from "lucide-react"

import VimeoPlayer, { type VimeoPlayerHandle } from "@/components/core/VimeoPlayer"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"

const HERO_VIDEO_ID = "1051821551"

export const StudiosHero = () => {
  const playerRef = useRef<VimeoPlayerHandle>(null)
  const heroRef = useRef<HTMLElement>(null)

  const [isVideoReady, setIsVideoReady] = useState(false)
  const [pointerActive, setPointerActive] = useState(false)

  const isMobile = useIsMobile()
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (isMobile) {
      playerRef.current?.setMuted(true).catch(() => null)
    }
  }, [isMobile])

  useEffect(() => {
    if (!heroRef.current) return
    heroRef.current.style.setProperty("--pointer-x", "50%")
    heroRef.current.style.setProperty("--pointer-y", "50%")
  }, [])

  const handleHeroPointerMove = useCallback(
    (event: ReactPointerEvent<HTMLElement>) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 100
      const y = ((event.clientY - rect.top) / rect.height) * 100
      heroRef.current.style.setProperty("--pointer-x", `${x}%`)
      heroRef.current.style.setProperty("--pointer-y", `${y}%`)
      setPointerActive(true)
    },
    []
  )

  const handleHeroPointerLeave = useCallback(() => {
    if (!heroRef.current) return
    heroRef.current.style.setProperty("--pointer-x", "50%")
    heroRef.current.style.setProperty("--pointer-y", "50%")
    setPointerActive(false)
  }, [])

  const handlePrimaryPointerMove = useCallback((event: ReactPointerEvent<HTMLAnchorElement>) => {
    if (prefersReducedMotion) return
    const target = event.currentTarget
    const rect = target.getBoundingClientRect()
    const offsetX = ((event.clientX - (rect.left + rect.width / 2)) / rect.width) * 18
    const offsetY = ((event.clientY - (rect.top + rect.height / 2)) / rect.height) * 12
    target.style.setProperty("--cta-offset-x", `${offsetX}px`)
    target.style.setProperty("--cta-offset-y", `${offsetY}px`)
    target.style.setProperty("--cta-scale", "1.02")
    target.style.setProperty("--cta-arrow-offset-x", `${offsetX * 0.4}px`)
    target.style.setProperty("--cta-arrow-offset-y", `${offsetY * 0.4}px`)
    target.style.setProperty("--cta-arrow-rotate", `${offsetX * 0.8}deg`)
  }, [prefersReducedMotion])

  const handlePrimaryPointerLeave = useCallback((event: ReactPointerEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget
    target.style.setProperty("--cta-offset-x", "0px")
    target.style.setProperty("--cta-offset-y", "0px")
    target.style.setProperty("--cta-scale", "1")
    target.style.setProperty("--cta-arrow-offset-x", "0px")
    target.style.setProperty("--cta-arrow-offset-y", "0px")
    target.style.setProperty("--cta-arrow-rotate", "0deg")
  }, [])

  const handleSecondaryPointerMove = useCallback((event: ReactPointerEvent<HTMLAnchorElement>) => {
    if (prefersReducedMotion) return
    const target = event.currentTarget
    const rect = target.getBoundingClientRect()
    const offsetX = ((event.clientX - (rect.left + rect.width / 2)) / rect.width) * 10
    const offsetY = ((event.clientY - (rect.top + rect.height / 2)) / rect.height) * 8
    target.style.setProperty("--trail-offset-x", `${offsetX}px`)
    target.style.setProperty("--trail-offset-y", `${offsetY}px`)
  }, [prefersReducedMotion])

  const handleSecondaryPointerLeave = useCallback((event: ReactPointerEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget
    target.style.setProperty("--trail-offset-x", "0px")
    target.style.setProperty("--trail-offset-y", "0px")
  }, [])

  return (
    <section
      id="studios-hero"
      ref={heroRef}
      role="banner"
      aria-labelledby="studios-hero-title"
      className="relative isolate overflow-hidden bg-studios-background text-white"
      data-section="studios-hero"
      onPointerMove={handleHeroPointerMove}
      onPointerLeave={handleHeroPointerLeave}
    >
      <HeroVideoBackdrop
        playerRef={playerRef}
        isVideoReady={isVideoReady}
        setIsVideoReady={setIsVideoReady}
        isMobile={isMobile}
      />

      {/* Atmospheric overlays */}
      <div className="pointer-events-none absolute inset-0 -z-30">
        <div className="absolute inset-0 bg-studios-hero-base" />
        <div className="absolute inset-0 bg-studios-hero-spotlight opacity-70 md:opacity-80" />
        <div className="absolute inset-0 bg-studios-hero-rim blur-[160px] opacity-70" />
        <div className="studios-hero-particles" />
        <div className="studios-hero-noise" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-20" aria-hidden>
        <div className="hero-pointer-highlight" data-active={pointerActive} />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto flex min-h-[90vh] flex-col justify-center gap-12 px-4 py-24 xl:min-h-[94vh]">
          <div className="hero-curve-mask flex flex-col gap-8 max-w-3xl lg:self-end lg:mr-[27vw]" data-motion="hero.copy">
            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-studios-body">
              <span className="h-2 w-2 rounded-full bg-studios-accent shadow-[0_0_12px_rgba(49,196,255,0.6)]" />
              Mastering AI Production Since 2023
            </div>

            <div className="space-y-6">
              <h1
                id="studios-hero-title"
                className="text-4xl font-black tracking-tight text-studios-headline sm:text-5xl md:text-[3.75rem] md:leading-[1.08] lg:text-[4.75rem]"
              >
                <span className="headline-premium">Premium Video. Without Premium Budgets.</span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-studios-body md:text-[1.35rem]">
                Broadcast-grade work shouldn&apos;t require broadcast-size budgets. AI mastery changes the equation—when done right.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center" data-motion="hero.cta">
              <a
                href="#studios-portfolio"
                className={cn(
                  "group relative inline-flex items-center gap-3 rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.24em]",
                  "bg-studios-primary text-black shadow-[0_32px_90px_-45px_rgba(225,179,65,0.95)] transition-all duration-300 ease-smooth",
                  "hover:-translate-y-[6px] hover:shadow-[0_40px_110px_-50px_rgba(225,179,65,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-studios-accent focus-visible:ring-offset-2 focus-visible:ring-offset-studios-background",
                  "cta-magnetic"
                )}
                data-motion="hero.cta.primary"
                data-reduced-motion={prefersReducedMotion ? "true" : "false"}
                onPointerMove={handlePrimaryPointerMove}
                onPointerLeave={handlePrimaryPointerLeave}
              >
                See Our Work
                <span className="cta-arrow relative flex h-9 w-9 items-center justify-center rounded-full bg-black/10 transition duration-300 group-hover:bg-black/20 group-hover:shadow-[0_0_25px_rgba(225,179,65,0.4)]">
                  <ArrowRight className="h-4 w-4" />
                </span>
                <span className="pointer-events-none absolute inset-0 rounded-full border border-white/20 opacity-30 transition group-hover:opacity-60" aria-hidden />
              </a>

              <a
                href="/contact"
                className={cn(
                  "group inline-flex items-center gap-3 rounded-full border border-white/18 bg-white/8 px-8 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-studios-body transition-all duration-300",
                  "hover:-translate-y-[4px] hover:border-studios-accent/50 hover:text-studios-headline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-studios-accent focus-visible:ring-offset-2 focus-visible:ring-offset-studios-background",
                  "cta-secondary-trail"
                )}
                data-motion="hero.cta.secondary"
                data-reduced-motion={prefersReducedMotion ? "true" : "false"}
                onPointerMove={handleSecondaryPointerMove}
                onPointerLeave={handleSecondaryPointerLeave}
              >
                Start a Conversation
                <span className="cta-trail-dot relative flex h-3 w-3 items-center justify-center rounded-full bg-studios-accent/50 transition duration-300 group-hover:bg-studios-accent" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

interface HeroVideoBackdropProps {
  playerRef: React.RefObject<VimeoPlayerHandle>
  isVideoReady: boolean
  setIsVideoReady: (ready: boolean) => void
  isMobile: boolean
}

const HeroVideoBackdrop = ({ playerRef, isVideoReady, setIsVideoReady, isMobile }: HeroVideoBackdropProps) => {
  return (
    <div className="absolute inset-0 -z-40">
      <div className="absolute inset-0 bg-studios-background opacity-75" aria-hidden />
      <div className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-out data-[ready=true]:opacity-100" data-ready={isVideoReady}>
        <VimeoPlayer
          ref={playerRef}
          videoId={HERO_VIDEO_ID}
          autoplay={!isMobile}
          loop
          muted
          isBackground
          className="absolute inset-0 h-full w-full"
          onReady={() => setIsVideoReady(true)}
          onError={() => setIsVideoReady(true)}
        />
      </div>
      {!isVideoReady && <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(5,6,13,0.95)0%,rgba(12,18,32,0.92)45%,rgba(12,18,32,0.98)100%)]" aria-hidden />}
    </div>
  )
}
