import { ContactInfo } from "./ContactInfo";

export function NotFound() {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="p-6 rounded-[8px] flex flex-col gap-4 bg-[#EFF7FF]">
        <p className="font-semibold text-[18px]:">
          De acuerdo con los datos proporcionados, el menor:
        </p>
        <ul className="list-disc font-semibold text-[16px] ml-6">
          <li>Tiene nacionalidad dominicana únicamente</li>
          <li>El menor viajara con ambos padres</li>
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
