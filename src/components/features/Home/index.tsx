import { BreadcrumbIcon } from "@/components/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import { MoveLeft } from "lucide-react";
import { useFormNavigation } from "./hooks/useFormNavigation";
import { useMemo, useState } from "react";
import { STEP_NOT_FOUND } from "@/data/steps";
import { CASE_LIST_NOT_ALLOWED } from "@/data";

export function HomePage() {
  const [notFoundStep, setNotFoundStep] = useState<
    typeof STEP_NOT_FOUND | null
  >(null);

  const {
    currentStep,
    currentStepIndex,
    formData,
    updateFormData,
    goToNextStep,
    goToPreviousStep,
    clearFormData,
    isLastStep,
  } = useFormNavigation();

  const CurrentStepComponent = useMemo(
    () => currentStep.component,
    [currentStep]
  );

  const handleSubmit = () => {
    // Redirect to the next step
    if (isLastStep) {
      // Handle the final submission
      console.log("Final form data:", formData);
      return;
    }

    // if (CASE_LIST_NOT_ALLOWED.includes(formData.case_of_minor)) {
    //   setNotFoundStep(STEP_NOT_FOUND);
    //   console.log("Final form data:", formData);
    //   return clearFormData();
    // }

    goToNextStep();
  };

  return (
    <section className="relative">
      <div className="layout-container relative">
        <div className="min-[190px]:flex h-full">
          <div
            className={
              "flex-1 mb-4 p-0 min-[550px]:px-5 top-12 flex min-[850px]:flex-row md:flex-nowrap flex-wrap flex-col justify-center md:items-start items-center min-[550px]:gap-5 mx-auto"
            }
          >
            <Card className="gap-2 w-full flex-1  p-0 rounded-none  border-none min-[550px]:rounded-[8px] min-[550px]:border min-[550px]:shadow-lg  flex flex-col">
              <div className="hidden lg:block top-0 left-0 w-full h-[20px] bg-[#003876] rounded-tl-[8px] rounded-tr-[8px]"></div>
              <CardHeader className="px-6 lg:px-8 pt-2 lg:pt-5 grid-rows-none">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbIcon />
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                      <BreadcrumbPage className="uppercase font-bold">
                        Viajar al exterior con un menor de edad
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </CardHeader>{" "}
              <CardContent className="px-6 lg:px-8 w-full py-0 m-0 flex-1">
                <div className="flex flex-col gap-1">
                  <h1 className="font-bold text-[28px] text-[#020617]">
                    {notFoundStep?.title || currentStep.title}
                  </h1>
                  <p className="text-base font-normal text-[#727272]">
                    {notFoundStep?.description || currentStep.description}
                  </p>
                </div>
                <Divider className="my-6" />{" "}
                <div className="pb-6 w-full">
                  {notFoundStep?.title ? null : (
                    <CurrentStepComponent
                      value={(() => {
                        switch (currentStepIndex) {
                          case 0:
                            return formData.status_migration_minor;
                          case 1:
                            return formData.has_minor_stayed_more_than_6_months;
                          case 2:
                            return formData.case_of_minor;
                          default:
                            return "";
                        }
                      })()}
                      setValue={(value) => {
                        switch (currentStepIndex) {
                          case 0:
                            updateFormData({ status_migration_minor: value });
                            goToNextStep();
                            break;
                          case 1:
                            updateFormData({
                              has_minor_stayed_more_than_6_months: value,
                            });
                            break;
                          case 2:
                            updateFormData({ case_of_minor: value });
                            break;
                        }
                      }}
                    />
                  )}
                </div>
                {(currentStepIndex > 0 || notFoundStep) && (
                  <div className="pb-6 w-full flex justify-end gap-6">
                    <Button
                      variant={"outline"}
                      className="rounded-full flex gap-2 items-center"
                      onClick={goToPreviousStep}
                      disabled={currentStepIndex === 0}
                    >
                      <MoveLeft />
                      Regresar
                    </Button>
                    <Button
                      variant={"outline"}
                      className="rounded-full flex gap-2 items-center bg-[#003876] text-white hover:text-white hover:bg-[#003876]/90 border-none"
                      onClick={handleSubmit}
                    >
                      {isLastStep ? "Iniciar el trámite" : "Continuar"}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
