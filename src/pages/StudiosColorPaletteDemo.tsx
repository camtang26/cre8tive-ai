import { useState } from 'react';
import { VideoPlaceholderPremium } from '../components/video-placeholders/VideoPlaceholderPremium';
import FilmNoirPalette from '../design-system/palettes/studios/FilmNoirPalette';
import PurpleMagentaPalette from '../design-system/palettes/studios/PurpleMagentaPalette';
import TealEvolutionPalette from '../design-system/palettes/studios/TealEvolutionPalette';
import type { ColorPalette } from '../design-system/palettes/shared/palette.types';

/**
 * Studios Color Palette Comparison Demo
 *
 * Interactive showcase of 3 research-backed color palette options for Studios page.
 * Each palette is production-ready with full WCAG compliance data and research validation.
 *
 * Features:
 * - Side-by-side comparison of all 3 options
 * - Video placeholder integration (locked glassmorphism)
 * - Live contrast ratio display
 * - Research findings summary
 * - Accessibility scores
 * - Competitive intelligence
 * - Usage guidelines
 */
export const StudiosColorPaletteDemo = () => {
  const [selectedPalette, setSelectedPalette] = useState<ColorPalette | null>(null);
  const [showResearch, setShowResearch] = useState(true);
  const [showAccessibility, setShowAccessibility] = useState(true);

  const palettes = [FilmNoirPalette, PurpleMagentaPalette, TealEvolutionPalette];

  // Sample thumbnail for video placeholders
  const thumbnailUrl = 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1920&h=1080&fit=crop&q=80';

  const renderScoreBar = (score: number, label: string) => (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-white/80">{label}</span>
        <span className="text-sm font-bold text-white">{score}/10</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            score >= 8 ? 'bg-green-500' : score >= 6 ? 'bg-yellow-500' : 'bg-orange-500'
          }`}
          style={{ width: `${score * 10}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Studios Color Palettes
              </h1>
              <p className="text-white/70 text-lg">
                Research-backed options for video production positioning - Sprint 1 Foundation
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowResearch(!showResearch)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  showResearch ? 'bg-blue-500 text-white' : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                {showResearch ? 'Hide' : 'Show'} Research
              </button>
              <button
                onClick={() => setShowAccessibility(!showAccessibility)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  showAccessibility ? 'bg-green-500 text-white' : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                {showAccessibility ? 'Hide' : 'Show'} Accessibility
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Info Panel */}
      {showResearch && (
        <div className="bg-blue-500/10 border-l-4 border-blue-500 p-6 mx-4 sm:mx-6 lg:mx-8 mt-8 rounded-r-lg">
          <h2 className="text-2xl font-bold mb-3 flex items-center gap-3">
            <span className="text-3xl">🔍</span>
            Critical Research Foundation
          </h2>
          <div className="text-white/90 space-y-3">
            <p className="text-lg">
              These palettes are built from comprehensive research across color psychology,
              competitive intelligence, accessibility standards, and 2024-2025 design trends.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="font-semibold text-blue-400 mb-2">Option A: Film Noir ⭐</h3>
                <p className="text-sm text-white/70">
                  Timeless cinematic elegance. Gold + charcoal = Hollywood prestige. 8/10 research score.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="font-semibold text-purple-400 mb-2">Option B: Purple/Magenta</h3>
                <p className="text-sm text-white/70">
                  2025 innovation trend. Rising in tech/media (Twitch, Roku). 7/10 research score.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="font-semibold text-teal-400 mb-2">Option C: Teal Evolution</h3>
                <p className="text-sm text-white/70">
                  Natural growth positioning. Accessibility FIXED from original. 6/10 research score.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Palette Comparison Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {palettes.map((palette) => {
            const isFilmNoir = palette.variant === 'a';
            const isPurple = palette.variant === 'b';
            const isTeal = palette.variant === 'c';

            return (
              <div
                key={palette.variant}
                className={`
                  relative rounded-2xl overflow-hidden transition-all duration-300
                  ${selectedPalette === palette ? 'ring-4 ring-white scale-105' : 'hover:scale-102'}
                  ${isFilmNoir ? 'bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A]' : ''}
                  ${isPurple ? 'bg-gradient-to-br from-[#6B21A8]/20 to-black' : ''}
                  ${isTeal ? 'bg-gradient-to-br from-[#0F766E]/20 to-black' : ''}
                `}
                onClick={() => setSelectedPalette(palette)}
              >
                {/* Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-2xl font-bold">{palette.name}</h2>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        isFilmNoir ? 'bg-[#D4AF37]/20 text-[#D4AF37]' :
                        isPurple ? 'bg-[#C026D3]/20 text-[#C026D3]' :
                        'bg-[#059669]/20 text-[#059669]'
                      }`}
                    >
                      Option {palette.variant.toUpperCase()}
                      {isFilmNoir && ' ⭐'}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm">{palette.description}</p>
                </div>

                {/* Video Placeholder Preview */}
                <div className="p-6">
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-3">
                    Video Placeholder Integration
                  </p>
                  <VideoPlaceholderPremium
                    videoId={`demo-${palette.variant}`}
                    thumbnailUrl={thumbnailUrl}
                    title="Studios Showcase Video"
                    description="Premium video production example"
                    aspectRatio="16/9"
                    onClick={() => console.log(`Clicked ${palette.name} video`)}
                  />
                </div>

                {/* Color Swatches */}
                <div className="p-6 border-t border-white/10">
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-3">
                    Core Colors
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <div
                        className="w-full h-16 rounded-lg mb-2"
                        style={{ backgroundColor: palette.colors.primary.hex }}
                      />
                      <p className="text-xs font-semibold text-white">{palette.colors.primary.name}</p>
                      <p className="text-xs text-white/60 font-mono">{palette.colors.primary.hex}</p>
                    </div>
                    <div>
                      <div
                        className="w-full h-16 rounded-lg mb-2"
                        style={{ backgroundColor: palette.colors.accent.hex }}
                      />
                      <p className="text-xs font-semibold text-white">{palette.colors.accent.name}</p>
                      <p className="text-xs text-white/60 font-mono">{palette.colors.accent.hex}</p>
                    </div>
                    <div>
                      <div
                        className="w-full h-16 rounded-lg mb-2"
                        style={{ backgroundColor: palette.colors.highlight.hex }}
                      />
                      <p className="text-xs font-semibold text-white">{palette.colors.highlight.name}</p>
                      <p className="text-xs text-white/60 font-mono">{palette.colors.highlight.hex}</p>
                    </div>
                  </div>
                </div>

                {/* Research Scores */}
                <div className="p-6 border-t border-white/10">
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-4">
                    Research-Backed Scores
                  </p>
                  {renderScoreBar(palette.researchScore, 'Research Validation')}
                  {renderScoreBar(palette.accessibilityScore, 'Accessibility')}
                  {renderScoreBar(palette.distinctivenessScore, 'Distinctiveness')}
                  {renderScoreBar(palette.longevityScore, '2-3 Year Longevity')}
                </div>

                {/* Key Research Findings */}
                {showResearch && (
                  <div className="p-6 border-t border-white/10 bg-white/5">
                    <p className="text-xs uppercase tracking-widest text-white/40 mb-3">
                      Key Research Findings
                    </p>
                    <ul className="space-y-2 text-sm text-white/80">
                      {palette.research.findings.slice(0, 3).map((finding, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-green-400">✓</span>
                          <span>{finding}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Accessibility Data */}
                {showAccessibility && (
                  <div className="p-6 border-t border-white/10">
                    <p className="text-xs uppercase tracking-widest text-white/40 mb-3">
                      Accessibility Status
                    </p>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="font-semibold text-white">WCAG Compliance:</span>
                        <p className="text-white/70 mt-1">
                          {palette.accessibility.recommendedBackgrounds.length} recommended background{palette.accessibility.recommendedBackgrounds.length > 1 ? 's' : ''}
                        </p>
                      </div>
                      {palette.accessibility.whiteBackgroundWarnings.length > 0 && (
                        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                          <p className="font-semibold text-yellow-400 mb-1">⚠️ Warnings:</p>
                          <p className="text-xs text-yellow-200">
                            {palette.accessibility.whiteBackgroundWarnings.length} color{palette.accessibility.whiteBackgroundWarnings.length > 1 ? 's' : ''} require dark backgrounds
                          </p>
                        </div>
                      )}
                      {palette.accessibility.requiredFixes && palette.accessibility.requiredFixes.length > 0 && (
                        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                          <p className="font-semibold text-green-400 mb-1">✅ Fixed:</p>
                          <p className="text-xs text-green-200">
                            {palette.accessibility.requiredFixes.length} accessibility improvement{palette.accessibility.requiredFixes.length > 1 ? 's' : ''} applied
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Target Audience */}
                <div className="p-6 border-t border-white/10">
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-3">
                    Best For
                  </p>
                  <ul className="space-y-1 text-sm text-white/80">
                    {palette.usage.bestFor.slice(0, 4).map((use, idx) => (
                      <li key={idx}>• {use}</li>
                    ))}
                  </ul>
                </div>

                {/* Select Button */}
                <div className="p-6">
                  <button
                    onClick={() => setSelectedPalette(palette)}
                    className={`
                      w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300
                      ${selectedPalette === palette
                        ? 'bg-white text-black'
                        : isFilmNoir
                        ? 'bg-gradient-to-r from-[#D4AF37] to-[#F4C542] text-[#1A1A1A] hover:shadow-lg hover:shadow-[#D4AF37]/50'
                        : isPurple
                        ? 'bg-gradient-to-r from-[#C026D3] to-[#E879F9] text-white hover:shadow-lg hover:shadow-[#C026D3]/50'
                        : 'bg-gradient-to-r from-[#059669] to-[#14B8A6] text-white hover:shadow-lg hover:shadow-[#059669]/50'
                      }
                    `}
                  >
                    {selectedPalette === palette ? 'Selected ✓' : 'Select This Palette'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Palette View */}
        {selectedPalette && (
          <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">Detailed Analysis: {selectedPalette.name}</h2>
              <button
                onClick={() => setSelectedPalette(null)}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
              >
                Close
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Gradients */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Gradient Examples</h3>
                <div className="space-y-4">
                  {selectedPalette.gradients.map((gradient, idx) => (
                    <div key={idx}>
                      <p className="text-sm font-semibold text-white mb-2">{gradient.name}</p>
                      <div
                        className="w-full h-20 rounded-lg"
                        style={{ background: gradient.css }}
                      />
                      <p className="text-xs text-white/60 mt-1 font-mono">{gradient.css}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contrast Ratios */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Contrast Ratios (WCAG)</h3>
                <div className="space-y-3">
                  {selectedPalette.contrastRatios.slice(0, 5).map((contrast, idx) => (
                    <div key={idx} className="bg-white/5 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">
                          {contrast.foreground} on {contrast.background}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold">{contrast.ratio.ratio}:1</span>
                          <span
                            className={`px-2 py-1 rounded text-xs font-semibold ${
                              contrast.ratio.level === 'AAA' ? 'bg-green-500/20 text-green-400' :
                              contrast.ratio.level === 'AA' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-red-500/20 text-red-400'
                            }`}
                          >
                            {contrast.ratio.level}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Execution Guidelines */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Critical Execution Guidelines</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-green-400 mb-2">✅ Do This:</h4>
                  <ul className="space-y-1 text-sm text-white/80">
                    {selectedPalette.usage.executionGuidelines.slice(0, 6).map((guideline, idx) => (
                      <li key={idx}>• {guideline}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-400 mb-2">Common Pitfalls:</h4>
                  <ul className="space-y-1 text-sm text-white/80">
                    {selectedPalette.usage.pitfalls.slice(0, 6).map((pitfall, idx) => (
                      <li key={idx}>{pitfall}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Competitive Intelligence */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Competitive Validation</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {selectedPalette.research.competitors.map((competitor, idx) => (
                  <div key={idx} className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-2">{competitor.name}</h4>
                    <p className="text-xs text-white/60 mb-2">
                      Colors: {competitor.colors.join(', ')}
                    </p>
                    <p className="text-sm text-white/80">{competitor.success}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Decision Guide */}
        <div className="mt-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
          <h3 className="text-2xl font-bold mb-6">Which Should You Choose?</h3>
          <div className="space-y-6 text-white/90">
            <div>
              <span className="font-semibold text-2xl text-[#D4AF37]">Choose Film Noir (Option A) ⭐</span> if you want:
              <ul className="list-disc list-inside mt-3 text-white/70 space-y-1 ml-4">
                <li>Timeless cinematic elegance (Gold + Charcoal = Hollywood)</li>
                <li>Premium B2B positioning for enterprise clients</li>
                <li>Sophisticated professional aesthetic</li>
                <li>8/10 research validation (strongest evidence)</li>
                <li>Safe bet with modern execution guidelines</li>
              </ul>
            </div>
            <div>
              <span className="font-semibold text-2xl text-[#C026D3]">Choose Purple/Magenta (Option B)</span> if you want:
              <ul className="list-disc list-inside mt-3 text-white/70 space-y-1 ml-4">
                <li>2025 innovation trend (Twitch, Roku, Yahoo using purple)</li>
                <li>Bold creative energy that stands out</li>
                <li>Modern tech-forward positioning</li>
                <li>Target creative agencies and startups</li>
                <li>9/10 distinctiveness (most differentiated)</li>
              </ul>
            </div>
            <div>
              <span className="font-semibold text-2xl text-[#059669]">Choose Teal Evolution (Option C)</span> if you want:
              <ul className="list-disc list-inside mt-3 text-white/70 space-y-1 ml-4">
                <li>Natural growth positioning (organic, approachable)</li>
                <li>Evolution of current brand (if using teal already)</li>
                <li>Human-centric tech aesthetic</li>
                <li>Health/wellness or sustainability focus</li>
                <li>Accessibility FIXED from original (now passes WCAG AA)</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/50 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-white/60 text-sm">
            <p className="font-semibold text-white mb-2">Sprint 1: Foundation Design System - Studios Palettes</p>
            <p>
              All palettes are production-ready with TypeScript, WCAG compliance, research validation,
              and integration with locked glassmorphism video placeholder system.
            </p>
            <p className="mt-3 text-white/40">
              Research sources: Color psychology studies, competitive intelligence, 2024-2025 trend analysis,
              WCAG 2.1 guidelines, color blindness simulations
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudiosColorPaletteDemo;
