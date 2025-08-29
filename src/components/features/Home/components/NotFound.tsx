import { useFormDataStore } from "@/store/form-data.store";
import { useProgressBarStore } from "@/store/progress-bar.store";
import { useEffect } from "react";
import { ContactInfo } from "./ContactInfo";

export function NotFound() {
  const { historySteps, formData } = useFormDataStore();
  const { setProgress } = useProgressBarStore();

  useEffect(() => {
    console.log("formData: ", formData);
    setProgress(100);
  }, [setProgress]);

  return (
    <div className="w-full flex flex-col gap-8">
      <section
        aria-labelledby="info-title"
        className="p-6 rounded-[8px] flex flex-col gap-4 bg-[#EFF7FF]"
      >
        <h2 id="info-title" className="font-semibold text-[18px]">
          Según la información que nos indicaste, el menor:
        </h2>

        <ul
          aria-label="Lista de pasos seleccionados"
          className="list-disc font-semibold text-[16px] ml-6"
        >
          {historySteps.map((item) => (
            <li key={item.slug}>{item?.label}</li>
          ))}
        </ul>

        <p>Aun así, debes llevar los documentos requeridos para el viaje:</p>
        {/* <p>
          En tu caso,{" "}
          <strong>
            no es necesario solicitar el permiso de salida para el menor
          </strong>
          . Aun así, te recomendamos llevar los documentos básicos del menor
          (como pasaporte, acta de nacimiento y visa si corresponde), ya que
          podrían ser solicitados por Migración u otras autoridades al momento
          del viaje.
        </p> */}

        <ul
          aria-label="Lista de pasos seleccionados"
          className="list-disc font-semibold text-[16px] ml-6"
        >
          {[
            "Pasaporte",
            "Acta de nacimiento",
            "Visa (en caso de que sea necesaria)",
          ].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <ContactInfo />
    </div>
  );
}
