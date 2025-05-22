import { PadLock, WhiteHouseIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { memo } from "react";

interface ContentHeaderInfoProps {
  theme?: "dark" | "light";
}

export const ContentHeaderInfo = memo(({ theme }: ContentHeaderInfoProps) => (
  <div className="proves container mx-auto flex items-start gap-4 max-w-7xl flex-col md:flex-row pt-5 px-5">
    <div className="flex items-start gap-4 w-full md:w-2/5">
      <span
        className={cn(
          "icon flex items-center justify-center rounded-full w-10 p-2 mt-3 text-white",
          theme === "dark" ? "bg-[#0087FF]" : "bg-[#003670]"
        )}
      >
        <WhiteHouseIcon className="size-4" />
      </span>
      <div>
        <p
          className={cn(
            "subtitle font-semibold text-[12px]",
            theme === "dark" ? "text-white" : "text-[#003670]"
          )}
        >
          Los sitios web oficiales utilizan .gob.do, .gov.do o .mil.do
        </p>
        <p className="text-[12px]">
          Un sitio .gob.do, .gov.do o .mil.do significa que pertenece a una
          organización oficial del Estado dominicano.
        </p>
      </div>
    </div>
    <div className="flex items-start gap-4 w-full md:w-2/5">
      <span
        className={cn(
          "icon flex items-center justify-center rounded-full w-10 p-2 mt-3 text-white",
          theme === "dark" ? "bg-[#0087FF]" : "bg-[#003670]"
        )}
      >
        <PadLock className="size-4" />
      </span>
      <div>
        <p
          className={cn(
            "subtitle font-semibold text-[12px]",
            theme === "dark" ? "text-white" : "text-[#003670]"
          )}
        >
          Los sitios web oficiales .gob.do, .gov.do o .mil.do seguros usan HTTPS
        </p>
        <p className="text-[12px] pb-5">
          Un candado (🔒) o https:// significa que estás conectado a un sitio
          seguro dentro de .gob.do o .gov.do. Comparte información confidencial
          solo en los sitios seguros de .gob.do o gov.do.
        </p>
      </div>
    </div>
  </div>
));
