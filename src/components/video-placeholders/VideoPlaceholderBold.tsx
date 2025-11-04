import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from './hooks/useReducedMotion';
import { useLazyLoad } from './hooks/useLazyLoad';
import type { VideoPlaceholderProps, VideoPlaceholderState } from './types/VideoPlaceholder.types';

gsap.registerPlugin(ScrollTrigger);

/**
 * Bold Cinematic Video Placeholder (Option C)
 *
 * A dramatic, high-impact video placeholder featuring:
 * - Heavy shadows and vignette effects
 * - Dramatic hover animation (scale 1.08)
 * - Bold solid play button with strong shadow
 * - High-contrast overlays
 * - Cinematic aspect ratio emphasis
 * - GSAP scrub animation for parallax effect
 *
 * Best for: Studios pages, film/video production, creative agencies,
 * projects prioritizing bold visual impact over subtlety
 *
 * @example
 * ```tsx
 * <VideoPlaceholderBold
 *   videoId="video-1"
 *   thumbnailUrl="/thumbnails/video-1@2x.jpg"
 *   title="Cinematic Showcase"
 *   description="Award-winning production"
 *   aspectRatio="21/9"
 *   onClick={() => playVideo()}
 * />
 * ```
 */
export const VideoPlaceholderBold: React.FC<VideoPlaceholderProps> = ({
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

  // GSAP ScrollTrigger with scrub for parallax effect
  useEffect(() => {
    if (!elementRef.current || prefersReducedMotion || disableAnimations) {
      return;
    }

    const element = elementRef.current;

    const ctx = gsap.context(() => {
      // Initial reveal
      gsap.from(element, {
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          once: true
        }
      });

      // Parallax scrub effect
      gsap.to(element, {
        y: -30,
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          invalidateOnRefresh: true
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
        group relative overflow-hidden rounded-xl
        ${aspectRatioClass}
        cursor-pointer
        transform-gpu
        transition-all duration-400
        hover:scale-[1.08]
        focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50 focus-visible:ring-offset-4
        ${className}
      `}
      style={{
        // Heavy shadow for cinematic depth
        boxShadow: state.isHovered || state.isFocused
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 60px rgba(59, 130, 246, 0.4)'
          : '0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 10px 10px -5px rgba(0, 0, 0, 0.4)',
        transition: 'box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        // CSS containment
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
      {/* Strong Border */}
      <div className="absolute inset-0 rounded-xl border-2 border-white/20 pointer-events-none z-10" />

      {/* Thumbnail Image */}
      {isInView && !state.hasError && (
        <img
          src={thumbnailUrl}
          alt={title}
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-all duration-500
            ${state.isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
          `}
          loading="lazy"
          decoding="async"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      )}

      {/* Loading State */}
      {isInView && !state.isLoaded && !state.hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="relative">
            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
            <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-t-blue-500 rounded-full animate-spin" style={{ animationDuration: '0.7s' }} />
          </div>
        </div>
      )}

      {/* Error State */}
      {state.hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black text-white/70">
          <div className="text-center">
            <svg className="w-16 h-16 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-base font-bold">Failed to load</p>
          </div>
        </div>
      )}

      {/* Cinematic Vignette (Always visible) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.6) 100%)'
        }}
      />

      {/* High-Contrast Overlay */}
      <div
        className={`
          absolute inset-0
          bg-gradient-to-t from-black via-black/50 to-transparent
          transition-opacity duration-400
          ${state.isHovered || state.isFocused ? 'opacity-100' : 'opacity-0'}
        `}
      >
        {/* Bold Play Button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className={`
              w-24 h-24 rounded-full
              bg-white
              flex items-center justify-center
              transform-gpu
              transition-all duration-400
              ${state.isHovered || state.isFocused ? 'scale-125' : 'scale-100'}
            `}
            style={{
              boxShadow: state.isHovered || state.isFocused
                ? '0 0 60px rgba(255, 255, 255, 0.6), 0 0 100px rgba(59, 130, 246, 0.8)'
                : '0 0 40px rgba(255, 255, 255, 0.4), 0 0 80px rgba(59, 130, 246, 0.6)'
            }}
          >
            <svg className="w-10 h-10 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Content with Strong Contrast */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="text-white text-2xl font-black mb-2 line-clamp-2 tracking-tight">
              {title}
            </h3>
            {description && (
              <p className="text-white/95 text-base font-medium line-clamp-2">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Dramatic Edge Glow */}
      <div
        className={`
          absolute inset-0 rounded-xl
          pointer-events-none
          transition-opacity duration-400
          ${state.isHovered || state.isFocused ? 'opacity-100' : 'opacity-0'}
        `}
        style={{
          boxShadow: 'inset 0 0 60px rgba(59, 130, 246, 0.3)'
        }}
      />

      {/* Screen Reader Description */}
      <span className="sr-only">
        {description || `Video: ${title}`}
      </span>
    </div>
  );
};
