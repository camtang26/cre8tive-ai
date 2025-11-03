import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Helmet } from 'react-helmet';

gsap.registerPlugin(ScrollTrigger);

// Sample portfolio data
const portfolioItems = [
  {
    id: 1,
    title: 'AI Video Production',
    description: 'Automated video creation with generative AI',
    category: 'Video AI',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Conversational Agents',
    description: 'Natural language interfaces for customer engagement',
    category: 'AI Agents',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Brand Analytics',
    description: 'Real-time insights from multi-channel data',
    category: 'Analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'Content Studio',
    description: 'End-to-end creative production platform',
    category: 'Studios',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    title: 'Voice Synthesis',
    description: 'Ultra-realistic AI voice generation',
    category: 'Audio AI',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    title: 'Script Automation',
    description: 'AI-powered scriptwriting and storyboarding',
    category: 'Automation',
    image: 'https://images.unsplash.com/photo-1542435503-956c469947f6?w=600&h=400&fit=crop',
  },
  {
    id: 7,
    title: 'Performance Tracking',
    description: 'Campaign metrics and ROI optimization',
    category: 'Analytics',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
  {
    id: 8,
    title: 'Creative Briefing',
    description: 'Intelligent project scoping and requirements',
    category: 'Planning',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
  },
  {
    id: 9,
    title: 'Multi-Channel Distribution',
    description: 'Automated content delivery across platforms',
    category: 'Distribution',
    image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=600&h=400&fit=crop',
  },
];

/**
 * Custom hook for premium card reveal animation
 * Based on Cinematographer research: Intermediate tier with individual triggers
 * Polished by The Editor for buttery smoothness
 *
 * Timing: 1.2s duration, 0.15s stagger, power3.out easing
 * Properties: opacity 0→1, y 60→0, scale 0.95→1, rotateX -3→0 (3D depth)
 * Performance: will-change cleanup after animation completes
 */
const useCardReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Check for reduced motion preference (WCAG 2.1 Level AA)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Instant reveal for users who prefer reduced motion
      gsap.set('.portfolio-card', { opacity: 1, y: 0, scale: 1 });
      return;
    }

    const cards = gsap.utils.toArray<HTMLElement>('.portfolio-card');

    // Set up 3D context for rotateX to work properly
    gsap.set(containerRef.current, { perspective: 1200 });

    cards.forEach((card, index) => {
      // Individual ScrollTrigger for each card (Intermediate tier)
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
          rotateX: -3, // Subtle 3D tilt for depth
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1.2, // Premium duration (vs generic 0.3s)
          ease: 'power3.out', // Smoother than power2.out
          delay: index * 0.15, // Stagger timing (musical rhythm)
          scrollTrigger: {
            trigger: card,
            start: 'top 85%', // Trigger before card reaches center
            end: 'top 20%',
            toggleActions: 'play none none reverse', // Reverse on scroll up
            // markers: true, // Debug only
          },
          onComplete: () => {
            // Clean up will-change after animation completes (performance optimization)
            card.style.willChange = 'auto';
          },
          onReverseComplete: () => {
            // Re-add will-change when reversing (scrolling back up)
            card.style.willChange = 'transform, opacity';
          },
        }
      );
    });
  }, { scope: containerRef });

  return containerRef;
};

const CardRevealTest = () => {
  const gridRef = useCardReveal();

  return (
    <>
      <Helmet>
        <title>Card Reveal Test - GSAP ScrollTrigger | Cre8tive AI</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Premium Card Reveal
            </h1>
            <p className="text-xl text-purple-300 mb-4">
              GSAP ScrollTrigger + Stagger Animation Test
            </p>
            <div className="inline-flex gap-4 text-sm text-slate-400">
              <span>Duration: 1.2s</span>
              <span>•</span>
              <span>Stagger: 0.15s</span>
              <span>•</span>
              <span>Easing: power3.out</span>
            </div>
            <div className="mt-8 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
              <p className="text-sm text-purple-200">
                🎬 <strong>Research-Driven Implementation:</strong> Based on Awwwards-winning patterns.
                Scroll down to see cards reveal with premium timing.
              </p>
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="container mx-auto px-4 pb-32">
          <div
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {portfolioItems.map((item) => (
              <article
                key={item.id}
                className="portfolio-card group cursor-pointer"
                style={{
                  // Initial state (will be animated by GSAP)
                  opacity: 0,
                  transform: 'translateY(60px) scale(0.95) rotateX(-3deg)',
                  willChange: 'transform, opacity', // GPU acceleration hint (cleaned up after animation)
                }}
              >
                <div className="relative overflow-hidden rounded-2xl bg-slate-900/50 border border-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-semibold bg-purple-600 text-white rounded-full backdrop-blur-sm">
                        {item.category}
                      </span>
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {/* CTA */}
                    <div className="mt-4 flex items-center text-purple-400 text-sm font-semibold group-hover:text-purple-300 transition-colors">
                      <span>View Project</span>
                      <svg
                        className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Border Animation on Hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-500/50 transition-colors pointer-events-none" />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Technical Info Footer */}
        <div className="border-t border-slate-800">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6">Technical Implementation</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                  <h3 className="text-purple-400 font-semibold mb-2">Animation Tier</h3>
                  <p className="text-slate-300 text-sm">Intermediate (Individual Triggers)</p>
                </div>
                <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                  <h3 className="text-purple-400 font-semibold mb-2">Performance</h3>
                  <p className="text-slate-300 text-sm">GPU-accelerated, 60fps target</p>
                </div>
                <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
                  <h3 className="text-purple-400 font-semibold mb-2">Accessibility</h3>
                  <p className="text-slate-300 text-sm">prefers-reduced-motion supported</p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <a
                  href="/docs/gsap-research-card-reveal-scrolltrigger-2025-10-18.md"
                  className="text-purple-400 hover:text-purple-300 text-sm font-semibold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Full Research Documentation →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardRevealTest;
