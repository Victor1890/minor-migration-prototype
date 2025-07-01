import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import { BRANCH_OFFICE_DATA } from "@/data/no-viable";

export function NoViable() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <p className="font-semibold text-[24px]">
          Puedes comunicarte con nosotros en nuestros canales digitales
        </p>
        <div className="flex flex-col gap-1">
          <p>
            <span className="font-bold">Teléfono:</span> (809) 508-2555 Ext.
            3890
          </p>
          <p>
            <span className="font-bold">Correo electrónico:</span>{" "}
            certificacionesmc@migracion.gob.do
          </p>
          <p>
            <span className="font-bold">Horario de atención:</span> Lunes a
            viernes, de 8:00 a m. a 4:00 p. m.
          </p>
        </div>
        <div className="flex flex-col">
          <p>También puedes visitar el portal oficial:</p>
          <a>https://servicios.migracion.gob.do</a>
        </div>
      </div>

      <Divider className="my-3" />

      <Accordion type="single" collapsible defaultValue="no-viable">
        {BRANCH_OFFICE_DATA.map((branch, index) => (
          <AccordionItem value={`branch-${index}`} key={index}>
            <AccordionTrigger className="font-semibold text-2xl text-[#020617] cursor-pointer">
              {branch.title}
            </AccordionTrigger>
            <AccordionContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {branch.data.map((item, idx) => (
                <Card
                  className="bg-[#F1F5F9] border-0 border-none rounded-[8px]"
                  key={idx}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-center flex-col">
                      <h2 className="text-xl font-bold text-gray-800">
                        {item.branch.label}
                      </h2>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {item.branch.address}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-2">
                        {item.time.label}
                      </h3>
                      {Array.isArray(item.time.desc) ? (
                        <ul className="list-disc pl-5">
                          {item.time.desc.map((desc, descIndex) => (
                            <li key={descIndex} className="text-gray-600">
                              {desc}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-600">{item.time.desc}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
