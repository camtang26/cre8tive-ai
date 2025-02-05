import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ConceptCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
  className?: string;
}

export const ConceptCard = ({
  title,
  description,
  Icon,
  color,
  className,
}: ConceptCardProps) => {
  return (
    <div 
      className={cn(
        "glass-morphism rounded-xl hover-glow border border-white/10",
        "bg-gradient-to-br from-black/40 via-black/20 to-transparent relative group",
        "transform-gpu transition-all duration-500 hover:scale-105",
        "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r",
        "before:opacity-0 before:transition-opacity hover:before:opacity-100",
        "after:absolute after:inset-0 after:rounded-xl",
        "after:opacity-0 after:transition-opacity hover:after:opacity-100",
        "flex flex-col h-full",
        // Mobile-specific padding and sizing
        "p-4 md:p-12",
        className
      )}
      style={{
        '--concept-color': color,
      } as React.CSSProperties}
    >
      {/* Icon with enhanced glow - scaled down for mobile */}
      <div className="mb-4 md:mb-8 relative group-hover:animate-pulse flex justify-center">
        <Icon 
          className={cn(
            "transition-all duration-300",
            "drop-shadow-[0_0_20px_var(--concept-color)]",
            "group-hover:drop-shadow-[0_0_40px_var(--concept-color)]",
            // Scaled down icon size for mobile
            "w-12 h-12 md:w-24 md:h-24"
          )}
          style={{ color }}
        />
      </div>
      
      {/* Content - adjusted text sizes for mobile */}
      <div className="text-center flex-grow flex flex-col justify-between">
        <h3 
          className={cn(
            "font-semibold mb-3 md:mb-6",
            "bg-gradient-to-r from-white via-white/90 to-white/80",
            "bg-clip-text text-transparent",
            // Adjusted text size for mobile
            "text-xl md:text-3xl"
          )}
        >
          {title}
        </h3>
        <p className={cn(
          "leading-relaxed text-white/80",
          // Adjusted text size and line height for mobile
          "text-base md:text-xl",
          "leading-normal md:leading-relaxed"
        )}>
          {description}
        </p>
      </div>
    </div>
  );
};