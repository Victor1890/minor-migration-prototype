import { useFormDataStore } from "@/store/form-data.store";
import { ContactInfo } from "./ContactInfo";
import { useEffect } from "react";
import { useProgressBarStore } from "@/store/progress-bar.store";
import { LABEL_DETAILT_NOT_FOUND } from "@/data/step-icon";

export function NotFound() {
  const { historySteps } = useFormDataStore();
  const { setProgress } = useProgressBarStore();

  useEffect(() => {
    setProgress(100);
  }, [setProgress]);

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="p-6 rounded-[8px] flex flex-col gap-4 bg-[#EFF7FF]">
        <p className="font-semibold text-[18px]:">
          Según la información que nos indicaste, el menor:
        </p>
        <ul className="list-disc font-semibold text-[16px] ml-6">
          {historySteps.map((item) => (
            <li key={item.slug}>
              {item?.slug
                ? LABEL_DETAILT_NOT_FOUND[item?.slug]?.label
                : item.label}
            </li>
          ))}
        </ul>
        <p>
          En tu caso,{" "}
          <span className="font-semibold">
            no es necesario solicitar el permiso de salida para el menor
          </span>
          . Aun así, te recomendamos llevar los documentos básicos del menor
          (como pasaporte, acta de nacimiento y visa si corresponde), ya que
          podrían ser solicitados por Migración u otras autoridades al momento
          del viaje.
        </p>
      </div>

      <ContactInfo />
    </div>
  );
}
