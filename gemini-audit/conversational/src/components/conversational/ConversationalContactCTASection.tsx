import { useCallback, useState, useRef } from "react"
import type { PointerEvent as ReactPointerEvent } from "react"
import { ArrowRight } from "lucide-react"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"
import { cn } from "@/lib/utils"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

export function ConversationalContactCTASection() {
  const prefersReducedMotion = usePrefersReducedMotion()
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])
  const primaryCTARef = useRef<HTMLAnchorElement>(null)

  // 🎬 GSAP Magnetic Hover (better physics than CSS!)
  const handlePrimaryPointerMove = useCallback(
    (event: ReactPointerEvent<HTMLAnchorElement>) => {
      if (prefersReducedMotion) return
      const target = event.currentTarget
      const rect = target.getBoundingClientRect()
      const offsetX = ((event.clientX - (rect.left + rect.width / 2)) / rect.width) * 18
      const offsetY = ((event.clientY - (rect.top + rect.height / 2)) / rect.height) * 12

      // Use GSAP for smoother movement
      gsap.to(target, {
        x: offsetX,
        y: offsetY,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      })
    },
    [prefersReducedMotion]
  )

  const handlePrimaryPointerLeave = useCallback((event: ReactPointerEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget
    gsap.to(target, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)"  // Elastic bounce back!
    })
  }, [])

  const handlePrimaryClick = useCallback((event: ReactPointerEvent<HTMLAnchorElement>) => {
    if (prefersReducedMotion) return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const id = Date.now()
    setRipples((prev) => [...prev, { x, y, id }])
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id))
    }, 600)
  }, [prefersReducedMotion])

  return (
    <section
      id="conversational-contact-cta"
      aria-labelledby="conversational-contact-cta-title"
      className="relative isolate overflow-hidden py-32 md:py-48"
    >
      {/* Gradient Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-conversational-primary via-conversational-accent to-conversational-primary-soft" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Large Animated Orbs */}
      <div
        className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(20,241,149,0.4)_0%,transparent_70%)] blur-3xl"
        style={{
          animation: "orb-rotate-1 30s linear infinite",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(16,185,129,0.35)_0%,transparent_70%)] blur-3xl"
        style={{
          animation: "orb-rotate-2 30s linear infinite reverse",
        }}
        aria-hidden
      />

      <div className="relative z-10">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          {/* Headline */}
          <h2
            id="conversational-contact-cta-title"
            className="mb-6 text-5xl font-black tracking-tight text-white md:text-6xl"
            style={{
              animation: "cta-fade-in 600ms cubic-bezier(0.34, 1.56, 0.64, 1) 0ms both",
            }}
          >
            Ready to Transform Customer Conversations?
          </h2>

          {/* Subhead */}
          <p
            className="mx-auto mb-12 max-w-2xl text-xl text-white/90 md:text-2xl"
            style={{
              animation: "cta-fade-in 600ms cubic-bezier(0.34, 1.56, 0.64, 1) 200ms both",
            }}
          >
            Join 200+ enterprise teams using Conversational AI to scale support without headcount. Start delivering
            authentic, on-brand conversations today.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{
              animation: "cta-fade-in 600ms cubic-bezier(0.34, 1.56, 0.64, 1) 400ms both",
            }}
          >
            {/* Primary CTA - Magnetic */}
            <a
              ref={primaryCTARef}
              href="/contact"
              className={cn(
                "group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-10 py-4 text-base font-semibold uppercase tracking-[0.24em]",
                "bg-white text-conversational-primary shadow-[0_32px_90px_-45px_rgba(255,255,255,0.9)] transition-shadow duration-300",
                "hover:shadow-[0_40px_110px_-50px_rgba(255,255,255,1)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-conversational-primary"
              )}
              data-reduced-motion={prefersReducedMotion ? "true" : "false"}
              onPointerMove={handlePrimaryPointerMove}
              onPointerLeave={handlePrimaryPointerLeave}
              onClick={handlePrimaryClick}
            >
              Start Free Trial
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-conversational-primary/10 transition duration-300 group-hover:bg-conversational-primary/20">
                <ArrowRight className="h-4 w-4" />
              </span>

              {/* Ripple effects */}
              {ripples.map((ripple) => (
                <span
                  key={ripple.id}
                  className="absolute h-5 w-5 rounded-full bg-conversational-accent/30"
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                    animation: "ripple-expand 600ms ease-out forwards",
                  }}
                />
              ))}

              {/* Inner glow */}
              <span className="pointer-events-none absolute inset-0 rounded-full border border-conversational-primary/20 opacity-0 transition group-hover:opacity-100" aria-hidden />
            </a>

            {/* Secondary CTA - Ghost */}
            <a
              href="#conversational-live-demo"
              className={cn(
                "group inline-flex items-center gap-3 rounded-full border-2 border-white/30 bg-white/10 px-10 py-4 text-base font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-sm transition-all duration-300",
                "hover:-translate-y-[4px] hover:border-white/50 hover:bg-white/20",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-conversational-primary"
              )}
            >
              Book a Demo
              <span className="relative flex h-3 w-3 items-center justify-center rounded-full bg-white/50 transition duration-300 group-hover:bg-white" />
            </a>
          </div>

          {/* Trust Signal */}
          <div
            className="mt-12 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-white/80"
            style={{
              animation: "cta-fade-in 600ms cubic-bezier(0.34, 1.56, 0.64, 1) 700ms both",
            }}
          >
            <span className="h-2 w-2 rounded-full bg-white/60" />
            SOC 2 Type II • GDPR Compliant • 99.9% Uptime
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes cta-fade-in {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes orb-rotate-1 {
          0% {
            transform: rotate(0deg) translateX(50px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(50px) rotate(-360deg);
          }
        }

        @keyframes orb-rotate-2 {
          0% {
            transform: rotate(0deg) translateX(-50px) rotate(0deg);
          }
          100% {
            transform: rotate(360deg) translateX(-50px) rotate(-360deg);
          }
        }

        @keyframes ripple-expand {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(10);
            opacity: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          div[style*="animation"],
          h2[style*="animation"],
          p[style*="animation"] {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }

          .magnetic-cta {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}
