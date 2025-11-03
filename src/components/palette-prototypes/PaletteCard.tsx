import type { PaletteOption } from './types'

interface PaletteCardProps {
  palette: PaletteOption
}

const readableText = (hex: string) => {
  const parsed = hex.replace('#', '')
  const r = parseInt(parsed.substring(0, 2), 16)
  const g = parseInt(parsed.substring(2, 4), 16)
  const b = parseInt(parsed.substring(4, 6), 16)
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255
  return luminance > 0.55 ? '#0c111d' : '#f9fbff'
}

export const PaletteCard = ({ palette }: PaletteCardProps) => {
  const {
    hero: { background, surface, headingColor, bodyColor, buttonBackground, buttonText, badgeBackground, badgeText }
  } = palette

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_60px_-45px_rgba(15,23,42,0.9)]">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white">{palette.name}</h3>
          <p className="text-sm text-white/70">{palette.tagline}</p>
        </div>
        <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/60">
          {palette.origin}
        </span>
      </div>

      <div className="relative overflow-hidden rounded-xl" style={{ background }}>
        <div
          className="relative flex flex-col gap-4 p-6 transition-transform duration-300 hover:translate-y-[-2px]"
          style={{
            color: headingColor
          }}
        >
          {badgeBackground && (
            <span
              className="w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
              style={{
                backgroundColor: badgeBackground,
                color: badgeText ?? readableText(badgeBackground)
              }}
            >
              Showcase
            </span>
          )}
          <div className="space-y-2">
            <h4 className="text-xl font-bold leading-tight" style={{ color: headingColor }}>
              {palette.narrative}
            </h4>
            <p className="max-w-md text-sm text-white/80" style={{ color: bodyColor }}>
              {palette.bestFor.join(' · ')}
            </p>
          </div>
          <div
            className="mt-4 flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
            style={{
              backgroundColor: buttonBackground,
              color: buttonText
            }}
          >
            Launch Preview
            <span
              className="inline-flex h-5 w-5 items-center justify-center rounded-full"
              style={{
                backgroundColor: readableText(buttonText),
                color: buttonText
              }}
            >
              →
            </span>
          </div>
        </div>

        <div
          className="border-t border-white/10 bg-white/5 px-4 py-3 text-xs text-white/70"
          style={{ background: surface }}
        >
          Research notes:{' '}
          {palette.researchRefs?.length
            ? palette.researchRefs.map(ref => (
                <span key={ref} className="mr-2">
                  {ref}
                </span>
              ))
            : 'Grounded in 2025 trend analysis'}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {palette.colors.map(color => (
          <div key={color.hex} className="flex flex-col gap-2 rounded-xl border border-white/10 p-3">
            <div
              className="h-16 w-full rounded-lg shadow-inner"
              style={{ backgroundColor: color.hex }}
              aria-hidden="true"
            />
            <div className="space-y-1">
              <p className="text-sm font-semibold text-white">{color.name}</p>
              <p className="text-xs font-mono uppercase tracking-wider text-white/70">{color.hex}</p>
              <p className="text-xs text-white/60">{color.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
