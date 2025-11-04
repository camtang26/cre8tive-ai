/**
 * Type definitions for video placeholder components
 *
 * These types support three variants:
 * - minimal: Clean, subtle styling
 * - premium: Glassmorphism with advanced effects
 * - bold: Cinematic, high-contrast styling
 */

/**
 * Supported aspect ratios for video placeholders
 */
export type AspectRatio = '16/9' | '4/3' | '21/9' | '1/1' | '9/16';

/**
 * Video placeholder style variants
 */
export type VideoPlaceholderVariant = 'minimal' | 'premium' | 'bold';

/**
 * Props for all video placeholder components
 */
export interface VideoPlaceholderProps {
  /**
   * Unique identifier for the video
   */
  videoId: string;

  /**
   * URL to the thumbnail image
   * Should be optimized (WebP/AVIF) at 2x resolution for Retina displays
   */
  thumbnailUrl: string;

  /**
   * Optional URL to the actual video (for future implementation)
   */
  videoUrl?: string;

  /**
   * Title displayed on hover/focus
   */
  title: string;

  /**
   * Optional description text
   */
  description?: string;

  /**
   * Aspect ratio of the video placeholder
   * @default '16/9'
   */
  aspectRatio?: AspectRatio;

  /**
   * Style variant
   * @default 'premium'
   */
  variant?: VideoPlaceholderVariant;

  /**
   * Loading state
   */
  loading?: boolean;

  /**
   * Error state
   */
  error?: boolean;

  /**
   * Callback when placeholder is clicked
   */
  onClick?: () => void;

  /**
   * Callback when thumbnail loads
   */
  onLoad?: () => void;

  /**
   * Callback when thumbnail fails to load
   */
  onError?: (error: Error) => void;

  /**
   * Custom ARIA label for accessibility
   * @default `Play ${title} video`
   */
  ariaLabel?: string;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Disable animations (overrides prefers-reduced-motion)
   */
  disableAnimations?: boolean;

  /**
   * Custom root margin for Intersection Observer
   * @default '50px'
   */
  lazyLoadMargin?: string;

  /**
   * Intersection Observer threshold
   * @default 0.1
   */
  lazyLoadThreshold?: number;
}

/**
 * Internal state for video placeholder components
 */
export interface VideoPlaceholderState {
  /**
   * Whether the thumbnail has loaded
   */
  isLoaded: boolean;

  /**
   * Whether the user is hovering over the placeholder
   */
  isHovered: boolean;

  /**
   * Whether the placeholder is in the viewport
   */
  isInView: boolean;

  /**
   * Whether an error occurred loading the thumbnail
   */
  hasError: boolean;

  /**
   * Whether the placeholder is focused
   */
  isFocused: boolean;
}

/**
 * Configuration for GSAP animations
 */
export interface AnimationConfig {
  /**
   * Animation duration in seconds
   */
  duration: number;

  /**
   * GSAP easing function
   */
  ease: string;

  /**
   * Delay before animation starts
   */
  delay?: number;

  /**
   * Stagger delay for batch animations
   */
  stagger?: number;
}

/**
 * Props for the demo comparison page
 */
export interface VideoPlaceholderDemoProps {
  /**
   * Sample thumbnail URL for demo
   */
  thumbnailUrl?: string;

  /**
   * Show performance metrics
   */
  showMetrics?: boolean;
}
