import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CASE_LIST } from "@/data";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

interface CaseListOfMinorProps {
  setValue: (value: string) => void;
  value: string;
}

export function CaseListOfMinor({ setValue, value }: CaseListOfMinorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col gap-4">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            className="w-full justify-between h-12 px-4 py-2 text-left font-medium"
          >
            {value
              ? CASE_LIST.find((item) => item.value === value)?.label
              : "Seleccione cual es su situación..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="w-full p-0"
          style={{ width: "var(--radix-popover-trigger-width)" }}
        >
          <Command className="w-full">
            <div className="flex items-center border-b px-3">
              <CommandInput
                placeholder="Buscar opción"
                className="h-9 border-0 outline-none focus:ring-0"
              />
            </div>
            <CommandList>
              <CommandEmpty>No se encontraron resultados.</CommandEmpty>
              <CommandGroup>
                {CASE_LIST.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue);
                      setIsOpen(false);
                    }}
                    className="py-3 px-4 cursor-pointer"
                  >
                    <div className="flex flex-col">
                      <div className="font-medium">{item.label}</div>
                      <div className="text-sm text-gray-500">
                        {item.description}
                      </div>
                    </div>
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === item.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <span className="text-base font-normal text-[#4B5563]">
        Cuando uno de los padres no autoriza el viaje, está ausente o no se
        puede localizar. En estos casos, es necesario gestionar un permiso
        especial a través del tribunal.
      </span>
    </div>
  );
}
