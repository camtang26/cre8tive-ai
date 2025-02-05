import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface BenefitCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export const BenefitCard = ({
  Icon,
  title,
  description,
  color,
}: BenefitCardProps) => {
  return (
    <div className="glass-morphism h-[250px] md:h-[300px] p-4 md:p-8 rounded-xl hover-glow border border-white/10 transition-all duration-300 hover:scale-105 group flex items-center">
      <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 w-full">
        <div className="relative group-hover:animate-pulse">
          <Icon 
            className={cn(
              "w-12 h-12 md:w-16 md:h-16 transition-all duration-300",
              "drop-shadow-[0_0_15px_var(--benefit-color)] md:drop-shadow-[0_0_20px_var(--benefit-color)]",
              "group-hover:drop-shadow-[0_0_30px_var(--benefit-color)] md:group-hover:drop-shadow-[0_0_40px_var(--benefit-color)]"
            )}
            style={{ color }}
          />
        </div>
        
        <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          {title}
        </h3>
        
        <p className="text-base md:text-lg text-white/80 leading-relaxed px-2 md:px-0">
          {description}
        </p>
      </div>
    </div>
  );
};