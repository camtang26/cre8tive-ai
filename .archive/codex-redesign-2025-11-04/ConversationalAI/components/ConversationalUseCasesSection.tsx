import { forwardRef } from 'react'
import { getConversationalSection } from './section-utils'
import { mergeRefs } from '@/lib/mergeRefs'
import { useSectionExposure } from '@/hooks/useSectionExposure'

const section = getConversationalSection('conversational-use-cases')
const iconSet = section.visuals.find((visual) => visual.type === 'icon-set')

export const ConversationalUseCasesSection = forwardRef<HTMLElement, Record<string, never>>((_, ref) => {
  const exposureRef = useSectionExposure(section.id)

  return (
    <section
      ref={mergeRefs(exposureRef, ref)}
      id={section.id}
      aria-labelledby={`${section.id}-title`}
      className="relative overflow-hidden bg-[#051625]"
    >
      <div className="container mx-auto grid items-start gap-16 px-4 py-24 lg:grid-cols-[minmax(0,48%)_minmax(0,52%)]">
        <div className="space-y-8 text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/60">
            <span className="h-2 w-2 rounded-full bg-conversational-accent" />
            Use Cases
          </div>
          <h2 id={`${section.id}-title`} className="text-3xl font-semibold text-conversational-headline md:text-4xl">
            {section.copy.headline}
          </h2>
          <p className="whitespace-pre-line text-base leading-relaxed text-white/75 md:text-lg">
            {section.copy.body}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {iconSet?.items.map((icon) => (
            <div
              key={icon}
              className="relative overflow-hidden rounded-[26px] border border-white/15 bg-gradient-to-br from-white/10 via-white/4 to-white/12 px-5 py-6 text-white/80 shadow-[0_35px_120px_-60px_rgba(0,0,0,0.6)]"
            >
              <div className="absolute -top-16 right-8 h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(11,203,255,0.25),transparent_70%)] blur-3xl" aria-hidden />
              <div className="relative space-y-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.32em] text-white/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-conversational-accent" />
                  {icon.replace(/-/g, ' ')}
                </span>
                <p className="text-sm leading-relaxed text-white/75">
                  Conversational agents trained on brand voice handle complex queries, escalate intelligently, and deliver actionable insights.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

ConversationalUseCasesSection.displayName = 'ConversationalUseCasesSection'
