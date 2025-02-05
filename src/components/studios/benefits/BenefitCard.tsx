import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  index: number;
}

export const BenefitCard = ({ Icon, title, description, color, index }: BenefitCardProps) => {
  return (
    <Card 
      className={cn(
        "glass-morphism border-none animate-fade-in hover-lift group h-full",
        "bg-black/40 backdrop-blur-xl",
        "border border-white/10 hover:border-[var(--card-color)]/30",
        "transition-all duration-300 hover:shadow-[0_0_30px_var(--card-color)]"
      )}
      style={{ 
        animationDelay: `${index * 0.1}s`,
        '--card-color': color
      } as React.CSSProperties}
    >
      <CardContent className="p-6 md:p-8">
        <div className="flex items-start gap-4 md:gap-6 h-full">
          <div className="relative group-hover:scale-110 transition-transform duration-300">
            <div 
              className="absolute inset-0 blur-xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-300"
              style={{ background: color }}
            />
            <Icon 
              className={cn(
                "w-8 h-8 md:w-10 md:h-10 relative z-10",
                "transition-all duration-300",
                "drop-shadow-[0_0_8px_var(--card-color)]",
                "group-hover:drop-shadow-[0_0_12px_var(--card-color)]"
              )}
              style={{ color }}
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-gradient mb-2 md:mb-6 tracking-tight group-hover:scale-105 transition-transform duration-300">
              {title}
            </h3>
            <p className="text-sm md:text-base text-white/80 leading-relaxed md:leading-loose">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};