import { useEffect, useMemo, useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { GradientButton } from "@/components/ui/gradient-button"
import { useReducedMotion } from "@/components/video-placeholders/hooks/useReducedMotion"
import VimeoPlayer, { VimeoPlayerHandle } from "@/components/core/VimeoPlayer"

gsap.registerPlugin(useGSAP)

const VIMEO_ID = "1051821551"
const POSTER =
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80"

export const StudiosHeroPrototype = () => {
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
      className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/90 shadow-[0_50px_120px_-50px_rgba(5,20,40,0.85)]"
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

        <div className="absolute inset-0 bg-gradient-to-br from-[#03060f]/90 via-[#071427]/85 to-[#0f2740]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(44,222,178,0.22),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(66,137,255,0.18),transparent_45%)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />

        <div className="relative z-10 flex h-full w-full items-center justify-center px-6">
          <div className="max-w-3xl text-center space-y-8">
            <p className="text-xs uppercase tracking-[0.36em] text-white/55" data-hero="fade">
              Cre8tive AI Studios
            </p>
            <h1 className="text-5xl font-black tracking-tight text-white sm:text-[3.75rem]" data-hero="fade">
              Directors’ cuts in 48 hours.
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/75" data-hero="fade">
              Upload a brief and receive a fully art-directed storyboard kit with multi-aspect frames, shot lists, and
              production notes—ready for clients, ready for set.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4" data-hero="fade">
              <GradientButton size="lg">Book a briefing</GradientButton>
              <GradientButton variant="outline" size="lg">
                Watch showreel
              </GradientButton>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white/60" data-hero="fade">
              <span>8 signature visual styles • 97% first-draft approval</span>
              <span className="hidden text-white/30 sm:block">•</span>
              <span>Trusted by Dolby, Nike, NASA Studios</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudiosHeroPrototype

