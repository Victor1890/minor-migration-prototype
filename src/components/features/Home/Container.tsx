import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DATA_DUMB, type HierarchyNode } from "@/data";
import { cn } from "@/lib/utils";
import { useFormDataStore } from "@/store/form-data.store";
import { LABEL_ICON_DETAILS } from "@/data/step-icon";
import { FooterMessage } from "./FooterMessage";
import { getNodeById } from "@/utils/array";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import { getNavigationContext, isRootLevel } from "@/data/navigation-context";
import { NotFound } from "./components/NotFound";
import { NoViable } from "./components/NoViable";
import { Fragment, useMemo, useState } from "react";
import { Documentation } from "./components/Documentation";
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

const { cases, notPermissions, notFoundCase } = DATA_DUMB;

interface HierarchyNodeCardProps {
  item: HierarchyNode;
}

export const HierarchyNodeCard = ({ item }: HierarchyNodeCardProps) => {
  const { formData, setFormData, pushToStack, setShow } = useFormDataStore();
  const [data, setData] = useState<HierarchyNode | null>(null);

  const isMoreInfoAvailable = useMemo(() => {
    const isValid = ["1.1", "2.2", "3.2", "4"].includes(item.id);
    if (isValid) return false;
    return item?.children?.some((child: any) => child?.["Notas requisitos"]);
  }, [item]);

  const {
    description,
    icon: Icon,
    label,
  } = useMemo(() => LABEL_ICON_DETAILS[item.slug] || {}, [item.slug]);

  return (
    <Fragment>
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
          {!isMoreInfoAvailable ? (
            <p className="text-base font-normal text-[#4B5563]">
              {description || item.description || "Descripción no disponible."}
            </p>
          ) : (
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setData(item);
              }}
              variant={"ghost"}
              className="text-base font-normal text-[#0072D7] cursor-pointer hover:text-[#0056A3] flex items-center gap-2"
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
                  {data.description || "Descripción no disponible."}
                </DialogDescription>
              </div>
              <div className="flex flex-col items-start gap-1">
                <Label className="font-semibold text-xl">Importante</Label>
                <DialogDescription className="text-base font-normal text-[#475569]">
                  Si el menor viaja con otra persona que no sea su madre, aunque
                  tenga un solo apellido, sí deberá presentar una autorización
                  firmada por la madre a través de un poder notarial legalizado.
                </DialogDescription>
              </div>
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

export function Container() {
  const {
    formData,
    show,
    popFromStack,
    setFormData,
    resetFormData,
    navigationStack,
  } = useFormDataStore();

  const isAtRoot = isRootLevel(formData.slug, navigationStack.length);
  const navigationContext = getNavigationContext(formData.slug, isAtRoot);

  const renderSpecialView = useMemo(() => {
    const notPermission = notPermissions.find((item) => item === formData.id);
    if (notPermission) {
      return {
        title: "No necesitas permiso para este caso",
        description:
          "No te preocupes, no necesitas un permiso especial para este caso.",
        render: <NotFound />,
      };
    }

    const notViablePage = notFoundCase.find((item) => item === formData.id);
    if (notViablePage) {
      return {
        title:
          "No ves la situación del menor en la lista de opciones o no estas seguro de que opción seleccionar?",
        description:
          "No te preocupes. Si no encuentras la situación del menor o tienes dudas sobre qué opción elegir, te guiaremos para recibir la ayuda adecuada.",
        render: <NoViable />,
      };
    }

    const documentationPage = formData?.children?.some(
      (child: any) => child?.["Notas requisitos"]
    );
    if (documentationPage) {
      return {
        title: "Documentos obligatorios y pasos para tu caso",
        description:
          "Antes de iniciar tu solicitud, asegúrate de contar con todos los documentos requeridos y sigue los pasos detallados para completar el proceso sin contratiempos. Esta guía está basada en tu caso específico.",
        render: <Documentation />,
      };
    }

    return null;
  }, [formData]);

  return (
    <div className="flex flex-col mx-auto">
      {navigationStack.length > 0 && formData.slug && (
        <div className="pb-8 flex justify-start items-center gap-4">
          <Button
            variant={"outline"}
            className="rounded-full flex gap-2 items-center text-[#0072D7] border-[#0072D7] max-w-[163px] w-full hover:text-[#0072D7]"
            onClick={() => {
              const prevId = popFromStack();
              const prevForm = getNodeById(cases as any, prevId || "");
              if (prevForm) return setFormData(prevForm);
              resetFormData();
            }}
          >
            <MoveLeft />
            Paso anterior
          </Button>
          {renderSpecialView?.title && (
            <Button
              variant={"ghost"}
              className="rounded-full flex gap-2 items-center text-[#0072D7] max-w-[163px] w-full hover:text-[#0072D7]"
              onClick={() => resetFormData()}
            >
              Volver al inicio
            </Button>
          )}
        </div>
      )}

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold text-[28px] text-[#020617]">
            {renderSpecialView?.title || navigationContext.title}
          </h1>
          <p className="text-base font-normal text-[#727272]">
            {renderSpecialView?.description || navigationContext.description}
          </p>
        </div>
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
                  {formData.children.map((item: any) => {
                    return <HierarchyNodeCard key={item.slug} item={item} />;
                  })}
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {cases.map((item) => {
                    return <HierarchyNodeCard key={item.slug} item={item} />;
                  })}
                </div>
              )}
            </Fragment>
          )}
          <div className="py-12">
            <FooterMessage />
          </div>
        </div>
      </div>
    </div>
  );
}
