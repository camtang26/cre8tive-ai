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
          "relative p-8 rounded-2xl overflow-hidden group",
          "backdrop-blur-xl bg-white/[0.03] border border-white/10",
          "transform-gpu transition-all duration-500",
          "hover:-translate-y-2 hover:shadow-2xl",
          "flex flex-col items-center justify-center text-center",
          "h-[500px]"
        )}
        style={{
          '--card-color': color,
        } as React.CSSProperties}
      >
        {/* Gradient Border Effect on Hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${color}40 0%, transparent 50%, ${color}40 100%)`,
            padding: '1px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude'
          }}
        />

        {/* Glow Effect on Hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${color}30 0%, transparent 70%)`
          }}
        />

        {/* Card Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
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
            "inline-flex items-center justify-center gap-2",
            "px-6 py-3 rounded-full",
            "bg-white/5 hover:bg-white/10 border border-white/20",
            "text-white/90 hover:text-white",
            "transition-all duration-300 text-lg font-medium",
            "group/link backdrop-blur-sm",
            "hover:border-white/40 hover:shadow-lg"
          )}
          style={{
            boxShadow: `0 0 20px ${color}30`
          }}
          aria-label={`Learn more about ${title}`}
        >
          Learn More
          <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
        </Link>
        </div>
      </div>
    </div>
  );
};