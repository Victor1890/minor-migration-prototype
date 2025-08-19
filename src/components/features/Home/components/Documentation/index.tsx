import { Divider } from "@/components/ui/divider";
import { DocAccordion } from "./doc-accordion";
import { useFormDataStore } from "@/store/form-data.store";
import { useProgressBarStore } from "@/store/progress-bar.store";
import { useCallback, useEffect } from "react";
import { LABEL_DETAILT_NOT_FOUND } from "@/data/step-icon";
import { NavigationButtons } from "../../container/Navigation";
import { getNodeById } from "@/utils/array";
import { DATA_DUMB } from "@/data";
import { useQueryState } from "nuqs";

const { cases } = DATA_DUMB;

export function Documentation() {
  const { formData, historySteps, resetFormData, setFormData } =
    useFormDataStore();
  const { setProgress } = useProgressBarStore();

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
    setProgress(100);
  }, [setProgress]);

  return (
    <div className="fade-in duration-500 animate-in">
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold">
          Según los datos que nos indicaste, el menor:
        </h3>
        <ul
          className="list-disc pl-6"
          aria-label="Lista de pasos anteriores previamente completados"
        >
          {historySteps.map((item) => (
            <li className="font-semibold text-base" key={item.slug}>
              {item.slug
                ? LABEL_DETAILT_NOT_FOUND[item.slug]?.label || item.label
                : item.label}
            </li>
          ))}
        </ul>
      </div>

      <Divider className="my-12" />

      <DocAccordion formData={formData} />

      <div className="pt-12">
        <NavigationButtons
          renderSpecialView={{
            title: "Documentación",
            description:
              "Aquí tienes la documentación necesaria para continuar.",
            render: <Documentation />,
            type: "documentation",
          }}
          goBack={goBack}
          goToStart={goToStart}
        />
      </div>

      <Divider className="my-12 mb-5" />
    </div>
  );
}
