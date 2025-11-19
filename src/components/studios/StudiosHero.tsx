import { useCallback, useEffect, useRef, useState } from "react"
import type { PointerEvent as ReactPointerEvent } from "react"
import { ArrowRight } from "lucide-react"

import MuxPlayer from "@mux/mux-player-react/lazy"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"
import { useHeroIntro } from "@/hooks/useHeroIntro"

const HERO_VIDEO_PLAYBACK_ID = "PGPc0001LBGwUIP009V7xc02de6Z01udAE8dbetAQ2XlrOIY"

export const StudiosHero = () => {
  const playerRef = useRef<any>(null)
  const heroRef = useRef<HTMLElement>(null)

  const [isVideoReady, setIsVideoReady] = useState(false)

  const isMobile = useIsMobile()
  const prefersReducedMotion = usePrefersReducedMotion()

  // Activate cinematic hero intro animation
  useHeroIntro()

  useEffect(() => {
    if (!isVideoReady || isMobile || prefersReducedMotion) {
      return
    }

    const videoEl = playerRef.current
    if (!videoEl) {
      return
    }

    const attemptPlayback = () => {
      try {
        const playPromise = (videoEl as HTMLVideoElement).play()
        if (playPromise?.catch) {
          playPromise.catch(() => { })
        }
      } catch (error) {
        console.warn('[StudiosHero] Autoplay attempt failed', error)
      }
    }

    attemptPlayback()

    const handleVisibility = () => {
      if (!document.hidden) {
        attemptPlayback()
      }
    }

    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [isVideoReady, isMobile, prefersReducedMotion])

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
  }, [])

  const handleHeroPointerLeave = useCallback(() => {
    if (!heroRef.current) return
    heroRef.current.style.setProperty("--pointer-x", "50%")
    heroRef.current.style.setProperty("--pointer-y", "50%")
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
      <div className="pointer-events-none absolute inset-0 -z-30" style={{ transform: 'translate3d(0, 0, 0)', willChange: 'auto' }}>
        <div className="absolute inset-0 bg-studios-hero-base" />
        <div className="absolute inset-0 bg-studios-hero-spotlight opacity-35 md:opacity-45" />
        <div className="absolute inset-0 bg-studios-hero-rim blur-[80px] opacity-28" />
        <div className="studios-hero-particles" />
        <div className="studios-hero-noise" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-20" aria-hidden style={{ transform: 'translate3d(0, 0, 0)' }}>
        <div className="hero-pointer-highlight" />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto flex min-h-[90vh] flex-col justify-center gap-12 px-4 py-16 xl:min-h-[94vh]">
          <div className="hero-curve-mask flex flex-col gap-10 max-w-4xl lg:self-end lg:mr-[27vw]" data-motion="hero.copy">
            <div className="space-y-8">
              <h1
                id="studios-hero-title"
                className="text-5xl font-black tracking-tight text-studios-headline sm:text-6xl md:text-[4.5rem] md:leading-[1.08] lg:text-[5.5rem]"
              >
                <span className="headline-premium">Premium Video. Without Premium Budgets.</span>
              </h1>
              <p
                className="hero-subhead max-w-2xl text-xl leading-relaxed text-studios-body md:text-[1.5rem]"
                data-motion="hero-tagline"
              >
                Broadcast-quality work shouldn&apos;t require broadcast-size budgets. Secure AI production, mastered since 2023, changes the equation.
              </p>
            </div>

            <div className="flex" data-motion="hero-cta">
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
              >
                See Our Work
                <span className="cta-arrow relative flex h-9 w-9 items-center justify-center rounded-full bg-black/10 transition duration-300 group-hover:bg-black/20 group-hover:shadow-[0_0_25px_rgba(225,179,65,0.4)]">
                  <ArrowRight className="h-4 w-4" />
                </span>
                <span className="pointer-events-none absolute inset-0 rounded-full border border-white/20 opacity-30 transition group-hover:opacity-60" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

interface HeroVideoBackdropProps {
  playerRef: React.RefObject<HTMLVideoElement>
  isVideoReady: boolean
  setIsVideoReady: (ready: boolean) => void
  isMobile: boolean
}

const HeroVideoBackdrop = ({ playerRef, isVideoReady, setIsVideoReady, isMobile }: HeroVideoBackdropProps) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <div className="absolute inset-0 -z-40" style={{ transform: 'translate3d(0, 0, 0)' }}>
      <div className="absolute inset-0 bg-studios-background/2" aria-hidden style={{ willChange: 'auto' }} />
      <div className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-out data-[ready=true]:opacity-100" data-ready={isVideoReady} style={{ willChange: 'opacity' }}>
        <MuxPlayer
          ref={playerRef}
          playbackId={HERO_VIDEO_PLAYBACK_ID}
          preload="metadata"
          autoPlay={!isMobile && !prefersReducedMotion}
          loop
          muted
          playsInline
          maxResolution="720p"
          poster="/portfolio/cre8tive-demo.jpg"
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
      <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(5,6,13,0.85)0%,rgba(12,18,32,0.78)55%,rgba(12,18,32,0.9)100%)]" aria-hidden />
    </div>
  )
}
