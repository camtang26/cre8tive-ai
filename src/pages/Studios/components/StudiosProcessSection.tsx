import { forwardRef } from 'react'
import { getStudiosSection } from './section-utils'
import { mergeRefs } from '@/lib/mergeRefs'
import { useSectionExposure } from '@/hooks/useSectionExposure'

const section = getStudiosSection('studios-process')
const iconSet = section.visuals.find((visual) => visual.type === 'icon-set')

export const StudiosProcessSection = forwardRef<HTMLElement, Record<string, never>>((_, ref) => {
  const exposureRef = useSectionExposure(section.id)

  return (
    <section
      ref={mergeRefs(exposureRef, ref)}
      id={section.id}
      aria-labelledby={`${section.id}-title`}
      className="relative overflow-hidden bg-[#060912]"
    >
      <div className="container mx-auto grid items-start gap-12 px-4 py-24 lg:grid-cols-[minmax(0,55%)_minmax(0,45%)]">
        <div className="space-y-6 text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/60">
            <span className="h-2 w-2 rounded-full bg-studios-accent" />
            Process Timeline
          </div>
          <h2 id={`${section.id}-title`} className="text-3xl font-semibold text-studios-headline md:text-4xl">
            {section.copy.headline}
          </h2>
          <p className="whitespace-pre-line text-base leading-relaxed text-white/75 md:text-lg">
            {section.copy.body}
          </p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-6 top-0 h-full w-px bg-gradient-to-b from-white/0 via-white/40 to-transparent" aria-hidden />
          <div className="space-y-8 pl-10">
            {iconSet?.items.map((icon, index) => (
              <div key={icon} className="relative space-y-3">
                <div className="absolute -left-10 top-2 h-4 w-4 rounded-full border border-white/20 bg-white/80" aria-hidden />
                <h3 className="text-sm uppercase tracking-[0.3em] text-white/55">Stage {index + 1}</h3>
                <p className="text-base text-white/80">{icon.replace(/-/g, ' ')}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

StudiosProcessSection.displayName = 'StudiosProcessSection'
