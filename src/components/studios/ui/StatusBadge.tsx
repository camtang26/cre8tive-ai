import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  label: string;
  status?: "online" | "offline" | "processing" | "idle";
  className?: string;
}

export function StatusBadge({ label, status = "online", className }: StatusBadgeProps) {
  const statusColors = {
    online: "bg-studios-primary shadow-[0_0_8px_rgba(225,179,65,0.6)]",
    offline: "bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]",
    processing: "bg-studios-accent shadow-[0_0_8px_rgba(49,196,255,0.6)] animate-pulse",
    idle: "bg-white/20",
  };

  return (
    <div className={cn(
      "inline-flex items-center gap-2.5 px-3 py-1.5 rounded-md border border-white/10 bg-black/40 backdrop-blur-md font-mono text-[10px] tracking-widest uppercase text-white/80",
      className
    )}>
      <div className={cn("w-1.5 h-1.5 rounded-full", statusColors[status])} />
      {label}
    </div>
  );
}
