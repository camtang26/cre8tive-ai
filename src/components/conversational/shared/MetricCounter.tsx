import { useEffect, useRef, useState } from "react"

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
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only animate once
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true)

          // Animation with elastic easing
          const steps = 60
          const increment = end / steps
          let current = 0
          const stepDuration = duration / steps

          const timer = setInterval(() => {
            current += increment
            if (current >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(current)
            }
          }, stepDuration)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

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
