import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      icon,
      iconPosition = "right",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const variantClasses = {
      primary: cn(
        "relative overflow-hidden",
        "bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500",
        "bg-[length:200%_100%] animate-gradient-x",
        "hover:shadow-2xl hover:shadow-blue-500/50",
        "hover:scale-105 active:scale-100",
        "text-white font-semibold",
        "before:absolute before:inset-0",
        "before:bg-gradient-to-r before:from-blue-500 before:via-blue-400 before:to-cyan-400",
        "before:opacity-0 hover:before:opacity-100",
        "before:transition-opacity before:duration-300"
      ),
      secondary: cn(
        "relative overflow-hidden",
        "bg-gradient-to-r from-cyan-600 via-teal-500 to-cyan-600",
        "bg-[length:200%_100%] animate-gradient-x",
        "hover:shadow-2xl hover:shadow-cyan-500/50",
        "hover:scale-105 active:scale-100",
        "text-white font-semibold"
      ),
      accent: cn(
        "relative overflow-hidden",
        "bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500",
        "bg-[length:200%_100%] animate-gradient-x",
        "hover:shadow-2xl hover:shadow-amber-500/50",
        "hover:scale-105 active:scale-100",
        "text-white font-semibold"
      ),
      outline: cn(
        "relative overflow-hidden",
        "bg-transparent border-2 border-white/20",
        "hover:border-blue-400/60 hover:bg-blue-500/5",
        "text-white/90 hover:text-white font-medium",
        "backdrop-blur-sm",
        "hover:shadow-lg hover:shadow-blue-500/20"
      ),
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center gap-2",
          "rounded-full",
          "transition-all duration-300",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
          "group",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        disabled={disabled || loading}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {loading && <Loader2 className="w-4 h-4 animate-spin" />}
          {!loading && icon && iconPosition === "left" && icon}
          {children}
          {!loading && icon && iconPosition === "right" && icon}
        </span>

        {/* Ripple effect overlay */}
        <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
      </button>
    );
  }
);

GradientButton.displayName = "GradientButton";
