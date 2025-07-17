import { Button } from "@/components/ui/button";
import { DATA_DUMB } from "@/data";
import { getNavigationContext, isRootLevel } from "@/data/navigation-context";
import { cn } from "@/lib/utils";
import { useFormDataStore } from "@/store/form-data.store";
import { useProgressBarStore } from "@/store/progress-bar.store";
import { getNodeById } from "@/utils/array";
import { MoveLeft } from "lucide-react";
import { Fragment, useMemo } from "react";
import { Documentation } from "../components/Documentation";
import { NotFound } from "../components/NotFound";
import { NoViable } from "../components/NoViable";
import { FooterMessage } from "../FooterMessage";
import { HierarchyNodeCard } from "./HierarchyNodeCard";

const { cases, notPermissions, notFoundCase } = DATA_DUMB;

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
          <h2 className="text-base font-normal text-[#727272]">
            {renderSpecialView?.description || navigationContext.description}
          </h2>
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
                  {formData.children.map((item: any, idx) => {
                    return <HierarchyNodeCard key={item.slug} item={item} />;
                  })}
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {cases.map((item, idx) => {
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
