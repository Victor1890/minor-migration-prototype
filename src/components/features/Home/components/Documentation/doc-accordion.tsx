import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { HierarchyNode } from "@/data";
import { COST_DATA } from "@/data/documentation-data";
import { useFormDataStore } from "@/store/form-data.store";
import { CircleMinus, CirclePlus } from "lucide-react";
import { useMemo, useState } from "react";

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
          <div className="space-y-4">
            <div className="space-y-4">
              {documents?.map((doc, idx) => {
                if (!doc.label) return null;
                return (
                  <div key={doc.label}>
                    <span className="font-semibold text-slate-800 text-base">
                      {idx + 1}. {doc.label}
                    </span>
                    {Array.isArray(doc.details) ? (
                      <ul className="list-disc list-inside space-y-1 text-sm font-normal text-[#475569] ml-4">
                        {doc.details?.map((desc, descIndex) => (
                          <li
                            key={descIndex}
                            dangerouslySetInnerHTML={{ __html: desc }}
                          />
                        ))}
                      </ul>
                    ) : (
                      <p
                        className="text-sm font-normal text-[#475569]"
                        dangerouslySetInnerHTML={{ __html: doc.details }}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* <Alert className="bg-white border-white relative grid-cols-none">
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
            </Alert> */}
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
          Costo
        </AccordionTrigger>
        <AccordionContent className="grid grid-cols-1 gap-4 p-6">
          <Card className="bg-white border-none rounded-[8px] shadow-none">
            <CardContent className="p-0">
              <div className="bg-white rounded-lg p-6">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-gray-200 hover:bg-transparent cursor-default">
                      <TableHead className="text-left text-base font-semibold text-[#031942] py-4">
                        Concepto
                      </TableHead>
                      <TableHead className="text-right font-semibold text-[#031942] py-4">
                        Precio
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {COST_DATA.map((item) => (
                      <TableRow
                        key={item.concepto}
                        className="border-b border-gray-100 last:border-b-0 hover:bg-transparent cursor-default"
                      >
                        <TableCell className="py-4 text-base text-[#031942] font-semibold">
                          {item.concepto}
                        </TableCell>
                        <TableCell className="py-4 text-base text-right font-normal text-[#475569]">
                          {item.precio}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
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
          Pasos para iniciar la solicitud del permiso en línea
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-6">
          <div className="space-y-4">
            <div className="space-y-4">
              {process_online?.map((process, idx) => {
                if (!process.label) return null;
                return (
                  <div key={process.label}>
                    <span className="font-semibold text-slate-800 text-base">
                      {idx + 1}. {process.label}
                    </span>
                    {Array.isArray(process.details) ? (
                      <ul className="list-disc list-inside space-y-1 text-sm font-normal text-[#475569] ml-4">
                        {process.details?.map((desc, descIndex) => (
                          <li
                            key={descIndex}
                            dangerouslySetInnerHTML={{ __html: desc }}
                          />
                        ))}
                      </ul>
                    ) : (
                      <p
                        className="text-sm font-normal text-[#475569]"
                        dangerouslySetInnerHTML={{ __html: process.details }}
                      />
                    )}
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
