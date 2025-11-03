import { useState, useEffect, useRef, RefObject } from 'react';

/**
 * Options for lazy loading configuration
 */
interface UseLazyLoadOptions {
  /**
   * Margin around the root element (viewport) to trigger loading earlier
   * @default '50px'
   */
  rootMargin?: string;

  /**
   * Percentage of element visibility required to trigger loading
   * @default 0.1 (10%)
   */
  threshold?: number;

  /**
   * Disable lazy loading (load immediately)
   * @default false
   */
  disabled?: boolean;
}

/**
 * Return value from useLazyLoad hook
 */
interface UseLazyLoadReturn {
  /**
   * Whether the element is in view (should load)
   */
  isInView: boolean;

  /**
   * Ref to attach to the element being observed
   */
  elementRef: RefObject<HTMLDivElement>;
}

/**
 * Custom hook for lazy loading using Intersection Observer API
 *
 * Observes when an element enters the viewport and triggers loading.
 * Automatically disconnects after first intersection for performance.
 *
 * Uses requestIdleCallback for non-critical initialization to avoid
 * blocking the main thread during page load.
 *
 * @param options Configuration options
 * @returns Object with `isInView` state and `elementRef`
 *
 * @example
 * ```tsx
 * const { isInView, elementRef } = useLazyLoad({
 *   rootMargin: '50px',
 *   threshold: 0.1
 * });
 *
 * return (
 *   <div ref={elementRef}>
 *     {isInView && <img src={imageUrl} />}
 *   </div>
 * );
 * ```
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 * @see https://web.dev/articles/lazy-loading-images
 */
export const useLazyLoad = (options: UseLazyLoadOptions = {}): UseLazyLoadReturn => {
  const {
    rootMargin = '50px',
    threshold = 0.1,
    disabled = false
  } = options;

  const [isInView, setIsInView] = useState<boolean>(disabled);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If disabled or no element, don't observe
    if (disabled || !elementRef.current) {
      return;
    }

    const element = elementRef.current;

    // Use requestIdleCallback for non-critical work
    // Fallback to setTimeout if not available
    const scheduleObserver = (callback: () => void) => {
      if ('requestIdleCallback' in window) {
        const idleCallbackId = window.requestIdleCallback(callback);
        return () => window.cancelIdleCallback(idleCallbackId);
      } else {
        const timeoutId = setTimeout(callback, 1);
        return () => clearTimeout(timeoutId);
      }
    };

    const cleanup = scheduleObserver(() => {
      // Create Intersection Observer
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Element is in view
            setIsInView(true);

            // Disconnect observer after first intersection
            // (we only need to trigger loading once)
            observer.disconnect();
          }
        },
        {
          rootMargin,
          threshold
        }
      );

      // Start observing
      observer.observe(element);

      // Cleanup function
      return () => {
        observer.disconnect();
      };
    });

    // Return cleanup function
    return cleanup;
  }, [rootMargin, threshold, disabled]);

  return { isInView, elementRef };
};
