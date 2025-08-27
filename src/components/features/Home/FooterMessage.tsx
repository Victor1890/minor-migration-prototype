import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useFormDataStore } from "@/store/form-data.store";

export const FooterMessage = () => {
  const { historySteps } = useFormDataStore();

  return (
    <div className="w-full text-[#031942] font-normal text-base flex flex-col gap-4">
      <div className="flex items-start justify-between w-full flex-col-reverse lg:item-center lg:flex-row">
        <p>
          ¿No encuentras el caso del menor? Comunícate con la Dirección de
          Migración:
        </p>
        {!historySteps.length && (
          <Button
            asChild
            variant={"outline"}
            className={cn(
              "rounded-full flex gap-2 items-center max-w-full lg:max-w-[257px] w-full cursor-pointer",
              "text-[#0072D7] hover:text-[#0072D7] border-[#0072D7]"
              // renderSpecialView?.type === "documentation"
              //   ? "bg-[#0072D7] hover:bg-[#0072D7]/90 border-none hover:text-white"
              //   : "text-[#0072D7] hover:text-[#0072D7] border-[#0072D7]"
            )}
          >
            <a
              href="https://servicios.migracion.gob.do/es"
              rel="noopener noreferrer"
            >
              Ir al portal para iniciar la solicitud
            </a>
          </Button>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <p>
          <a href="tel:+18095082555" className="no-underline hover:underline">
            📞 Tel. (809) 508-2555 ext. 3890
          </a>
        </p>
        <p>
          <a
            href="mailto:certificacionesmc@migracion.gob.do"
            className="no-underline hover:underline"
          >
            ✉️ certificacionesmc@migracion.gob.do
          </a>
        </p>
        <p>
          <a
            href="https://www.google.com/maps/place/Direcci%C3%B3n+General+de+Migraci%C3%B3n/@18.4446532,-69.9629156,14z/data=!4m6!3m5!1s0x8ea5626b93b642a9:0x7a0ecf8f60e1e2db!8m2!3d18.4446532!4d-69.9268667!16s%2Fg%2F1tfwr06f?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:underline"
          >
            📍 Autopista 30 de Mayo, Santo Domingo
          </a>
        </p>
      </div>
    </div>
  );
};
