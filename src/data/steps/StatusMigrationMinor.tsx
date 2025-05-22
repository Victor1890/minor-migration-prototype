import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { STATUS_MIGRATION_MINOR } from "@/data";
import { cn } from "@/lib/utils";

interface StatusMigrationMinorProps {
  value: string;
  setValue: (value: string) => void;
}

export function StatusMigrationMinor({
  setValue,
  value,
}: StatusMigrationMinorProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {STATUS_MIGRATION_MINOR.map((item) => (
        <Card
          className={cn(
            "border hover:shadow-md transition-shadow cursor-pointer",
            value === item.slug && "bg-card/90"
          )}
          onClick={() => setValue(item.slug)}
          key={item.slug}
        >
          <CardHeader className="flex flex-col items-start">
            <item.icon className="size-[48px]" />
            <CardTitle className="text-center font-semibold text-[18px]">
              {item.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base font-normal text-[#4B5563]">
              {item.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
