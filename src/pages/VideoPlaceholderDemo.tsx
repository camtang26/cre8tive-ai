import { useState } from 'react';
import { VideoPlaceholderMinimal } from '../components/video-placeholders/VideoPlaceholderMinimal';
import { VideoPlaceholderPremium } from '../components/video-placeholders/VideoPlaceholderPremium';
import { VideoPlaceholderBold } from '../components/video-placeholders/VideoPlaceholderBold';
import { CodexVideoPlaceholderMinimal } from '../components/video-placeholders/codex/CodexVideoPlaceholderMinimal';
import { CodexVideoPlaceholderPremium } from '../components/video-placeholders/codex/CodexVideoPlaceholderPremium';
import { CodexVideoPlaceholderBold } from '../components/video-placeholders/codex/CodexVideoPlaceholderBold';
import type { AspectRatio } from '../components/video-placeholders/types/VideoPlaceholder.types';

/**
 * Video Placeholder Demo and Comparison Page
 *
 * Interactive demo showing all three video placeholder variants side-by-side:
 * - Option A: Minimal Clean
 * - Option B: Premium Glassmorphism (RECOMMENDED)
 * - Option C: Bold Cinematic
 *
 * Features:
 * - Side-by-side comparison
 * - Aspect ratio switcher
 * - Same thumbnail for fair comparison
 * - Hover to preview interactions
 * - Responsive layout
 *
 * Usage: Navigate to /video-placeholder-demo to view
 */
