import { useCallback, useEffect, useRef, useState } from "react"
import type { PointerEvent as ReactPointerEvent } from "react"
import { ArrowRight, Play } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import MuxPlayer from "@mux/mux-player-react/lazy"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"

gsap.registerPlugin(ScrollTrigger)

const HERO_VIDEO_PLAYBACK_ID = "PGPc0001LBGwUIP009V7xc02de6Z01udAE8dbetAQ2XlrOIY"

export const StudiosHero = () => {
  const playerRef = useRef<any>(null)
  const heroRef = useRef<HTMLElement>(null)

  const [isVideoReady, setIsVideoReady] = useState(false)

  const isMobile = useIsMobile()
  const prefersReducedMotion = usePrefersReducedMotion()

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

  // GSAP Animation
  useGSAP(() => {
    if (!heroRef.current) return

    const heroTl = gsap.timeline({ delay: 0.2 });
    
    // 1. Line-by-line Reveal (Curtain effect)
    heroTl.fromTo('.hero-line-inner',
      { yPercent: 100, skewY: 5 },
      { yPercent: 0, skewY: 0, duration: 1.2, stagger: 0.15, ease: "power4.out" }
    );

    // 2. Fade in description
    heroTl.fromTo('.hero-desc', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, 
      "-=0.8"
    );

    // 3. CTA Reveal (Scale/Fade)
    heroTl.fromTo('.hero-cta-group', 
      { opacity: 0, scale: 0.9 }, 
      { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" }, 
      "-=0.6"
    );

    // Hero Parallax on Scroll
    const videoElement = heroRef.current.querySelector('mux-player') || heroRef.current.querySelector('video');
    
    if (videoElement) {
      gsap.to(videoElement, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        yPercent: 20, 
        scale: 1.45, 
        ease: "none"
      });
    }

  }, { scope: heroRef });

  // Pointer tracking
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
      className="relative isolate h-screen min-h-[800px] w-full overflow-hidden bg-studios-void text-white"
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

      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('/noise.png')] bg-repeat" /> 
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(3,3,5,0.8)_90%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px]" />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 md:px-6">
          
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-20 -mt-32">
            
            <div className="space-y-10 max-w-5xl">
              
              {/* Editorial Headline Structure */}
              <h1 className="font-outfit tracking-tighter text-white leading-[0.9] select-none">
                {/* Line 1 */}
                <div className="overflow-hidden">
                  <div className="hero-line-inner text-[clamp(4rem,9vw,9rem)] font-black uppercase">
                    Premium Video.
                  </div>
                </div>
                
                {/* Line 2 */}
                <div className="overflow-hidden">
                  <div className="hero-line-inner text-[clamp(2.5rem,5vw,5rem)] font-light italic text-white/80 font-serif">
                    Without <span className="text-studios-primary not-italic font-bold font-outfit">Premium</span> Budgets.
                  </div>
                </div>
              </h1>

              <div className="hero-desc max-w-xl font-sans text-lg leading-relaxed text-white/70 md:text-xl border-l-2 border-studios-primary/30 pl-6">
                Broadcast-quality work shouldn&apos;t require broadcast-size budgets. 
                Secure AI production, mastered since 2023, changes the equation.
              </div>

              <div className="hero-cta-group flex flex-wrap gap-6 pt-2">
                
                {/* Primary Magnetic Button */}
                <a
                  href="#studios-portfolio"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-4 text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-studios-primary via-white to-studios-primary opacity-0 transition-opacity duration-300 group-hover:opacity-20" />
                  <span className="relative z-10 flex items-center gap-3 font-bold tracking-wider uppercase text-sm">
                    See Our Work
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>

                {/* Secondary Ghost Button */}
                <a 
                  href="#studios-platform-demo"
                  className="group flex items-center gap-3 px-6 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:scale-110 transition-transform">
                    <Play className="w-3 h-3 fill-current text-white" />
                  </div>
                  <span className="text-sm font-medium tracking-wide text-white/80 group-hover:text-white">
                    Watch Process
                  </span>
                </a>

              </div>
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
    <div className="absolute inset-0 -z-40">
      <div className="absolute inset-0 bg-studios-void" />
      
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(13,13,29,0.8)_0%,rgba(3,3,5,1)_100%)]"
        style={{ transform: 'scale(1.1)', willChange: 'transform' }}
      />

      <div 
        className="absolute inset-0 opacity-0 transition-opacity duration-1000 ease-in-out data-[ready=true]:opacity-100" 
        data-ready={isVideoReady}
      >
        <MuxPlayer
          ref={playerRef}
          playbackId={HERO_VIDEO_PLAYBACK_ID}
          preload="metadata"
          autoPlay={!isMobile && !prefersReducedMotion}
          loop
          muted
          playsInline
          maxResolution="720p"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: 'scale(1.35)', 
            '--controls': 'none',
            '--media-object-fit': 'cover',
            '--media-object-position': 'center',
          } as React.CSSProperties}
          onLoadedData={() => setIsVideoReady(true)}
          onError={() => setIsVideoReady(true)}
        />
      </div>
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(3,3,5,0.9)_0%,rgba(3,3,5,0.4)_50%,rgba(3,3,5,0.1)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(3,3,5,1)_0%,rgba(3,3,5,0)_40%)]" />
    </div>
  )
}