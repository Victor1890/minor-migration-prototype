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
import { Button } from "@/components/ui/button";

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

  const goToStart = useCallback(() => {
    setStepParam(null);
    resetFormData();
    setProgress(20);
    window.history.pushState(null, "", "/");
  }, [setStepParam]);

  const goToStep = useCallback(
    (id: string) => {
      const foundNode = getNodeById(cases, id, "id");

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

    const foundNode = getNodeById(cases, stepParam, "id");
    if (!foundNode) return;

    setFormData(foundNode);
    setShow(true);
  }, [stepParam, setFormData, setShow]);

  return (
    <div
      className={cn(
        "flex flex-col mx-auto gap-4",
        ["not-found", "no-viable"].includes(renderSpecialView?.type || "")
          ? "max-w-[768px]"
          : "max-w-[992px]",
        !["not-found", "no-viable"].includes(renderSpecialView?.type || "") &&
          formData.slug &&
          "fade-in duration-500 animate-in"
      )}
    >
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
            renderSpecialView?.type === "not-found" && "w-[60%]",
            renderSpecialView?.type === "documentation" && "max-w-[700px]",
            renderSpecialView?.type === "not-found" && "max-w-[768px]"
          )}
        >
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-9 lg:gap-2">
            <h1 className="font-bold text-[28px] text-[#1E293B] text-left">
              {renderSpecialView?.title || navigationContext.title}
            </h1>
            {!historySteps.length && (
              <Button
                asChild
                variant={"outline"}
                className={cn(
                  "rounded-full flex gap-2 items-center max-w-full lg:max-w-[257px] w-full cursor-pointer",
                  renderSpecialView?.type === "documentation"
                    ? "bg-[#0072D7] hover:bg-[#0072D7]/90 border-none hover:text-white"
                    : "text-[#0072D7] hover:text-[#0072D7] border-[#0072D7]"
                )}
              >
                <a
                  href="https://servicios.migracion.gob.do/"
                  rel="noopener noreferrer"
                >
                  Ir al portal para iniciar la solicitud
                </a>
              </Button>
            )}
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
  );
}
