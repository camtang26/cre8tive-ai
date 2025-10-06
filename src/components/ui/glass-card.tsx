import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "light" | "medium" | "heavy" | "glow";
  hover?: boolean;
  as?: "div" | "section" | "article";
}

export const GlassCard = ({
  children,
  className,
  variant = "light",
  hover = true,
  as: Component = "div"
}: GlassCardProps) => {
  const variantClasses = {
    light: "glass-card-light",
    medium: "glass-card-medium",
    heavy: "glass-card-heavy",
    glow: "glass-card-glow",
  };

  return (
    <Component
      className={cn(
        "rounded-xl p-6",
        variantClasses[variant],
        hover && "transition-all duration-smooth hover:scale-[1.02] hover:shadow-glass-lg",
        className
      )}
    >
      {children}
    </Component>
  );
};
