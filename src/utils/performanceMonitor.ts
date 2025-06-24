export const measurePerformance = (componentName: string) => {
  const start = performance.now();
  return () => {
    const end = performance.now();
    // Performance measurement removed
  };
};

export const debounceRender = <T extends unknown[]>(
  fn: (...args: T) => void,
  delay: number
) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: T) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};