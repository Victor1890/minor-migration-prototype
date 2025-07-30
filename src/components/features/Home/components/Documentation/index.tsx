import { Divider } from "@/components/ui/divider";
import { DocAccordion } from "./doc-accordion";
import { useFormDataStore } from "@/store/form-data.store";
import { useProgressBarStore } from "@/store/progress-bar.store";
import { useEffect } from "react";
import { LABEL_DETAILT_NOT_FOUND } from "@/data/step-icon";
import { NavigationButtons } from "../../container/Navigation";

export function Documentation() {
  const { formData, historySteps } = useFormDataStore();
  const { setProgress } = useProgressBarStore();

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
        />
      </div>

      <Divider className="my-12 mb-5" />
    </div>
  );
}
