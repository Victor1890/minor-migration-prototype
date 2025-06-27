import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DATA_DUMB, type HierarchyNode } from "@/data";
import { cn } from "@/lib/utils";
import { useFormDataStore } from "@/store/form-data.store";
import { LABEL_ICON_DETAILS } from "@/utils/step-icon";
import { FooterMessage } from "./FooterMessage";
import { getNodeById } from "@/utils/array";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";

interface HierarchyNodeCardProps {
  item: HierarchyNode;
}

export const HierarchyNodeCard = ({ item }: HierarchyNodeCardProps) => {
  const { formData, setFormData, pushToStack, setShow } = useFormDataStore();

  const { description, icon: Icon } = LABEL_ICON_DETAILS[item.slug] || {};

  return (
    <Card
      className={cn(
        "flex flex-col",
        "border hover:shadow-md transition-shadow cursor-pointer",
        formData.slug === item.slug && "bg-card/90 ring-2 ring-blue-500"
      )}
      onClick={() => {
        pushToStack(formData.id);
        setFormData(item);
        setShow(true);
      }}
      key={item.slug}
    >
      <CardHeader className="flex flex-col items-start">
        {Icon && <Icon />}
        <CardTitle className="text-left font-semibold text-[18px]">
          {item.label}
        </CardTitle>
      </CardHeader>
      <CardFooter className="bg-[#F9FAFB] px-8 py-4 rounded-b-xl grow">
        <p className="text-base font-normal text-[#4B5563]">
          {description || item.description || "Descripción no disponible."}
        </p>
      </CardFooter>
    </Card>
  );
};

export function Container() {
  const {
    formData,
    show,
    popFromStack,
    setFormData,
    resetFormData,
    navigationStack,
  } = useFormDataStore();

  return (
    <>
      {navigationStack.length > 0 && formData.slug && (
        <Button
          variant={"outline"}
          className="rounded-full flex gap-2 items-center text-[#0072D7] border-[#0072D7] max-w-[163px] w-full hover:text-[#0072D7]"
          onClick={() => {
            const prevId = popFromStack();
            const prevForm = getNodeById(DATA_DUMB as any, prevId || "");
            if (prevForm) return setFormData(prevForm);
            resetFormData();
          }}
        >
          <MoveLeft />
          Paso anterior
        </Button>
      )}

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-[28px] text-[#020617]">
            {formData.label ? formData.label : DATA_DUMB[0].label}
          </h1>
          <p className="text-base font-normal text-[#727272]">
            {formData.description
              ? formData.description
              : DATA_DUMB[0].description}
          </p>
        </div>
        <div className="pb-6 w-full">
          {show && formData?.children ? (
            <div
              className={cn(
                "grid grid-cols-1 gap-4",
                formData.children.length == 2 && "lg:grid-cols-2",
                formData.children.length > 2 && "lg:grid-cols-3"
              )}
            >
              {formData.children.map((item: any) => {
                return <HierarchyNodeCard key={item.slug} item={item} />;
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {DATA_DUMB.map((item) => {
                return <HierarchyNodeCard key={item.slug} item={item} />;
              })}
            </div>
          )}
          <div className="py-12">
            <FooterMessage />
          </div>
        </div>
      </div>
    </>
  );
}
