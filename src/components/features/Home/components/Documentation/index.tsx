import { Divider } from "@/components/ui/divider";
import { DocAccordion } from "./doc-accordion";
import { useFormDataStore } from "@/store/form-data.store";
import { useProgressBarStore } from "@/store/progress-bar.store";
import { useEffect } from "react";

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
          De acuerdo con los datos proporcionados, el menor:
        </h2>
        <ul className="list-disc pl-6">
          {historySteps.map((item) => (
            <li className="font-semibold text-base" key={item.slug}>
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      <Divider className="my-12" />

      <DocAccordion formData={formData} />
    </div>
  );
}
