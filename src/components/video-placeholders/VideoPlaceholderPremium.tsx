import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from './hooks/useReducedMotion';
import { useLazyLoad } from './hooks/useLazyLoad';
import type { VideoPlaceholderProps, VideoPlaceholderState } from './types/VideoPlaceholder.types';

gsap.registerPlugin(ScrollTrigger);

/**
 * Premium Glassmorphism Video Placeholder (Option B) ⭐ RECOMMENDED
 *
 * A flagship, modern video placeholder featuring:
 * - Glassmorphism with backdrop-blur (10px)
 * - Gradient border using pseudo-elements
 * - Netflix-style hover animation (scale 1.05)
 * - Premium play button with glass effect and glow
 * - Smooth overlay transitions
 * - GSAP ScrollTrigger batch animation
 *
 * Best for: Premium, flagship projects requiring visual parity with top-tier
 * marketing sites (Netflix, Stripe, Linear, Vercel)
 *
 * Browser Support: backdrop-filter has 94%+ support. Includes fallback for
 * older browsers.
 *
 * @example
 * ```tsx
 * <VideoPlaceholderPremium
 *   videoId="video-1"
 *   thumbnailUrl="/thumbnails/video-1@2x.jpg"
 *   title="Product Demo"
 *   description="See how it works"
 *   aspectRatio="16/9"
 *   onClick={() => playVideo()}
 * />
 * ```
 */
export const VideoPlaceholderPremium: React.FC<VideoPlaceholderProps> = ({
  videoId,
  thumbnailUrl,
  title,
  description,
  aspectRatio = '16/9',
  onClick,
  onLoad,
  onError,
  ariaLabel,
  className = '',
  disableAnimations = false,
  lazyLoadMargin = '50px',
  lazyLoadThreshold = 0.1
}) => {
  const prefersReducedMotion = useReducedMotion();
  const { isInView, elementRef } = useLazyLoad({
    rootMargin: lazyLoadMargin,
    threshold: lazyLoadThreshold,
    disabled: disableAnimations
  });

  const [state, setState] = useState<VideoPlaceholderState>({
    isLoaded: false,
    isHovered: false,
    isInView: false,
    hasError: false,
    isFocused: false
  });

  // GSAP ScrollTrigger reveal animation with batch pattern
  useEffect(() => {
    if (!elementRef.current || prefersReducedMotion || disableAnimations) {
      return;
    }

    const element = elementRef.current;

    const ctx = gsap.context(() => {
      gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          once: true
        }
      });
    });

    return () => ctx.revert();
  }, [prefersReducedMotion, disableAnimations]);

  // Handle keyboard events
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.();
    }
  };

  // Handle thumbnail load
  const handleImageLoad = () => {
    setState(prev => ({ ...prev, isLoaded: true }));
    onLoad?.();
  };

  // Handle thumbnail error
  const handleImageError = () => {
    setState(prev => ({ ...prev, hasError: true }));
    onError?.(new Error(`Failed to load thumbnail: ${thumbnailUrl}`));
  };

  // Convert aspect ratio to CSS class
  const aspectRatioClass = `aspect-[${aspectRatio.replace('/', '/')}]`;

  return (
    <div
      ref={elementRef}
      className={`
        group relative overflow-hidden rounded-2xl
        ${aspectRatioClass}
        cursor-pointer
        transform-gpu
        transition-all duration-300 ease-out
        hover:scale-105
        focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2
        ${className}
      `}
      style={{
        // CSS containment for performance
        contain: 'layout style paint'
      }}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setState(prev => ({ ...prev, isHovered: true }))}
      onMouseLeave={() => setState(prev => ({ ...prev, isHovered: false }))}
      onFocus={() => setState(prev => ({ ...prev, isFocused: true }))}
      onBlur={() => setState(prev => ({ ...prev, isFocused: false }))}
      role="button"
      tabIndex={0}
      aria-label={ariaLabel || `Play ${title} video`}
    >
      {/* Gradient Border (Pseudo-element effect via outer wrapper) */}
      <div
        className={`
          absolute inset-0 rounded-2xl
          bg-gradient-to-br from-white/20 via-white/10 to-transparent
          opacity-40
          transition-opacity duration-300
          ${state.isHovered || state.isFocused ? 'opacity-60' : 'opacity-40'}
        `}
        style={{ padding: '1px' }}
      >
        <div className="absolute inset-[1px] rounded-2xl bg-black/20" />
      </div>

      {/* Inner Border */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none z-10" />

      {/* Thumbnail Image */}
      {isInView && !state.hasError && (
        <img
          src={thumbnailUrl}
          alt={title}
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-opacity duration-500
            ${state.isLoaded ? 'opacity-100' : 'opacity-0'}
          `}
          loading="lazy"
          decoding="async"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}

      {/* Loading State */}
      {isInView && !state.isLoaded && !state.hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
          <div className="w-10 h-10 border-2 border-white/20 border-t-blue-500 rounded-full animate-spin" />
        </div>
      )}

      {/* Error State */}
      {state.hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white/60">
          <div className="text-center">
            <svg className="w-14 h-14 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm font-medium">Failed to load video</p>
          </div>
        </div>
      )}

      {/* Glassmorphism Overlay with Netflix-style fade */}
      <div
        className={`
          absolute inset-0
          bg-gradient-to-t from-black/80 via-black/30 to-transparent
          backdrop-blur-sm backdrop-saturate-150
          transition-all duration-300
          ${state.isHovered || state.isFocused ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          // Fallback for browsers without backdrop-filter support
          backgroundColor: state.isHovered || state.isFocused ? 'rgba(0, 0, 0, 0.5)' : 'transparent'
        }}
      >
        {/* Premium Play Button with Glass Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className={`
              w-20 h-20 rounded-full
              bg-white/10 backdrop-blur-md
              border-2 border-white/30
              flex items-center justify-center
              transform-gpu
              transition-all duration-300
              ${state.isHovered || state.isFocused ? 'scale-110 bg-white/20 shadow-[0_0_36px_rgba(59,130,246,0.8)]' : 'scale-100 shadow-[0_0_24px_rgba(59,130,246,0.6)]'}
            `}
            style={{
              // Fallback background
              backgroundColor: state.isHovered || state.isFocused ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'
            }}
          >
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Content with Glassmorphism */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div
            className="
              bg-white/5 backdrop-blur-md
              border border-white/10
              rounded-xl p-4
              transform-gpu
              transition-all duration-300
            "
            style={{
              // Fallback background
              backgroundColor: 'rgba(255, 255, 255, 0.05)'
            }}
          >
            <h3 className="text-white text-xl font-bold mb-2 line-clamp-2">
              {title}
            </h3>
            {description && (
              <p className="text-white/90 text-sm line-clamp-2">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Premium Glow Effect on Hover */}
      <div
        className={`
          absolute inset-0 rounded-2xl
          pointer-events-none
          transition-opacity duration-300
          ${state.isHovered || state.isFocused ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          boxShadow: '0 8px 32px 0 rgba(59, 130, 246, 0.37)'
        }}
      />

      {/* Screen Reader Description */}
      <span className="sr-only">
        {description || `Video: ${title}`}
      </span>
    </div>
  );
};
