import { useState } from 'react'
import { PaletteCard } from '@/components/palette-prototypes/PaletteCard'
import { claudeStudiosPalettes, claudeConversationalPalettes } from '@/data/palettes/claude'
import { codexStudiosPalettes, codexConversationalPalettes } from '@/data/palettes/codex'

type PaletteGroupKey = 'studios' | 'conversational'

const paletteGroups: Record<PaletteGroupKey, { title: string; description: string }> = {
  studios: {
    title: 'Studios · Luxury Cinematic Direction',
    description:
      'Comparing Claude Code’s foundational palettes to Codex interpretations grounded in 2025 luxury and hospitality research.'
  },
  conversational: {
    title: 'Conversational AI · Enterprise Trust Direction',
    description:
      'Blue-forward SaaS systems for Conversational AI, contrasting Claude’s selections with Codex research-led interpretations.'
  }
}

const paletteSets = {
  studios: {
    claude: claudeStudiosPalettes,
    codex: codexStudiosPalettes
  },
  conversational: {
    claude: claudeConversationalPalettes,
    codex: codexConversationalPalettes
  }
}

export const ColorPaletteDemo = () => {
  const [activeGroup, setActiveGroup] = useState<PaletteGroupKey>('studios')

  const activeData = paletteSets[activeGroup]
  const metadata = paletteGroups[activeGroup]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-930 to-slate-950 pb-20 text-white">
      <header className="sticky top-0 z-30 border-b border-white/5 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">Epic 2 · Epic 3 Foundation Work</p>
              <h1 className="text-3xl font-bold sm:text-4xl">Color Palette Prototype Comparison</h1>
              <p className="max-w-2xl text-white/70">
                Claude’s palette options are presented alongside Codex research-driven alternatives. Use the toggle to
                compare luxury cinematic and enterprise AI directions before we lock Sprint 1 palette foundations.
              </p>
            </div>
            <div className="flex w-fit overflow-hidden rounded-full border border-white/10 bg-white/5 p-1">
              <button
                onClick={() => setActiveGroup('studios')}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeGroup === 'studios' ? 'bg-white text-slate-950 shadow-lg' : 'text-white/70 hover:text-white'
                }`}
              >
                Studios
              </button>
              <button
                onClick={() => setActiveGroup('conversational')}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeGroup === 'conversational'
                    ? 'bg-white text-slate-950 shadow-lg'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Conversational AI
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto mt-10 max-w-7xl px-6">
        <section className="space-y-12">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">{metadata.title}</h2>
            <p className="max-w-3xl text-white/70">{metadata.description}</p>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">Claude Code · Original Prototypes</h3>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/60">
                  Reference
                </span>
              </div>
              <p className="text-sm text-white/70">
                Claude’s palettes delivered the initial direction for Stakeholder review. These serve as the comparison
                baseline for Codex explorations.
              </p>
              <div className="space-y-6">
                {activeData.claude.map(palette => (
                  <PaletteCard key={palette.id} palette={palette} />
                ))}
              </div>
            </div>

            <div className="space-y-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 shadow-[0_40px_80px_-60px_rgba(16,185,129,0.45)]">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">Codex · Research-Calibrated Prototypes</h3>
                <span className="rounded-full border border-emerald-400/40 bg-emerald-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-100">
                  New
                </span>
              </div>
              <p className="text-sm text-white/70">
                Grounded in November 2025 trend research—balancing accessibility checks, luxury mood boards, and
                enterprise color psychology—to give Cameron fresh options before locking Sprint 1 foundations.
              </p>
              <div className="space-y-6">
                {activeData.codex.map(palette => (
                  <PaletteCard key={palette.id} palette={palette} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default ColorPaletteDemo

