// Route prefetching utility for improved navigation performance

const routeModules: Record<string, () => Promise<any>> = {
  '/studios': () => import('../pages/Studios'),
  '/studios-engine': () => import('../pages/StudiosEngine'),
  '/manager': () => import('../pages/StudiosEngine'),
  '/agents': () => import('../pages/Agents'),
  '/conversational': () => import('../pages/ConversationalAI'),
  '/about': () => import('../pages/About'),
  '/contact': () => import('../pages/Contact'),
};

const prefetchedRoutes = new Set<string>();

export const prefetchRoute = (path: string) => {
  // Normalize path
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Skip if already prefetched
  if (prefetchedRoutes.has(normalizedPath)) {
    return;
  }
  
  // Skip if module doesn't exist
  const moduleLoader = routeModules[normalizedPath];
  if (!moduleLoader) {
    return;
  }
  
  // Mark as prefetched
  prefetchedRoutes.add(normalizedPath);
  
  // Prefetch the module
  moduleLoader().catch((error) => {
    // Remove from prefetched set on error
    prefetchedRoutes.delete(normalizedPath);
    // Silent fail - prefetching is a performance optimization
  });
};

// Prefetch multiple routes
export const prefetchRoutes = (paths: string[]) => {
  paths.forEach(prefetchRoute);
};

// Prefetch route on hover with debounce
let hoverTimeout: NodeJS.Timeout | null = null;

export const prefetchOnHover = (path: string) => {
  if (hoverTimeout) {
    clearTimeout(hoverTimeout);
  }
  
  hoverTimeout = setTimeout(() => {
    prefetchRoute(path);
  }, 100); // 100ms delay to avoid prefetching on accidental hovers
};

// Prefetch critical routes after main bundle loads
export const prefetchCriticalRoutes = () => {
  // Use requestIdleCallback if available, otherwise use setTimeout
  const prefetch = () => {
    prefetchRoutes(['/studios', '/contact']); // Most likely navigation targets
  };
  
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(prefetch, { timeout: 2000 });
  } else {
    setTimeout(prefetch, 2000);
  }
};