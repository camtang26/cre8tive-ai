interface BenefitCardProps {
  badge: string;
  title: string;
  description: string;
  accent: string;
  icon: React.ReactNode;
}

export const BenefitCard = ({ badge, title, description, accent, icon }: BenefitCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-8 transition-all duration-500 hover:border-white/20 hover:shadow-[0_20px_80px_-30px_rgba(255,255,255,0.15)]">
      {/* Gradient accent background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4">
        {/* Badge + Icon row */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/40">
            {badge}
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/12 bg-white/5 text-white/70 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold tracking-tight text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="leading-relaxed text-white/70">
          {description}
        </p>
      </div>

      {/* Bottom glow effect on hover */}
      <div
        className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r ${accent} opacity-0 transition-opacity duration-500 group-hover:opacity-60`}
        aria-hidden
      />
    </div>
  );
};
