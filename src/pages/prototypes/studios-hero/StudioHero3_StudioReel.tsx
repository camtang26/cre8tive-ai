import React, { useState } from "react"
import { VideoBackground } from "@/components/hero/VideoBackground"
import { Button } from "@/components/ui/button"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { HeroSection, glassClass, palette, usePrefersReducedMotion } from "./StudioHeroShared"

gsap.registerPlugin()

export const StudioHero3_StudioReel: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const prefersReduced = usePrefersReducedMotion()

  useGSAP(() => {
    if (prefersReduced) return
    gsap.from("[data-panel]", { opacity: 0, y: 20, stagger: 0.1, duration: 0.6, ease: "power2.out" })
  }, [prefersReduced])

  return (
    <HeroSection ariaLabel="Studio Reel hero">
      <VideoBackground
        isMuted={isMuted}
        isPlaying={isPlaying}
        onToggleMute={() => setIsMuted((m) => !m)}
        onTogglePlay={() => setIsPlaying((p) => !p)}
      />

      {/* Screen frame + scanlines */}
      <div className="absolute inset-0 z-[2] flex items-center justify-center p-[var(--pad)]">
        <div
          className="relative w-full max-w-6xl aspect-[16/9] rounded-[20px] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
          style={{
            boxShadow: "inset 0 0 40px rgba(0,0,0,0.6), 0 30px 120px rgba(0,0,0,0.5)",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(0,0,0,0.3)"
          }}
        >
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, rgba(255,255,255,0.035) 0, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 3px)",
              mixBlendMode: "overlay"
            }}
          />
        </div>
      </div>

      {/* Faux editing UI panels */}
      <div className="relative z-[3] h-[92vh] flex items-end">
        <div className="w-full max-w-7xl mx-auto px-[var(--pad)] pb-[calc(var(--pad)*1.2)] grid md:grid-cols-[minmax(0,680px)_1fr] gap-8">
          <div>
            <div className={`${glassClass} p-6 md:p-8`} data-panel>
              <div className="text-xs font-mono text-white/60">AI Studio · layers/effects</div>
              <h2 className="mt-2 text-[clamp(40px,7vw,84px)] leading-[0.95]" style={{ color: palette.champagne }}>
                Studio Reel Interface
              </h2>
              <p className="mt-3 text-[clamp(15px,1.2vw,19px)]" style={{ color: palette.body }}>
                A hero that looks like the tools we use—layers, timelines, and a screen glow you can feel.
              </p>
              <div className="mt-6 flex gap-3" data-panel>
                <Button className="px-6 py-5 text-lg font-semibold" style={{ backgroundColor: palette.gold, color: "#0A121E" }}>
                  See Pricing
                </Button>
                <Button variant="outline" className="px-6 py-5 border-white/20 text-white/90 font-mono">
                  Open Project ⌘K
                </Button>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {["Timeline", "Layers", "Effects"].map((label) => (
                <div key={label} className={`${glassClass} px-3 py-2 text-white/80 text-sm font-mono`} data-panel>
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block" />
        </div>
      </div>
    </HeroSection>
  )
}

export default StudioHero3_StudioReel

