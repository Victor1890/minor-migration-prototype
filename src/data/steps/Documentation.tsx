import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import { DETAILS_OF_PROCESS_DOCUMENTATION } from "..";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { documentationData } from "../documentation-data";
import { DOCUMENTATION_DATA } from "../documentation-data/info-data";
import { Divider } from "@/components/ui/divider";
import type { IFormData } from "@/components/features/Home/hooks/useFormNavigation";
import { useMemo } from "react";

const { title, illustration, additionalNote, sections } = documentationData;

interface DocumentationProps {
  payload: IFormData;
}

export function Documentation({ payload }: DocumentationProps) {
  const { required, onlineServiceSteps } = useMemo(() => {
    const keyMigrationMinor = payload.status_migration_minor || "";
    const keyTravelingWithMinor = payload.status_traveling_minor || "";
    const keyConditionPresent = payload.special_conditions_present;

    const data =
      DOCUMENTATION_DATA[keyMigrationMinor]?.[keyTravelingWithMinor]?.[
        keyConditionPresent
      ];

    return data;
  }, [payload]);

  return (
    <Card className="border-0 shadow-none">
      <CardContent className="p-0 space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>

          <div className="mb-6 flex justify-center ">
            <img
              src={illustration.src}
              alt={illustration.alt}
              className="rounded-lg grayscale h-full shadow-lg"
            />
          </div>

          <ol className="space-y-4 list-decimal list-outside ml-5">
            {required.map((doc, index) => (
              <li key={index}>
                <p className="font-semibold text-[18px]">{doc.title}</p>
                <ul className="list-disc text-[#4B5563] space-y-1 text-base">
                  {doc.details?.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      dangerouslySetInnerHTML={{ __html: detail }}
                    />
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-6">
            <div className="flex gap-2">
              <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[18px]">
                  {additionalNote.title}
                </p>
                <ul className="list-disc list-outside ml-5 text-base text-muted-foreground space-y-1 mt-2">
                  {additionalNote.details.map((note, index) => (
                    <li key={index}>{note}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Divider className="my-6" />

        <Accordion
          type="single"
          collapsible
          defaultValue={sections.detailsOfProcess.defaultValue}
        >
          <AccordionItem value={sections.detailsOfProcess.defaultValue}>
            <AccordionTrigger className="font-semibold text-2xl text-[#020617] cursor-pointer">
              {sections.detailsOfProcess.title}
            </AccordionTrigger>
            <AccordionContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DETAILS_OF_PROCESS_DOCUMENTATION.map((item) => (
                <Card className={cn("flex flex-col", "border")} key={item.slug}>
                  <CardHeader className="flex flex-col items-start">
                    <item.icon />
                    <CardTitle className="text-left font-semibold text-[18px]">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardFooter className="bg-[#F9FAFB] px-8 py-4 rounded-b-xl grow">
                    <p className="text-base font-normal text-[#4B5563]">
                      {typeof item.description === "string" && (
                        <span
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      )}
                      {Array.isArray(item.description) && (
                        <ul className="space-y-1">
                          {item.description.map((desc, index) => (
                            <li
                              key={index}
                              dangerouslySetInnerHTML={{ __html: desc }}
                            />
                          ))}
                        </ul>
                      )}
                    </p>
                  </CardFooter>
                </Card>
              ))}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value={sections.onlineServiceSteps.value}>
            <AccordionTrigger className="font-semibold text-2xl text-[#020617] cursor-pointer">
              {sections.onlineServiceSteps.title}
            </AccordionTrigger>
            <AccordionContent>
              <ol className="space-y-6 list-decimal list-outside ml-5">
                {onlineServiceSteps.map((step, index) => {
                  return (
                    <li key={index}>
                      <p className="font-semibold text-[18px]">{step.title}</p>
                      {step.alert && (
                        <Alert className="mt-2 bg-amber-50 border-amber-200">
                          <AlertDescription className="text-black">
                            <p className="font-semibold mb-2 text-[20px]">
                              {step.alert.title}
                            </p>
                            <ul className="list-disc list-outside ml-5 space-y-1 text-base">
                              {step.alert.details.map((detail, detailIndex) => {
                                const isLastItem =
                                  detailIndex ===
                                  step.alert!.details.length - 1;
                                return (
                                  <li key={detailIndex}>
                                    {detail}
                                    {step.alert!.nestedDetails &&
                                      isLastItem && (
                                        <ul className="list-disc list-outside ml-5 space-y-1 mt-1">
                                          {step.alert!.nestedDetails.map(
                                            (nestedDetail) =>
                                              nestedDetail.items.map(
                                                (nestedItem, nestedIndex) => (
                                                  <li key={nestedIndex}>
                                                    {nestedItem}
                                                  </li>
                                                )
                                              )
                                          )}
                                        </ul>
                                      )}
                                  </li>
                                );
                              })}
                            </ul>
                          </AlertDescription>
                        </Alert>
                      )}
                      {step.details && step.details.length > 0 && (
                        <ul className="list-disc list-outside ml-5 text-base text-muted-foreground space-y-1 mt-1">
                          {!step.details?.length
                            ? null
                            : step.details?.map((detail, detailIndex) => {
                                const isLastDetail =
                                  detailIndex === step.details!.length - 1;
                                return (
                                  <li key={detailIndex}>
                                    {detail}
                                    {step.subDetails && isLastDetail && (
                                      <ul className="list-disc list-outside ml-5 space-y-1 mt-1">
                                        {step.subDetails.map((subDetail) =>
                                          subDetail.items.map(
                                            (subItem, subIndex) => (
                                              <li key={subIndex}>{subItem}</li>
                                            )
                                          )
                                        )}
                                      </ul>
                                    )}
                                  </li>
                                );
                              })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Divider className="mt-8 mb-6" />
      </CardContent>
    </Card>
  );
}
