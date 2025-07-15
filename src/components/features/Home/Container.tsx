import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
import { getNavigationContext, isRootLevel } from "@/data/navigation-context";
import { LABEL_ICON_DETAILS } from "@/data/step-icon";
import { cn } from "@/lib/utils";
import { useFormDataStore } from "@/store/form-data.store";
import { useProgressBarStore } from "@/store/progress-bar.store";
import { getNodeById } from "@/utils/array";
import { MoveLeft } from "lucide-react";
import { Fragment, useEffect, useMemo, useState } from "react";
import { Documentation } from "./components/Documentation";
import { NotFound } from "./components/NotFound";
import { NoViable } from "./components/NoViable";
import { Wiki } from "./components/Wiki";
import { FooterMessage } from "./FooterMessage";

const { cases, notPermissions, notFoundCase } = DATA_DUMB;

interface HierarchyNodeCardProps {
  item: HierarchyNode;
}

export const HierarchyNodeCard = ({ item }: HierarchyNodeCardProps) => {
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

  useEffect(() => {
    const isProgressReset = cases.some(
      (caseItem) => caseItem.slug === item.slug
    );

    if (!isProgressReset) return;
    setProgress(20);
  }, [item, formData]);

  return (
    <Fragment>
      <Card
        className={cn(
          "flex flex-col",
          "border hover:shadow-md transition-shadow cursor-pointer",
          "hover:bg-card/90 hover:ring-2 hover:ring-blue-500"
        )}
        onClick={() => {
          pushToStack(formData.id);
          setFormData(item);
          setShow(true);
          setProgress(progress + 20);
        }}
        key={item.slug}
      >
        <CardHeader className="flex flex-col items-start">
          {Icon && <Icon />}
          <CardTitle className="text-left font-semibold text-[18px] text-balance">
            <Wiki value={label || item.label} />
          </CardTitle>
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

export function Container() {
  const {
    formData,
    show,
    popFromStack,
    setFormData,
    resetFormData,
    navigationStack,
  } = useFormDataStore();
  const { setProgress, progress, resetProgress } = useProgressBarStore();

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
        type: "not-found",
      };
    }

    const notViablePage = notFoundCase.find((item) => item === formData.id);
    if (notViablePage) {
      return {
        title: "¿Tienes dudas o no ves el caso del menor entre las opciones?",
        description:
          "¡No te preocupes! Podemos ayudarte a identificar la opción correcta o guiarte paso a paso si no estás seguro",
        render: <NoViable />,
        type: "no-viable",
      };
    }

    const documentationPage = formData?.children?.some(
      (child: any) => Object.keys(child?.["process_online"] || {}).length > 0
    );
    if (documentationPage) {
      return {
        title: "Documentos obligatorios y pasos a seguir",
        description:
          "Antes de iniciar tu solicitud, asegúrate de contar con todos los documentos necesarios y seguir el paso a paso para completar el proceso sin contratiempos",
        render: <Documentation />,
        type: "documentation",
      };
    }

    return null;
  }, [formData]);

  return (
    <div className="flex flex-col mx-auto">
      {navigationStack.length > 0 && formData.slug && (
        <div className="flex items-center justify-between">
          <div className="pb-8 flex justify-start items-center gap-4">
            <Button
              variant={"outline"}
              className="rounded-full flex gap-2 items-center text-[#0072D7] border-[#0072D7] max-w-[163px] w-full hover:text-[#0072D7] cursor-pointer"
              onClick={() => {
                const prevId = popFromStack();
                const prevForm = getNodeById(cases as any, prevId || "");
                setProgress(progress - 20);
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
                className="rounded-full flex gap-2 items-center text-[#0072D7] max-w-[163px] w-full hover:text-[#0072D7] cursor-pointer"
                onClick={() => {
                  resetFormData();
                  resetProgress();
                }}
              >
                Volver al inicio
              </Button>
            )}
          </div>

          {renderSpecialView?.type !== "no-viable" && (
            <Button
              asChild
              variant={"default"}
              className="rounded-full flex gap-2 items-center bg-[#0072D7] hover:bg-[#0072D7]/90 text-white border-[#0072D7] max-w-[257px] w-full cursor-pointer"
            >
              <a
                href="https://servicios.migracion.gob.do/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir al portal para iniciar la solicitud
              </a>
            </Button>
          )}
        </div>
      )}

      <div className="flex flex-col gap-8">
        <div
          className={cn(
            "flex flex-col gap-1",
            renderSpecialView?.type === "not-found" && "w-[60%]"
          )}
        >
          <h1 className="font-bold text-[28px] text-[#020617] text-left">
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
          {["no-viable", "not-found"].includes(
            renderSpecialView?.type || ""
          ) ? null : (
            <div className="py-12">
              <FooterMessage />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
