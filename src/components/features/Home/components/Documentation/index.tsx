// import { DETAILS_OF_PROCESS_DOCUMENTATION } from "..";
import { Divider } from "@/components/ui/divider";
// import type { IFormData } from "@/components/features/Home/hooks/useFormNavigation";
import { DocAccordion } from "./doc-accordion";

export function Documentation() {
  return (
    <div className="">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">
          De acuerdo con los datos proporcionados, el menor:
        </h2>
        <ul className="list-disc pl-6">
          {[
            "Tiene nacionalidad dominicana únicamente",
            "El menor viajara con uno de sus padres",
            "No cuenta con la autorización de uno de los padres.",
          ].map((item) => (
            <li className="font-semibold text-base" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <Divider className="my-12" />

      <DocAccordion />
    </div>
  );
}
