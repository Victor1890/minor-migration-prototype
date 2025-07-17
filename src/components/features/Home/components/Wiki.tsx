import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA_DUMB } from "@/data";
import {
  normalize,
  replaceStringToComponent,
} from "@/utils/replace-string-to-component";
import { memo, useMemo, isValidElement, type JSX } from "react";

const { termLegal } = DATA_DUMB;

interface WikiProps {
  value: string;
  match?: RegExp | string;
  asTrigger?: keyof JSX.IntrinsicElements;
  asContent?: keyof JSX.IntrinsicElements;
  component?: (str: string) => React.ReactNode;
}

const WikiComponent = ({
  value,
  match,
  asContent,
  asTrigger,
  component,
}: WikiProps) => {
  const TriggerComp = asTrigger || "span";
  const ContentComp = asContent || "p";

  const termLegalData = useMemo(() => {
    const found = termLegal.find((term) => {
      const legalTerm = normalize(term["Término legal"] || "");
      return normalize(value).includes(legalTerm);
    });

    if (!found) return { label: "", explanation: "" };

    return {
      label: found["Término legal"] || "",
      explanation: found["Descripción"] || "",
    };
  }, [value]);

  const termData = useMemo(() => {
    const words = value.split(/\s+/).map((w) => normalize(w));
    const found = termLegal.find((term) => {
      // Check "Término"
      const mainTerm = normalize(term["Término"] || "");
      if (words.includes(mainTerm)) return true;

      // Check "Sinónimos o equivalentes"
      if (term["Sinónimos o equivalentes"]) {
        const synonyms = term["Sinónimos o equivalentes"]
          .split(",")
          .map((syn) => normalize(syn));
        return words.some((w) => synonyms.includes(w));
      }
      return false;
    });

    if (!found) return { label: "", explanation: "" };

    return {
      label: found["Término"] || "",
      explanation: found["Explicación sencilla"] || "",
    };
  }, [value]);

  return replaceStringToComponent(
    value,
    match ||
      termLegalData?.label.toLowerCase() ||
      termData?.label.toLowerCase(),
    (source) => {
      if (!source) return null;
      return (
        component?.(source) || (
          <Tooltip>
            <TooltipTrigger asChild>
              <TriggerComp className="font-semibold cursor-pointer underline">
                {source}
              </TriggerComp>
            </TooltipTrigger>
            <TooltipContent
              classNameArrow="bg-white fill-white"
              className="bg-white text-black shadow-lg p-2 rounded-md max-w-[319px] max-h-[112px] text-[14px] text-balance"
            >
              <ContentComp
                dangerouslySetInnerHTML={{
                  __html:
                    termLegalData?.explanation ||
                    termData.explanation ||
                    "No description available.",
                }}
              />
            </TooltipContent>
          </Tooltip>
        )
      );
    }
  ) as React.ReactNode;
};

export const Wiki = memo(WikiComponent);
