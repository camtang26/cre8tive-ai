import { useEffect, useMemo, useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { GradientButton } from "@/components/ui/gradient-button"
import { useReducedMotion } from "@/components/video-placeholders/hooks/useReducedMotion"
import VimeoPlayer, { VimeoPlayerHandle } from "@/components/core/VimeoPlayer"

gsap.registerPlugin(useGSAP)

const VIMEO_ID = "1051821551"
const POSTER =
  "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1920&q=80"

export const ConversationalHeroPrototype = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const vimeoRef = useRef<VimeoPlayerHandle>(null)

  const prefersReducedMotion = useReducedMotion()
  const shouldAutoplay = useMemo(() => !prefersReducedMotion, [prefersReducedMotion])
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion || !heroRef.current || !vimeoRef.current) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          setInView(entry.isIntersecting)
          if (entry.isIntersecting) {
            vimeoRef.current
              ?.play()
              .catch(() => {
                /* ignore autoplay rejection */
              })
          } else {
            vimeoRef.current?.pause().catch(() => undefined)
          }
        })
      },
      { threshold: 0.45 }
    )

    observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [prefersReducedMotion])

  useEffect(() => {
    if (prefersReducedMotion) {
      vimeoRef.current?.pause().catch(() => undefined)
    }
  }, [prefersReducedMotion])

  useGSAP(() => {
    const scope = heroRef.current
    if (!scope) return
    gsap.fromTo(
      scope.querySelectorAll("[data-hero='fade']"),
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.12 }
    )
  }, { scope: heroRef })

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/90 shadow-[0_50px_120px_-50px_rgba(4,18,32,0.85)]"
    >
      <div className="relative isolate h-[580px] overflow-hidden rounded-[32px]">
        {!prefersReducedMotion ? (
          <div className="absolute inset-0">
            <VimeoPlayer
              ref={vimeoRef}
              videoId={VIMEO_ID}
              autoplay={shouldAutoplay}
              muted
              loop
              isBackground
              className="absolute inset-0 !h-full !pb-0 w-full [&>iframe]:h-full [&>iframe]:w-full"
            />
          </div>
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${POSTER})` }}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-br from-[#02060f]/90 via-[#06172c]/85 to-[#0b2846]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(63,209,255,0.24),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_70%,rgba(59,236,190,0.18),transparent_50%)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />

        <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
          <div className="max-w-3xl text-center space-y-8">
            <p className="text-xs uppercase tracking-[0.36em] text-white/55" data-hero="fade">
              Conversational AI
            </p>
            <h1 className="text-5xl font-black tracking-tight text-white sm:text-[3.75rem]" data-hero="fade">
              Scale support without headcount.
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/75" data-hero="fade">
              Deploy brand-trained agents that resolve tier-one requests, escalate edge cases, and report every action with
              auditable context.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4" data-hero="fade">
              <GradientButton size="lg">Schedule a demo</GradientButton>
              <GradientButton variant="outline" size="lg">
                Watch live run
              </GradientButton>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/60" data-hero="fade">
              <span>-62% avg handle time</span>
              <span className="hidden text-white/30 sm:block">•</span>
              <span>ISO 27001 • SOC 2 • GDPR compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConversationalHeroPrototype

