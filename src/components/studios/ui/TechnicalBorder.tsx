import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface TechnicalBorderProps {
  children: ReactNode;
  className?: string;
  cornerSize?: "sm" | "md" | "lg";
  intensity?: "low" | "medium" | "high";
}

export function TechnicalBorder({ 
  children, 
  className, 
  cornerSize = "md",
  intensity = "medium" 
}: TechnicalBorderProps) {
  return (
    <div className={cn("relative group", className)}>
      {/* Gradient Border Container */}
      <div className={cn(
        "absolute -inset-[1px] rounded-xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 opacity-70 pointer-events-none",
        intensity === "high" && "from-studios-primary/30 via-white/5 to-studios-accent/30",
        intensity === "low" && "from-white/5 via-transparent to-white/5 opacity-40"
      )} />
      
      {/* Inner Surface */}
      <div className="relative h-full w-full rounded-xl bg-studios-steel/80 backdrop-blur-xl overflow-hidden">
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-noise" />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Corner Accents (Tech Noir Detail) */}
        <CornerAccent position="top-left" />
        <CornerAccent position="top-right" />
        <CornerAccent position="bottom-left" />
        <CornerAccent position="bottom-right" />
      </div>
    </div>
  );
}

function CornerAccent({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const positionClasses = {
    "top-left": "top-0 left-0 border-t border-l rounded-tl-xl",
    "top-right": "top-0 right-0 border-t border-r rounded-tr-xl",
    "bottom-left": "bottom-0 left-0 border-b border-l rounded-bl-xl",
    "bottom-right": "bottom-0 right-0 border-b border-r rounded-br-xl",
  };

  return (
    <div className={cn(
      "absolute w-4 h-4 border-white/20 pointer-events-none",
      positionClasses[position]
    )} />
  );
}
