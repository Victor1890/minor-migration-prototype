import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { HAS_MINOR_STAYED_MORE_THAN_6_MONTHS } from "@/data";

interface MinorStayedMoreProps {
  value: string;
  setValue: (value: string) => void;
}

export function MinorStayedMore({ setValue, value }: MinorStayedMoreProps) {
  return (
    <div className="w-full">
      <RadioGroup value={value} onValueChange={setValue} className="space-y-4">
        {HAS_MINOR_STAYED_MORE_THAN_6_MONTHS.map((item) => (
          <div key={item.slug} className="flex items-start space-x-2">
            <RadioGroupItem
              value={item.slug}
              id={item.slug}
              className="mt-1 h-5 w-5 border-2"
            />
            <div className="grid gap-1.5">
              <Label
                htmlFor={item.slug}
                className="text-base font-medium leading-none cursor-pointer"
              >
                {item.title}
              </Label>
              <p className="text-sm text-[#727272]">{item.description}</p>
            </div>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
