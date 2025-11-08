import { useCallback, useEffect, useRef, useState } from "react"
import type { PointerEvent as ReactPointerEvent } from "react"
import { ArrowRight } from "lucide-react"
import MuxPlayer from "@mux/mux-player-react/lazy"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"

const HERO_VIDEO_PLAYBACK_ID = "FFH4ldVB00HBEO1iLXm9xWmBNvK501vBQ6Fj9PixEHcJA"

export const ConversationalHero = () => {
  const playerRef = useRef<HTMLVideoElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const [isVideoReady, setIsVideoReady] = useState(false)
  const [pointerActive, setPointerActive] = useState(false)
  const isMobile = useIsMobile()
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (!heroRef.current) return
    heroRef.current.style.setProperty("--pointer-x", "50%")
    heroRef.current.style.setProperty("--pointer-y", "50%")
  }, [])

  const handleHeroPointerMove = useCallback((event: ReactPointerEvent<HTMLElement>) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    heroRef.current.style.setProperty("--pointer-x", `${x}%`)
    heroRef.current.style.setProperty("--pointer-y", `${y}%`)
    setPointerActive(true)
  }, [])

  const handleHeroPointerLeave = useCallback(() => {
    if (!heroRef.current) return
    heroRef.current.style.setProperty("--pointer-x", "50%")
    heroRef.current.style.setProperty("--pointer-y", "50%")
    setPointerActive(false)
  }, [])

  const handlePrimaryPointerMove = useCallback(
    (event: ReactPointerEvent<HTMLAnchorElement>) => {
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
    },
    [prefersReducedMotion]
  )

  const handlePrimaryPointerLeave = useCallback((event: ReactPointerEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget
    target.style.setProperty("--cta-offset-x", "0px")
    target.style.setProperty("--cta-offset-y", "0px")
    target.style.setProperty("--cta-scale", "1")
    target.style.setProperty("--cta-arrow-offset-x", "0px")
    target.style.setProperty("--cta-arrow-offset-y", "0px")
    target.style.setProperty("--cta-arrow-rotate", "0deg")
  }, [])

  return (
    <section
      id="conversational-hero"
      ref={heroRef}
      role="banner"
      aria-labelledby="conversational-hero-title"
      className="relative isolate overflow-hidden bg-conversational-background text-white"
      data-section="conversational-hero"
      onPointerMove={handleHeroPointerMove}
      onPointerLeave={handleHeroPointerLeave}
    >
      {/* Video Background */}
      <div className="absolute inset-0 -z-40" style={{ transform: 'translate3d(0, 0, 0)' }}>
        <div className="absolute inset-0 bg-conversational-background opacity-75" aria-hidden style={{ willChange: 'auto' }} />
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-out data-[ready=true]:opacity-100"
          data-ready={isVideoReady}
          style={{ willChange: 'opacity' }}
        >
          <MuxPlayer
            ref={playerRef}
            playbackId={HERO_VIDEO_PLAYBACK_ID}
            loading="viewport"
            preload="none"
            autoPlay={!isMobile && !prefersReducedMotion}
            loop
            muted
            playsInline
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              aspectRatio: '16/9',
              objectFit: 'cover',
              transform: 'scale(1.17) translate3d(0, 0, 0)',
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              '--controls': 'none',
              '--media-object-fit': 'cover',
              '--media-object-position': 'center',
            } as React.CSSProperties}
            onLoadedData={() => setIsVideoReady(true)}
            onError={() => setIsVideoReady(true)}
          />
        </div>
        {!isVideoReady && (
          <div
            className="absolute inset-0 bg-[linear-gradient(140deg,rgba(4,18,30,0.95)0%,rgba(11,26,21,0.92)45%,rgba(6,32,47,0.98)100%)]"
            aria-hidden
          />
        )}
      </div>

      {/* Atmospheric overlays - Emerald/Teal theme (5+ layers) - VIDEO VISIBLE */}
      <div className="pointer-events-none absolute inset-0 -z-30">
        {/* Layer 1: Base gradient - REDUCED opacity for video visibility (60% coverage) */}
        <div className="absolute inset-0 bg-[linear-gradient(148deg,rgba(4,18,30,0.55)0%,rgba(6,32,47,0.50)48%,rgba(4,19,31,0.60)100%)]" />

        {/* Layer 2: Primary radial spotlight (emerald) - subtle */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(16,185,129,0.20),transparent_58%)] opacity-30 md:opacity-35" />

        {/* Layer 3: Secondary radial accent (teal) - subtle */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(20,241,149,0.18),transparent_60%)] opacity-40" />

        {/* Layer 4: Rim light blur effect - very subtle */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.12),transparent_70%)] blur-[160px] opacity-50" />

        {/* Layer 5: Noise texture - keeps subtle texture */}
        <div className="absolute inset-0 opacity-[0.08] [background-image:url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.7\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.8\'/%3E%3C/svg%3E')]" />
      </div>

      {/* Large glow orbs (additional depth layers) */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.28)_0%,rgba(16,185,129,0)_70%)] blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(20,241,149,0.26)_0%,rgba(20,241,149,0)_72%)] blur-[130px]" aria-hidden />

      {/* Pointer highlight (follows mouse) */}
      <div className="pointer-events-none absolute inset-0 -z-20" aria-hidden>
        <div
          className="absolute h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.15)0%,transparent_70%)] blur-3xl opacity-0 transition-opacity duration-500 data-[active=true]:opacity-100"
          style={{
            left: "var(--pointer-x, 50%)",
            top: "var(--pointer-y, 50%)",
            transform: "translate(-50%, -50%)",
          }}
          data-active={pointerActive}
        />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto flex min-h-[90vh] flex-col justify-center gap-12 px-4 py-24 xl:min-h-[94vh]">
          <div className="flex flex-col gap-8 max-w-3xl lg:self-end lg:mr-[27vw]" data-motion="hero.copy">
            {/* Trust badge */}
            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-conversational-body">
              <span className="h-2 w-2 rounded-full bg-conversational-accent shadow-[0_0_12px_rgba(20,241,149,0.6)] animate-pulse" />
              Enterprise-Grade Conversational AI
            </div>

            <div className="space-y-6">
              {/* Headline with text shimmer */}
              <h1
                id="conversational-hero-title"
                className="text-4xl font-black tracking-tight sm:text-5xl md:text-[3.75rem] md:leading-[1.08] lg:text-[4.75rem] headline-shimmer"
              >
                <span className="block text-conversational-headline">Scale Support</span>
                <span className="block bg-gradient-to-r from-conversational-primary via-conversational-accent to-conversational-primary bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-x">
                  Without Headcount
                </span>
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-conversational-body md:text-[1.35rem]">
                Deploy authentic, on-brand conversations across every channel. Break the hiring bottleneck with AI that truly understands your voice.
              </p>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center" data-motion="hero.cta">
              <a
                href="#conversational-demo"
                className={cn(
                  "group relative inline-flex items-center gap-3 rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.24em]",
                  "bg-conversational-primary text-black shadow-[0_32px_90px_-45px_rgba(16,185,129,0.95)] transition-all duration-300 ease-smooth",
                  "hover:-translate-y-[6px] hover:shadow-[0_40px_110px_-50px_rgba(16,185,129,1)]",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-conversational-accent focus-visible:ring-offset-2 focus-visible:ring-offset-conversational-background",
                  "cta-magnetic"
                )}
                data-motion="hero.cta.primary"
                data-reduced-motion={prefersReducedMotion ? "true" : "false"}
                onPointerMove={handlePrimaryPointerMove}
                onPointerLeave={handlePrimaryPointerLeave}
                style={{
                  transform: `translate(var(--cta-offset-x, 0px), var(--cta-offset-y, 0px)) scale(var(--cta-scale, 1))`,
                }}
              >
                See Your Brand in Action
                <span
                  className="cta-arrow relative flex h-9 w-9 items-center justify-center rounded-full bg-black/10 transition duration-300 group-hover:bg-black/20 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]"
                  style={{
                    transform: `translate(var(--cta-arrow-offset-x, 0px), var(--cta-arrow-offset-y, 0px)) rotate(var(--cta-arrow-rotate, 0deg))`,
                  }}
                >
                  <ArrowRight className="h-4 w-4" />
                </span>
                <span className="pointer-events-none absolute inset-0 rounded-full border border-white/20 opacity-30 transition group-hover:opacity-60" aria-hidden />
              </a>

              <a
                href="#conversational-roi"
                className={cn(
                  "group inline-flex items-center gap-3 rounded-full border border-white/18 bg-white/8 px-8 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-conversational-body transition-all duration-300",
                  "hover:-translate-y-[4px] hover:border-conversational-accent/50 hover:text-conversational-headline",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-conversational-accent focus-visible:ring-offset-2 focus-visible:ring-offset-conversational-background"
                )}
                data-motion="hero.cta.secondary"
              >
                Calculate ROI
                <span className="relative flex h-3 w-3 items-center justify-center rounded-full bg-conversational-accent/50 transition duration-300 group-hover:bg-conversational-accent" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Styles for magnetic effect and animations */}
      <style>{`
        .cta-magnetic {
          transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
        }

        @media (prefers-reduced-motion: reduce) {
          .cta-magnetic {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}
