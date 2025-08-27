import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Divider } from "@/components/ui/divider";
import { Label } from "@/components/ui/label";

import { DATA_DUMB, type HierarchyNode } from "@/data";
import { LABEL_ICON_DETAILS } from "@/data/step-icon";
import { cn } from "@/lib/utils";
import { useFormDataStore } from "@/store/form-data.store";
import { useProgressBarStore } from "@/store/progress-bar.store";
import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { Wiki } from "../components/Wiki";

const { cases } = DATA_DUMB;

interface HierarchyNodeCardProps {
  item: HierarchyNode;
  goToStep?: (id: string) => void;
  isFirstLoad?: boolean;
}

export const HierarchyNodeCard = ({
  item,
  isFirstLoad = false,
  goToStep,
}: HierarchyNodeCardProps) => {
  const { formData, setFormData, setShow } = useFormDataStore();
  const { setProgress, progress } = useProgressBarStore();

  const {
    description,
    icon: Icon,
    label,
  } = LABEL_ICON_DETAILS[item.slug] || {};

  const isDescAvailable = useMemo(() => Boolean(description), [description]);
  const isDisableIcon = useMemo(
    () => item.children.some((node) => Object.values(node).length === 0),
    [item]
  );

  const handleClick = useCallback(() => {
    setFormData(item);
    if (goToStep) goToStep(item.id);
    setShow(true);
    setProgress(progress + 20);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [
    formData.id,
    item,
    setFormData,
    setShow,
    setProgress,
    progress,
    goToStep,
  ]);

  useEffect(() => {
    const isProgressReset = cases.some(
      (caseItem) => caseItem.slug === item.slug
    );
    if (!isProgressReset) return;
    setProgress(20);
  }, [item, formData, setProgress, cases]);

  return (
    <Card
      role="button"
      aria-pressed="false"
      tabIndex={0}
      className={cn(
        "fade-in duration-500 animate-in h-full",
        "flex flex-col",
        "border hover:shadow-md transition-shadow cursor-pointer",
        "hover:bg-card/90 hover:ring-2 hover:ring-blue-500",
        "focus-visible:ring-2 focus-visible:ring-blue-500"
      )}
      onClick={handleClick}
      onKeyDown={({ key }) => {
        if (key === "Enter" || key === " ") {
          handleClick();
        }
      }}
      key={item.slug}
    >
      <CardHeader className="flex flex-col items-center justify-center grow">
        {isDisableIcon ? null : isFirstLoad && Icon ? <Icon /> : null}
        <h3 className="text-center font-semibold text-[16px] leading-[130%] font-family-robo">
          <Wiki value={label || item.label} />
        </h3>
      </CardHeader>
      {isDescAvailable && (
        <CardFooter
          className={cn(
            "flex-1 bg-[#F9FAFB] px-6 py-4 rounded-b-lg flex items-start",
            cases.some((x) => x.slug === item.slug) && "min-h-34",
            "min-h-22 items-center"
          )}
        >
          <p className="text-base font-normal text-[#4B5563]">
            <Wiki
              value={description || item.desc || "Descripción no disponible."}
            />
          </p>
        </CardFooter>
      )}
    </Card>
  );
};
