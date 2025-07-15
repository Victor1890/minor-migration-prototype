import { Divider } from "@/components/ui/divider";
import { DocAccordion } from "./doc-accordion";
import { useFormDataStore } from "@/store/form-data.store";
import { useProgressBarStore } from "@/store/progress-bar.store";
import { useEffect } from "react";
import { LABEL_DETAILT_NOT_FOUND } from "@/data/step-icon";

export function Documentation() {
  const { formData, historySteps } = useFormDataStore();
  const { setProgress } = useProgressBarStore();

  useEffect(() => {
    setProgress(100);
  }, [setProgress]);

  return (
    <div className="">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">
          Según los datos que nos indicaste, el menor:
        </h2>
        <ul className="list-disc pl-6">
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
    </div>
  );
}
