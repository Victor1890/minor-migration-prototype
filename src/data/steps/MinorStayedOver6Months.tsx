import type { IFormData } from "@/components/features/Home/hooks/useFormNavigation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HAS_MINOR_STAYED_MORE_THAN_6_MONTHS,
  STATUS_MIGRATION_MINOR,
} from "@/data";
import { cn } from "@/lib/utils";

interface StatusMigrationMinorProps {
  value: string;
  payload?: IFormData;
  setValue: (value: string) => void;
}

export function MinorStayedOver6Months({
  setValue,
  value,
  payload,
}: StatusMigrationMinorProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {HAS_MINOR_STAYED_MORE_THAN_6_MONTHS.map((item) => (
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
