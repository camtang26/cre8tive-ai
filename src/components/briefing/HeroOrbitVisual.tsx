import { useRef, useEffect } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const orbitCards = [
  {
    title: "Storyboard Scenes",
    subtitle: "AI drafted, producer approved",
    gradient: "from-[#4F46E5]/60 via-[#312E81]/70 to-transparent",
    position: "top-10 left-8",
    delay: 0,
  },
  {
    title: "Platform Specs",
    subtitle: "16:9 · 9:16 · 1:1 ready",
    gradient: "from-[#22D3EE]/60 via-[#0F172A]/70 to-transparent",
    position: "top-36 right-6",
    delay: 0.4,
  },
  {
    title: "Producer Notes",
    subtitle: "Timing, motion, CTA cues",
    gradient: "from-[#C026D3]/60 via-[#1F1235]/70 to-transparent",
    position: "bottom-10 left-6",
    delay: 0.8,
  },
]

export const HeroOrbitVisual = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useGSAP(() => {
    if (reduceMotion) return

    // Background opacity pulse
    if (bgRef.current) {
      gsap.to(bgRef.current, {
        opacity: 0.9,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      })
    }

    // Orbit cards floating animation
    const cards = containerRef.current?.querySelectorAll('.orbit-card')
    cards?.forEach((card, index) => {
      gsap.to(card, {
        y: "+=20",
        duration: 6,
        repeat: -1,
        yoyo: true,
        delay: orbitCards[index].delay,
        ease: "power1.inOut"
      })

      // Fade in
      gsap.from(card, {
        opacity: 0,
        duration: 0.8,
        delay: orbitCards[index].delay,
        ease: "power2.out"
      })
    })

    // Center circle animation
    if (centerRef.current) {
      gsap.to(centerRef.current, {
        scale: 1.05,
        rotation: 3,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      })
    }
  }, { scope: containerRef })

  return (
    <div className="relative mt-12 w-full max-w-[520px] lg:mt-0" ref={containerRef}>
      <div
        className="absolute -inset-10 rounded-[52px] bg-gradient-to-br from-[#4F46E5]/25 via-[#0EA5E9]/20 to-[#C026D3]/25 blur-3xl"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#0F172A]/85 via-[#111827]/92 to-[#020617]/95 p-10 shadow-[0_45px_160px_-100px_rgba(99,102,241,0.75)]">
        <div
          ref={bgRef}
          className="absolute inset-0"
          style={{
            opacity: 0.5,
            background:
              "radial-gradient(circle at 30% 30%, rgba(79,70,229,0.25) 0%, transparent 55%), radial-gradient(circle at 75% 65%, rgba(14,165,233,0.25) 0%, transparent 55%)",
          }}
          aria-hidden
        />

        <div className="relative flex h-full flex-col justify-between gap-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-white/50">
              Live Preview
            </p>
            <h3 className="mt-4 text-3xl font-black tracking-tight text-white">
              Storyboard package prepped for Studios delivery
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              The Briefing Engine synchronises campaign narratives, platform specs, and motion cues
              so your team can review or hand off instantly.
            </p>
          </div>

          <div className="relative h-[260px]">
            {orbitCards.map((card) => (
              <div
                key={card.title}
                className={`orbit-card absolute ${card.position} w-[220px] rounded-3xl border border-white/10 bg-gradient-to-br ${card.gradient} px-5 py-6 shadow-[0_25px_80px_-60px_rgba(99,102,241,0.6)] backdrop-blur`}
                style={{ willChange: reduceMotion ? 'auto' : 'transform, opacity' }}
              >
                <p className="text-sm font-semibold text-white">{card.title}</p>
                <p className="mt-2 text-xs text-white/70">{card.subtitle}</p>
              </div>
            ))}

            <div
              ref={centerRef}
              className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-gradient-to-br from-[#1E293B]/90 to-[#111827]/70 shadow-[0_20px_80px_-40px_rgba(59,130,246,0.6)]"
              style={{ willChange: reduceMotion ? 'auto' : 'transform' }}
            >
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#4F46E5]/65 via-[#8B5CF6]/60 to-[#22D3EE]/65 blur-2xl" />
              <div className="relative flex h-full w-full flex-col items-center justify-center gap-1 text-center text-white">
                <span className="text-[10px] uppercase tracking-[0.45em] text-white/60">
                  AI + Studio
                </span>
                <span className="text-lg font-semibold">Hybrid Flow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