export const VideoPlaceholderDemo = () => {
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('16/9');
  const [showInfo, setShowInfo] = useState(true);

  // Sample thumbnail - using a placeholder for demo
  // In production, replace with actual video thumbnail
  const thumbnailUrl = 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1920&h=1080&fit=crop&q=80';

  const handleClick = (variant: string, origin: 'Claude Code' | 'Codex') => {
    console.log(`Clicked ${variant} variant (${origin})`);
    alert(`You selected: ${variant} (${origin})\n\nIn production, this would play the video.`);
  };

  const aspectRatios: AspectRatio[] = ['16/9', '4/3', '21/9', '1/1', '9/16'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Video Placeholder Prototypes
              </h1>
              <p className="text-white/70">
                Sprint 1: Foundation Design System - Choose your video placeholder style
              </p>
            </div>
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              {showInfo ? 'Hide' : 'Show'} Info
            </button>
          </div>
        </div>
      </header>

      {/* Info Panel */}
      {showInfo && (
        <div className="bg-blue-500/10 border-l-4 border-blue-500 p-6 mx-4 sm:mx-6 lg:mx-8 mt-8 rounded-r-lg">
          <h2 className="text-xl font-bold mb-3">🎯 Decision Point</h2>
          <p className="text-white/90 mb-4">
            These are production-ready React/TypeScript components. Hover over each to see interactions.
            The design you choose will become the foundation for all video placeholders across Studios
            and Conversational AI pages.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="font-semibold text-blue-400">Option A: Minimal</span>
              <p className="text-white/70 mt-1">Clean, understated, focuses on content</p>
            </div>
            <div>
              <span className="font-semibold text-green-400">Option B: Premium ⭐</span>
              <p className="text-white/70 mt-1">Glassmorphism, flagship feel, RECOMMENDED</p>
            </div>
            <div>
              <span className="font-semibold text-red-400">Option C: Bold</span>
              <p className="text-white/70 mt-1">Cinematic, dramatic, high-impact</p>
            </div>
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <h3 className="text-lg font-semibold mb-4">Aspect Ratio</h3>
          <div className="flex flex-wrap gap-2">
            {aspectRatios.map((ratio) => (
              <button
                key={ratio}
                onClick={() => setAspectRatio(ratio)}
                className={`
                  px-4 py-2 rounded-lg font-medium transition-all
                  ${aspectRatio === ratio
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-white/10 hover:bg-white/20 text-white/80'
                  }
                `}
              >
                {ratio}
              </button>
            ))}
          </div>
          <p className="text-white/60 text-sm mt-4">
            Current: <span className="font-mono font-semibold text-white">{aspectRatio}</span>
            {aspectRatio === '16/9' && ' (Standard YouTube/Vimeo)'}
            {aspectRatio === '21/9' && ' (Cinematic Widescreen)'}
            {aspectRatio === '1/1' && ' (Instagram Square)'}
            {aspectRatio === '9/16' && ' (TikTok/Reels Portrait)'}
          </p>
        </div>
      </div>

      {/* Comparison Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Option A: Minimal */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Option A</h2>
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-medium">
                Minimal Clean
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-2">Claude Code Prototype</p>
                <VideoPlaceholderMinimal
                  videoId="demo-minimal-claude"
                  thumbnailUrl={thumbnailUrl}
                  title="Product Demo Video"
                  description="See how our platform works in action"
                  aspectRatio={aspectRatio}
                  onClick={() => handleClick('Minimal Clean (Option A)', 'Claude Code')}
                />
              </div>
              <div className="bg-white/8 rounded-xl p-4 border border-blue-400/30 shadow-lg shadow-blue-500/10">
                <p className="text-xs uppercase tracking-widest text-blue-300 mb-2">Codex Prototype</p>
                <CodexVideoPlaceholderMinimal
                  videoId="demo-minimal-codex"
                  thumbnailUrl={thumbnailUrl}
                  title="Product Demo Video"
                  description="Responsive, accessibility-first minimal shell"
                  aspectRatio={aspectRatio}
                  onClick={() => handleClick('Minimal Clean (Option A)', 'Codex')}
                />
              </div>
            </div>
            <div className="text-sm text-white/70 space-y-2">
              <p><strong>Claude Code:</strong> Clean borders, hover-only play control</p>
              <p><strong>Codex:</strong> Persistent contrast chip, ScrollTrigger reveal via <code>useGSAP</code>, fallback overlay for no blur</p>
              <p><strong>Best for:</strong> Modern content-first layouts needing accessible defaults</p>
            </div>
          </div>

          {/* Option B: Premium (RECOMMENDED) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Option B</h2>
              <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium">
                Premium ⭐ RECOMMENDED
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-xl p-4 border border-green-500/30 shadow-lg shadow-green-500/20">
                <p className="text-xs uppercase tracking-widest text-green-300 mb-2">Claude Code Prototype</p>
                <VideoPlaceholderPremium
                  videoId="demo-premium-claude"
                  thumbnailUrl={thumbnailUrl}
                  title="Product Demo Video"
                  description="See how our platform works in action"
                  aspectRatio={aspectRatio}
                  onClick={() => handleClick('Premium Glassmorphism (Option B)', 'Claude Code')}
                />
              </div>
              <div className="bg-gradient-to-br from-indigo-500/20 via-sky-500/10 to-fuchsia-500/20 rounded-2xl p-4 border border-white/20 shadow-xl shadow-indigo-500/20">
                <p className="text-xs uppercase tracking-widest text-indigo-200 mb-2">Codex Prototype</p>
                <CodexVideoPlaceholderPremium
                  videoId="demo-premium-codex"
                  thumbnailUrl={thumbnailUrl}
                  title="Product Demo Video"
                  description="Glass with fallback + animated halo glow"
                  aspectRatio={aspectRatio}
                  onClick={() => handleClick('Premium Glassmorphism (Option B)', 'Codex')}
                />
              </div>
            </div>
            <div className="text-sm text-white/70 space-y-2">
              <p><strong>Claude Code:</strong> Glass panel with Netflix-style hover interaction</p>
              <p><strong>Codex:</strong> Accessible glass (solid fallback, contrast slab), animated halo + lit play chip with reduced-motion safety</p>
              <p><strong>Best for:</strong> Flagship hero/portfolio grids needing luxury polish</p>
            </div>
          </div>

          {/* Option C: Bold */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Option C</h2>
              <span className="px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-sm font-medium">
                Bold Cinematic
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-xs uppercase tracking-widest text-white/40 mb-2">Claude Code Prototype</p>
                <VideoPlaceholderBold
                  videoId="demo-bold-claude"
                  thumbnailUrl={thumbnailUrl}
                  title="Product Demo Video"
                  description="See how our platform works in action"
                  aspectRatio={aspectRatio}
                  onClick={() => handleClick('Bold Cinematic (Option C)', 'Claude Code')}
                />
              </div>
              <div className="bg-gradient-to-br from-rose-500/25 via-black/60 to-amber-500/20 rounded-2xl p-[14px] border border-rose-400/40 shadow-[0_30px_70px_-40px_rgba(244,63,94,0.9)]">
                <p className="text-xs uppercase tracking-widest text-rose-200 mb-2">Codex Prototype</p>
                <CodexVideoPlaceholderBold
                  videoId="demo-bold-codex"
                  thumbnailUrl={thumbnailUrl}
                  title="Product Demo Video"
                  description="Cinematic poster with interactive spotlight"
                  aspectRatio={aspectRatio}
                  onClick={() => handleClick('Bold Cinematic (Option C)', 'Codex')}
                />
              </div>
            </div>
            <div className="text-sm text-white/70 space-y-2">
              <p><strong>Claude Code:</strong> Heavy vignette with dramatic hover scale</p>
              <p><strong>Codex:</strong> Letterbox frame, ScrollTrigger tilt, pointer-driven spotlight with cleanup, high-contrast trailer card</p>
              <p><strong>Best for:</strong> Studios page hero grids & campaign takeovers</p>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="mt-12 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold mb-4">Technical Implementation Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-white mb-2">Animations</h4>
              <ul className="space-y-1 text-white/70">
                <li>✓ GSAP ScrollTrigger reveal animations</li>
                <li>✓ GPU-accelerated transforms (translate3d, scale)</li>
                <li>✓ Smooth 0.3-0.6s durations with power2.out easing</li>
                <li>✓ Option C includes parallax scrub effect</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Performance</h4>
              <ul className="space-y-1 text-white/70">
                <li>✓ Intersection Observer lazy loading (50px margin)</li>
                <li>✓ CSS containment for optimal rendering</li>
                <li>✓ Only animate transform and opacity</li>
                <li>✓ Loading states with spinner animations</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Accessibility</h4>
              <ul className="space-y-1 text-white/70">
                <li>✓ prefers-reduced-motion support (WCAG 2.1 AA)</li>
                <li>✓ Full ARIA labels and descriptions</li>
                <li>✓ Keyboard navigation (Enter, Space)</li>
                <li>✓ Focus-visible styling with ring indicators</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Browser Support</h4>
              <ul className="space-y-1 text-white/70">
                <li>✓ backdrop-filter: 94%+ (with fallbacks)</li>
                <li>✓ Intersection Observer: All modern browsers</li>
                <li>✓ GSAP 3.13: Universal support</li>
                <li>✓ Tailwind CSS 3.4: Optimized builds</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Decision Guide */}
        <div className="mt-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
          <h3 className="text-xl font-bold mb-4">Which Should You Choose?</h3>
          <div className="space-y-4 text-white/90">
            <div>
              <span className="font-semibold text-blue-400">Choose Option A (Minimal)</span> if you want:
              <ul className="list-disc list-inside mt-2 text-white/70 space-y-1">
                <li>Clean, understated design that prioritizes content</li>
                <li>Subtle interactions that don't compete with copy</li>
                <li>Modern minimalism aesthetic</li>
              </ul>
            </div>
            <div>
              <span className="font-semibold text-green-400">Choose Option B (Premium) ⭐</span> if you want:
              <ul className="list-disc list-inside mt-2 text-white/70 space-y-1">
                <li>Visual parity with Netflix, Stripe, Linear, Vercel</li>
                <li>Glassmorphism matching your Briefing Engine page</li>
                <li>Premium, flagship feel with sophisticated interactions</li>
                <li><strong>BEST CHOICE for most projects</strong></li>
              </ul>
            </div>
            <div>
              <span className="font-semibold text-red-400">Choose Option C (Bold)</span> if you want:
              <ul className="list-disc list-inside mt-2 text-white/70 space-y-1">
                <li>Dramatic, cinematic impact (perfect for Studios page)</li>
                <li>Bold visual statement that demands attention</li>
                <li>Film production or creative agency aesthetic</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/30 backdrop-blur-sm mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-white/60 text-sm">
            <p>Sprint 1: Foundation Design System</p>
            <p className="mt-2">
              All components are production-ready with TypeScript, GSAP, Tailwind CSS, and full accessibility.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VideoPlaceholderDemo;
