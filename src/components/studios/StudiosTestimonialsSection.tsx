import type { CSSProperties } from "react"

interface Testimonial {
  id: string
  company: string
  quote: string
  accent: {
    hex: string
    gradient: string
    glow: string
  }
  position: {
    marginTop: string
  }
  animation: {
    delay: number
  }
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "kotia",
    company: "Kotia",
    quote: "Cre8tive AI Studios helped us leverage AI video production to create high-quality content quickly. Their team's deep understanding of both technology and business needs is exceptional.",
    accent: {
      hex: "#31C4FF",
      gradient: "from-[rgba(49,196,255,0.36)] via-[rgba(49,196,255,0.12)] to-transparent",
      glow: "rgba(49,196,255,0.28)",
    },
    position: {
      marginTop: "0",
    },
    animation: {
      delay: 0,
    },
  },
  {
    id: "marina-lab",
    company: "Marina Lab",
    quote: "A cost-effective solution for professional-grade video content. Their collaborative approach made the process seamless and stress-free.",
    accent: {
      hex: "#E1B341",
      gradient: "from-[rgba(225,179,65,0.32)] via-[rgba(225,179,65,0.12)] to-transparent",
      glow: "rgba(225,179,65,0.26)",
    },
    position: {
      marginTop: "8rem",
    },
    animation: {
      delay: 150,
    },
  },
  {
    id: "advisor-plus",
    company: "Advisor Plus PTD",
    quote: "Transformed our content creation approach. Their expertise in AI video production is exceptional, and they educated us on future possibilities.",
    accent: {
      hex: "#8EDCFF",
      gradient: "from-[rgba(142,220,255,0.32)] via-[rgba(49,196,255,0.14)] to-transparent",
      glow: "rgba(142,220,255,0.28)",
    },
    position: {
      marginTop: "4rem",
    },
    animation: {
      delay: 300,
    },
  },
]

