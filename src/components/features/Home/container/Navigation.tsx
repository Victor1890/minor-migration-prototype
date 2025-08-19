import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoveLeft } from "lucide-react";
import type { JSX } from "react";

interface NavigationButtonsProps {
  renderSpecialView?: {
    title: string;
    description: string;
    render: JSX.Element;
    type: string;
  };
  goBack?: () => void;
  goToStart?: () => void;
}

export function NavigationButtons({
  renderSpecialView,
  goBack,
  goToStart,
}: NavigationButtonsProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-1 lg:gap-8 w-full">
      <div className="flex justify-start items-center gap-4 w-full">
        <Button
          variant={"outline"}
          className="rounded-full flex gap-2 items-center text-[#0072D7] border-[#0072D7] max-w-full lg:max-w-[163px] w-full hover:text-white hover:bg-[#0072D7] cursor-pointer"
          onClick={() => {
            goBack?.();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <MoveLeft />
          Paso anterior
        </Button>
        {renderSpecialView?.title && (
          <Button
            variant={"ghost"}
            className="rounded-full flex gap-2 items-center text-[#0072D7] max-w-full lg:max-w-[163px] w-full hover:text-[#0072D7] cursor-pointer"
            onClick={() => {
              goToStart?.();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Volver al inicio
          </Button>
        )}
      </div>

      {renderSpecialView?.type !== "no-viable" && (
        <Button
          asChild
          variant={"outline"}
          className={cn(
            "rounded-full flex gap-2 items-center max-w-full lg:max-w-[257px] w-full cursor-pointer",
            "text-[#0072D7] border-[#0072D7] hover:text-white hover:bg-[#0072D7] cursor-pointer",
            renderSpecialView?.type === "documentation" &&
              "bg-[#0072D7] hover:bg-[#0072D7]/90 border-none text-white"
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
  );
}
