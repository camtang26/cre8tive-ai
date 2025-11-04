import React, { useEffect, useRef, useState } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { VideoBackground } from "@/components/hero/VideoBackground"
import { HeroSection, glassClass, palette, usePrefersReducedMotion } from "./StudioHeroShared"

gsap.registerPlugin(ScrollTrigger)

/**
 * Premium “Golden Gobo” Hero
 * - Video-first stage, layered with a gold spotlight/gobo beam that subtly tracks pointer.
 * - Minimal, asymmetric glass card. Single decisive gold CTA.
 * - CSS-driven beams (no extra heavy libs), GSAP-tuned entrances, reduced-motion fallback.
 */
export const StudioHero_PremiumGoldenGobo: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const prefersReduced = usePrefersReducedMotion()

  const scopeRef = useRef<HTMLDivElement | null>(null)
  const spotlightRef = useRef<HTMLDivElement | null>(null)

  useGSAP(
    () => {
      if (prefersReduced) return
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } })
      tl.from("[data-hero-title]", { opacity: 0, y: 24, duration: 0.7 }, 0)
        .from("[data-hero-sub]", { opacity: 0, y: 16, duration: 0.6 }, 0.1)
        .from("[data-hero-cta]", { opacity: 0, y: 14, duration: 0.5 }, 0.2)

      // Soft parallax on the spotlight as user scrolls
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          yPercent: -6,
          ease: "none",
          scrollTrigger: {
            trigger: scopeRef.current,
            start: "top top",
            end: "+=120%",
            scrub: true
          }
        })
      }
    },
    { scope: scopeRef }
  )

  useEffect(() => {
    // Magnetic pointer tracking for spotlight (small deltas for restraint)
    const el = spotlightRef.current
    if (!el || prefersReduced) return
    const handle = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      const rx = (e.clientX - rect.left) / rect.width
      const ry = (e.clientY - rect.top) / rect.height
      el.style.setProperty("--gobo-x", `${Math.round(rx * 100)}%`)
      el.style.setProperty("--gobo-y", `${Math.round(ry * 100)}%`)
    }
    window.addEventListener("pointermove", handle)
    return () => window.removeEventListener("pointermove", handle)
  }, [prefersReduced])

  return (
    <HeroSection ariaLabel="Studios premium hero">
      <div ref={scopeRef} className="absolute inset-0">
        {/* Video Stage */}
        <VideoBackground
          isMuted={isMuted}
          isPlaying={isPlaying}
          onToggleMute={() => setIsMuted((m) => !m)}
          onTogglePlay={() => setIsPlaying((p) => !p)}
        />

        {/* Cinematic vignettes */}
        <div aria-hidden className="absolute inset-0 z-[2]" style={{
          background:
            "radial-gradient(120% 80% at 50% 100%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.9) 100%)"
        }} />

        {/* Golden Gobo spotlight layer */}
        <div
          ref={spotlightRef}
          aria-hidden
          className="absolute inset-0 z-[3] pointer-events-none"
          style={{
            // CSS variables allow pointer/scroll-controlled hotspot
            // --gobo-x/--gobo-y default to center
            // Layer 1: broad gold wash; Layer 2: slatted gobo lines; Layer 3: subtle sparkle
            // Blend for premium metallic feel without overpowering contrast
            background:
              `radial-gradient(40% 30% at var(--gobo-x,50%) var(--gobo-y,55%), ${palette.gold}2e 0%, transparent 60%),` +
              `repeating-conic-gradient(from 15deg at var(--gobo-x,50%) var(--gobo-y,55%), ${palette.gold}29 0deg 6deg, transparent 6deg 14deg),` +
              `radial-gradient(20% 15% at 60% 35%, ${palette.ionCyan}1f, transparent 70%)`,
            mixBlendMode: "screen",
            filter: "blur(6px)"
          }}
        />

        {/* Content Layer */}
        <div className="relative z-[4] h-[92vh] flex items-end">
          <div className="w-full max-w-7xl mx-auto px-[var(--pad)] pb-[calc(var(--pad)*1.2)]">
            <div className="max-w-[760px]">
              <div className={`${glassClass} p-7 md:p-9 shadow-[0_20px_80px_rgba(0,0,0,0.45)] border-white/15`}
                   style={{ background: "rgba(255,255,255,0.08)" }}>
                <h1 data-hero-title className="text-[clamp(44px,8vw,104px)] leading-[0.92] tracking-[-0.02em]"
                    style={{ color: palette.champagne }}>
                  Premiere‑Level Films. AI Speed.
                </h1>
                <p data-hero-sub className="mt-4 text-[clamp(16px,1.35vw,20px)]" style={{ color: palette.body }}>
                  A hero built like a stage: living light, glass depth, and a video that does the talking.
                </p>
                <div className="mt-7" data-hero-cta>
                  <Button className="px-7 py-5 text-lg font-semibold shadow-[0_10px_30px_rgba(225,179,65,0.28)] focus-visible:ring-2 focus-visible:ring-offset-2"
                          style={{ backgroundColor: palette.gold, color: "#0A121E" }}>
                    Start Your Film
                  </Button>
                </div>
              </div>

              {/* Trust strip (minimal) */}
              <div className="mt-5 flex flex-wrap gap-3" aria-label="Highlights">
                {["Native cuts for 12+ platforms", "60% faster approvals", "A/B hooks included"].map((t) => (
                  <span key={t} className="px-3 py-1.5 text-sm text-white/90 border-white/15"
                        style={{ borderWidth: 1, borderRadius: 9999, background: "rgba(255,255,255,0.08)", backdropFilter: "blur(6px) saturate(150%)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroSection>
  )
}

export default StudioHero_PremiumGoldenGobo

