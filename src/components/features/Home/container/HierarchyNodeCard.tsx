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
  goToStep,
  isFirstLoad = false,
}: HierarchyNodeCardProps) => {
  const { formData, setFormData, setShow } = useFormDataStore();
  const [data, setData] = useState<HierarchyNode | null>(null);
  const { setProgress, progress } = useProgressBarStore();

  // Determina si hay más información disponible
  const isMoreInfoAvailable = useMemo(
    () =>
      (["document", "not_required_permission", "not_found"].includes(
        item.type || ""
      ) &&
        Object.hasOwn(item, "requirements")) ||
      item.type === "not_found" ||
      item.type === "not_required_permission",
    [item]
  );

  const {
    description,
    icon: Icon,
    label,
  } = LABEL_ICON_DETAILS[item.slug] || {};

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
    <Fragment>
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
        <CardHeader className="flex flex-col items-start grow">
          {isFirstLoad ? Icon && <Icon /> : null}
          <h3 className="text-left font-semibold text-[18px] text-balance font-family-robo">
            <Wiki value={label || item.label} />
          </h3>
        </CardHeader>
        <CardFooter
          className={cn(
            "flex-1 bg-[#F9FAFB] px-6 py-4 rounded-b-lg flex items-start",
            cases.some((x) => x.slug === item.slug) && "min-h-34",
            isMoreInfoAvailable && "min-h-22 items-center"
          )}
        >
          {!isMoreInfoAvailable ? (
            <p className="text-base font-normal text-[#4B5563]">
              <Wiki
                value={description || item.desc || "Descripción no disponible."}
              />
            </p>
          ) : (
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setData(item);
              }}
              variant={"ghost"}
              className="p-0 text-base font-normal text-[#1E293B] cursor-pointer hover:underline flex items-center gap-2 hover:bg-transparent font-family-robo text-[14px] w-[131px] h-6"
            >
              Ver más información
            </Button>
          )}
        </CardFooter>
      </Card>
      {data && (
        <Dialog open={!!data}>
          <DialogContent className="gap-0" activeBtnClose={false}>
            <DialogHeader>
              <DialogTitle className="text-[20px] font-semibold">
                {data.label}
              </DialogTitle>
            </DialogHeader>

            <Divider className="my-6" />

            <div className="flex flex-col gap-4 mb-8">
              <div className="flex flex-col items-start gap-1">
                <Label className="text-[18px] font-semibold">Descripción</Label>
                <DialogDescription className="text-base font-normal text-[#475569]">
                  <Wiki value={data?.desc || "Descripción no disponible."} />
                </DialogDescription>
              </div>
            </div>

            <DialogFooter>
              <Button
                variant={"default"}
                className="text-[#FAFAFA] rounded-full flex gap-2 items-center hover:bg-[#0072D7]/90 bg-[#0072D7] border-[#0072D7] max-w-[163px]"
                onClick={() => setData(null)}
              >
                Cerrar
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </Fragment>
  );
};
