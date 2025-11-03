import { forwardRef } from 'react'
import { getConversationalSection } from './section-utils'
import { mergeRefs } from '@/lib/mergeRefs'
import { useSectionExposure } from '@/hooks/useSectionExposure'

const section = getConversationalSection('conversational-enterprise')
const iconSets = section.visuals.filter((visual) => visual.type === 'icon-set')

export const ConversationalEnterpriseSection = forwardRef<HTMLElement, Record<string, never>>((_, ref) => {
  const exposureRef = useSectionExposure(section.id)

  return (
    <section
      ref={mergeRefs(exposureRef, ref)}
      id={section.id}
      aria-labelledby={`${section.id}-title`}
      className="relative overflow-hidden bg-[#03121E]"
    >
      <div className="container mx-auto space-y-12 px-4 py-24 text-center text-white">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/6 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/60">
            <span className="h-2 w-2 rounded-full bg-conversational-accent" />
            Enterprise Grade
          </span>
          <h2 id={`${section.id}-title`} className="text-3xl font-semibold text-conversational-headline md:text-4xl">
            {section.copy.headline}
          </h2>
          <p className="max-w-3xl text-white/75 md:text-lg">
            {section.copy.body}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {iconSets.map((set, setIndex) => (
            <div
              key={`${set.description ?? 'set'}-${setIndex}`}
              className="space-y-4 rounded-[28px] border border-white/12 bg-gradient-to-br from-white/10 via-white/5 to-white/12 px-6 py-8 text-white/75"
            >
              <h3 className="text-sm uppercase tracking-[0.3em] text-white/55">
                {setIndex === 0 ? 'Security & Compliance' : 'Integrations'}
              </h3>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {set.items.map((icon) => (
                  <span
                    key={icon}
                    className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs uppercase tracking-[0.32em] text-white/70"
                  >
                    {icon.replace(/-/g, ' ')}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})

ConversationalEnterpriseSection.displayName = 'ConversationalEnterpriseSection'
