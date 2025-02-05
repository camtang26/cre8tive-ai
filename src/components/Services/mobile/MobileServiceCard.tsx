import { Link } from "react-router-dom";
import { Brain, Layers, Bot, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { ServiceCardProps } from "../types";
import { Skeleton } from "@/components/ui/skeleton";
import { TouchRipple } from "@/components/mobile/TouchRipple";
import { toast } from "sonner";

const iconMap = {
  Brain,
  Layers,
  Bot,
  Phone
};

interface MobileServiceCardProps extends ServiceCardProps {
  isLoading?: boolean;
}

export const MobileServiceCard = ({ 
  title, 
  description, 
  link, 
  icon,
  color,
  index,
  isLoading = false
}: MobileServiceCardProps) => {
  const Icon = iconMap[icon as keyof typeof iconMap];

  const handlePress = () => {
    toast.success(`Opening ${title}`, {
      position: "bottom-center",
      duration: 1500
    });
  };

  if (isLoading) {
    return (
      <div className="w-full">
        <Skeleton className="h-[300px] w-full rounded-xl" />
      </div>
    );
  }

  return (
    <div 
      className={cn(
        "relative w-full animate-fade-in",
        "touch-manipulation"
      )}
      style={{ 
        animationDelay: `${index * 100}ms`,
      }}
      role="article"
      aria-labelledby={`mobile-service-title-${index}`}
    >
      <Link 
        to={link}
        onClick={handlePress}
        className="block"
      >
        <div 
          className={cn(
            "p-6 rounded-xl border border-white/10",
            "bg-gradient-to-br from-black/40 via-black/20 to-transparent",
            "active:scale-[0.98] transition-transform",
            "flex flex-col items-center text-center"
          )}
          style={{
            '--service-color': color,
            boxShadow: `0 0 20px ${color}15`
          } as React.CSSProperties}
        >
          <div className="mb-4 relative">
            <Icon 
              className="w-12 h-12 transition-all duration-300"
              style={{ color }}
            />
          </div>
          
          <h3 
            id={`mobile-service-title-${index}`}
            className="text-xl font-semibold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
          >
            {title}
          </h3>
          
          <p className="text-base text-white/80 leading-relaxed mb-4">
            {description}
          </p>

          <span 
            className={cn(
              "text-white/90 text-sm font-medium",
              "relative overflow-hidden transition-all duration-300",
              "after:content-[''] after:absolute after:bottom-0 after:left-0",
              "after:w-full after:h-[1px]",
              "after:bg-gradient-to-r after:from-white/0 after:via-white/70 after:to-white/0"
            )}
          >
            Learn More
          </span>
        </div>
        <TouchRipple />
      </Link>
    </div>
  );
};