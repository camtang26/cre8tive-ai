import type { SectionConfig } from '@/config/sections/types'
import type { Ref } from 'react'
import { trackCTA } from '@/lib/instrumentation'
import { getThemeTokens } from './theme-utils'

interface CTAPatternProps {
  section: SectionConfig
  sectionRef?: Ref<HTMLElement>
}

export const CTAPattern = ({ section, sectionRef }: CTAPatternProps) => {
  const {
    copy: { headline, subhead, primaryCTA, secondaryCTA },
    palette,
    visuals,
    id,
    layout,
  } = section

  const themeClass =
    palette.theme === 'studios'
      ? 'bg-studios-backgroundAccent text-studios-headline'
      : 'bg-conversational-backgroundAccent text-conversational-headline'

  const subheadClass =
    palette.theme === 'studios' ? 'text-studios-body' : 'text-conversational-body'

  const theme = getThemeTokens(palette.theme)
  const layoutVariant = layout ?? 'default'

  const accentLabel =
    layoutVariant === 'studios-cta'
      ? 'Studios Consultation'
      : layoutVariant === 'conversational-cta'
      ? 'Conversational AI Demo'
      : undefined

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative overflow-hidden py-20 md:py-28 ${themeClass}`}
      aria-label="Call to action"
    >
      {/* Animation: [TBD by GSAP team] */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" aria-hidden />
      <div className={`absolute inset-0 -z-10 blur-3xl ${theme.heroGlowPrimary}`} aria-hidden />

      <div className="container mx-auto max-w-4xl text-center space-y-8 px-4">
        <div className="mx-auto max-w-3xl space-y-6">
          {accentLabel && (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1 text-xs uppercase tracking-[0.32em] text-white/70">
              <span className="h-2 w-2 rounded-full bg-white/70" />
              {accentLabel}
            </span>
          )}
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            {headline}
          </h2>
          {subhead && (
            <p className={`text-base md:text-lg leading-relaxed text-white/85 ${subheadClass}`}>
              {subhead}
            </p>
          )}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {primaryCTA && (
            <a
              href={primaryCTA.href}
              className={`group px-8 py-3 rounded-full font-semibold transition ${theme.buttonPrimary} ${theme.buttonPrimaryHover}`}
              onClick={() => trackCTA(section.id, 'primary')}
            >
              <span className="flex items-center gap-2">
                <span>{primaryCTA.label}</span>
                <span className="h-2 w-2 rounded-full bg-black group-hover:scale-125 transition" />
              </span>
            </a>
          )}
          {secondaryCTA && (
            <a
              href={secondaryCTA.href}
              className={`px-8 py-3 rounded-full font-semibold transition ${theme.buttonSecondary} ${theme.buttonSecondaryHover}`}
              onClick={() => trackCTA(section.id, 'secondary')}
            >
              {secondaryCTA.label}
            </a>
          )}
        </div>

        {visuals
          .filter((visual) => visual.type === 'badge')
          .map((badge) => (
            <p key={badge.label} className={`text-sm uppercase tracking-[0.35em] text-white/70 ${subheadClass}`}>
              {badge.value}
            </p>
          ))}

        {layoutVariant === 'conversational-cta' && (
          <div className="mx-auto flex max-w-2xl flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.4em] text-white/60">
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-conversational-accent" />24/7 Availability</span>
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-conversational-accent" />Enterprise-Grade</span>
            <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-conversational-accent" />SOC 2 Type II</span>
          </div>
        )}
      </div>
    </section>
  )
}
