import { BackIconCustomHeader } from "@/components/icons/BackIconCustomHeader";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { memo, useCallback, useMemo, useState } from "react";
import { Label } from "@/components/ui/label";
import { ContentHeaderInfo } from "./content";

interface GovernmentOfficialHeaderProps {
  theme?: "dark" | "light";
}

export const GovernmentOfficialHeader = memo(function ({
  theme = "dark",
}: GovernmentOfficialHeaderProps) {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const handleToggle = useCallback(() => setIsToggled((prev) => !prev), []);

  return (
    <div
      role="complementary"
      className={cn(
        "official-header text-sm border-b border-gray-300",
        theme === "dark" ? "bg-ps-background text-white" : "bg-white text-black"
      )}
    >
      <div className="layout-container">
        {useMemo(
          () => (
            <div className="p-3 flex justify-between">
              <div className="flex items-center justify-start gap-1 md:gap-3 w-auto">
                <div className="flex items-center justify-between gap-2">
                  <img
                    width={18}
                    height={12}
                    className="flag h-3"
                    src="/logos/dominican-flag.svg"
                    alt="Bandera de la República Dominicana"
                  />
                  <p className="text-[9px] lg:text-[12px]">
                    Esta es una web oficial del Gobierno de la República
                    Dominicana
                  </p>
                </div>

                <ChevronDown
                  aria-hidden="true"
                  className="size-4 md:hidden"
                  onClick={handleToggle}
                />

                <Label
                  className={cn(
                    "hidden gap-1",
                    "md:flex items-center justify-center font-semibold cursor-pointer leading-normal md:text-[11px]",
                    theme === "dark" ? "text-[#9FD0FD]" : "text-[#003670]"
                  )}
                  onClick={handleToggle}
                >
                  <span className="text-[9px] lg:text-[12px] underline">
                    Así es como puedes saberlo
                  </span>
                  <ChevronDown className="size-4 md:size-3" />
                </Label>
              </div>

              <div className="hidden md:flex justify-end">
                <a
                  role="link"
                  href="https://migracion.gob.do/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 nowrap"
                >
                  <BackIconCustomHeader className="size-4" />
                  <p className="text-[9px] text-nowrap lg:text-[14px]">
                    Retornar a la página de migración
                  </p>
                </a>
              </div>
            </div>
          ),
          []
        )}
        {isToggled && <ContentHeaderInfo theme={theme} />}
      </div>
    </div>
  );
});
