import { Skeleton } from "@/components/ui/skeleton";

export const MobileLoadingSkeleton = () => {
  return (
    <div className="space-y-4 w-full animate-pulse">
      <Skeleton className="h-[60vh] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-8 w-1/2" />
      </div>
      <div className="space-y-4 mt-8">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-[300px] w-full rounded-xl" />
        ))}
      </div>
    </div>
  );
};