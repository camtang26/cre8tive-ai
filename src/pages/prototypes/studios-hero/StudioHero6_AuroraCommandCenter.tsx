import { useEffect, useMemo, useRef, useState } from "react"
import gsap from "gsap"
import { useReducedMotion } from "@/components/video-placeholders/hooks/useReducedMotion"
import { VideoBackground } from "@/components/hero/VideoBackground"
import { Badge } from "@/components/ui/badge"
import { GradientButton } from "@/components/ui/gradient-button"

gsap.registerPlugin()

const glassStyles: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(10px) saturate(150%)",
  WebkitBackdropFilter: "blur(10px) saturate(150%)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "16px"
}

export const StudioHero6_AuroraCommandCenter = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(true)
  const prefersReducedMotion = useReducedMotion()

  const metrics = useMemo(
    () => [
      { label: "Storyboard velocity", value: "48h" },
      { label: "Approval rate", value: "97%" },
      { label: "Styles ready", value: "8" }
    ],
    []
  )

  useEffect(() => {
    if (!containerRef.current || prefersReducedMotion) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-aurora='intro']",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.12 }
      )
      gsap.fromTo(
        "[data-aurora='metrics']",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.08, delay: 0.4 }
      )
      gsap.fromTo(
        "[data-aurora='spotlight']",
        { opacity: 0, x: "-15%" },
        { opacity: 1, x: "0%", duration: 1.1, ease: "power3.out", delay: 0.35 }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [prefersReducedMotion])

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden rounded-[32px] border border-white/10 shadow-[0_100px_220px_-90px_rgba(0,0,0,0.88)]"
      style={{
        background: "linear-gradient(135deg, #05060D 0%, #0C1526 48%, #13263B 100%)"
      }}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[32px]">
        <VideoBackground
          isMuted={isMuted}
          isPlaying={isPlaying && !prefersReducedMotion}
          onToggleMute={() => setIsMuted(prev => !prev)}
          onTogglePlay={() => setIsPlaying(prev => !prev)}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#05060D]/75 via-[#061327]/78 to-[#13263B]/80" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(225,179,65,0.22),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_at_65%_30%,rgba(49,196,255,0.28),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-35">
          <div className="absolute inset-0 animate-[grain_10s_steps(12)_infinite] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-70" />
        </div>
        <div
          data-aurora="spotlight"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.07)_0%,transparent_45%,transparent_60%,rgba(49,196,255,0.1)_85%,transparent_100%)]"
        />

        <div className="relative z-10 flex h-full flex-col justify-between px-10 pb-16 pt-16 sm:px-16">
          <div className="max-w-4xl space-y-6" data-aurora="intro">
            <Badge className="w-fit bg-white/10 text-sm font-semibold uppercase tracking-[0.4em] text-white/70 backdrop-blur-sm">
              Studios Command • AI-Directed Film
            </Badge>
            <h1 className="text-6xl font-black tracking-tight text-[#F5E7C7] md:text-7xl lg:text-8xl">
              Direct the world’s fastest cinematic production floor.
            </h1>
            <p className="max-w-2xl text-lg text-[#C7D2E0] md:text-xl">
              Every brief enters the Aurora Command Center—our AI orchestrates storyboard, visual style, and platform
              outputs while your producers supervise in real time.
            </p>
            <div className="flex flex-wrap gap-4">
              <GradientButton size="lg" className="shadow-[0_0_45px_rgba(225,179,65,0.45)]">
                Enter Command Center
              </GradientButton>
              <GradientButton variant="outline" size="lg">
                Watch Production Flow
              </GradientButton>
            </div>
          </div>

          <div className="flex flex-wrap gap-4" data-aurora="metrics">
            {metrics.map(metric => (
              <div key={metric.label} style={glassStyles} className="flex min-w-[190px] flex-col gap-1 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.32em] text-white/55">{metric.label}</p>
                <p className="text-2xl font-semibold text-[#F5E7C7]">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudioHero6_AuroraCommandCenter
