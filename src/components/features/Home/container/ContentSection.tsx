import { Fragment } from "react";
import { cn } from "@/lib/utils";
import { HierarchyNodeCard } from "./HierarchyNodeCard";
import { FooterMessage } from "../FooterMessage";
import { NavigationButtons } from "./Navigation";
import { DATA_DUMB } from "@/data";
import type { RenderSpecialView } from "./SpecialView";

const { cases } = DATA_DUMB;

interface ContentSectionProps {
  renderSpecialView: RenderSpecialView | null;
  show: boolean;
  formData: any;
  navigationStack: any[];
}

export function ContentSection({
  renderSpecialView,
  show,
  formData,
  navigationStack,
}: ContentSectionProps) {
  const shouldShowFooter = !["no-viable", "not-found"].includes(
    renderSpecialView?.type || ""
  );
  const shouldShowNavButtons =
    navigationStack.length > 0 &&
    formData.slug &&
    renderSpecialView?.type === "no-viable";

  return (
    <div className="pb-6 w-full">
      {renderSpecialView?.render || (
        <Fragment>
          {show && formData?.children ? (
            <div
              className={cn(
                "grid grid-cols-1 gap-4",
                formData.children.length == 2 && "lg:grid-cols-2",
                formData.children.length > 2 && "lg:grid-cols-3"
              )}
            >
              {formData.children.map((item: any) => (
                <HierarchyNodeCard key={item.slug} item={item} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {cases.map((item: any) => (
                <HierarchyNodeCard key={item.slug} item={item} />
              ))}
            </div>
          )}
        </Fragment>
      )}
      {shouldShowFooter && (
        <div className="py-12">
          <FooterMessage />
        </div>
      )}
      {shouldShowNavButtons && (
        <div className="pt-5">
          <NavigationButtons renderSpecialView={renderSpecialView!} />
        </div>
      )}
    </div>
  );
}
