import type { SectionConfig } from '@/config/sections/types'
import type { Ref } from 'react'
import { clsx } from 'clsx'
import { getThemeTokens } from './theme-utils'

interface CopyPatternProps {
  section: SectionConfig
  sectionRef?: Ref<HTMLElement>
}

const paletteClasses = {
  studios: {
    headline: 'text-studios-headline',
    body: 'text-studios-body',
  },
  conversational: {
    headline: 'text-conversational-headline',
    body: 'text-conversational-body',
  },
}

export const CopyPattern = ({ section, sectionRef }: CopyPatternProps) => {
  const {
    copy: { headline, body },
    visuals,
    palette,
    id,
  } = section

  const paletteTokens = paletteClasses[palette.theme]

  const iconSet = visuals.find((visual) => visual.type === 'icon-set')
  const metrics = visuals.filter((visual) => visual.type === 'metric')
  const images = visuals.filter((visual) => visual.type === 'image')
  const theme = getThemeTokens(palette.theme)
  const layoutVariant = section.layout ?? 'default'

  const containerClass = clsx(
    'container mx-auto grid items-start gap-12 lg:grid-cols-[minmax(0,58%)_minmax(0,42%)]',
    layoutVariant === 'studios-hybrid' && 'lg:grid-cols-[minmax(0,60%)_minmax(0,40%)] gap-12',
    layoutVariant === 'studios-timeline' && 'lg:grid-cols-[minmax(0,55%)_minmax(0,45%)] gap-16',
    layoutVariant === 'studios-testimonials' && 'lg:grid-cols-[minmax(0,55%)_minmax(0,45%)] gap-14',
    layoutVariant === 'conversational-pillars' && 'lg:grid-cols-[minmax(0,45%)_minmax(0,55%)] gap-12',
    layoutVariant === 'conversational-scale' && 'lg:grid-cols-[minmax(0,52%)_minmax(0,48%)] gap-14',
    layoutVariant === 'conversational-spectrum' && 'lg:grid-cols-[minmax(0,50%)_minmax(0,50%)] gap-12',
    layoutVariant === 'conversational-shield' && 'lg:grid-cols-[minmax(0,48%)_minmax(0,52%)] gap-12',
  )

  const contentClass = clsx(
    'relative space-y-6',
    layoutVariant.startsWith('conversational') && 'text-left',
    layoutVariant === 'conversational-pillars' && 'order-2 lg:order-1',
    layoutVariant === 'conversational-scale' && 'order-2 lg:order-1',
  )

  const asideClass = clsx(
    'relative space-y-4',
    layoutVariant === 'studios-hybrid' && 'lg:pl-4',
    layoutVariant === 'studios-testimonials' && 'lg:pl-8 space-y-5',
    layoutVariant === 'conversational-pillars' && 'order-1 lg:order-2 grid gap-4',
    layoutVariant === 'conversational-pillars' && iconSet?.items.length
      ? 'grid-cols-1 sm:grid-cols-2 gap-5'
      : undefined,
    layoutVariant === 'conversational-scale' && 'order-1 lg:order-2 space-y-5',
    layoutVariant === 'conversational-spectrum' && 'lg:pl-6 space-y-5',
    layoutVariant === 'conversational-shield' && 'lg:pl-6 space-y-5',
  )

  const accentLabel =
    layoutVariant === 'studios-hybrid'
      ? 'Hybrid Model'
      : layoutVariant === 'studios-timeline'
      ? 'Workflow Overview'
      : layoutVariant === 'conversational-pillars'
      ? 'Use Cases'
      : layoutVariant === 'conversational-scale'
      ? 'Scaling Proof'
      : layoutVariant === 'conversational-spectrum'
      ? 'Brand Consistency'
      : layoutVariant === 'conversational-shield'
      ? 'Enterprise Ready'
      : undefined

  return (
    <section ref={sectionRef} id={id} className="py-16 md:py-24" aria-labelledby={`${id}-title`}>
      {/* Animation: [TBD by GSAP team] */}
      <div className={containerClass}>
        <div className="relative">
          <div className="absolute -left-8 top-0 hidden h-full w-px bg-gradient-to-b from-white/0 via-white/40 to-white/0 lg:block" aria-hidden />
          <div
            className={clsx(
              'relative overflow-hidden rounded-[28px] p-8 md:p-10 border',
              theme.cardSurface,
              theme.gridGlow,
              theme.cardBorder,
              layoutVariant === 'conversational-spectrum' && 'bg-gradient-to-br from-white/6 via-white/3 to-white/8',
              layoutVariant === 'conversational-shield' && 'bg-gradient-to-br from-white/8 via-white/4 to-white/10',
            )}
          >
            <div className="absolute -top-24 -right-20 h-48 w-48 rounded-full bg-white/5 blur-3xl" aria-hidden />
            <div className={contentClass}>
              {layoutVariant === 'studios-timeline' && (
                <div className="pointer-events-none absolute -left-10 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-studios-accent/0 via-studios-accent/40 to-transparent lg:block" aria-hidden />
              )}
              {layoutVariant === 'conversational-scale' && (
                <div className="pointer-events-none absolute -right-12 top-0 hidden h-full w-[160px] rounded-full bg-[radial-gradient(circle_at_center,rgba(22,240,161,0.18)_0%,rgba(11,203,255,0)_75%)] blur-3xl lg:block" aria-hidden />
              )}
              {accentLabel && (
                <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.32em] text-white/70">
                  <span className="h-2 w-2 rounded-full bg-white/60" />
                  {accentLabel}
                </span>
              )}
              <h2 id={`${id}-title`} className={`text-3xl md:text-4xl font-semibold ${paletteTokens.headline}`}>
                {headline}
              </h2>
              {body && (
                <p className={`text-base md:text-lg leading-relaxed whitespace-pre-line ${paletteTokens.body}`}>
                  {body}
                </p>
              )}
              {metrics.length > 0 && (
                <div className={clsx('flex flex-wrap gap-4', layoutVariant === 'conversational-scale' && 'gap-5')}>
                  {metrics.map((metric) => (
                    <div
                      key={`${metric.label}-${metric.value}`}
                      className={clsx(
                        'group min-w-[160px] rounded-2xl border border-white/15 bg-white/5 px-5 py-4 transition-colors hover:border-white/30',
                        layoutVariant === 'studios-timeline' && 'bg-white/8 hover:bg-white/12',
                        layoutVariant === 'conversational-scale' && 'bg-gradient-to-br from-white/10 via-white/6 to-white/12',
                      )}
                      aria-label={`${metric.label} ${metric.value}`}
                    >
                      <span className="block text-xs uppercase tracking-[0.3em] text-white/60">{metric.label}</span>
                      <span className={`block text-2xl font-semibold text-white`}>{metric.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {(iconSet && iconSet.items.length > 0) || images.length > 0 ? (
          <div className={asideClass} aria-label="Supporting visuals">
            {images.map((image) => (
              <figure key={image.src} className={`overflow-hidden rounded-[28px] border ${theme.cardBorder} ${theme.cardSurface}`}>
                <img src={image.src} alt={image.alt} className="h-full w-full object-cover" loading="lazy" />
              </figure>
            ))}
            {iconSet && iconSet.items.length > 0 && (
              <div className={clsx('grid gap-3', layoutVariant === 'conversational-pillars' && 'grid-cols-1 sm:grid-cols-2')}>
                {iconSet.items.map((icon) => {
                  const display = icon.replace(/-/g, ' ')
                  return (
                    <div
                      key={icon}
                      className={clsx(
                        'flex items-center gap-3 rounded-2xl px-4 py-3 backdrop-blur-xl transition',
                        layoutVariant.startsWith('conversational')
                          ? 'border border-white/15 bg-white/6 hover:border-white/35'
                          : `border ${theme.accentBorder} bg-white/5 hover:bg-white/10`,
                      )}
                    >
                      <span
                        className={clsx(
                          'inline-flex h-10 w-10 items-center justify-center rounded-xl text-xs font-semibold uppercase tracking-[0.2em] text-white',
                          layoutVariant.startsWith('conversational') ? 'bg-gradient-to-br from-white/12 to-white/20' : theme.accentBg,
                        )}
                      >
                        {display}
                      </span>
                      <span className={`text-sm md:text-base ${paletteTokens.body}`}>{display}</span>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        ) : null}
      </div>
    </section>
  )
}
