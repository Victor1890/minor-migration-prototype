import { Card, CardContent } from "@/components/ui/card";
import { Container } from "./container";
import { NuqsAdapter } from "nuqs/adapters/react";
import type { HierarchyNode } from "@/data";
import { useFormDataStore } from "@/store/form-data.store";
import { useEffect, useState } from "react";
import { Placeholder } from "./components/Placeholder";

interface HomePageProps {
  node: HierarchyNode;
}

export function HomePage({ node }: HomePageProps) {
  const { setFormData } = useFormDataStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setFormData(node);
  }, [node]);

  useEffect(() => {
    const timeOut = setTimeout(() => setLoading(false), 1 * 100);
    return () => clearTimeout(timeOut);
  }, []);

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
                <CardContent className="w-full p-0 px-2 lg:px-0">
                  {loading ? <Placeholder /> : <Container />}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </NuqsAdapter>
  );
}
