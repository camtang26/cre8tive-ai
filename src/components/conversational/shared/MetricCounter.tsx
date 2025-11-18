import { useRef, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"

interface MetricCounterProps {
  end: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
  label: string
  sublabel?: string
  className?: string
}

/**
 * Animated metric counter with odometer-style counting effect
 * Triggers animation when element scrolls into view
 *
 * @param end - Target number to count to
 * @param duration - Animation duration in milliseconds (default: 2000)
 * @param decimals - Number of decimal places (default: 0)
 * @param prefix - String to prepend to number (e.g., "$")
 * @param suffix - String to append to number (e.g., "%", "+", "M")
 * @param label - Main label displayed below number
 * @param sublabel - Optional secondary label (smaller text)
 */
export function MetricCounter({
  end,
  duration = 2000,
  decimals = 0,
  prefix = "",
  suffix = "",
  label,
  sublabel,
  className = "",
}: MetricCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  // 🎬 PREMIUM GSAP COUNTING ANIMATION (replaces setInterval!)
  useGSAP(() => {
    if (prefersReducedMotion) {
      setCount(end) // Show final value immediately
      return
    }

    // Create a counter object to animate
    const counter = { value: 0 }

    // Animate counter.value from 0 to end
    gsap.to(counter, {
      value: end,
      duration: duration / 1000, // Convert to seconds
      ease: "power2.out",
      onUpdate: () => {
        setCount(counter.value) // Update React state on each frame
      },
      scrollTrigger: {
        trigger: ref.current,
        start: "top 80%", // Start when element is 80% down viewport
        toggleActions: "play none none none", // Play once, don't repeat
        once: true // Only trigger once
      }
    })
  }, { scope: ref, dependencies: [end, duration, prefersReducedMotion] })

  const formattedValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()

  return (
    <div ref={ref} className={`text-center ${className}`}>
      {/* Heroic numbers with gradient */}
      <div
        className="text-7xl md:text-8xl font-black mb-4 tabular-nums tracking-tight"
        style={{
          background: 'linear-gradient(135deg, #10B981, #14F195, #FFFFFF)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 40px rgba(16,185,129,0.3)',
        }}
      >
        {prefix}
        {formattedValue}
        {suffix}
      </div>
      {/* Label hierarchy */}
      <div className="text-lg md:text-xl font-semibold text-conversational-headline mb-2">{label}</div>
      {sublabel && <div className="text-sm text-conversational-body-muted">{sublabel}</div>}
    </div>
  )
}
