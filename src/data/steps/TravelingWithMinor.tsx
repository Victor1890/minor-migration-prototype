import type { IFormData } from "@/components/features/Home/hooks/useFormNavigation";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { STATUS_TRAVELING_MINOR } from "@/data/status-traveling-minor";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

interface TravelingWithMinorProps {
  value: string;
  payload?: IFormData;
  setValue: (value: string) => void;
}

export function TravelingWithMinor({
  setValue,
  value,
  payload,
}: TravelingWithMinorProps) {
  const data = useMemo(() => {
    if (!payload) return [];
    const key = payload.status_migration_minor;
    return STATUS_TRAVELING_MINOR[key] || [];
  }, [payload]);

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4",
        data.length === 2 && "lg:grid-cols-2",
        data.length === 3 && "lg:grid-cols-3",
        data.length === 4 && "lg:grid-cols-4"
      )}
    >
      {data.map((item) => (
        <Card
          className={cn(
            "flex flex-col",
            "border hover:shadow-md transition-shadow cursor-pointer",
            value === item.slug && "bg-card/90 ring-2 ring-blue-500"
          )}
          onClick={() => setValue(item.slug)}
          key={item.slug}
        >
          <CardHeader className="flex flex-col items-start">
            <item.icon />
            <CardTitle className="text-left font-semibold text-[18px]">
              {item.title}
            </CardTitle>
          </CardHeader>
          <CardFooter className="bg-[#F9FAFB] px-8 py-4 rounded-b-xl grow">
            <p className="text-base font-normal text-[#4B5563]">
              {item.description}
            </p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
