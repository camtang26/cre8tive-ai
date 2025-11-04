import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from './hooks/useReducedMotion';
import { useLazyLoad } from './hooks/useLazyLoad';
import type { VideoPlaceholderProps, VideoPlaceholderState } from './types/VideoPlaceholder.types';

gsap.registerPlugin(ScrollTrigger);

/**
 * Minimal Clean Video Placeholder (Option A)
 *
 * A clean, understated video placeholder with:
 * - Subtle border and shadow
 * - Simple hover scale (1.03)
 * - Minimal outlined play button
 * - Fade overlay on hover
 * - GSAP ScrollTrigger reveal animation
 *
 * Best for: Clean, modern designs that prioritize content over decoration
 *
 * @example
 * ```tsx
 * <VideoPlaceholderMinimal
 *   videoId="video-1"
 *   thumbnailUrl="/thumbnails/video-1.jpg"
 *   title="Product Demo"
 *   aspectRatio="16/9"
 *   onClick={() => console.log('Play video')}
 * />
 * ```
 */
export const VideoPlaceholderMinimal: React.FC<VideoPlaceholderProps> = ({
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

  // GSAP ScrollTrigger reveal animation
  useEffect(() => {
    if (!elementRef.current || prefersReducedMotion || disableAnimations) {
      return;
    }

    const element = elementRef.current;

    const ctx = gsap.context(() => {
      gsap.from(element, {
        opacity: 0,
        y: 30,
        duration: 0.5,
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
        group relative overflow-hidden rounded-lg
        ${aspectRatioClass}
        cursor-pointer
        transform-gpu
        transition-all duration-300 ease-out
        hover:scale-[1.03]
        border border-gray-200/20
        shadow-md hover:shadow-xl
        focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2
        ${className}
      `}
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
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      )}

      {/* Error State */}
      {state.hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white/60">
          <div className="text-center">
            <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-sm">Failed to load</p>
          </div>
        </div>
      )}

      {/* Hover Overlay */}
      <div
        className={`
          absolute inset-0
          bg-gradient-to-t from-black/60 via-black/10 to-transparent
          transition-opacity duration-300
          ${state.isHovered || state.isFocused ? 'opacity-100' : 'opacity-0'}
        `}
      >
        {/* Play Button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className={`
              w-16 h-16 rounded-full
              border-2 border-white/80
              bg-transparent
              flex items-center justify-center
              transform-gpu
              transition-all duration-300
              ${state.isHovered || state.isFocused ? 'scale-110 border-white' : 'scale-100'}
            `}
          >
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white text-lg font-semibold mb-1 line-clamp-2">
            {title}
          </h3>
          {description && (
            <p className="text-white/80 text-sm line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Screen Reader Description */}
      <span className="sr-only">
        {description || `Video: ${title}`}
      </span>
    </div>
  );
};