export function StudiosTestimonialsSection() {
  return (
    <section
      id="studios-testimonials"
      aria-labelledby="studios-testimonials-title"
      data-motion-group="testimonials"
      className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_20%_15%,rgba(49,196,255,0.2),transparent_58%),radial-gradient(circle_at_80%_25%,rgba(225,179,65,0.18),transparent_60%),linear-gradient(152deg,rgba(6,9,18,0.98) 0%,rgba(8,15,32,0.96) 50%,rgba(6,10,24,0.98) 100%)] py-24 md:py-32"
    >
      {/* Noise texture overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.1] [background-image:url('data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 200 200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.7\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.8\'/%3E%3C/svg%3E')]" />

      {/* Large glow orbs */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(49,196,255,0.28)_0%,rgba(49,196,255,0)_70%)] blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(225,179,65,0.26)_0%,rgba(225,179,65,0)_72%)] blur-[130px]" aria-hidden />

      <div className="container relative mx-auto max-w-6xl px-4 md:px-6 xl:px-0">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-3xl space-y-6 text-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-white/55">
            Client Perspective
          </div>

          <h2
            id="studios-testimonials-title"
            className="text-4xl font-black tracking-tight text-studios-headline md:text-[3.2rem] md:leading-[1.08]"
          >
            What They Say
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="relative">
          {/* Mobile: Vertical stack */}
          <div className="flex flex-col gap-8 md:hidden">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} isMobile />
            ))}
          </div>

          {/* Tablet: 2-column hybrid */}
          <div className="hidden md:grid md:grid-cols-2 md:gap-8 lg:hidden">
            <TestimonialCard testimonial={TESTIMONIALS[0]} index={0} />
            <TestimonialCard testimonial={TESTIMONIALS[1]} index={1} style={{ marginTop: "3rem" }} />
            <div className="col-span-2 mx-auto w-full max-w-[32rem]" style={{ marginTop: "2rem" }}>
              <TestimonialCard testimonial={TESTIMONIALS[2]} index={2} />
            </div>
          </div>

          {/* Desktop: Asymmetric 3-column */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                index={index}
                style={{ marginTop: testimonial.position.marginTop }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  testimonial: Testimonial
  index: number
  isMobile?: boolean
  style?: CSSProperties
}

function TestimonialCard({ testimonial, index, isMobile = false, style }: TestimonialCardProps) {
  return (
    <article
      className="group relative"
      style={{
        animation: isMobile ? "none" : `testimonial-fade-in 500ms cubic-bezier(0.34, 1.56, 0.64, 1) ${testimonial.animation.delay}ms both`,
        ...style,
      }}
      aria-label={`Testimonial from ${testimonial.company}`}
      tabIndex={0}
    >
      {/* Background glow orb (per card) */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full rounded-full blur-[140px] transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle, ${testimonial.accent.glow} 0%, rgba(0,0,0,0) 70%)`,
          opacity: 0.6,
        }}
        aria-hidden
      />

      {/* Outer border container (glassmorphic layer 1) */}
      <div className="group relative overflow-hidden rounded-[32px] border border-white/12 bg-white/[0.02] p-[1.5px] shadow-[0_80px_200px_-110px_rgba(8,15,32,0.92)] transition-all duration-500 ease-out hover:-translate-y-2 hover:border-white/18 hover:shadow-[0_120px_260px_-120px_rgba(9,18,36,0.95)] focus-visible:-translate-y-2 focus-visible:border-white/18 focus-visible:shadow-[0_120px_260px_-120px_rgba(9,18,36,0.95)] focus-visible:outline-2 focus-visible:outline-offset-4"
        style={{
          outlineColor: `${testimonial.accent.hex}99`, // 60% opacity
        }}
      >
        {/* Inner glassmorphic surface (layer 2) */}
        <div className="relative overflow-hidden rounded-[28px] bg-white/[0.05] backdrop-blur-[18px] md:backdrop-blur-[12px] lg:backdrop-blur-[18px]">
          {/* Gradient overlay (layer 3) */}
          <div className={`absolute inset-0 rounded-[28px] bg-gradient-to-br opacity-80 mix-blend-screen ${testimonial.accent.gradient}`} aria-hidden />

          {/* Content container (layer 4) */}
          <div className="relative p-10">
            {/* Decorative quote mark */}
            <div
              className="absolute -left-2 -top-4 select-none font-serif text-[140px] leading-none opacity-12 transition-opacity duration-500 group-hover:opacity-18"
              style={{
                color: testimonial.accent.hex,
                textShadow: `0 0 60px ${testimonial.accent.hex}33`,
                fontFamily: "Georgia, serif",
                transform: "rotate(-2deg)",
              }}
              aria-hidden
            >
              "
            </div>

            {/* Quote text */}
            <blockquote className="relative z-10 mb-6 text-lg leading-relaxed text-studios-body md:text-[1.25rem]">
              {testimonial.quote}
            </blockquote>

            {/* Attribution */}
            <footer className="relative z-10 border-t border-white/10 pt-6">
              <cite className="not-italic text-base font-semibold md:text-[1.1rem]" style={{ color: testimonial.accent.hex }}>
                {testimonial.company}
              </cite>
            </footer>
          </div>
        </div>
      </div>

      {/* Inline styles for animation */}
      <style>{`
        @keyframes testimonial-fade-in {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          article {
            animation: none !important;
            opacity: 1;
            transform: translateY(0);
          }

          .group:hover {
            transform: translateY(-2px) !important;
            transition: all 150ms ease-out !important;
          }
        }

        /* Mobile blur optimization */
        @media (max-width: 767px) {
          .backdrop-blur-[18px] {
            backdrop-filter: blur(8px);
          }
        }

        /* GPU acceleration */
        article {
          transform: translateZ(0);
          will-change: transform;
          backface-visibility: hidden;
        }

        /* Remove will-change after animation */
        @media (prefers-reduced-motion: no-preference) {
          article {
            animation-fill-mode: forwards;
          }
        }
      `}</style>
    </article>
  )
}
