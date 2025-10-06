import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ExpertiseCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export const ExpertiseCard = ({ icon: Icon, title, description, index }: ExpertiseCardProps) => {
  const iconColors = [
    { color: "#60A5FA", glow: "drop-shadow-[0_0_10px_rgba(96,165,250,0.7)]" }, // Blue-400
    { color: "#22D3EE", glow: "drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]" }, // Cyan-400
    { color: "#14B8A6", glow: "drop-shadow-[0_0_10px_rgba(20,184,166,0.7)]" }, // Teal-500
    { color: "#3B82F6", glow: "drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]" }, // Blue-500
  ];

  const currentColor = iconColors[index % iconColors.length];

  return (
    <Card 
      className="glass-morphism border-none animate-fade-in hover-lift hover-glow bg-black/40 backdrop-blur-xl h-full" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent className="p-6 md:p-8">
        <div className="flex items-start gap-4">
          <Icon 
            className={cn(
              "w-6 h-6 md:w-8 md:h-8 shrink-0 transition-all duration-300",
              currentColor.glow
            )} 
            style={{ color: currentColor.color }}
          />
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gradient mb-3 md:mb-4 tracking-tight">{title}</h3>
            <p className="text-sm md:text-base text-white/80 leading-relaxed md:leading-loose">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};