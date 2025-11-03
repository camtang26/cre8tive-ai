import React, { useEffect, useRef, useState } from "react"
import { VideoBackground } from "@/components/hero/VideoBackground"
import { Button } from "@/components/ui/button"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { HeroSection, glassClass, palette, usePrefersReducedMotion } from "./StudioHeroShared"

gsap.registerPlugin()

export const StudioHero4_LiquidGoldFlow: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const prefersReduced = usePrefersReducedMotion()
  const goldRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    if (prefersReduced) return
    if (!goldRef.current) return
    gsap.to(goldRef.current, {
      backgroundPosition: "200% 0%",
      duration: 8,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    })
  }, [prefersReduced])

  useEffect(() => {
    // Ensure overlay is GPU-accelerated
    if (goldRef.current) goldRef.current.style.willChange = "background-position, transform"
  }, [])

  return (
    <HeroSection ariaLabel="Liquid Gold Flow hero">
      <VideoBackground
        isMuted={isMuted}
        isPlaying={isPlaying}
        onToggleMute={() => setIsMuted((m) => !m)}
        onTogglePlay={() => setIsPlaying((p) => !p)}
      />

      {/* Flowing gold overlay using layered gradients + blend */}
      <div
        ref={goldRef}
        aria-hidden
        className="absolute inset-0 z-[2] mix-blend-screen opacity-70"
        style={{
          background:
            `radial-gradient(60% 100% at 0% 50%, ${palette.gold}22, transparent 60%), radial-gradient(60% 100% at 100% 50%, ${palette.gold}22, transparent 60%), linear-gradient(120deg, ${palette.gold}1a 0%, transparent 40%, ${palette.gold}26 60%, transparent 85%)`,
          backgroundSize: "160% 100%"
        }}
      />

      <div className="relative z-[3] h-[92vh] grid md:grid-cols-[2fr_1fr] items-center">
        <div className="px-[var(--pad)]">
          <h2
            className="text-[clamp(42px,8vw,96px)] leading-[0.95] tracking-[-0.02em]"
            style={{ color: palette.champagne }}
          >
            Liquid Gold Aesthetic
          </h2>
          <p className="mt-4 max-w-[60ch] text-[clamp(16px,1.3vw,20px)]" style={{ color: palette.body }}>
            An asymmetric composition where gold flows over the frame and the message stands alone.
          </p>
          <div className="mt-7">
            <Button
              className="px-7 py-5 text-lg font-semibold"
              style={{ backgroundColor: palette.gold, color: "#0A121E" }}
            >
              Book a Consultation
            </Button>
          </div>
        </div>
        <div className="hidden md:flex items-end justify-end pr-[var(--pad)]">
          <div className={`${glassClass} p-5 w-[340px] text-white/90`}>
            <div className="text-xs uppercase tracking-wide text-white/60">Notes</div>
            <div className="mt-2 text-sm">Champagne text with a gold underline accent that animates on scroll.</div>
          </div>
        </div>
      </div>
    </HeroSection>
  )
}

export default StudioHero4_LiquidGoldFlow

