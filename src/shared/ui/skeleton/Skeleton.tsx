import { cn } from "@/shared/lib/utils";

/**
 * Skeleton 컴포넌트
 * 로딩 중 콘텐츠의 placeholder를 표시합니다.
 * 
 * @example
 * <Skeleton className="h-4 w-[250px]" />
 */
function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-primary/10", className)}
      {...props}
    />
  );
}

export { Skeleton };
