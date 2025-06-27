import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DATA_DUMB, type HierarchyNode } from "@/data";
import { cn } from "@/lib/utils";
import { useFormDataStore } from "@/store/form-data.store";
import { LABEL_ICON_DETAILS } from "@/data/step-icon";
import { FooterMessage } from "./FooterMessage";
import { getNodeById } from "@/utils/array";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import {
  getNavigationContext,
  isRootLevel,
  getSpecialView,
  buildNavigationPath,
  type SpecialView,
} from "@/data/navigation-context";
import { NotFound } from "./NotFound";
import { NoViable } from "./NoViable";
import { useMemo } from "react";

interface HierarchyNodeCardProps {
  item: HierarchyNode;
}

export const HierarchyNodeCard = ({ item }: HierarchyNodeCardProps) => {
  const { formData, setFormData, pushToStack, setShow } = useFormDataStore();

  const {
    description,
    icon: Icon,
    label,
  } = LABEL_ICON_DETAILS[item.slug] || {};

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
          {label || item.label}
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

  // Obtener el contexto de navegación basado en el estado actual
  const isAtRoot = isRootLevel(formData.slug, navigationStack.length);
  const navigationContext = getNavigationContext(formData.slug, isAtRoot);

  // Construir la ruta de navegación y determinar si mostrar una vista especial
  const navigationPath = buildNavigationPath(
    navigationStack,
    formData.slug,
    DATA_DUMB
  );
  const specialView: SpecialView = getSpecialView(navigationPath);

  console.log("Special View:", specialView, navigationPath);

  const renderSpecialView = useMemo(() => {
    switch (specialView) {
      case "not_found":
        return <NotFound />;
      case "no_viable":
        return <NoViable />;
      default:
        return null;
    }
  }, [specialView]);

  if (specialView) {
    return (
      <div className="flex flex-col mx-auto max-w-[768px]">
        {navigationStack.length > 0 && formData.slug && (
          <div className="pb-8">
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
          </div>
        )}

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-[28px] text-[#020617]">
              {specialView === "not_found"
                ? "No necesitas permiso para este caso"
                : specialView === "no_viable"
                ? "Tu situación no está en la lista de opciones"
                : navigationContext.title}
            </h1>
            <p className="text-base font-normal text-[#727272]">
              {specialView === "not_found" ? "" : navigationContext.description}
            </p>
          </div>
          <div className="pb-6 w-full">
            {renderSpecialView}
            <div className="py-12">
              <FooterMessage />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {navigationStack.length > 0 && formData.slug && (
        <div className="pb-8">
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
        </div>
      )}

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-[28px] text-[#020617]">
            {navigationContext.title}
          </h1>
          <p className="text-base font-normal text-[#727272]">
            {navigationContext.description}
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
