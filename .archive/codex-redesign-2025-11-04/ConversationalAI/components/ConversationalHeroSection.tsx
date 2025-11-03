import { forwardRef } from 'react'
import { getConversationalSection } from './section-utils'
import { VimeoPlayer } from '@/components/video/VimeoPlayer'
import { mergeRefs } from '@/lib/mergeRefs'
import { useSectionExposure } from '@/hooks/useSectionExposure'

const section = getConversationalSection('conversational-hero')
const video = section.visuals.find((visual) => visual.type === 'video')
const badge = section.visuals.find((visual) => visual.type === 'badge')

export const ConversationalHeroSection = forwardRef<HTMLElement, Record<string, never>>((_, ref) => {
  const exposureRef = useSectionExposure(section.id)

  return (
    <section
      ref={mergeRefs(exposureRef, ref)}
      id={section.id}
      aria-labelledby={`${section.id}-title`}
      className="relative overflow-hidden bg-[#04121E]"
    >
      <div className="absolute inset-0 -z-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(22,240,161,0.25),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(11,203,255,0.28),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(4,18,30,0.95),rgba(6,40,62,0.94))]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(4,18,30,0.6),transparent_40%)]" />
      </div>

      <div className="container mx-auto flex flex-col items-center gap-12 px-4 py-24 lg:grid lg:grid-cols-[minmax(0,55%)_minmax(0,45%)] lg:gap-16">
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.4em] text-white/65">
            <span className="h-2 w-2 rounded-full bg-conversational-accent" />
            Conversational AI Flagship
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
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-conversational-primary px-7 py-3 font-semibold text-black shadow-[0_25px_60px_-30px_rgba(22,240,161,0.9)] transition duration-200 hover:bg-conversational-accent"
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

          {badge && 'value' in badge && (
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs uppercase tracking-[0.35em] text-white/65">
              <span className="h-2 w-2 rounded-full bg-conversational-accent" />
              {badge.value}
            </div>
          )}
        </div>

        <div className="relative w-full">
          <div className="pointer-events-none absolute -left-6 top-0 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(11,203,255,0.3),transparent_70%)] blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(22,240,161,0.3),transparent_70%)] blur-3xl" aria-hidden />

          <div className="relative overflow-hidden rounded-[32px] border border-white/12 bg-gradient-to-br from-white/10 via-white/6 to-white/12 shadow-[0_45px_140px_-60px_rgba(0,0,0,0.75)]">
            {video && (
              <VimeoPlayer
                sectionId={section.id}
                videoId={video.id}
                title="Conversational AI hero"
                aspectRatio={video.aspectRatio}
                autoplay={video.autoplay}
                loop={video.loop}
                muted={video.muted ?? true}
                posterSrc={video.posterSrc}
              />
            )}
            <div className="pointer-events-none absolute inset-0 border border-white/10" aria-hidden />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(140deg,rgba(0,0,0,0.4),transparent_60%)]" aria-hidden />
          </div>

          <div className="mt-5 grid gap-3 text-sm text-white/70 md:grid-cols-2">
            <div className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3">
              <span className="block text-xs uppercase tracking-[0.32em] text-white/50">Model Stack</span>
              <p className="mt-1 text-white">LLM orchestration · Retrieval · Guardrails</p>
            </div>
            <div className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3">
              <span className="block text-xs uppercase tracking-[0.32em] text-white/50">Channels</span>
              <p className="mt-1 text-white">Web · SMS · Voice · Chat · Email</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

ConversationalHeroSection.displayName = 'ConversationalHeroSection'
