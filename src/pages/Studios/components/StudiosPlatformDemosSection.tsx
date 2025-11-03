import { forwardRef } from 'react'
import { getStudiosSection } from './section-utils'
import { VimeoPlayer } from '@/components/video/VimeoPlayer'
import { mergeRefs } from '@/lib/mergeRefs'
import { useSectionExposure } from '@/hooks/useSectionExposure'

const section = getStudiosSection('studios-platform-demos')
const videoGrid = section.visuals.find((visual) => visual.type === 'video-grid')
const iconSet = section.visuals.find((visual) => visual.type === 'icon-set')

export const StudiosPlatformDemosSection = forwardRef<HTMLElement, Record<string, never>>((_, ref) => {
  const exposureRef = useSectionExposure(section.id)

  return (
    <section
      ref={mergeRefs(exposureRef, ref)}
      id={section.id}
      aria-labelledby={`${section.id}-title`}
      className="relative overflow-hidden bg-[#060912]"
    >
      <div className="container mx-auto space-y-14 px-4 py-24">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/60">
            <span className="h-2 w-2 rounded-full bg-studios-accent" /> Platform Native
          </span>
          <h2 id={`${section.id}-title`} className="mt-4 text-3xl font-semibold text-studios-headline md:text-4xl">
            {section.copy.headline}
          </h2>
          {section.copy.subhead && (
            <p className="mt-3 text-base text-white/70 md:text-lg">{section.copy.subhead}</p>
          )}
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:items-center">
          <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
            {videoGrid?.items.map((videoId, index) => {
              const numericId = Number(videoId)
              const aspectMatch = videoId.match(/(\d+)x(\d+)/)
              const derivedAspect = Number.isFinite(numericId)
                ? undefined
                : aspectMatch
                ? `${aspectMatch[1]}:${aspectMatch[2]}`
                : undefined
              const title = `Platform demo ${index + 1}`

              return (
                <div
                  key={videoId}
                  className="group relative overflow-hidden rounded-[32px] border border-white/12 bg-white/6 backdrop-blur-xl shadow-[0_45px_120px_-55px_rgba(0,0,0,0.8)] transition hover:border-white/25"
                >
                  <VimeoPlayer
                    sectionId={section.id}
                    videoId={videoId}
                    title={title}
                    aspectRatio={derivedAspect}
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent" aria-hidden />
                  <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/60 px-4 py-1 text-xs uppercase tracking-[0.35em] text-white/60">
                    {index === 0 ? 'YouTube 16:9' : index === 1 ? 'Instagram 1:1' : 'TikTok 9:16'}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="space-y-4 rounded-[28px] border border-white/12 bg-white/5 px-6 py-8 text-white/80">
            <h3 className="text-sm uppercase tracking-[0.3em] text-white/60">Supported Platforms</h3>
            <div className="flex flex-wrap items-center gap-3">
              {iconSet?.items.map((icon) => (
                <span key={icon} className="rounded-full border border-white/15 bg-white/8 px-4 py-1 text-xs uppercase tracking-[0.32em] text-white/70">
                  {icon.replace(/-/g, ' ')}
                </span>
              ))}
            </div>
            <p className="text-sm text-white/60">
              Every aspect ratio is composed intentionally. No lazy crops, no generic templates—each platform gets bespoke framing, typography, and pacing.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
})

StudiosPlatformDemosSection.displayName = 'StudiosPlatformDemosSection'
