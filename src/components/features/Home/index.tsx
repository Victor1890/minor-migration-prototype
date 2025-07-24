import { Card, CardContent } from "@/components/ui/card";
import { Container } from "./container";
import { NuqsAdapter } from "nuqs/adapters/react";

export function HomePage() {
  return (
    <NuqsAdapter>
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
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </NuqsAdapter>
  );
}
