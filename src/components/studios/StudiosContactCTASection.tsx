import { useState, useRef } from "react"
import { Link } from "react-router-dom"

export function StudiosContactCTASection() {
  return (
    <section
      id="studios-contact-cta"
      aria-labelledby="studios-contact-cta-title"
      data-motion-group="contact-cta"
      className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_25%_20%,rgba(49,196,255,0.22),transparent_60%),radial-gradient(circle_at_75%_80%,rgba(225,179,65,0.2),transparent_58%),linear-gradient(148deg,rgba(6,9,18,0.98) 0%,rgba(8,16,32,0.96) 52%,rgba(6,10,24,0.98) 100%)] py-32 md:py-48"
    >
      {/* Noise texture overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.1] [background-image:url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.7\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.8\'/%3E%3C/svg%3E')]" />

      {/* Large glow orbs */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(49,196,255,0.3)_0%,rgba(49,196,255,0)_70%)] blur-[140px]" aria-hidden />
      <div className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(225,179,65,0.28)_0%,rgba(225,179,65,0)_72%)] blur-[150px]" aria-hidden />

      <div className="container relative mx-auto max-w-4xl px-4 md:px-6 xl:px-0">
        <div className="flex flex-col items-center space-y-10 text-center">
          {/* Headline */}
          <h2
            id="studios-contact-cta-title"
            className="text-5xl font-black tracking-tight text-studios-headline md:text-6xl md:leading-[1.1]"
            style={{
              animation: "cta-fade-in 500ms cubic-bezier(0.34, 1.56, 0.64, 1) 0ms both",
            }}
          >
            Ready for Secure, Broadcast-Quality AI Production?
          </h2>

          {/* Subhead */}
          <p
            className="max-w-3xl text-xl leading-relaxed text-studios-body md:text-2xl"
            style={{
              animation: "cta-fade-in 500ms cubic-bezier(0.34, 1.56, 0.64, 1) 200ms both",
            }}
          >
            Discuss your next project with a studio that's mastered AI production since 2023. Your clients demand quality—deliver it without traditional budgets through Cre8tive Studios.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col items-center gap-4 sm:flex-row"
            style={{
              animation: "cta-fade-in 500ms cubic-bezier(0.34, 1.56, 0.64, 1) 400ms both",
            }}
          >
            <PrimaryCTAButton />
            <SecondaryCTAButton />
          </div>

          {/* Trust signal */}
          <p
            className="text-sm font-medium uppercase tracking-wider text-white/50"
            style={{
              animation: "cta-fade-in 500ms cubic-bezier(0.34, 1.56, 0.64, 1) 700ms both",
            }}
          >
            Secure, Comprehensive AI Production Since 2023
          </p>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
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

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: all 150ms ease-out !important;
          }
        }
      `}</style>
    </section>
  )
}

function PrimaryCTAButton() {
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return

    const button = buttonRef.current
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    // Magnetic pull within button area + margin
    const distance = Math.sqrt(x * x + y * y)
    const strength = 0.25

    button.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }

  const handleMouseLeave = () => {
    if (!buttonRef.current) return
    buttonRef.current.style.transform = "translate(0, 0)"
    setIsHovering(false)
  }

  return (
    <Link
      ref={buttonRef}
      to="/contact"
      className="group relative inline-flex h-16 items-center justify-center gap-3 overflow-hidden rounded-[24px] border border-white/18 bg-gradient-to-br from-[rgba(49,196,255,0.08)] to-[rgba(225,179,65,0.06)] px-16 text-lg font-semibold text-white shadow-[0_40px_120px_-40px_rgba(49,196,255,0.5)] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_60px_160px_-50px_rgba(49,196,255,0.7)] focus-visible:-translate-y-1 focus-visible:shadow-[0_60px_160px_-50px_rgba(49,196,255,0.7)] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[6px] focus-visible:outline-[rgba(49,196,255,0.8)]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
    >
      {/* Glassmorphic inner surface */}
      <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-[rgba(49,196,255,0.95)] to-[rgba(225,179,65,0.95)] backdrop-blur-[12px] transition-opacity duration-400 group-hover:from-[rgba(49,196,255,1)] group-hover:to-[rgba(225,179,65,1)]" />

      {/* Content */}
      <span className="relative z-10">Start a Conversation</span>

      {/* Subtle shine effect */}
      <div className="absolute inset-0 rounded-[24px] bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden />
    </Link>
  )
}

function SecondaryCTAButton() {
  return (
    <Link
      to="#studios-portfolio"
      className="group inline-flex h-16 items-center justify-center gap-3 rounded-[24px] border border-white/15 bg-transparent px-16 text-lg font-semibold text-white transition-all duration-300 ease-out hover:border-white/25 hover:bg-white/5 focus-visible:border-white/25 focus-visible:bg-white/5 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[6px] focus-visible:outline-[rgba(255,255,255,0.6)]"
      onClick={(e) => {
        e.preventDefault()
        const portfolio = document.querySelector("#studios-portfolio")
        portfolio?.scrollIntoView({ behavior: "smooth", block: "center" })
      }}
    >
      <span className="relative z-10">Explore Our Work</span>
    </Link>
  )
}
