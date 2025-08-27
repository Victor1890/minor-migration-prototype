import { DATA_DUMB } from "@/data";
import { getNavigationContext, isRootLevel } from "@/data/navigation-context";
import { cn } from "@/lib/utils";
import { useFormDataStore } from "@/store/form-data.store";
import { useProgressBarStore } from "@/store/progress-bar.store";
import { getHistoryNodeById, getNodeById } from "@/utils/array";
import { useQueryState } from "nuqs";
import { useCallback, useEffect, useMemo } from "react";
import { ContentSection } from "./ContentSection";
import { NavigationButtons } from "./Navigation";
import { specialView } from "./SpecialView";

const { cases } = DATA_DUMB;

export function Container() {
  const {
    formData,
    show,
    historySteps,
    setFormData,
    setShow,
    resetFormData,
    setHistoryStep,
  } = useFormDataStore();
  const { setProgress } = useProgressBarStore();
  const isAtRoot = isRootLevel(formData.slug, historySteps.length);
  const navigationContext = getNavigationContext(formData.slug, isAtRoot);
  const renderSpecialView = specialView(formData);
  const [stepParam, setStepParam] = useQueryState<string | null>("paso", {
    history: "push",
    shallow: false,
    parse: (v) => v ?? null,
    serialize: (v) => v ?? "",
  });

  const isStepValid = useMemo(() => {
    if (!stepParam) return true;
    // return formData.type === "document";
  }, [formData, stepParam]);

  const goToStart = useCallback(() => {
    setStepParam(null);
    resetFormData();
    setProgress(20);
    window.history.pushState(null, "", "/");
  }, [setStepParam]);

  const goToStep = useCallback(
    (id: string) => {
      const foundNode = getNodeById(cases as any, id, "id");

      if (!foundNode) {
        console.warn(`Node with id ${id} not found.`);
        return;
      }

      const currentPathUrl = decodeURIComponent(
        new URL(window.location.href).pathname
      );

      const newHistoryState =
        currentPathUrl === "/"
          ? `/${foundNode.slug}`
          : `${currentPathUrl}/${foundNode?.slug}`;

      window.history.pushState(null, "", newHistoryState);

      setStepParam(id);
    },
    [setStepParam]
  );

  const goBack = useCallback(() => {
    if (!stepParam) return;

    const prevId = stepParam.split(".").slice(0, -1).join(".");
    if (!prevId) {
      setStepParam(null);
      resetFormData();
      setProgress(20);
      window.history.pushState(null, "", "/");
      return;
    }

    const currentPathUrl = decodeURIComponent(
      new URL(window.location.href).pathname
    );
    const currentPath = currentPathUrl.split("/").filter(Boolean);
    const currentPathRest = currentPath.slice(0, -1).join("/");
    window.history.pushState(null, "", `/${currentPathRest}`);

    const prevForm = getNodeById(cases as any, prevId || "");
    setStepParam(prevId);

    setProgress((value) => value - 20);
    if (prevForm) return setFormData(prevForm);

    resetFormData();
  }, [setProgress, setFormData, resetFormData, stepParam]);

  useEffect(() => {
    if (!stepParam) return;

    const historials = getHistoryNodeById(cases as any, stepParam, "id");
    if (historials.length) {
      historials.forEach((node) => {
        if (!node.id) return;
        setHistoryStep(node);
      });
    }

    const foundNode = getNodeById(cases as any, stepParam, "id");
    if (!foundNode) return;

    setFormData(foundNode);
    setShow(true);
  }, [stepParam, setFormData, setShow]);

  return (
    <div
      className={cn(
        "flex flex-col mx-auto",
        isStepValid ? "gap-12" : "gap-4",
        ["not-found", "no-viable"].includes(renderSpecialView?.type || "")
          ? "max-w-[768px]"
          : "max-w-[992px]"
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
            <NavigationButtons
              renderSpecialView={renderSpecialView!}
              goBack={goBack}
              goToStart={goToStart}
            />
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
            renderSpecialView={renderSpecialView}
            show={show}
            formData={formData}
            historySteps={historySteps}
            goToStep={goToStep}
            goBack={goBack}
            goToStart={goToStart}
          />
        </div>
      </div>
    </div>
  );
}
