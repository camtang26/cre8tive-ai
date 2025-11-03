import { forwardRef } from 'react'
import { getStudiosSection } from './section-utils'
import { mergeRefs } from '@/lib/mergeRefs'
import { useSectionExposure } from '@/hooks/useSectionExposure'

const testimonials = [
  {
    company: 'Kotia',
    quote:
      "Cre8tive AI Studios helped us leverage AI video production to create high-quality content quickly. Their team's deep understanding of both technology and business needs is exceptional.",
  },
  {
    company: 'Marina Lab',
    quote:
      "A cost-effective solution for professional-grade video content. Their collaborative approach made the process seamless and stress-free.",
  },
  {
    company: 'Advisor Plus PTD',
    quote:
      "Transformed our content creation approach. Their expertise in AI video production is exceptional, and they educated us on future possibilities.",
  },
]

const section = getStudiosSection('studios-testimonials')

export const StudiosTestimonialsSection = forwardRef<HTMLElement, Record<string, never>>((_, ref) => {
  const exposureRef = useSectionExposure(section.id)

  return (
    <section
      ref={mergeRefs(exposureRef, ref)}
      id={section.id}
      aria-labelledby={`${section.id}-title`}
      className="relative overflow-hidden bg-[#05070E]"
    >
      <div className="container mx-auto space-y-14 px-4 py-24">
        <div className="flex flex-col gap-6 text-center text-white md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/60">
              <span className="h-2 w-2 rounded-full bg-studios-accent" />
              Client Results
            </span>
            <h2 id={`${section.id}-title`} className="mt-4 text-3xl font-semibold text-studios-headline md:text-4xl">
              {section.copy.headline}
            </h2>
          </div>
          <p className="max-w-xl text-white/70">
            Testimonials from existing Studios clients reinforcing trust and outcomes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.company}
              className="relative overflow-hidden rounded-[28px] border border-white/12 bg-white/6 px-6 py-8 text-white shadow-[0_35px_120px_-60px_rgba(0,0,0,0.75)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(225,179,65,0.18),transparent_70%)]" aria-hidden />
              <div className="relative space-y-4">
                <div className="flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-white/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-studios-accent" /> Verified Client
                </div>
                <p className="text-lg leading-relaxed text-white/85">“{testimonial.quote}”</p>
                <div className="text-sm uppercase tracking-[0.3em] text-white/60">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

StudiosTestimonialsSection.displayName = 'StudiosTestimonialsSection'
