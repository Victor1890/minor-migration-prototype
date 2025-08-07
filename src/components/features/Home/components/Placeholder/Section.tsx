import { Skeleton } from "@/components/ui/skeleton";
import { FooterPlaceholder } from "./Footer";
import { NavigationPlaceholder } from "./Navigation";

export function SectionPlaceholder() {
  return (
    <div className="pb-6 w-full fade-in duration-500 animate-in">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {Array.from({ length: 9 }).map((_, idx) => (
          <Skeleton key={idx} className="h-[150px] w-full" />
        ))}
      </div>

      <div className="py-12">
        <FooterPlaceholder />
      </div>

      <div className="pt-5">
        <NavigationPlaceholder />
      </div>
    </div>
  );
}
