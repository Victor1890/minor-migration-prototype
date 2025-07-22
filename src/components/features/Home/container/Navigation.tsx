import { Button } from "@/components/ui/button";
import { DATA_DUMB } from "@/data";
import { cn } from "@/lib/utils";
import { useFormDataStore } from "@/store/form-data.store";
import { useProgressBarStore } from "@/store/progress-bar.store";
import { getNodeById } from "@/utils/array";
import { MoveLeft } from "lucide-react";
import type { JSX } from "react";

const { cases } = DATA_DUMB;

interface NavigationButtonsProps {
  renderSpecialView?: {
    title: string;
    description: string;
    render: JSX.Element;
    type: string;
  };
}

export function NavigationButtons({
  renderSpecialView,
}: NavigationButtonsProps) {
  const { popFromStack, setFormData, resetFormData } = useFormDataStore();

  const { setProgress, progress, resetProgress } = useProgressBarStore();

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-1 lg:gap-8 w-full">
      <div className="flex justify-start items-center gap-4 w-full">
        <Button
          variant={"outline"}
          className="rounded-full flex gap-2 items-center text-[#0072D7] border-[#0072D7] max-w-full lg:max-w-[163px] w-full hover:text-[#0072D7] cursor-pointer"
          onClick={() => {
            const prevId = popFromStack();
            const prevForm = getNodeById(cases as any, prevId || "");
            setProgress(progress - 20);
            if (prevForm) return setFormData(prevForm);
            resetFormData();
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
              resetFormData();
              resetProgress();
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
            renderSpecialView?.type === "documentation"
              ? "bg-[#0072D7] hover:bg-[#0072D7]/90 border-none hover:text-white"
              : "text-[#0072D7] hover:text-[#0072D7] border-[#0072D7]"
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
