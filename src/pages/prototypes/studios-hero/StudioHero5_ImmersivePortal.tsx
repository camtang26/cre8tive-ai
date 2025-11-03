import React, { useRef, useState } from "react"
import { VideoBackground } from "@/components/hero/VideoBackground"
import { Button } from "@/components/ui/button"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { HeroSection, glassClass, palette, usePrefersReducedMotion } from "./StudioHeroShared"

gsap.registerPlugin(ScrollTrigger)

export const StudioHero5_ImmersivePortal: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const prefersReduced = usePrefersReducedMotion()
  const cardsRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    if (prefersReduced) return
    if (!cardsRef.current) return
    const items = cardsRef.current.querySelectorAll("[data-card]")
    gsap.set(items, { y: 40, opacity: 0, transformOrigin: "50% 50% -200px" })
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 70%",
        once: true
      }
    })
  }, [prefersReduced])

  return (
    <HeroSection ariaLabel="Immersive Portal hero">
      <div className="absolute inset-0 z-0 will-change-transform">
        <VideoBackground
          isMuted={isMuted}
          isPlaying={isPlaying}
          onToggleMute={() => setIsMuted((m) => !m)}
          onTogglePlay={() => setIsPlaying((p) => !p)}
        />
      </div>

      {/* Perspective wash */}
      <div aria-hidden className="absolute inset-0 z-[2]" style={{
        background:
          `radial-gradient(70% 70% at 50% 50%, rgba(10,18,30,0.0) 0%, rgba(10,18,30,0.25) 60%, rgba(10,18,30,0.55) 100%)`
      }} />

      <div className="relative z-[3] h-[92vh] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-[var(--pad)]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[clamp(40px,7.5vw,92px)] leading-[0.94]" style={{ color: palette.champagne }}>
                Enter the Studio
              </h2>
              <p className="mt-4 text-[clamp(16px,1.3vw,20px)]" style={{ color: palette.body }}>
                A portal‑like hero where glass cards step forward in depth as you scroll.
              </p>
              <div className="mt-6">
                <Button className="px-7 py-5 text-lg font-semibold" style={{ backgroundColor: palette.gold, color: "#0A121E" }}>
                  Enter Studio
                </Button>
              </div>
            </div>
            <div ref={cardsRef} className="grid gap-4">
              {["Storyboards","Platform‑Native Cuts","A/B Hooks"].map((t) => (
                <div key={t} data-card className={`${glassClass} p-5 md:p-6 text-white/90 shadow-[0_10px_40px_rgba(0,0,0,0.45)]`}>
                  <div className="text-sm uppercase tracking-wide text-white/60">Module</div>
                  <div className="text-xl md:text-2xl mt-1">{t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </HeroSection>
  )
}

export default StudioHero5_ImmersivePortal

