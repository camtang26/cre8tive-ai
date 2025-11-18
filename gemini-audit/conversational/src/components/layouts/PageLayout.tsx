import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  variant?: "default" | "minimal" | "custom";
}

/**
 * Unified page layout component for consistent, seamless design
 * Provides single background system across all pages
 * NO per-section backgrounds - ensures smooth, professional appearance
 *
 * Variants:
 * - "default": Unified black background with subtle gradients (Home, Studios)
 * - "minimal": Minimal background (reserved)
 * - "custom": No backgrounds - page defines its own theme (Briefing Engine)
 */
export const PageLayout = ({ children, variant = "default" }: PageLayoutProps) => {
  return (
    <div className={`min-h-screen relative overflow-hidden ${variant !== "custom" ? "bg-black" : ""}`}>
      {/* Only render background layers for default/minimal variants */}
      {variant !== "custom" && (
        <>
          {/* Layer 1: Pure Black Base */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: '#000000',
            }}
            aria-hidden="true"
          />
        </>
      )}

      {variant === "default" && (
        <>
          {/* Layer 2: Subtle Center-to-Edge Gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle at center, #000000 0%, #000000 85%, #050505 100%)',
            }}
            aria-hidden="true"
          />

          {/* Layer 3: Subtle Blue/Cyan Accent Glows */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.04) 0%, transparent 40%), ' +
                'radial-gradient(circle at 80% 80%, rgba(6,182,212,0.04) 0%, transparent 40%)',
              filter: 'blur(120px)',
              opacity: 0.5,
            }}
            aria-hidden="true"
          />

          {/* Layer 4: Unified Gradient Mesh */}
          <div
            className="absolute inset-0 gradient-mesh pointer-events-none"
            style={{
              opacity: 0.3,
            }}
            aria-hidden="true"
          />
        </>
      )}

      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
