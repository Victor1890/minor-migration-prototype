import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
import { NotFound } from "@/data/steps/NotFound";
import { MoveLeft } from "lucide-react";
import { useMemo } from "react";
import { ContactInfo } from "./ContactInfo";
import { FooterMessage } from "./FooterMessage";
import { Container } from "./Container";

export function HomePage() {
  return (
    <section className="relative">
      <div className="absolute w-full lg:h-[55vh] z-0" />
      <div className="layout-container relative">
        <div className="min-[190px]:flex h-full">
          <div
            className={
              "flex-1 relative p-0 min-[550px]:px-5 top-12 flex min-[850px]:flex-row md:flex-nowrap flex-wrap flex-col justify-center md:items-start items-center min-[550px]:gap-5 mx-auto"
            }
          >
            <Card className="gap-2 w-full h-full flex-1 overflow-hidden p-0 rounded-none shadow-none border-none min-[550px]:rounded-[8px] min-[550px]:border min-h-full flex flex-col ">
              <CardContent className="px-6 lg:px-8 w-full py-0 m-0 flex-1">
                <Container />

                {/* {isLastStep && (
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
                )} */}
              </CardContent>
              {/* {!isLastStep &&
                currentStep.message &&
                !shouldShowStepNotFound && (
                  <CardFooter className="pt-5">
                    <FooterMessage />
                  </CardFooter>
                )}
              {isLastStep && (
                <div className="flex flex-col items-start justify-center p-6 pt-0 gap-5">
                  <Divider className="my-8" />
                  <ContactInfo />
                </div>
              )} */}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
