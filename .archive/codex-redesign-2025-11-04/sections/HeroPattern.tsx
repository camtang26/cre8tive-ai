import type { SectionConfig } from '@/config/sections/types'
import type { Ref } from 'react'
import { VimeoPlayer } from '@/components/video/VimeoPlayer'
import { getThemeTokens } from './theme-utils'

interface HeroPatternProps {
  section: SectionConfig
  sectionRef?: Ref<HTMLElement>
}

const paletteClasses = {
  studios: {
    background: 'bg-gradient-studios-hero text-studios-headline',
    headline: 'text-studios-headline',
    body: 'text-studios-body',
    primaryButton: 'bg-studios-primary text-studios-background hover:bg-studios-accent',
    secondaryButton: 'border-studios-accent text-studios-accent hover:bg-studios-accent/10',
  },
  conversational: {
    background: 'bg-gradient-conversational-hero text-conversational-headline',
    headline: 'text-conversational-headline',
    body: 'text-conversational-body',
    primaryButton: 'bg-conversational-primary text-conversational-background hover:bg-conversational-accent',
    secondaryButton: 'border-conversational-accent text-conversational-accent hover:bg-conversational-accent/10',
  },
}

export const HeroPattern = ({ section, sectionRef }: HeroPatternProps) => {
  const {
    copy: { headline, subhead, primaryCTA, secondaryCTA },
    visuals,
    palette,
    id,
  } = section

  const paletteTokens = paletteClasses[palette.theme]
  const theme = getThemeTokens(palette.theme)

  const backgroundVideo = visuals.find((visual) => visual.type === 'video')
  const metric = visuals.find((visual) => visual.type === 'metric' || visual.type === 'badge')

  return (
    <section
      ref={sectionRef}
      id={id}
      aria-labelledby={`${id}-title`}
      className={`relative overflow-hidden py-24 md:py-32 ${paletteTokens.background}`}
    >
      {/* Animation: [TBD by GSAP team] */}
      {backgroundVideo && (
        <div className="absolute inset-0 -z-10 opacity-60 pointer-events-none">
          {/* useParallax() integration point */}
          <VimeoPlayer
            sectionId={section.id}
            videoId={backgroundVideo.id}
            title={`${headline} background video`}
            aspectRatio={backgroundVideo.aspectRatio}
            autoplay={backgroundVideo.autoplay}
            loop={backgroundVideo.loop}
            muted={backgroundVideo.muted ?? true}
            fill
          />
        </div>
      )}
      <div className={`pointer-events-none absolute inset-0 blur-3xl ${theme.heroGlowPrimary}`} />
      <div className={`pointer-events-none absolute inset-0 blur-3xl ${theme.heroGlowSecondary}`} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.15] [background-image:radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_55%)]" />

      <div className="relative z-10">
        <div className="container mx-auto max-w-6xl px-4">
          <div className={`relative mx-auto max-w-3xl rounded-[32px] p-8 md:p-12 lg:p-16 ${theme.heroCard}`}>
            <div className="absolute inset-0 rounded-[32px] border border-white/5" aria-hidden />
            <div className="relative space-y-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70">
                <span>{palette.theme === 'studios' ? 'Studios' : 'Conversational AI'}</span>
              </div>

              <h1 id={`${id}-title`} className={`text-4xl md:text-6xl font-bold leading-tight ${paletteTokens.headline}`}>
                {headline}
              </h1>

              {subhead && (
                <p className={`text-base md:text-lg leading-relaxed ${paletteTokens.body}`}>
                  {subhead}
                </p>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                {primaryCTA && (
                  <a
                    href={primaryCTA.href}
                    className={`group px-6 py-3 rounded-full font-semibold transition duration-200 ${theme.buttonPrimary} ${theme.buttonPrimaryHover}`}
                  >
                    <span className="relative flex items-center gap-2">
                      <span>{primaryCTA.label}</span>
                      <span className="inline-block h-2 w-2 rounded-full bg-black group-hover:scale-125 transition-transform" />
                    </span>
                  </a>
                )}
                {secondaryCTA && (
                  <a
                    href={secondaryCTA.href}
                    className={`px-6 py-3 rounded-full font-semibold transition duration-200 ${theme.buttonSecondary} ${theme.buttonSecondaryHover}`}
                  >
                    {secondaryCTA.label}
                  </a>
                )}
              </div>

              {metric && (
                <div className="flex items-center justify-center lg:justify-start">
                  <div className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 shadow-inner shadow-white/5">
                    <span className="text-sm uppercase tracking-[0.28em] text-white/60">
                      {'label' in metric ? metric.label : 'Metric'}
                    </span>
                    <p className={`mt-1 text-2xl font-semibold ${paletteTokens.headline}`}>
                      {'value' in metric ? metric.value : metric.label}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
