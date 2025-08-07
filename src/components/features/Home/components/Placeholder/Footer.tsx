import { Skeleton } from "@/components/ui/skeleton";

export function FooterPlaceholder() {
  return (
    <div className="max-w-[896px] w-full text-[#031942] font-normal text-base flex flex-col gap-4">
      <Skeleton className="h-4 w-full" />
      <div className="flex flex-col gap-1">
        <Skeleton className="h-4 w-[60%]" />
        <Skeleton className="h-4 w-[60%]" />
        <Skeleton className="h-4 w-[60%]" />
      </div>
    </div>
  );
}
