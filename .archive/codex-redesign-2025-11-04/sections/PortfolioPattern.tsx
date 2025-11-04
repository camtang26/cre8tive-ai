import type { SectionConfig } from '@/config/sections/types'
import type { Ref } from 'react'
import { VimeoPlayer } from '@/components/video/VimeoPlayer'
import { getThemeTokens } from './theme-utils'
import { clsx } from 'clsx'

interface PortfolioPatternProps {
  section: SectionConfig
  sectionRef?: Ref<HTMLElement>
}

export const PortfolioPattern = ({ section, sectionRef }: PortfolioPatternProps) => {
  const {
    copy: { headline, subhead },
    visuals,
    palette,
    id,
    layout,
  } = section

  const videoGrid = visuals.find((visual) => visual.type === 'video-grid')
  const iconSet = visuals.find((visual) => visual.type === 'icon-set')

  const headingClass =
    palette.theme === 'studios' ? 'text-studios-headline' : 'text-conversational-headline'
  const bodyClass =
    palette.theme === 'studios' ? 'text-studios-body' : 'text-conversational-body'
  const theme = getThemeTokens(palette.theme)
  const layoutVariant = layout ?? 'default'

  const containerClass = clsx(
    'container mx-auto space-y-14',
    layoutVariant === 'studios-portfolio' && 'space-y-16',
    layoutVariant === 'studios-platform' && 'space-y-14',
    layoutVariant.startsWith('conversational') && 'space-y-12',
  )

  const headerClass = clsx(
    'relative max-w-3xl space-y-4',
    layoutVariant === 'studios-platform' && 'mx-auto text-center space-y-6',
    layoutVariant.startsWith('conversational') && 'mx-auto text-center space-y-5',
  )

  const gridClass = clsx(
    'grid gap-4 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3',
    layoutVariant === 'studios-platform' && 'max-w-5xl mx-auto md:grid-cols-3 lg:grid-cols-3',
    layoutVariant === 'conversational-terminal' && 'md:grid-cols-2 lg:grid-cols-2',
  )

  const iconSetClass = clsx(
    'flex flex-wrap items-center gap-4',
    layoutVariant === 'studios-platform' && 'justify-center gap-5',
    layoutVariant.startsWith('conversational') && 'justify-center gap-5',
  )

  return (
    <section ref={sectionRef} id={id} className="py-16 md:py-24" aria-labelledby={`${id}-title`}>
      {/* Animation: [TBD by GSAP team] */}
      <div className={containerClass}>
        <div className={headerClass}>
          <div className="absolute -left-8 top-0 hidden h-full w-px bg-gradient-to-b from-white/0 via-white/30 to-white/0 lg:block" aria-hidden />
          <h2 id={`${id}-title`} className={`text-3xl md:text-4xl font-semibold ${headingClass}`}>
            {headline}
          </h2>
          {subhead && <p className={`text-base md:text-lg ${bodyClass}`}>{subhead}</p>}
        </div>

        {videoGrid && (
          <div className={gridClass} aria-label={videoGrid.description}>
            {videoGrid.items.map((videoId, index) => {
              const numericId = Number(videoId)
              const aspectMatch = videoId.match(/(\d+)x(\d+)/)
              const derivedAspect = Number.isFinite(numericId)
                ? undefined
                : aspectMatch
                ? `${aspectMatch[1]}:${aspectMatch[2]}`
                : undefined
              const title = `${headline} video ${index + 1}`

              return (
                <div
                  key={videoId}
                  className={clsx(
                    'group relative overflow-hidden rounded-[28px] border border-white/12 bg-white/5 backdrop-blur-xl transition hover:border-white/25 hover:shadow-[0_45px_120px_-60px_rgba(0,0,0,0.7)]',
                    theme.gridGlow,
                    layoutVariant === 'studios-platform' && 'bg-white/8 backdrop-blur-2xl',
                    layoutVariant.startsWith('conversational') &&
                      'border-white/10 bg-gradient-to-br from-white/10 via-white/6 to-white/12 hover:border-white/25',
                  )}
                >
                  {/* useBatchReveal() integration point */}
                  <VimeoPlayer
                    sectionId={section.id}
                    videoId={videoId}
                    title={title}
                    aspectRatio={derivedAspect}
                  />
                </div>
              )
            })}
          </div>
        )}

        {iconSet && iconSet.items.length > 0 && (
          <div className={iconSetClass} aria-label={iconSet.description}>
            {iconSet.items.map((icon) => (
              <div
                key={icon}
                className={clsx(
                  'flex items-center gap-2 rounded-full border px-5 py-2 text-xs uppercase tracking-[0.3em] text-white',
                  layoutVariant.startsWith('conversational')
                    ? 'border-white/20 bg-gradient-to-r from-white/12 via-white/6 to-white/10'
                    : `${theme.accentBorder} bg-white/5`,
                )}
              >
                <span className="h-2 w-2 rounded-full bg-white/80" />
                {icon.replace(/-/g, ' ')}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
