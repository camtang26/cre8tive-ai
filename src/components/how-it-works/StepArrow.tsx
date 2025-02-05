import { cn } from "@/lib/utils";

export const StepArrow = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <div 
        className={cn(
          "w-8 h-8 transform rotate-45 border-t-2 border-r-2",
          "border-white/20 animate-pulse"
        )}
      />
    </div>
  );
};