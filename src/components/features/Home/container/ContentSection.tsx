import { DATA_DUMB, type HierarchyNode } from "@/data";
import { type NodeCase } from "@/data/data-route";
import { cn } from "@/lib/utils";
import { Fragment, useMemo } from "react";
import { FooterMessage } from "../FooterMessage";
import { HierarchyNodeCard } from "./HierarchyNodeCard";
import { NavigationButtons } from "./Navigation";
import type { RenderSpecialView } from "./SpecialView";

// const { cases } = DATA_DUMB;

interface ContentSectionProps {
  value: any;
  renderSpecialView: RenderSpecialView | null;
  show: boolean;
  formData: any;
  historySteps: Partial<HierarchyNode>[];
  goToStep?: (id: string) => void;
  goBack?: () => void;
  goToStart?: () => void;
}
export function ContentSection({
  value,
  renderSpecialView,
  // show,
  formData,
  historySteps,
  goToStep,
  goBack,
  goToStart,
}: ContentSectionProps) {
  console.log("ContentSection value: ", value);

  if (Array.isArray(value) && value.length === 0) return null;

  const shouldShowFooter = !["no-viable", "not-found"].includes(
    renderSpecialView?.type || ""
  );

  const shouldShowNavButtons = useMemo(
    () =>
      historySteps.length > 0 &&
      formData.slug &&
      renderSpecialView?.type === "no-viable",
    [historySteps.length, formData.slug, renderSpecialView?.type]
  );

  return (
    <div className="pb-6 w-full fade-in duration-500 animate-in">
      {renderSpecialView?.render || (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {value.map((item: any) => (
            <HierarchyNodeCard
              key={item.slug}
              item={item}
              goToStep={goToStep}
              showIcon={
                item.length === 6 || item.length === 3 || item.length === 2
              }
            />
          ))}
        </div>
        // <Fragment>
        //   {show && formData?.children ? (
        //     <div
        //       className={cn(
        //         "grid grid-cols-1 gap-4",
        //         formData.children.length == 2 && "lg:grid-cols-2",
        //         formData.children.length > 3 && "lg:grid-cols-2",
        //         formData.children.length == 3 && "lg:grid-cols-3"
        //       )}
        //     >
        //       {formData.children.map((item: any) => (
        //         <HierarchyNodeCard
        //           key={item.slug}
        //           item={item}
        //           goToStep={goToStep}
        //           showIcon={
        //             formData.children.length === 6 ||
        //             formData.children.length === 3 ||
        //             formData.children.length === 2
        //           }
        //         />
        //       ))}
        //     </div>
        //   ) : (
        //     <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        //       {(value as any).map((item: any) => (
        //         <HierarchyNodeCard
        //           key={item.slug}
        //           item={item}
        //           goToStep={goToStep}
        //           showIcon
        //         />
        //       ))}
        //     </div>
        //   )}
        // </Fragment>
      )}
      {shouldShowFooter && (
        <div className="py-12">
          <FooterMessage />
        </div>
      )}
      {shouldShowNavButtons && (
        <div className="pt-5">
          <NavigationButtons
            renderSpecialView={renderSpecialView!}
            goBack={goBack}
            goToStart={goToStart}
          />
        </div>
      )}
    </div>
  );
}
