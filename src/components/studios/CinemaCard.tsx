import { ReactNode } from "react";

interface CinemaCardProps {
  children: ReactNode;
  className?: string;
  accentColor?: string;
}

export const CinemaCard = ({ children, className = "", accentColor = "#F97316" }: CinemaCardProps) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Widescreen film frame border */}
      <div
        className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, ${accentColor}40 0%, transparent 10%, transparent 90%, ${accentColor}40 100%)`,
          boxShadow: `0 0 20px ${accentColor}30`
        }}
      />

      {/* Film sprocket holes - top */}
      <div className="absolute -top-2 left-8 right-8 flex justify-between">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`top-${i}`}
            className="w-2 h-2 rounded-sm bg-black border border-white/20 opacity-40"
          />
        ))}
      </div>

      {/* Film sprocket holes - bottom */}
      <div className="absolute -bottom-2 left-8 right-8 flex justify-between">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`bottom-${i}`}
            className="w-2 h-2 rounded-sm bg-black border border-white/20 opacity-40"
          />
        ))}
      </div>

      {/* Card content */}
      <div className="relative z-10 glass-morphism rounded-lg overflow-hidden">
        {/* Film grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px'
          }}
        />

        {children}
      </div>

      {/* Corner frame markers */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 opacity-30" style={{ borderColor: accentColor }} />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 opacity-30" style={{ borderColor: accentColor }} />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 opacity-30" style={{ borderColor: accentColor }} />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 opacity-30" style={{ borderColor: accentColor }} />
    </div>
  );
};
