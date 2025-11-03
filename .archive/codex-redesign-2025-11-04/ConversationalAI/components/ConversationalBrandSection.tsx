import { forwardRef } from 'react'
import { getConversationalSection } from './section-utils'
import { mergeRefs } from '@/lib/mergeRefs'
import { useSectionExposure } from '@/hooks/useSectionExposure'

const section = getConversationalSection('conversational-brand')
const images = section.visuals.filter((visual) => visual.type === 'image')
const iconSet = section.visuals.find((visual) => visual.type === 'icon-set')

export const ConversationalBrandSection = forwardRef<HTMLElement, Record<string, never>>((_, ref) => {
  const exposureRef = useSectionExposure(section.id)

  return (
    <section
      ref={mergeRefs(exposureRef, ref)}
      id={section.id}
      aria-labelledby={`${section.id}-title`}
      className="relative overflow-hidden bg-[#031623]"
    >
      <div className="container mx-auto grid items-start gap-14 px-4 py-24 lg:grid-cols-[minmax(0,55%)_minmax(0,45%)]">
        <div className="relative space-y-6 text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/60">
            <span className="h-2 w-2 rounded-full bg-conversational-accent" />
            Brand Consistency
          </div>
          <h2 id={`${section.id}-title`} className="text-3xl font-semibold text-conversational-headline md:text-4xl">
            {section.copy.headline}
          </h2>
          <p className="whitespace-pre-line text-base leading-relaxed text-white/75 md:text-lg">
            {section.copy.body}
          </p>
        </div>

        <div className="space-y-5">
          {images.map((image) => (
            <figure key={image.src} className="overflow-hidden rounded-[26px] border border-white/12 bg-white/8">
              <img src={image.src} alt={image.alt} className="h-full w-full object-cover" loading="lazy" />
            </figure>
          ))}
          {iconSet && (
            <div className="rounded-[26px] border border-white/12 bg-gradient-to-br from-white/12 via-white/5 to-white/14 px-5 py-6 text-white/75">
              <h3 className="text-sm uppercase tracking-[0.3em] text-white/55">Training Pipeline</h3>
              <ul className="mt-3 space-y-3 text-sm">
                {iconSet.items.map((icon) => (
                  <li key={icon} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-conversational-accent" />
                    {icon.replace(/-/g, ' ')}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  )
})

ConversationalBrandSection.displayName = 'ConversationalBrandSection'
