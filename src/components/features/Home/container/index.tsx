import { getNavigationContext, isRootLevel } from "@/data/navigation-context";
import { cn } from "@/lib/utils";
import { useFormDataStore } from "@/store/form-data.store";
import { ContentSection } from "./ContentSection";
import { NavigationButtons } from "./Navigation";
import { specialView } from "./SpecialView";
import { useProgressBarStore } from "@/store/progress-bar.store";
import { useQueryState } from "nuqs";
import { useCallback, useEffect } from "react";
import { getHistoryNodeById, getNodeById } from "@/utils/array";
import { DATA_DUMB } from "@/data";

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
  const { progress, setProgress } = useProgressBarStore();
  const isAtRoot = isRootLevel(formData.slug, historySteps.length);
  const navigationContext = getNavigationContext(formData.slug, isAtRoot);
  const renderSpecialView = specialView(formData);
  const [stepParam, setStepParam] = useQueryState<string | null>("paso", {
    history: "push",
    shallow: false,
    parse: (v) => v ?? null,
    serialize: (v) => v ?? "",
  });

  const goToStart = useCallback(() => setStepParam(null), [setStepParam]);

  const goToStep = useCallback(
    (id: string) => {
      console.log("goToStep", id);
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
      return;
    }

    const prevForm = getNodeById(cases as any, prevId || "");
    setStepParam(prevId);

    setProgress(progress - 20);
    if (prevForm) return setFormData(prevForm);

    resetFormData();
  }, [setProgress, setFormData, resetFormData, progress, stepParam]);

  useEffect(() => {
    if (!stepParam) return;

    const historials = getHistoryNodeById(cases as any, stepParam, "id");
    if (historials.length) {
      historials.forEach((node) => {
        if (!node.id) return;
        setHistoryStep(node);
      });
    }

    const foundNode = getNodeById(cases, stepParam, "id");
    if (!foundNode) return;

    setFormData(foundNode);
    setShow(true);
  }, [stepParam, setFormData, setShow]);

  return (
    <div className="flex flex-col mx-auto gap-4">
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
            "flex flex-col gap-1",
            renderSpecialView?.type === "not-found" && "w-[60%]"
          )}
        >
          <h1 className="font-bold text-[28px] text-[#1E293B] text-left">
            {renderSpecialView?.title || navigationContext.title}
          </h1>
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
  );
}
