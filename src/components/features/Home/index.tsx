import { DATA_DUMB } from "@/data";
import { type NodeCase } from "@/data/data-route";
import { getNavigationContext, isRootLevel } from "@/data/navigation-context";
import { cn } from "@/lib/utils";
import { useFormDataStore } from "@/store/form-data.store";
import { useProgressBarStore } from "@/store/progress-bar.store";
import { getHistoryNodeById, getNodeById } from "@/utils/array";
import { useQueryState } from "nuqs";
import { useCallback, useEffect, useMemo } from "react";
import { ContentSection } from "./container/ContentSection";
import { NavigationButtons } from "./container/Navigation";
import { specialView } from "./container/SpecialView";

interface HomeContainer {
  value: NodeCase;
}

export function HomeContainer({ value }: HomeContainer) {
  console.log("value: ", value);
  const {
    formData,
    show,
    historySteps,
    setFormData,
    setShow,
    resetFormData,
    setHistoryStep,
  }: any = useFormDataStore();
  const { setProgress } = useProgressBarStore();

  const navigationContext = getNavigationContext(
    window.location.pathname,
    historySteps.length === 0
  );
  const renderSpecialView = specialView(value);

  console.log("renderSpecialView: ", renderSpecialView);

  const isStepValid = useMemo(() => {
    return window.location.pathname === "/";
  }, []);

  return (
    <div
      className={cn(
        "flex flex-col mx-auto max-w-[992px]",
        isStepValid ? "gap-12" : "gap-4",
        renderSpecialView?.type === "not-found" && "max-w-[768px]",
        renderSpecialView?.type === "no-viable" && "max-w-[768px]"
      )}
    >
      {isStepValid && (
        <div className="flex flex-col items-start justify-center gap-1 max-w-[88%]">
          <h1 className="text-[#003876] font-semibold text-[32px] leading-[120%]">
            Viajar con un menor: guía oficial para solicitar el permiso
          </h1>
          {formData.type !== "document" && (
            <p className="text-[#475569] text-base font-normal">
              En esta página podrás consultar si necesitas el permiso de viaje y
              cómo solicitarlo. Responde las preguntas para obtener la
              información específica para tu caso.
            </p>
          )}
        </div>
      )}

      <div className="w-full">
        {historySteps.length > 0 && formData.slug && (
          <div className="mb-9">
            <NavigationButtons renderSpecialView={renderSpecialView!} />
          </div>
        )}

        <div className="flex flex-col gap-8">
          <div
            className={cn(
              "fade-in duration-500 animate-in",
              "flex flex-col gap-1",
              renderSpecialView?.type === "documentation" && "max-w-[700px]",
              renderSpecialView?.type === "not-found" && "max-w-[768px]"
            )}
          >
            <div className="flex flex-col lg:flex-row items-center justify-start">
              <h2 className="font-bold text-[28px] text-[#1E293B] text-left">
                {renderSpecialView?.title || navigationContext.title}
              </h2>
            </div>
            <h2 className="text-base font-normal text-[#475569]">
              {renderSpecialView?.description || navigationContext.description}
            </h2>
          </div>
          <ContentSection
            value={value}
            renderSpecialView={renderSpecialView}
            show={show}
            formData={formData}
            historySteps={historySteps}
          />
        </div>
      </div>
    </div>
  );
}
