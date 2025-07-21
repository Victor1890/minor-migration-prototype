import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card, CardContent } from "@/components/ui/card";
import type { HierarchyNode } from "@/data";
import { COST_DATA } from "@/data/documentation-data";
import { STEP_TO_REQUIRED_SERVICE } from "@/data/documentation-data/service";
import { AlertCircleIcon, CircleMinus, CirclePlus } from "lucide-react";
import { isValidElement, useMemo, useState } from "react";
import { Wiki } from "../Wiki";

interface Document {
  label: string;
  details: string | string[];
}

interface Data {
  documents: Document[];
  process_online: Document[];
}

interface DocAccordionProps {
  formData: HierarchyNode;
}

export function DocAccordion({ formData }: DocAccordionProps) {
  const [selected, setSelected] = useState<string>("");

  const { documents, process_online } = useMemo<Data>(() => {
    return formData.children.reduce((acc, item: any) => {
      if (!acc["documents"]) acc["documents"] = [];
      if (!acc["process_online"]) acc["process_online"] = [];

      const document = item?.["document"];
      const processOnline = item?.["process_online"];

      if (document) {
        acc["documents"].push({
          label: document?.["Requisitos"] || "",
          details: document?.["Notas requisitos"] || "",
        });
      }

      if (processOnline) {
        acc["process_online"].push({
          label: processOnline?.["Paso a paso"] || "",
          details: processOnline?.["Notas paso a paso"] || "",
        });
      }

      return acc;
    }, {} as Data);
  }, [formData]);

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="mandatory-documents"
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
          <div className="flex flex-col gap-4">
            <span className="font-semibold text-[#1E293B] text-xl">
              Requisitos
            </span>
            <div className="flex flex-col gap-4">
              {documents?.map((doc, idx) => {
                if (!doc.label) return null;
                return (
                  <div key={doc.label}>
                    <p className="font-semibold text-[#1E293B] text-base">
                      {idx + 1}. <Wiki value={doc.label} />
                    </p>
                    {Array.isArray(doc.details) ? (
                      <ul className="list-disc list-inside space-y-1 text-sm font-normal text-[#475569] ml-4">
                        {doc.details?.map((desc, descIndex) => (
                          <li key={descIndex}>
                            <Wiki value={desc} />
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm font-normal text-[#475569]">
                        <Wiki value={doc.details} />
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
            <Alert className="bg-white border-white relative grid-cols-none">
              <div className="absolute top-3 left-3">
                <AlertCircleIcon className="w-6 h-6 text-[#0076DE]" />
              </div>

              <div className="ml-8 space-y-1">
                <div className="font-semibold">
                  Información a tener en cuenta:
                </div>
                <AlertDescription>
                  <ul className="list-disc list-inside space-y-1 text-sm text-[#1E293B]">
                    {[
                      "El permiso tiene vigencia de 90 días.",
                      "La autorización de viaje solo puede tramitarse en República Dominicana.",
                      "Si el menor tiene custodia exclusiva por sentencia, esta debe presentarse además del permiso judicial (si aplica).",
                    ].map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </div>
            </Alert>
            <div className="flex flex-col gap-4">
              <span className="font-semibold text-[#1E293B] text-xl">
                Costo
              </span>
              <Card className="bg-white border-none rounded-[8px] shadow-none">
                <CardContent className="p-0">
                  <div className="bg-white rounded-lg p-6 pt-0">
                    <div className="w-full py-6">
                      <div className="grid grid-cols-2 gap-4 border-b border-gray-200 pb-4 mb-4">
                        <div className="text-left text-base font-semibold text-[#031942] py-4">
                          Concepto
                        </div>
                        <div className="text-right font-semibold text-[#031942] py-4">
                          Precio
                        </div>
                      </div>

                      <div className="space-y-4">
                        {COST_DATA.map((item, index) => (
                          <div
                            key={index}
                            className="grid grid-cols-2 gap-4 py-4 border-b border-gray-100 last:border-b-0"
                          >
                            <div className="py-4 text-base text-[#031942] font-semibold">
                              {item.concepto}
                            </div>
                            <div className="py-4 text-base text-right font-normal text-[#475569]">
                              {item.precio}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="process-online"
        className="bg-[#F1F5F9] border-none rounded-lg"
      >
        <AccordionTrigger
          disableArrow
          className="font-semibold px-5 py-3 hover:no-underline text-2xl flex items-center justify-start gap-2"
        >
          {selected === "process-online" ? (
            <CircleMinus className="shrink-0 translate-y-0.5 transition-transform duration-200" />
          ) : (
            <CirclePlus className="shrink-0 translate-y-0.5 transition-transform duration-200 " />
          )}
          Pasos para solicitar el permiso de viaje del menor
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-6">
          <div className="space-y-4">
            <div className="space-y-4">
              {STEP_TO_REQUIRED_SERVICE?.map((process, idx) => {
                if (!process.label) return null;
                return (
                  <div key={process.label}>
                    <p className="font-semibold text-[#1E293B] text-base">
                      {idx + 1}. <Wiki value={process.label} />
                    </p>

                    {Array.isArray(process.details) ? (
                      process.details.map((detail, detailIdx) => {
                        if (
                          typeof detail === "object" &&
                          detail !== null &&
                          "label" in detail &&
                          "list" in detail
                        ) {
                          return (
                            <div key={detailIdx} className="mb-2">
                              <p className="text-sm text-[#1E293B]">
                                {isValidElement(detail.label) ? (
                                  detail.label
                                ) : (
                                  <Wiki value={detail.label as string} />
                                )}
                              </p>
                              <ul className="list-disc list-inside space-y-1 text-sm font-normal text-[#475569] ml-4">
                                {detail.list.map((item, itemIdx) => (
                                  <li key={itemIdx}>
                                    <Wiki value={item} />
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        }
                        // If detail is a string (array of strings)
                        return (
                          <div
                            key={detailIdx}
                            className="list-disc list-inside space-y-1 text-sm font-normal text-[#475569]"
                          >
                            <li>
                              <Wiki value={detail} />
                            </li>
                          </div>
                        );
                      })
                    ) : process.details ? (
                      isValidElement(process.details) ? (
                        process.details
                      ) : (
                        <p className="text-sm font-normal text-[#475569]">
                          <Wiki value={process.details as string} />
                        </p>
                      )
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
