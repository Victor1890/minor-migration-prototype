import { ContactInfo } from "@/components/features/Home/ContactInfo";
import { WarningIcon } from "@/components/icons";
import { Divider } from "@/components/ui/divider";

export function NotFound() {
  return (
    <>
      <div className="flex flex-col gap-1">
        <div>
          <WarningIcon />
          <h1 className="font-bold text-[28px] text-[#020617]">
            No necesitas permiso para este caso
          </h1>
        </div>
        <p className="text-base font-normal text-[#727272]">
          Según la información que proporcionaste, el menor no necesita tramitar
          un permiso de salida. Aun así, te recomendamos llevar consigo los
          documentos personales básicos (pasaporte, acta de nacimiento y visa si
          aplica), ya que podrían ser solicitados por las autoridades al momento
          del viaje.
        </p>
      </div>
      <Divider className="my-6" />
      <div className="pb-6 w-full">
        <ContactInfo />
      </div>
    </>
  );
}
