import { useEffect, useState } from "react";

/**
 * useLenisReady
 *
 * Detects when the global Lenis instance is hydrated so ScrollTrigger timelines
 * can be created without racing the smooth-scroll provider.
 *
 * @returns boolean indicating whether window.lenis is available
 */
export function useLenisReady(pollInterval = 50, fallbackDelay = 2000): boolean {
  const [ready, setReady] = useState<boolean>(() => {
    // Safely check on first render in case Lenis is already attached.
    if (typeof window === "undefined") {
      return false;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return Boolean((window as any).lenis);
  });

  useEffect(() => {
    if (ready) return;

    let alive = true;
    let fallbackTimeout: ReturnType<typeof setTimeout> | null = null;

    const check = () => {
      if (!alive) {
        return;
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof window !== "undefined" && (window as any).lenis) {
        setReady(true);
        return;
      }

      fallbackTimeout = setTimeout(check, pollInterval);
    };

    check();

    // Absolute fallback so we can still initialize animations even if Lenis never attaches.
    const hardTimeout = setTimeout(() => {
      if (!alive) return;
      setReady(true);
    }, fallbackDelay);

    return () => {
      alive = false;
      if (fallbackTimeout) clearTimeout(fallbackTimeout);
      clearTimeout(hardTimeout);
    };
  }, [fallbackDelay, pollInterval, ready]);

  return ready;
}
