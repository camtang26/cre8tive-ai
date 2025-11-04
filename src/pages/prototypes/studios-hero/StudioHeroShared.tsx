import React, { useMemo } from "react"
import { cn } from "@/lib/utils"

// Locked Film Noir Gradient (codex-studios-a)
export const filmNoirGradient = {
  background: "linear-gradient(135deg, #05060D 0%, #0C1526 48%, #13263B 100%)"
}

// Core palette tokens (used inline for clarity)
export const palette = {
  nightfall: "#05060D",
  indigoShadow: "#13263B",
  gold: "#E1B341", // Spotlight Gold
  champagne: "#F5E7C7",
  ionCyan: "#31C4FF",
  body: "#C7D2E0"
}

// Premium glass class helper
export const glassClass =
  "bg-white/10 backdrop-blur-lg backdrop-saturate-150 border border-white/10 rounded-2xl"

export const usePrefersReducedMotion = () => {
  return useMemo(() => {
    if (typeof window === "undefined") return true
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
  }, [])
}

export const HeroSection: React.FC<
  React.PropsWithChildren<{ className?: string; ariaLabel?: string }>
> = ({ className, children, ariaLabel }) => {
  return (
    <section
      aria-label={ariaLabel ?? "Studios hero prototype"}
      className={cn(
        "relative min-h-[92vh] w-full overflow-hidden",
        "[--pad:clamp(16px,3vw,40px)]",
        className
      )}
      style={filmNoirGradient}
    >
      {children}
      {/* Subtle film grain overlay (very lightweight pattern) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 1.5px)",
          backgroundSize: "4px 4px",
          mixBlendMode: "overlay"
        }}
      />
    </section>
  )
}

