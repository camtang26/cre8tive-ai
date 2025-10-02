import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "featured" | "wide" | "tall";
}

export const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(280px,auto)]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ children, className, size = "default" }: BentoCardProps) => {
  const sizeClasses = {
    default: "",
    featured: "md:col-span-2 md:row-span-2",
    wide: "md:col-span-2",
    tall: "md:row-span-2",
  };

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        "glass-card-light hover:glass-card-medium",
        "transition-all duration-smooth ease-smooth",
        "hover:scale-[1.02] hover:shadow-glow-sm",
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  );
};
