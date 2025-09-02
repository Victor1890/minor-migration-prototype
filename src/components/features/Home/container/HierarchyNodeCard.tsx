import { Card, CardFooter, CardHeader } from "@/components/ui/card";

import { DATA_DUMB, type HierarchyNode } from "@/data";
import { LABEL_ICON_DETAILS } from "@/data/step-icon";
import { cn } from "@/lib/utils";
import { useFormDataStore } from "@/store/form-data.store";
import { useProgressBarStore } from "@/store/progress-bar.store";
import { useCallback, useEffect, useMemo } from "react";
import { Wiki } from "../components/Wiki";

const { cases } = DATA_DUMB;

interface HierarchyNodeCardProps {
  item: HierarchyNode;
  goToStep?: (id: string) => void;
  showIcon?: boolean;
}

export const HierarchyNodeCard = ({
  item,
  showIcon = false,
  goToStep,
}: HierarchyNodeCardProps) => {
  const { formData, setFormData, setShow, setHistoryStep } = useFormDataStore();
  const { setProgress, progress } = useProgressBarStore();

  const {
    description,
    icon: Icon,
    label,
  } = LABEL_ICON_DETAILS[item.slug] || {};

  const isDisableIcon = useMemo(
    () => item.children?.some((node) => Object.values(node).length === 0),
    [item]
  );

  const hrefLink = useMemo(() => {
    const pathname = window.location.pathname;
    if (pathname === "/" || pathname === "") return `/${item.slug}`;
    return `${pathname}/${item.slug}`;
  }, [item]);

  const handleClick = useCallback(() => {
    // setFormData(item);
    // if (goToStep) goToStep(item.id);
    // setShow(true);
    // setProgress(progress + 20);
    console.log("item: ", item);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setHistoryStep(item);
  }, [setHistoryStep, item]);

  useEffect(() => {
    const isProgressReset = cases.some(
      (caseItem) => caseItem.slug === item.slug
    );
    if (!isProgressReset) return;
    setProgress(20);
  }, [item, formData, setProgress, cases]);

  return (
    <Card
      asChild
      aria-pressed="false"
      data-slug={item.slug}
      tabIndex={0}
      className={cn(
        "shadow-none",
        "fade-in duration-500 animate-in h-full",
        "flex flex-col",
        "border hover:shadow-md transition-shadow cursor-pointer",
        "hover:bg-card/90 hover:ring-2 hover:ring-blue-500",
        "focus-visible:ring-2 focus-visible:ring-blue-500"
      )}
      key={item.slug}
    >
      <a
        href={hrefLink}
        onClick={handleClick}
        onKeyDown={({ key }) => {
          if (key === "Enter" || key === " ") {
            handleClick();
          }
        }}
      >
        <CardHeader className="flex flex-col items-center justify-center gap-2">
          {isDisableIcon ? null : showIcon && Icon ? <Icon /> : null}
          <h3 className="text-[#1E293B] text-left font-semibold text-[16px] leading-[100%]">
            <Wiki value={label || item.label} />
          </h3>
        </CardHeader>
        {description && (
          <CardFooter
            className={cn(
              "flex-1 bg-[#F9FAFB] px-8 py-4 rounded-b-lg flex items-center",
              cases.some((x) => x.slug === item.slug) && "min-h-34",
              "min-h-22 items-center"
            )}
          >
            <p className="text-[14px] leading-[150%] font-normal text-[#4B5563] text-center">
              <Wiki
                value={description || item.desc || "Descripción no disponible."}
              />
            </p>
          </CardFooter>
        )}
      </a>
    </Card>
  );
};
