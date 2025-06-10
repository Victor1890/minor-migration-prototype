import type { IFormData } from "@/components/features/Home/hooks/useFormNavigation";
import { ExclamationIcon } from "@/components/icons";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SPECIAL_CONDITION_PRESENT_DATA } from "@/data/special-condition";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

interface SpecialConditionsPresentProps {
  value: string;
  payload?: IFormData;
  setValue: (value: string) => void;
}

export function SpecialConditionsPresent({
  setValue,
  value,
  payload,
}: SpecialConditionsPresentProps) {
  const data = useMemo(() => {
    if (!payload) return [];
    const key = payload.status_migration_minor;
    const subKey = payload.status_traveling_minor;
    return SPECIAL_CONDITION_PRESENT_DATA[key]?.[subKey] || [];
  }, [payload]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {data.map((item) => (
        <Card
          className={cn(
            "flex flex-col",
            "border hover:shadow-md transition-shadow cursor-pointer relative",
            value === item.slug && "bg-card/90 ring-2 ring-blue-500"
          )}
          onClick={() => setValue(item.slug)}
          key={item.slug}
        >
          <Tooltip>
            <TooltipTrigger className="bg-blue-500 hover:bg-blue-600 absolute top-4 right-4 size-5 p-0 rounded-full flex items-center justify-center transition-colors">
              <ExclamationIcon />
            </TooltipTrigger>
            <TooltipContent
              classNameArrow="bg-white fill-white"
              className="bg-white text-black shadow-lg p-2 rounded-md max-w-xs"
            >
              <p>{item.tooltip}</p>
            </TooltipContent>
          </Tooltip>

          <CardHeader className="flex flex-col items-start pr-12">
            <CardTitle className="text-left font-semibold text-[18px] leading-tight">
              {item.title}
            </CardTitle>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
