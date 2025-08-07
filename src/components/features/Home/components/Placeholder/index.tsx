import { cn } from "@/lib/utils";
import { NavigationPlaceholder } from "./Navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { SectionPlaceholder } from "./Section";

export function Placeholder() {
  return (
    <div className={cn("flex flex-col mx-auto gap-4", "max-w-[992px]")}>
      <div className="mb-9">
        <NavigationPlaceholder />
      </div>

      <div className="flex flex-col gap-8">
        <div
          className={cn(
            "fade-in duration-500 animate-in",
            "flex flex-col gap-1"
          )}
        >
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-9 lg:gap-2">
            <Skeleton className="h-9 w-[60%]" />
            <Skeleton className="h-9 w-[163px]" />
          </div>
          <h2 className="text-base font-normal text-[#475569]">
            <Skeleton className="h-9 w-[163px]" />
          </h2>
        </div>
        <SectionPlaceholder />
      </div>
    </div>
  );
}
