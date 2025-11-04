import React, { useEffect, useRef, useState } from "react"
import { VideoBackground } from "@/components/hero/VideoBackground"
import { Button } from "@/components/ui/button"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { HeroSection, glassClass, palette, usePrefersReducedMotion } from "./StudioHeroShared"

gsap.registerPlugin(ScrollTrigger)

export const StudioHero2_MotionCanvas: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const prefersReduced = usePrefersReducedMotion()
  const meshRef = useRef<HTMLDivElement | null>(null)
  const parallaxRef = useRef<HTMLDivElement | null>(null)
  const btnRef = useRef<HTMLButtonElement | null>(null)

  useGSAP(() => {
    if (prefersReduced) return
    if (meshRef.current) {
      gsap.fromTo(
        meshRef.current,
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }
      )
      gsap.to(meshRef.current, {
        backgroundPosition: "120% 80%",
        duration: 6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      })
    }
    if (parallaxRef.current) {
      gsap.to(parallaxRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })
    }
  }, [prefersReduced])

  useEffect(() => {
    const btn = btnRef.current
    if (!btn) return
    const onMove = (e: PointerEvent) => {
      const rect = btn.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      btn.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`
    }
    const onLeave = () => {
      btn.style.transform = "translate(0,0)"
    }
    btn.addEventListener("pointermove", onMove)
    btn.addEventListener("pointerleave", onLeave)
    return () => {
      btn.removeEventListener("pointermove", onMove)
      btn.removeEventListener("pointerleave", onLeave)
    }
  }, [])

  return (
    <HeroSection ariaLabel="Motion Canvas hero">
      <div ref={parallaxRef} className="absolute inset-0 z-0 will-change-transform">
        <VideoBackground
          isMuted={isMuted}
          isPlaying={isPlaying}
          onToggleMute={() => setIsMuted((m) => !m)}
          onTogglePlay={() => setIsPlaying((p) => !p)}
        />
      </div>

      {/* Animated gradient mesh overlay */}
      <div
        ref={meshRef}
        aria-hidden="true"
        className="absolute inset-0 z-[2] opacity-80 mix-blend-overlay"
        style={{
          background:
            "radial-gradient(40% 40% at 20% 30%, rgba(49,196,255,0.25), transparent 60%), radial-gradient(35% 35% at 80% 70%, rgba(225,179,65,0.25), transparent 60%), radial-gradient(45% 45% at 60% 20%, rgba(245,231,199,0.2), transparent 60%)",
          backgroundSize: "120% 120%",
          filter: "blur(10px)"
        }}
      />

      {/* Content */}
      <div className="relative z-[3] h-[92vh] flex items-center">
        <div className="w-full max-w-7xl mx-auto px-[var(--pad)]">
          <div className="grid md:grid-cols-[minmax(0,680px)_1fr] gap-8 items-center">
            <div>
              <h2
                className="text-[clamp(42px,8vw,96px)] leading-[0.92] tracking-[-0.02em]"
                style={{ color: palette.champagne }}
              >
                Motion as a Medium
              </h2>
              <p className="mt-4 text-[clamp(16px,1.3vw,20px)]" style={{ color: palette.body }}>
                A kinetic hero where the gradient breathes and the video paints the canvas beneath.
              </p>
              <div className="mt-6 flex gap-4">
                <Button
                  ref={btnRef}
                  className="px-7 py-5 text-lg font-semibold shadow-[0_10px_30px_rgba(225,179,65,0.25)]"
                  style={{ backgroundColor: palette.gold, color: "#0A121E" }}
                >
                  Start a Project
                </Button>
                <Button variant="outline" className={`${glassClass} px-6 py-5 text-white/90`}>Our Process</Button>
              </div>
            </div>
            <div className="hidden md:block" />
          </div>
        </div>
      </div>
    </HeroSection>
  )
}

export default StudioHero2_MotionCanvas

