/**
 * Hero Prototypes Demo Page
 *
 * Interactive demo showcasing research-backed hero prototypes:
 * 1. Cinematic Results (Studios - Portfolio-first + Metrics)
 * 2. 10x Scale (Conversational AI - Dramatic Efficiency Gains)
 *
 * Features:
 * - Side-by-side comparison view
 * - Research validation notes
 * - Conversion data overlay
 * - Premium quality validation
 */

import { useState, type ReactNode } from 'react';
import { CinematicResultsHero } from '../components/heroes/studios/CinematicResultsHero';
import { ScaleHero } from '../components/heroes/conversational-ai/ScaleHero';

type ViewMode = 'studios' | 'ai' | 'both';

/**
 * HeroPrototypesDemo Component
 *
 * Premium demo page for hero section validation
 */
export function HeroPrototypesDemo(): ReactNode {
  const [viewMode, setViewMode] = useState<ViewMode>('both');
  const [showResearch, setShowResearch] = useState(true);

  return (
    <div className="hero-prototypes-demo min-h-screen bg-gray-900">
      {/* Demo Controls */}
      <div className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900/95 p-4 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Title */}
            <div>
              <h1 className="text-2xl font-bold text-white">Hero Prototypes - Option 1 (Top 2)</h1>
              <p className="text-sm text-gray-400">Research-backed premium quality validation</p>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 rounded-lg bg-gray-800 p-1">
              <button
                onClick={() => setViewMode('studios')}
                className={`rounded px-4 py-2 text-sm font-medium transition-colors ${
                  viewMode === 'studios'
                    ? 'bg-yellow-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                Studios
              </button>
              <button
                onClick={() => setViewMode('ai')}
                className={`rounded px-4 py-2 text-sm font-medium transition-colors ${
                  viewMode === 'ai'
                    ? 'bg-emerald-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                Conversational AI
              </button>
              <button
                onClick={() => setViewMode('both')}
                className={`rounded px-4 py-2 text-sm font-medium transition-colors ${
                  viewMode === 'both'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
              >
                Both
              </button>
            </div>

            {/* Research Toggle */}
            <button
              onClick={() => setShowResearch(!showResearch)}
              className="rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-700"
            >
              {showResearch ? 'Hide' : 'Show'} Research
            </button>
          </div>
        </div>
      </div>

      {/* Heroes Display */}
      <div className="relative">
        {/* Studios Hero */}
        {(viewMode === 'studios' || viewMode === 'both') && (
          <div className="relative">
            {showResearch && (
              <ResearchOverlay
                title="Cinematic Results - Studios"
                variant="studios"
                research={studiosResearch}
              />
            )}
            <CinematicResultsHero />
          </div>
        )}

        {/* Conversational AI Hero */}
        {(viewMode === 'ai' || viewMode === 'both') && (
          <div className="relative">
            {showResearch && (
              <ResearchOverlay
                title="10x Scale - Conversational AI"
                variant="ai"
                research={aiResearch}
              />
            )}
            <ScaleHero />
          </div>
        )}
      </div>

      {/* Quality Checklist */}
      <div className="border-t border-gray-800 bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-2xl font-bold text-white">Premium Quality Checklist</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Studios Checklist */}
            <QualityChecklist
              title="Studios Hero"
              items={[
                'Film Noir Gradient background (Nightfall Obsidian → Indigo Shadow)',
                'Champagne Mist (#F5E7C7) headline color',
                'Spotlight Gold (#E1B341) CTA and metric accents',
                'Premium Glassmorphism video placeholder',
                'GSAP staggered entrance animation (0.6s, stagger 0.1s)',
                'Trinity Framework validated copy',
                '3 trust signals above fold (10M+ views, 2.4x engagement, 60% approval)',
                'Verb-first CTAs ("View Our Work", "See Case Studies")',
                'WCAG 2.1 AA accessibility compliance',
              ]}
              variant="studios"
            />

            {/* AI Checklist */}
            <QualityChecklist
              title="Conversational AI Hero"
              items={[
                'Abyssal Emerald gradient background (Abyss Blue → Emerald tint)',
                'Ice Blue (#E4F8FF) headline color',
                'Emerald Neon (#16F0A1) CTA and 10x multiplier',
                'Animated emerald glow on 10x (continuous pulse)',
                'GSAP count-up animation (0 → 10x, 2.5s duration)',
                'Trinity Framework validated copy',
                '3 enterprise trust signals (500+ enterprises, 2.5M conversations, 99.98% uptime)',
                '"Book Demo" CTA (highest conversion for enterprise SaaS)',
                'WCAG 2.1 AA accessibility compliance',
              ]}
              variant="ai"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Research Overlay Component
 *
 * Shows conversion data and research validation
 */
function ResearchOverlay({
  title,
  variant,
  research,
}: {
  title: string;
  variant: 'studios' | 'ai';
  research: ResearchData;
}): ReactNode {
  const bgColor = variant === 'studios' ? 'bg-yellow-600/90' : 'bg-emerald-600/90';

  return (
    <div className={`absolute right-4 top-4 z-40 max-w-sm rounded-lg ${bgColor} p-4 text-white backdrop-blur-sm`}>
      <h3 className="mb-2 text-lg font-bold">{title}</h3>

      <div className="space-y-3 text-sm">
        <div>
          <p className="font-semibold">Conversion Boost:</p>
          <p>{research.conversionBoost}</p>
        </div>

        <div>
          <p className="font-semibold">Research Validation:</p>
          <ul className="ml-4 list-disc space-y-1">
            {research.validation.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold">Target Audience:</p>
          <p>{research.targetAudience}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Quality Checklist Component
 */
function QualityChecklist({
  title,
  items,
  variant,
}: {
  title: string;
  items: string[];
  variant: 'studios' | 'ai';
}): ReactNode {
  const accentColor = variant === 'studios' ? 'text-yellow-500' : 'text-emerald-500';

  return (
    <div className="rounded-lg border border-gray-800 bg-gray-800/50 p-6">
      <h3 className={`mb-4 text-lg font-bold ${accentColor}`}>{title}</h3>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
            <span className={`mt-0.5 ${accentColor}`}>✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * Research Data Type
 */
interface ResearchData {
  conversionBoost: string;
  validation: string[];
  targetAudience: string;
}

/**
 * Studios Research Data
 */
const studiosResearch: ResearchData = {
  conversionBoost: '+35% conversion vs capabilities-focused, +42% with specific metrics',
  validation: [
    'Portfolio-first is dominant pattern among top performers',
    'Short verb-first CTAs: +16.62% better conversion',
    '5-7 word headlines: 6-10% better than 15+ words',
    'Trust signals above fold: 3x inquiry rate increase',
  ],
  targetAudience: 'Performance marketers, data-driven CMOs, growth-focused brands',
};

/**
 * Conversational AI Research Data
 */
const aiResearch: ResearchData = {
  conversionBoost: '+98% higher engagement when showing automation metrics',
  validation: [
    'Specific multipliers (10x) outperform vague "scale better"',
    '"Book Demo" = highest conversion for enterprise SaaS',
    'ROI/automation metrics = dramatic engagement boost',
    'Trust signals above fold: 3x inquiry rate increase',
  ],
  targetAudience: 'Customer success leaders, support directors, scale-stage startups',
};
