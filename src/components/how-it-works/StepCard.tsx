import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  benefits: string[];
  Icon: LucideIcon;
  color: string;
  className?: string;
}

export const StepCard = ({
  number,
  title,
  description,
  benefits,
  Icon,
  color,
  className,
}: StepCardProps) => {
  return (
    <div 
      className={cn(
        "relative perspective-1000 w-full max-w-md mx-auto",
        className
      )}
    >
      <div 
        className={cn(
          "glass-morphism p-12 rounded-xl hover-lift hover-glow border border-white/10",
          "bg-gradient-to-br from-black/40 via-black/20 to-transparent relative group",
          "transform-gpu transition-transform duration-500 hover:rotate-y-10 hover:scale-105",
          "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r",
          "before:opacity-0 before:transition-opacity hover:before:opacity-100",
          "after:absolute after:inset-0 after:rounded-xl",
          "after:opacity-0 after:transition-opacity hover:after:opacity-100",
          `shadow-[0_0_30px_${color}25]`
        )}
        style={{
          '--step-color': color,
        } as React.CSSProperties}
      >
        {/* 3D Number Badge */}
        <div 
          className={cn(
            "absolute -top-6 -left-6 w-16 h-16 rounded-2xl",
            "bg-gradient-to-r",
            "flex items-center justify-center text-white font-bold text-2xl",
            "shadow-[0_0_30px_var(--step-color)]",
            "transform-gpu transition-transform duration-300",
            "hover:scale-110 hover:rotate-12",
            "before:absolute before:inset-0 before:rounded-2xl",
            "before:bg-[var(--step-color)] before:opacity-50",
            "after:absolute after:inset-0 after:rounded-2xl",
            "after:bg-gradient-to-r after:from-[var(--step-color)] after:to-transparent",
          )}
        >
          {number}
        </div>
        
        {/* Icon with enhanced glow */}
        <div className="mb-8 relative group-hover:animate-pulse">
          <Icon 
            className={cn(
              "w-20 h-20 transition-all duration-300",
              "drop-shadow-[0_0_20px_var(--step-color)]",
              "group-hover:drop-shadow-[0_0_40px_var(--step-color)]"
            )}
            style={{ color: color }}
          />
        </div>
        
        {/* Content */}
        <h3 
          className="text-3xl font-semibold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
        >
          {title}
        </h3>
        <p className="text-lg text-white/80 leading-relaxed mb-6">
          {description}
        </p>

        {/* Benefits List */}
        <ul className="space-y-3 text-white/70">
          {benefits.map((benefit, index) => (
            <li 
              key={index}
              className="flex items-start text-sm"
            >
              <span 
                className="mr-2 text-[var(--step-color)]"
                style={{ textShadow: `0 0 10px ${color}` }}
              >
                •
              </span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};