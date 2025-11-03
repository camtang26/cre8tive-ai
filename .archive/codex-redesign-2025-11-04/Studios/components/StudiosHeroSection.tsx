import { forwardRef } from 'react'
import { getStudiosSection } from './section-utils'
import { mergeRefs } from '@/lib/mergeRefs'
import { useSectionExposure } from '@/hooks/useSectionExposure'
import { VimeoPlayer } from '@/components/video/VimeoPlayer'

const section = getStudiosSection('studios-hero')

export const StudiosHeroSection = forwardRef<HTMLElement, Record<string, never>>((_, ref) => {
  const exposureRef = useSectionExposure(section.id)
  const video = section.visuals.find((visual) => visual.type === 'video')
  const metric = section.visuals.find((visual) => visual.type === 'metric')

  return (
    <section
      ref={mergeRefs(exposureRef, ref)}
      id={section.id}
      aria-labelledby={`${section.id}-title`}
      className="relative overflow-hidden bg-[#05060D]"
    >
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(49,196,255,0.35),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_75%,rgba(225,179,65,0.35),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(140deg,rgba(5,6,13,0.95),rgba(12,21,38,0.96))]" />
      </div>

      <div className="container mx-auto flex flex-col gap-16 px-4 py-24 lg:flex-row lg:items-center lg:gap-20">
        <div className="relative flex-1 space-y-10">
          <div className="relative inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.4em] text-white/70">
            <span className="h-2 w-2 rounded-full bg-studios-accent" />
            Studios · Flagship Production Partner
          </div>

          <div className="space-y-6 text-white">
            <h1 id={`${section.id}-title`} className="text-4xl font-bold leading-tight md:text-6xl">
              {section.copy.headline}
            </h1>
            <p className="text-lg leading-relaxed text-white/80 md:text-xl">
              {section.copy.subhead}
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={section.copy.primaryCTA?.href}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-studios-primary px-7 py-3 font-semibold text-black shadow-[0_25px_60px_-30px_rgba(225,179,65,0.9)] transition duration-200 hover:bg-studios-accent"
            >
              {section.copy.primaryCTA?.label}
              <span className="h-2 w-2 rounded-full bg-black group-hover:bg-white" />
            </a>
            <a
              href={section.copy.secondaryCTA?.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3 font-semibold text-white transition duration-200 hover:border-white/60 hover:bg-white/10"
            >
              {section.copy.secondaryCTA?.label}
            </a>
          </div>

          {metric && 'value' in metric && (
            <div className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm uppercase tracking-[0.3em] text-white/70">
              <span className="text-base font-semibold text-white">{metric.value}</span>
              <span>First-draft approval rate</span>
            </div>
          )}
        </div>

        <div className="relative flex-1">
          <div className="pointer-events-none absolute -left-10 top-10 hidden h-[calc(100%-5rem)] w-px bg-gradient-to-b from-white/10 via-white/60 to-white/10 lg:block" />
          <div className="pointer-events-none absolute -right-16 top-1/3 hidden h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(49,196,255,0.25),transparent_70%)] blur-3xl lg:block" />

          <div className="relative overflow-hidden rounded-[32px] border border-white/12 bg-black/30 backdrop-blur-xl shadow-[0_45px_120px_-50px_rgba(0,0,0,0.8)]">
            {video && (
              <VimeoPlayer
                sectionId={section.id}
                videoId={video.id}
                title="Studios hero reel"
                aspectRatio={video.aspectRatio}
                autoplay={video.autoplay}
                loop={video.loop}
                muted={video.muted ?? true}
                posterSrc={video.posterSrc}
              />
            )}
            <div className="pointer-events-none absolute inset-0 border border-white/10" aria-hidden />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/60 to-transparent" aria-hidden />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/70 to-transparent" aria-hidden />
          </div>

          <div className="mt-6 grid gap-3 text-sm text-white/70 md:grid-cols-2">
            <div className="rounded-2xl border border-white/12 bg-white/6 px-4 py-3">
              <span className="block text-xs uppercase tracking-[0.32em] text-white/50">Formats</span>
              <p className="mt-1 text-white">16:9 · 9:16 · 1:1 · 4:5 · 21:9</p>
            </div>
            <div className="rounded-2xl border border-white/12 bg-white/6 px-4 py-3">
              <span className="block text-xs uppercase tracking-[0.32em] text-white/50">Delivery</span>
              <p className="mt-1 text-white">Storyboard → Shotlist → Studio handoff</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

StudiosHeroSection.displayName = 'StudiosHeroSection'
