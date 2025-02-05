import { useFadeIn } from '@/hooks/useFadeIn';
import { cn } from '@/lib/utils';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}

export const FadeIn = ({ children, className, threshold }: FadeInProps) => {
  const ref = useFadeIn(threshold);

  return (
    <div ref={ref} className={cn(className)} data-fade-in>
      {children}
    </div>
  );
};