/**
 * MetricsDashboard Component
 *
 * Premium animated metrics dashboard for Conversational AI hero
 * Enterprise SaaS quality with glassmorphism and emerald accents
 *
 * Features:
 * - 3 animated metrics (conversations, response time, satisfaction)
 * - Bars fill with GSAP animation (ScrollTrigger)
 * - Numbers count up as bars animate
 * - Glassmorphism container with backdrop-blur
 * - Emerald neon accents and glow effects
 * - GPU-accelerated animations
 * - Full WCAG 2.1 AA accessibility
 * - prefers-reduced-motion support
 */

import { useEffect, useRef, useState, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { PaletteVariant } from './types/hero.types';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Metric configuration
 */
interface Metric {
  id: string;
  label: string;
  value: number;
  unit: string;
  maxValue: number;
  format?: 'percentage' | 'decimal' | 'integer';
}

/**
 * MetricsDashboard Props
 */
interface MetricsDashboardProps {
  metrics: Metric[];
  palette: PaletteVariant;
  className?: string;
}

/**
 * Accent colors from locked palettes
 */
const METRIC_COLORS: Record<PaletteVariant, string> = {
  'film-noir': '#E1B341', // Spotlight Gold
  'abyssal-emerald': '#16F0A1', // Emerald Neon
};

const GLOW_COLORS: Record<PaletteVariant, string> = {
  'film-noir': 'rgba(225, 179, 65, 0.4)',
  'abyssal-emerald': 'rgba(22, 240, 161, 0.4)',
};

/**
 * MetricsDashboard Component
 *
 * Premium live metrics preview
 */
export function MetricsDashboard({
  metrics,
  palette,
  className = '',
}: MetricsDashboardProps): ReactNode {
  const dashboardRef = useRef<HTMLDivElement>(null);
  const metricColor = METRIC_COLORS[palette];
  const glowColor = GLOW_COLORS[palette];

  // Animate dashboard entrance (simple fade-in, no ScrollTrigger needed)
  useEffect(() => {
    const element = dashboardRef.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      gsap.set(element, { opacity: 1, y: 0 });
      return;
    }

    // Simple entrance animation without ScrollTrigger (bars use ScrollTrigger instead)
    const animation = gsap.from(element, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power2.out',
      delay: 0.3, // Slight delay for stagger effect
    });

    return () => {
      if (animation) {
        animation.kill();
      }
    };
  }, []);

  return (
    <div
      ref={dashboardRef}
      className={`metrics-dashboard ${className}`}
      role="region"
      aria-label="Live metrics dashboard preview"
    >
      {/* Glassmorphism container */}
      <div
        className="rounded-2xl p-6"
        style={{
          backdropFilter: 'blur(16px) saturate(150%)',
          WebkitBackdropFilter: 'blur(16px) saturate(150%)',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 24px ${glowColor}`,
        }}
      >
        {/* Dashboard title */}
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Live Performance</h3>
          <div className="flex items-center gap-2">
            <div
              className="h-2 w-2 animate-pulse rounded-full"
              style={{
                backgroundColor: metricColor,
                boxShadow: `0 0 8px ${glowColor}`,
              }}
            />
            <span className="text-xs text-gray-400">Real-time</span>
          </div>
        </div>

        {/* Metrics */}
        <div className="space-y-6">
          {metrics.map((metric, index) => (
            <AnimatedMetric
              key={metric.id}
              metric={metric}
              metricColor={metricColor}
              glowColor={glowColor}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Individual animated metric with bar/gauge
 */
function AnimatedMetric({
  metric,
  metricColor,
  glowColor,
  delay,
}: {
  metric: Metric;
  metricColor: string;
  glowColor: string;
  delay: number;
}): ReactNode {
  const metricRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Animate bar fill + number count-up
  useEffect(() => {
    const metricElement = metricRef.current;
    const barElement = barRef.current;
    const valueElement = valueRef.current;

    if (!metricElement || !barElement || !valueElement || hasAnimated) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // No animation, show final values
      barElement.style.width = `${(metric.value / metric.maxValue) * 100}%`;
      valueElement.textContent = formatValue(metric.value, metric.format);
      setHasAnimated(true);
      return;
    }

    // Create animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: metricElement,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          setHasAnimated(true);
        },
      },
    });

    // Bar fill animation
    tl.to(
      barElement,
      {
        width: `${(metric.value / metric.maxValue) * 100}%`,
        duration: 1.5,
        ease: 'power2.out',
        delay: delay,
      },
      0
    );

    // Number count-up animation (synced with bar)
    tl.to(
      valueElement,
      {
        innerHTML: metric.value,
        duration: 1.5,
        ease: 'power2.out',
        snap: { innerHTML: metric.format === 'integer' ? 1 : 0.1 },
        delay: delay,
        onUpdate: function () {
          const currentValue = parseFloat(this.targets()[0].innerHTML);
          this.targets()[0].textContent = formatValue(currentValue, metric.format);
        },
      },
      0
    );

    return () => {
      if (tl) {
        tl.kill();
      }
    };
  }, [metric, metricColor, delay, hasAnimated]);

  return (
    <div ref={metricRef} className="metric-item">
      {/* Label and value */}
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-sm text-gray-300">{metric.label}</span>
        <span className="text-lg font-bold tabular-nums" style={{ color: metricColor }}>
          <span ref={valueRef}>0</span>
          <span className="ml-0.5 text-sm">{metric.unit}</span>
        </span>
      </div>

      {/* Progress bar */}
      <div
        className="relative h-2 overflow-hidden rounded-full"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        }}
      >
        <div
          ref={barRef}
          className="absolute inset-y-0 left-0 rounded-full transition-all"
          style={{
            width: '0%',
            backgroundColor: metricColor,
            boxShadow: `0 0 12px ${glowColor}`,
          }}
        />
      </div>
    </div>
  );
}

/**
 * Format value based on type
 */
function formatValue(value: number, format?: string): string {
  if (format === 'percentage') {
    return value.toFixed(0);
  } else if (format === 'decimal') {
    return value.toFixed(1);
  } else {
    return value.toFixed(0);
  }
}

/**
 * Preset dashboard configurations
 */
export const DashboardPresets = {
  /**
   * Conversational AI: Scale metrics (10x emphasis)
   */
  conversationalAIScale: (palette: PaletteVariant = 'abyssal-emerald') => ({
    metrics: [
      {
        id: 'conversations',
        label: 'Conversations Handled',
        value: 2500000,
        unit: '',
        maxValue: 3000000,
        format: 'integer' as const,
      },
      {
        id: 'response-time',
        label: 'Avg Response Time',
        value: 1.2,
        unit: 's',
        maxValue: 5,
        format: 'decimal' as const,
      },
      {
        id: 'satisfaction',
        label: 'Customer Satisfaction',
        value: 98,
        unit: '%',
        maxValue: 100,
        format: 'percentage' as const,
      },
    ],
    palette,
  }),

  /**
   * Studios: Performance metrics (engagement emphasis)
   */
  studiosPerformance: (palette: PaletteVariant = 'film-noir') => ({
    metrics: [
      {
        id: 'views',
        label: 'Total Views',
        value: 10000000,
        unit: '',
        maxValue: 15000000,
        format: 'integer' as const,
      },
      {
        id: 'engagement',
        label: 'Avg Engagement Rate',
        value: 2.4,
        unit: 'x',
        maxValue: 3,
        format: 'decimal' as const,
      },
      {
        id: 'approval',
        label: 'First-Draft Approval',
        value: 60,
        unit: '%',
        maxValue: 100,
        format: 'percentage' as const,
      },
    ],
    palette,
  }),
};
