import { forwardRef } from 'react'
import { getConversationalSection } from './section-utils'
import { mergeRefs } from '@/lib/mergeRefs'
import { useSectionExposure } from '@/hooks/useSectionExposure'

const section = getConversationalSection('conversational-cta')

export const ConversationalCTASection = forwardRef<HTMLElement, Record<string, never>>((_, ref) => {
  const exposureRef = useSectionExposure(section.id)

  return (
    <section
      ref={mergeRefs(exposureRef, ref)}
      id={section.id}
      aria-labelledby={`${section.id}-title`}
      className="relative overflow-hidden bg-[#04131F]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(22,240,161,0.2),transparent_60%)]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(11,203,255,0.18),transparent_60%)]" aria-hidden />

      <div className="container mx-auto space-y-8 px-4 py-24 text-center text-white">
        <h2 id={`${section.id}-title`} className="text-3xl font-semibold md:text-4xl">
          {section.copy.headline}
        </h2>
        {section.copy.subhead && (
          <p className="max-w-2xl mx-auto text-white/75 md:text-lg">{section.copy.subhead}</p>
        )}

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={section.copy.primaryCTA?.href}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-conversational-primary px-8 py-3 font-semibold text-black shadow-[0_25px_60px_-30px_rgba(22,240,161,0.85)] transition duration-200 hover:bg-conversational-accent"
          >
            {section.copy.primaryCTA?.label}
            <span className="h-2 w-2 rounded-full bg-black group-hover:bg-white" />
          </a>
          <a
            href={section.copy.secondaryCTA?.href}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-8 py-3 font-semibold text-white transition duration-200 hover:border-white/70 hover:bg-white/10"
          >
            {section.copy.secondaryCTA?.label}
          </a>
        </div>

        <div className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.4em] text-white/60">
          <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-conversational-accent" /> SOC 2 Type II</span>
          <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-conversational-accent" /> 24/7 Availability</span>
          <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-conversational-accent" /> Enterprise Grade</span>
        </div>
      </div>
    </section>
  )
})

ConversationalCTASection.displayName = 'ConversationalCTASection'
