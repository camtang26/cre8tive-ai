import type { ReactNode } from 'react'
import type { Root } from 'react-dom/client'

/**
 * Global type declarations for window object extensions
 */

interface Window {
  /** Lenis smooth scroll instance */
  lenis?: {
    on: (event: string, callback: () => void) => void;
    off: (event: string, callback: () => void) => void;
    raf: (time: number) => void;
    scrollTo: (target: number | string, options?: object) => void;
  };

  /** Vercel Analytics */
  va?: (event: string, ...args: unknown[]) => void;

  /** Debug flag set by ParticleHero during runtime validation */
  __particleHeroStatus?: 'running' | 'stopped' | 'disabled';

  /** Cached React root to prevent double createRoot in dev */
  __cre8tiveRoot?: Root & { render: (children: ReactNode) => void };
}
