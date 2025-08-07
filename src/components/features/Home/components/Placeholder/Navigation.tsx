import { Skeleton } from "@/components/ui/skeleton";

export function NavigationPlaceholder() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-1 lg:gap-8 w-full">
      <div className="flex justify-start items-center gap-4 w-full">
        <Skeleton className="h-9 w-[163px]" />
        <Skeleton className="h-9 w-[163px]" />
      </div>
      <Skeleton className="h-9 w-[272px]" />
    </div>
  );
}
