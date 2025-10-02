import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  variant?: "default" | "minimal";
}

/**
 * Unified page layout component for consistent, seamless design
 * Provides single background system across all pages
 * NO per-section backgrounds - ensures smooth, professional appearance
 */
export const PageLayout = ({ children, variant = "default" }: PageLayoutProps) => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Layer 1: Pure Black Base */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: '#000000',
        }}
        aria-hidden="true"
      />

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
