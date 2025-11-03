import { forwardRef } from 'react'
import { getConversationalSection } from './section-utils'
import { mergeRefs } from '@/lib/mergeRefs'
import { useSectionExposure } from '@/hooks/useSectionExposure'

const section = getConversationalSection('conversational-scale')
const metrics = section.visuals.filter((visual) => visual.type === 'metric')
const badge = section.visuals.find((visual) => visual.type === 'badge')

export const ConversationalScaleSection = forwardRef<HTMLElement, Record<string, never>>((_, ref) => {
  const exposureRef = useSectionExposure(section.id)

  return (
    <section
      ref={mergeRefs(exposureRef, ref)}
      id={section.id}
      aria-labelledby={`${section.id}-title`}
      className="relative overflow-hidden bg-[#041b2d]"
    >
      <div className="container mx-auto grid items-start gap-16 px-4 py-24 lg:grid-cols-[minmax(0,52%)_minmax(0,48%)]">
        <div className="space-y-6 text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/60">
            <span className="h-2 w-2 rounded-full bg-conversational-accent" />
            Scale Capacity
          </div>
          <h2 id={`${section.id}-title`} className="text-3xl font-semibold text-conversational-headline md:text-4xl">
            {section.copy.headline}
          </h2>
          <p className="whitespace-pre-line text-base leading-relaxed text-white/75 md:text-lg">
            {section.copy.body}
          </p>
          {badge && 'value' in badge && (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/65">
              <span className="h-2 w-2 rounded-full bg-conversational-accent" />
              {badge.value}
            </div>
          )}
        </div>

        <div className="space-y-4 rounded-[28px] border border-white/12 bg-white/6 px-6 py-8 text-white/80">
          <h3 className="text-sm uppercase tracking-[0.32em] text-white/55">What scaling looks like</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {metrics.map((metric) => (
              <div
                key={`${metric.label}-${metric.value}`}
                className="rounded-2xl border border-white/15 bg-white/8 px-4 py-4 text-white"
              >
                <span className="block text-xs uppercase tracking-[0.33em] text-white/55">{metric.label}</span>
                {'value' in metric && (
                  <span className="text-2xl font-semibold text-white">{metric.value}</span>
                )}
              </div>
            ))}
          </div>
          <p className="text-sm text-white/65">
            Agents run 24/7 with brand-accurate conversations, intelligent escalation, and human oversight when confidence dips below threshold.
          </p>
        </div>
      </div>
    </section>
  )
})

ConversationalScaleSection.displayName = 'ConversationalScaleSection'
