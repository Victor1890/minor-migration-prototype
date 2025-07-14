import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA_DUMB } from "@/data";
import { replaceStringToComponent } from "@/utils/replace-string-to-component";
import { memo, useMemo, useState, type JSX } from "react";

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
    const data = termLegal.find((term) => {
      const isValid = value.split(" ").some((word) => {
        return term["Término legal"].toLowerCase().includes(word.toLowerCase());
      });

      return isValid;
    });

    if (!data) return { label: "", explanation: "" };

    return {
      label: data?.["Término legal"] || "",
      explanation: data?.["Descripción"] || "",
    };
  }, [value]);

  const termData = useMemo(() => {
    const data = termLegal.find((term) => {
      const isTermIncluded = value.split(" ").some((word) => {
        return term["Término"]?.toLowerCase().includes(word.toLowerCase());
      });

      if (isTermIncluded) return true;

      const isSynonymIncluded = value.split(" ").some((word) => {
        return term["Sinónimos o equivalentes"]
          ?.toLowerCase()
          .split(",")
          .some((synonym) => {
            return synonym.trim().toLowerCase().includes(word.toLowerCase());
          });
      });

      return isSynonymIncluded;
    });

    if (!data) return { label: "", explanation: "" };

    return {
      label: data?.["Término"] || "",
      explanation: data?.["Explicación sencilla"] || "",
    };
  }, [value]);

  return replaceStringToComponent(
    value,
    match ||
      termLegalData?.label.toLowerCase() ||
      termData?.label.toLowerCase(),
    (source: string) => {
      return (
        component?.(source) || (
          <Tooltip>
            <TooltipTrigger>
              <TriggerComp className="text-[#0072D7] font-semibold cursor-pointer">
                {source}
              </TriggerComp>
            </TooltipTrigger>
            <TooltipContent
              classNameArrow="bg-white fill-white"
              className="bg-white text-black shadow-lg p-2 rounded-md max-w-xs"
            >
              <ContentComp>
                {termLegalData?.explanation ||
                  termData.explanation ||
                  "No description available."}
              </ContentComp>
            </TooltipContent>
          </Tooltip>
        )
      );
    }
  ) as React.ReactNode;
};

export const Wiki = memo(WikiComponent);
