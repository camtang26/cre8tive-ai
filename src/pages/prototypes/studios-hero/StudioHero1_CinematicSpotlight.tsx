import React, { useState } from "react"
import { VideoBackground } from "@/components/hero/VideoBackground"
import { Button } from "@/components/ui/button"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { HeroSection, glassClass, palette, usePrefersReducedMotion } from "./StudioHeroShared"

gsap.registerPlugin()

export const StudioHero1_CinematicSpotlight: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const prefersReduced = usePrefersReducedMotion()

  useGSAP(() => {
    if (prefersReduced) return
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } })
    tl.from("[data-spotlight]", { opacity: 0, y: 20, duration: 0.6 }, 0)
      .from("[data-title]", { opacity: 0, y: 30, duration: 0.8 }, 0.1)
      .from("[data-sub]", { opacity: 0, y: 20, duration: 0.6 }, 0.25)
      .from("[data-cta]", { opacity: 0, y: 16, duration: 0.5 }, 0.35)
      .from("[data-metric]", { opacity: 0, y: 16, stagger: 0.08, duration: 0.4 }, 0.4)
  }, [prefersReduced])

  return (
    <HeroSection ariaLabel="Cinematic Spotlight hero">
      {/* Background video */}
      <VideoBackground
        isMuted={isMuted}
        isPlaying={isPlaying}
        onToggleMute={() => setIsMuted((m) => !m)}
        onTogglePlay={() => setIsPlaying((p) => !p)}
      />

      {/* Vignette and spotlight beam */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "radial-gradient(120% 70% at 50% 80%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,0.95) 100%)"
        }}
      />
      <div
        data-spotlight
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[60%] z-[3]"
        style={{
          background:
            `linear-gradient(120deg, transparent 10%, ${palette.gold}33 40%, ${palette.gold}4d 50%, transparent 70%)`,
          filter: "blur(8px)"
        }}
      />

      {/* Content card (offset) */}
      <div className="relative z-[4] h-[92vh] flex items-end">
        <div className="w-full max-w-6xl mx-auto px-[var(--pad)] pb-[calc(var(--pad)*1.25)]">
          <div
            className={`${glassClass} max-w-[720px] p-8 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.45)] border-white/15`}
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            <h1
              data-title
              className="text-[clamp(40px,7vw,88px)] leading-[0.95] tracking-[-0.02em]"
              style={{ color: palette.champagne }}
            >
              Cinematic AI Studios
            </h1>
            <p
              data-sub
              className="mt-4 text-[clamp(16px,1.4vw,20px)]"
              style={{ color: palette.body }}
            >
              Premium video production in days, not weeks. We turn briefs into award‑level films.
            </p>
            <div className="mt-6 flex items-center gap-4" data-cta>
              <Button
                className="px-6 py-5 text-lg font-semibold"
                style={{ backgroundColor: palette.gold, color: "#0A121E" }}
              >
                Book a Call
              </Button>
              <Button variant="outline" className="px-6 py-5 border-white/20 text-white/90">
                Watch Reel
              </Button>
            </div>

            {/* Metrics chips */}
            <div className="mt-6 flex flex-wrap gap-3">
              {["60% faster approvals", "12+ platforms native", "A/B tested hooks"].map((m) => (
                <span
                  key={m}
                  data-metric
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-white/90 border-white/15"
                  style={{
                    borderWidth: 1,
                    borderRadius: 9999,
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(8px) saturate(150%)"
                  }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: palette.ionCyan }} />
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </HeroSection>
  )
}

export default StudioHero1_CinematicSpotlight

