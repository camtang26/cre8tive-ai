/**
 * PlatformCard - Individual Platform Card for Multi-Platform Section
 *
 * Epic 2, Story 2.2 - Premium hexagon-shaped cards with OrganicCard foundation
 * Displays platform icon, name, format label, and 3 feature bullets
 *
 * Copy source: COPY_IMPLEMENTATION_GUIDE.md lines 123-183
 * Foundation: src/components/epic2/shapes/OrganicCard.tsx (hexagon shape)
 */

import { OrganicCard } from '@/components/epic2';
import type { PlatformConfig } from '@/data/studios/platform-data';
import { cn } from '@/lib/utils';

export interface PlatformCardProps {
  platform: PlatformConfig;
  className?: string;
}

/**
 * PlatformCard Component
 *
 * Uses OrganicCard with hexagon shape from Epic 2 foundation
 * Glassmorphism patterns with responsive typography
 * Will receive magnetic pull and 3D rotation from parent (MultiPlatformCards)
 */
export const PlatformCard = ({ platform, className }: PlatformCardProps) => {
  return (
    <OrganicCard
      shape="hexagon"
      className={cn(
        // Will receive 3D transforms from parent
        "transform-gpu",
        className
      )}
    >
      {/* Card content container with glassmorphism */}
      <div className={cn(
        "flex flex-col items-center text-center h-full",
        // Glassmorphism pattern (Epic 2 style) - applied to content inside clip-path
        "bg-white/5 backdrop-blur-sm border border-white/10",
        "hover:bg-white/10 hover:border-white/20 transition-all duration-300",
        // Padding and spacing
        "p-6 md:p-8"
      )}>
        {/* Platform Icon */}
        <div className="w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-6 text-cyan-400">
          {platform.icon}
        </div>

        {/* Platform Name */}
        <h3 className="font-outfit font-bold text-2xl md:text-3xl text-white mb-2">
          {platform.name}
        </h3>

        {/* Format Label */}
        <p className="font-inter font-medium text-sm md:text-base text-cyan-300/80 mb-6">
          {platform.format}
        </p>

        {/* Feature Bullets (3 per platform) */}
        <ul className="space-y-3 text-left w-full">
          {platform.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-2 font-inter text-sm md:text-base text-white/70"
            >
              <span className="text-cyan-400 mt-0.5 flex-shrink-0">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </OrganicCard>
  );
};
