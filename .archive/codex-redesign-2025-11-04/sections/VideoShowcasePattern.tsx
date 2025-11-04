import type { SectionConfig } from '@/config/sections/types'
import type { Ref } from 'react'
import { VimeoPlayer } from '@/components/video/VimeoPlayer'
import { getThemeTokens } from './theme-utils'
import { clsx } from 'clsx'

interface VideoShowcasePatternProps {
  section: SectionConfig
  sectionRef?: Ref<HTMLElement>
}

export const VideoShowcasePattern = ({ section, sectionRef }: VideoShowcasePatternProps) => {
  const {
    copy: { headline, subhead },
    visuals,
    palette,
    id,
  } = section

  const video = visuals.find((visual) => visual.type === 'video')
  const theme = getThemeTokens(palette.theme)
  const layoutVariant = section.layout ?? 'default'

  const containerClass = clsx(
    'container mx-auto max-w-5xl space-y-10',
    layoutVariant === 'studios-spotlight' && 'lg:space-y-12',
    layoutVariant === 'conversational-hologram' && 'max-w-5xl space-y-12',
    layoutVariant === 'conversational-terminal' && 'max-w-4xl space-y-12',
  )

  const titleWrapperClass = clsx(
    'relative mx-auto max-w-3xl space-y-4 rounded-[28px] border border-white/10 bg-white/5 px-10 py-10 text-center backdrop-blur-xl',
    layoutVariant === 'studios-spotlight' && 'shadow-[0_55px_140px_-60px_rgba(0,0,0,0.75)]',
    layoutVariant === 'conversational-hologram' && 'bg-gradient-to-br from-white/8 via-white/4 to-white/6 border-white/12',
    layoutVariant === 'conversational-terminal' && 'bg-gradient-to-br from-white/6 via-white/3 to-white/10 border-white/15',
  )

  const frameClass = clsx(
    'relative overflow-hidden rounded-[32px] border border-white/12 bg-black/30 shadow-[0_45px_140px_-60px_rgba(0,0,0,0.8)]',
    layoutVariant === 'studios-spotlight' && 'before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)] before:pointer-events-none',
    layoutVariant === 'conversational-hologram' && 'border-white/10 bg-gradient-to-br from-white/10 via-white/4 to-white/8',
    layoutVariant === 'conversational-terminal' && 'border-white/14 bg-[#0B1F2D]/70 backdrop-blur-xl',
  )

  const headingClass =
    palette.theme === 'studios' ? 'text-studios-headline' : 'text-conversational-headline'
  const bodyClass =
    palette.theme === 'studios' ? 'text-studios-body' : 'text-conversational-body'

  return (
    <section ref={sectionRef} id={id} className="py-16 md:py-24" aria-labelledby={`${id}-title`}>
      {/* Animation: [TBD by GSAP team] */}
      <div className={containerClass}>
        <div className={titleWrapperClass}>
          <div className="absolute -top-20 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" aria-hidden />
          <h2 id={`${id}-title`} className={`text-3xl md:text-4xl font-semibold ${headingClass}`}>
            {headline}
          </h2>
          {subhead && <p className={`text-base md:text-lg ${bodyClass}`}>{subhead}</p>}
        </div>

        {video && (
          <figure className={frameClass}>
            {/* useScrollReveal() integration point */}
            <VimeoPlayer
              sectionId={section.id}
              videoId={video.id}
              title={`${headline} video`}
              aspectRatio={video.aspectRatio}
              autoplay={video.autoplay}
              loop={video.loop}
              muted={video.muted}
              posterSrc={video.posterSrc}
            />
            <div className={`pointer-events-none absolute inset-0 rounded-[32px] border ${theme.accentBorder}`} aria-hidden />
            {video.duration && (
              <figcaption className="absolute bottom-3 right-4 rounded-full bg-black/70 px-3 py-1 text-xs text-white">
                {video.duration}
              </figcaption>
            )}
          </figure>
        )}
      </div>
    </section>
  )
}
