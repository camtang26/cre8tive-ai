import { forwardRef } from 'react'
import { getStudiosSection } from './section-utils'
import { mergeRefs } from '@/lib/mergeRefs'
import { useSectionExposure } from '@/hooks/useSectionExposure'

const section = getStudiosSection('studios-hybrid-model')

const iconSet = section.visuals.find((visual) => visual.type === 'icon-set')
const metric = section.visuals.find((visual) => visual.type === 'metric')

export const StudiosHybridModelSection = forwardRef<HTMLElement, Record<string, never>>((_, ref) => {
  const exposureRef = useSectionExposure(section.id)

  return (
    <section
      ref={mergeRefs(exposureRef, ref)}
      id={section.id}
      aria-labelledby={`${section.id}-title`}
      className="relative overflow-hidden bg-[#060912]"
    >
      <div className="container mx-auto grid items-start gap-12 px-4 py-24 lg:grid-cols-[minmax(0,55%)_minmax(0,45%)] lg:gap-16">
        <div className="relative space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/60">
            <span className="h-2 w-2 rounded-full bg-studios-accent" />
            Hybrid Model
          </div>

          <h2 id={`${section.id}-title`} className="text-3xl font-semibold text-studios-headline md:text-4xl">
            {section.copy.headline}
          </h2>

          <p className="whitespace-pre-line text-base leading-relaxed text-white/75 md:text-lg">
            {section.copy.body}
          </p>

          {metric && 'value' in metric && (
            <div className="flex flex-wrap items-center gap-4">
              <div className="rounded-2xl border border-white/15 bg-white/6 px-5 py-4 text-white">
                <span className="block text-xs uppercase tracking-[0.32em] text-white/60">Approval Rate</span>
                <span className="text-2xl font-semibold text-white">{metric.value}</span>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/6 px-5 py-4 text-white/80 text-sm">
                Cinematography-trained AI + human oversight
              </div>
            </div>
          )}
        </div>

        <div className="relative space-y-4">
          <div className="pointer-events-none absolute -top-10 left-20 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(225,179,65,0.25),transparent_70%)] blur-3xl" aria-hidden />
          <div className="grid gap-4">
            {iconSet && iconSet.items.slice(0, 2).map((icon, index) => (
              <div
                key={icon}
                className="relative overflow-hidden rounded-2xl border border-white/12 bg-white/6 px-4 py-3 text-sm text-white/80"
              >
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_left,rgba(225,179,65,0.25),transparent_65%)]" aria-hidden />
                <span className="font-semibold uppercase tracking-[0.28em] text-white/60">Layer {index + 1}</span>
                <p className="mt-2 text-base text-white">{icon.replace(/-/g, ' ')}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[26px] border border-white/12 bg-white/4 p-6 text-white/75">
            <h3 className="text-sm uppercase tracking-[0.28em] text-white/50">What You Get</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-studios-accent" /> Cinematography-trained AI</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-studios-accent" /> Human creatives refining outputs</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-studios-accent" /> Platform-native delivery without compromise</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
})

StudiosHybridModelSection.displayName = 'StudiosHybridModelSection'
