import { forwardRef } from 'react'
import { getStudiosSection } from './section-utils'
import { VimeoPlayer } from '@/components/video/VimeoPlayer'
import { mergeRefs } from '@/lib/mergeRefs'
import { useSectionExposure } from '@/hooks/useSectionExposure'

const section = getStudiosSection('studios-portfolio')
const videoGrid = section.visuals.find((visual) => visual.type === 'video-grid')

export const StudiosPortfolioSection = forwardRef<HTMLElement, Record<string, never>>((_, ref) => {
  const exposureRef = useSectionExposure(section.id)

  return (
    <section
      ref={mergeRefs(exposureRef, ref)}
      id={section.id}
      aria-labelledby={`${section.id}-title`}
      className="relative overflow-hidden bg-[#070A14]"
    >
      <div className="container mx-auto space-y-14 px-4 py-24">
        <div className="relative max-w-3xl space-y-4 text-center">
          <div className="mx-auto h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent" aria-hidden />
          <h2 id={`${section.id}-title`} className="text-3xl font-semibold text-studios-headline md:text-4xl">
            {section.copy.headline}
          </h2>
          {section.copy.subhead && (
            <p className="text-base text-white/75 md:text-lg">
              {section.copy.subhead}
            </p>
          )}
        </div>

        {videoGrid && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {videoGrid.items.map((videoId, index) => {
              const numericId = Number(videoId)
              const aspectMatch = videoId.match(/(\d+)x(\d+)/)
              const derivedAspect = Number.isFinite(numericId)
                ? undefined
                : aspectMatch
                ? `${aspectMatch[1]}:${aspectMatch[2]}`
                : undefined
              const title = `Portfolio video ${index + 1}`

              return (
                <div
                  key={videoId}
                  className="group relative overflow-hidden rounded-[28px] border border-white/12 bg-white/6 shadow-[0_45px_120px_-55px_rgba(0,0,0,0.85)] transition hover:border-white/25"
                >
                  <div className="pointer-events-none absolute inset-0 border border-transparent transition group-hover:border-white/20" aria-hidden />
                  <VimeoPlayer
                    sectionId={section.id}
                    videoId={videoId}
                    title={title}
                    aspectRatio={derivedAspect}
                  />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/60 to-transparent" aria-hidden />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/70 to-transparent" aria-hidden />
                  <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs uppercase tracking-[0.35em] text-white/60">
                    Studio Reel
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
})

StudiosPortfolioSection.displayName = 'StudiosPortfolioSection'
