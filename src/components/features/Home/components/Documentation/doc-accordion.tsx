import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import {
  DETAILS_OF_PROCESS_DOCUMENTATION,
  REQUERID_DOCUMENTS,
} from "@/data/documentation-data";
import { useFormDataStore } from "@/store/form-data.store";
import { AlertCircleIcon, CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";

export function DocAccordion() {
  const [selected, setSelected] = useState<string>("");
  // const { formData } = useFormDataStore();

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="documentos"
      className="space-y-4"
      onValueChange={(value) => setSelected(value)}
    >
      <AccordionItem
        value="mandatory-documents"
        className="bg-[#F1F5F9] border-none rounded-lg"
      >
        <AccordionTrigger
          disableArrow
          className="font-semibold px-5 py-3 hover:no-underline text-2xl flex items-center justify-start gap-2"
        >
          {selected === "mandatory-documents" ? (
            <CircleMinus className="shrink-0 translate-y-0.5 transition-transform duration-200" />
          ) : (
            <CirclePlus className="shrink-0 translate-y-0.5 transition-transform duration-200 " />
          )}
          Documentos obligatorios
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-6">
          <div className="space-y-4">
            <div className="space-y-4">
              {REQUERID_DOCUMENTS.map((doc, idx) => (
                <div key={doc.title}>
                  <span className="font-semibold text-slate-800 text-base">
                    {/* 1. Autorización judicial */}
                    {idx + 1}. {doc.title}
                  </span>
                  {doc.details?.length ? (
                    <ul className="list-disc list-inside space-y-1 text-sm font-normal text-[#475569] ml-4">
                      {doc.details?.map((desc, descIndex) => (
                        <li
                          key={descIndex}
                          dangerouslySetInnerHTML={{ __html: desc }}
                        />
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>

            <Alert className="bg-white border-white relative grid-cols-none">
              <div className="absolute top-3 left-3">
                <AlertCircleIcon className="w-6 h-6 " />
              </div>

              <div className="ml-8 space-y-1">
                <div className="font-semibold">Nota adicional</div>
                <AlertDescription>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>
                      El permiso de salida tiene una vigencia de 90 días desde
                      su emisión.
                    </li>
                    <li>
                      La autorización judicial solo puede ser tramitada en
                      República Dominicana.
                    </li>
                    <li>
                      Si el menor tiene custodia exclusiva otorgada por
                      sentencia, esta debe presentarse además del permiso
                      judicial (si aplica).
                    </li>
                  </ul>
                </AlertDescription>
              </div>
            </Alert>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="details-of-process"
        className="bg-[#F1F5F9] border-none rounded-lg"
      >
        <AccordionTrigger
          disableArrow
          className="font-semibold px-5 py-3 hover:no-underline text-2xl flex items-center justify-start gap-2"
        >
          {selected === "details-of-process" ? (
            <CircleMinus className="shrink-0 translate-y-0.5 transition-transform duration-200" />
          ) : (
            <CirclePlus className="shrink-0 translate-y-0.5 transition-transform duration-200 " />
          )}
          Detalles del proceso
        </AccordionTrigger>
        <AccordionContent className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
          {DETAILS_OF_PROCESS_DOCUMENTATION.map((item) => (
            <Card
              className="bg-white border-none rounded-[8px] shadow-none"
              key={item.slug}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-center flex-col">
                  <h2 className="text-xl font-bold text-gray-800">
                    {item.title}
                  </h2>
                  <ul className="list-disc pl-5">
                    {item.desc.map((desc, descIndex) => (
                      <li
                        key={descIndex}
                        className="text-gray-600"
                        dangerouslySetInnerHTML={{ __html: desc }}
                      />
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
