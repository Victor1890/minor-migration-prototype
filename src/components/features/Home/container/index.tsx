import { getNavigationContext, isRootLevel } from "@/data/navigation-context";
import { cn } from "@/lib/utils";
import { useFormDataStore } from "@/store/form-data.store";
import { ContentSection } from "./ContentSection";
import { NavigationButtons } from "./Navigation";
import { specialView } from "./SpecialView";

export function Container() {
  const { formData, show, navigationStack } = useFormDataStore();

  const isAtRoot = isRootLevel(formData.slug, navigationStack.length);
  const navigationContext = getNavigationContext(formData.slug, isAtRoot);

  const renderSpecialView = specialView(formData);

  return (
    <div className="flex flex-col mx-auto gap-4">
      {navigationStack.length > 0 && formData.slug && (
        <div className="mb-9">
          <NavigationButtons renderSpecialView={renderSpecialView!} />
        </div>
      )}

      <div className="flex flex-col gap-8">
        <div
          className={cn(
            "flex flex-col gap-1",
            renderSpecialView?.type === "not-found" && "w-[60%]"
          )}
        >
          <h1 className="font-bold text-[28px] text-[#1E293B] text-left">
            {renderSpecialView?.title || navigationContext.title}
          </h1>
          <h2 className="text-base font-normal text-[#475569]">
            {renderSpecialView?.description || navigationContext.description}
          </h2>
        </div>
        <ContentSection
          renderSpecialView={renderSpecialView}
          show={show}
          formData={formData}
          navigationStack={navigationStack}
        />
      </div>
    </div>
  );
}
