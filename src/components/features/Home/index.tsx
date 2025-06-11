import { BreadcrumbIcon } from "@/components/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import { STEP_NOT_FOUND } from "@/data/steps";
import { MoveLeft } from "lucide-react";
import { useMemo } from "react";
import { ContactInfo } from "./ContactInfo";
import { useFormNavigation, type IFormData } from "./hooks/useFormNavigation";
import { NotFound } from "@/data/steps/NotFound";
import { FooterMessage } from "./FooterMessage";

export function HomePage() {
  const {
    shouldShowStepNotFound,
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
    console.log("Final form data:", formData);
  };

  return (
    <section className="relative">
      <div className="absolute w-full lg:h-[55vh] h-[85vh] bg-ps-background z-0" />
      <div className="layout-container relative">
        <div className="min-[190px]:flex h-full">
          <div
            className={
              "flex-1 relative p-0 min-[550px]:px-5 top-12 flex min-[850px]:flex-row md:flex-nowrap flex-wrap flex-col justify-center md:items-start items-center min-[550px]:gap-5 mx-auto"
            }
          >
            <Card className="gap-2 w-full h-full flex-1 overflow-hidden p-0 rounded-none shadow-md border-none min-[550px]:rounded-[8px] min-[550px]:border min-[550px]:shadow-custom-lg min-h-full flex flex-col ">
              <CardHeader className="px-6 lg:px-8 pt-12 lg:pt-16 md:flex-row">
                <Breadcrumb className="w-full">
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

                {(currentStepIndex > 0 || shouldShowStepNotFound) && (
                  <div className="pb-6 w-full flex justify-end gap-6">
                    <Button
                      variant={"outline"}
                      className="rounded-full flex gap-2 items-center bg-[#FAFAFA] border-none"
                      onClick={
                        shouldShowStepNotFound
                          ? clearFormData
                          : goToPreviousStep
                      }
                    >
                      <MoveLeft />
                      Regresar
                    </Button>
                    {isLastStep && (
                      <Button
                        variant={"outline"}
                        className="rounded-full flex gap-2 items-center bg-[#003876] text-white hover:text-white hover:bg-[#003876]/90 border-none"
                        onClick={handleSubmit}
                      >
                        Iniciar el trámite
                      </Button>
                    )}
                  </div>
                )}
              </CardHeader>
              <CardContent className="px-6 lg:px-8 w-full py-0 m-0 flex-1">
                {shouldShowStepNotFound ? (
                  <NotFound />
                ) : (
                  <>
                    <div className="flex flex-col gap-1">
                      <h1 className="font-bold text-[28px] text-[#020617]">
                        {currentStep.title}
                      </h1>
                      <p className="text-base font-normal text-[#727272]">
                        {currentStep.description}
                      </p>
                    </div>
                    <Divider className="my-6" />{" "}
                    <div className="pb-6 w-full">
                      <CurrentStepComponent
                        value={(() => {
                          if (!formData) return "";
                          if (currentStepIndex === 0) {
                            return formData?.status_migration_minor || "";
                          }

                          if (
                            formData?.status_migration_minor ===
                            "nacionalidad-dominicana-unicamente"
                          ) {
                            if (currentStepIndex === 1) {
                              return formData?.status_traveling_minor || "";
                            } else if (currentStepIndex === 2) {
                              return formData?.special_conditions_present || "";
                            }
                          } else {
                            if (currentStepIndex === 1) {
                              return formData?.minor_stayed_over_6_months || "";
                            } else if (currentStepIndex === 2) {
                              return formData?.status_traveling_minor || "";
                            } else if (currentStepIndex === 3) {
                              return formData?.special_conditions_present || "";
                            }
                          }

                          return "";
                        })()}
                        payload={(formData || {}) as IFormData}
                        setValue={(value) => {
                          if (currentStepIndex === 0) {
                            updateFormData({ status_migration_minor: value });
                          }

                          if (
                            formData?.status_migration_minor ===
                            "nacionalidad-dominicana-unicamente"
                          ) {
                            if (currentStepIndex === 1) {
                              updateFormData({
                                status_traveling_minor: value,
                              });
                            } else if (currentStepIndex === 2) {
                              updateFormData({
                                special_conditions_present: value,
                              });
                            }
                          } else {
                            if (currentStepIndex === 1) {
                              updateFormData({
                                minor_stayed_over_6_months: value,
                              });
                            } else if (currentStepIndex === 2) {
                              updateFormData({
                                status_traveling_minor: value,
                              });
                            } else if (currentStepIndex === 3) {
                              updateFormData({
                                special_conditions_present: value,
                              });
                            }
                          }

                          goToNextStep();
                        }}
                      />
                    </div>
                  </>
                )}
                {isLastStep && (
                  <div className="pb-6 w-full flex justify-end gap-6">
                    <Button
                      variant={"outline"}
                      className="rounded-full flex gap-2 items-center bg-[#FAFAFA] border-none"
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
                      Iniciar el trámite
                    </Button>
                  </div>
                )}
              </CardContent>
              {!isLastStep &&
                currentStep.message &&
                !shouldShowStepNotFound && (
                  <CardFooter className="flex items-center justify-center pt-3 pb-10 text-center">
                    <FooterMessage />
                  </CardFooter>
                )}
              {isLastStep && (
                <div className="flex flex-col items-start justify-center p-6 pt-0 gap-5">
                  <Divider className="my-8" />
                  <ContactInfo />
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
