import { Link } from "react-router-dom";
import { Brain, Layers, Bot, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { ServiceCardProps } from "../types";
import { useEffect, useRef } from "react";

const iconMap = {
  Brain,
  Layers,
  Bot,
  Phone
};

export const DesktopServiceCard = ({ 
  title, 
  description, 
  link, 
  icon,
  color,
  index 
}: ServiceCardProps) => {
  const Icon = iconMap[icon as keyof typeof iconMap];
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const adManagerTitleHeight = document.querySelector("#desktop-service-title-1")?.clientHeight;
    const adManagerDescriptionHeight = document.querySelector("#desktop-service-description-1")?.clientHeight;

    if (titleRef.current && adManagerTitleHeight) {
      titleRef.current.style.height = `${adManagerTitleHeight}px`;
    }

    if (descriptionRef.current && adManagerDescriptionHeight) {
      descriptionRef.current.style.height = `${adManagerDescriptionHeight}px`;
    }
  }, []);

  return (
    <div 
      className={cn(
        "relative perspective-1000 w-full",
        "animate-fade-in"
      )}
      style={{ 
        animationDelay: `${index * 100}ms`,
      }}
      role="article"
      aria-labelledby={`desktop-service-title-${index}`}
    >
      <div 
        className={cn(
          "glass-morphism p-8 rounded-xl hover-glow border border-white/10",
          "bg-gradient-to-br from-black/40 via-black/20 to-transparent relative group",
          "transform-gpu transition-transform duration-500 hover:scale-105",
          "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r",
          "before:opacity-0 before:transition-opacity hover:before:opacity-100",
          "after:absolute after:inset-0 after:rounded-xl",
          "after:opacity-0 after:transition-opacity hover:after:opacity-100",
          "flex flex-col items-center justify-center text-center",
          "h-[500px]"
        )}
        style={{
          '--card-color': color,
          boxShadow: '0 0 30px var(--card-color)'
        } as React.CSSProperties}
      >
        <div className={cn(
          "relative group-hover:animate-pulse",
          icon === "Brain" ? "mb-12" : "mb-10"
        )}>
          <Icon 
            className={cn(
              "w-28 h-28 transition-all duration-300",
              "drop-shadow-[0_0_20px_var(--service-color)]",
              "group-hover:drop-shadow-[0_0_40px_var(--service-color)]"
            )}
            style={{ color }}
          />
        </div>
        
        <h3
          ref={titleRef}
          id={`desktop-service-title-${index}`} 
          className={cn(
            "text-4xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent leading-tight",
            "mb-6"
          )}
        >
          {title}
        </h3>
        
        <p
          ref={descriptionRef}
          id={`desktop-service-description-${index}`}
          className={cn(
            "text-xl text-white/80 leading-relaxed",
            "mb-8"
          )}
        >
          {description}
        </p>
        
        <Link 
          to={link}
          className={cn(
            "inline-flex items-center justify-center",
            "text-white/90 hover:text-white",
            "relative overflow-hidden group transition-all duration-300 text-lg",
            "after:content-[''] after:absolute after:bottom-0 after:left-0",
            "after:w-full after:h-[1px]",
            "after:bg-gradient-to-r after:from-white/0 after:via-white/70 after:to-white/0",
            "after:origin-left after:scale-x-0 hover:after:scale-x-100",
            "after:transition-transform after:duration-300",
            "cursor-pointer py-2 px-4",
            "z-10" // Ensure link is above any other elements
          )}
          aria-label={`Learn more about ${title}`}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};