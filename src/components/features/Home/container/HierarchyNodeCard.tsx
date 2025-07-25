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
import { useQueryState } from "nuqs";
import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { Wiki } from "../components/Wiki";

const { cases } = DATA_DUMB;

interface HierarchyNodeCardProps {
  item: HierarchyNode;
}

export const HierarchyNodeCard = ({ item }: HierarchyNodeCardProps) => {
  // const [stepParam, setStepParam] = useQueryState(item.slug, {
  //   history: "push",
  // });

  const { formData, setFormData, pushToStack, setShow } = useFormDataStore();
  const [data, setData] = useState<HierarchyNode | null>(null);
  const { setProgress, progress } = useProgressBarStore();

  const isMoreInfoAvailable = useMemo(() => {
    const isValid = ["1.1", "2.2", "3.2", "4"].includes(item.id);
    if (isValid) return false;
    return item?.children?.some((child: any) => child?.["document"]);
  }, [item]);

  const {
    description,
    icon: Icon,
    label,
  } = useMemo(() => LABEL_ICON_DETAILS[item.slug] || {}, [item.slug]);

  const handleClick = useCallback(() => {
    pushToStack(formData.id);
    setFormData(item);
    // setStepParam(item.id);
    setShow(true);
    setProgress(progress + 20);
  }, [
    formData.id,
    item,
    pushToStack,
    setFormData,
    setShow,
    setProgress,
    progress,
  ]);

  useEffect(() => {
    const isProgressReset = cases.some(
      (caseItem) => caseItem.slug === item.slug
    );

    if (!isProgressReset) return;
    setProgress(20);
  }, [item, formData]);

  // useEffect(() => {
  //   if (!stepParam) return;

  //   console.log("stepParam: ", stepParam);
  // }, [stepParam, item.children]);

  return (
    <Fragment>
      <Card
        role="button"
        aria-pressed="false"
        tabIndex={0}
        className={cn(
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
        <CardHeader className="flex flex-col items-start">
          {Icon && <Icon />}
          <h3 className="text-left font-semibold text-[18px] text-balance">
            <Wiki value={label || item.label} />
          </h3>
        </CardHeader>
        <CardFooter className="bg-[#F9FAFB] px-8 py-4 rounded-b-xl grow">
          {!isMoreInfoAvailable ? (
            <p className="text-base font-normal text-[#4B5563]">
              <Wiki
                value={
                  description ||
                  item.description ||
                  "Descripción no disponible."
                }
              />
            </p>
          ) : (
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setData(item);
              }}
              variant={"ghost"}
              className="text-base font-normal text-black cursor-pointer hover:underline flex items-center gap-2"
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
              <DialogTitle>{data.label}</DialogTitle>
            </DialogHeader>

            <Divider className="my-6" />

            <div className="flex flex-col gap-4 mb-8">
              <div className="flex flex-col items-start gap-1">
                <Label className="font-semibold text-xl">Descripción</Label>
                <DialogDescription className="text-base font-normal text-[#475569]">
                  {data.description ? (
                    <Wiki value={data.description} />
                  ) : (
                    "Descripción no disponible."
                  )}
                </DialogDescription>
              </div>
              {/* <div className="flex flex-col items-start gap-1">
                <Label className="font-semibold text-xl">Importante</Label>
                <DialogDescription className="text-base font-normal text-[#475569]">
                  Si el menor viaja con otra persona que no sea su madre, aunque
                  tenga un solo apellido, sí deberá presentar una autorización
                  firmada por la madre a través de un poder notarial legalizado.
                </DialogDescription>
              </div> */}
            </div>

            <DialogFooter>
              <Button
                variant={"default"}
                className="rounded-full flex gap-2 items-center hover:bg-[#0072D7]/90 bg-[#0072D7] border-[#0072D7] max-w-[163px]"
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
