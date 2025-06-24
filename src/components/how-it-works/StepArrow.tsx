import { cn } from "@/lib/utils";

export const StepArrow = () => {
  return (
    <div className="hidden md:flex items-center justify-center px-2 md:px-3 laptop:px-2 desktop:px-4">
      <div 
        className={cn(
          "w-6 h-6 laptop:w-6 laptop:h-6 desktop:w-8 desktop:h-8 transform rotate-45 border-t-2 border-r-2",
          "border-white/20 animate-pulse"
        )}
      />
    </div>
  );
};