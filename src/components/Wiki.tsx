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
import { memo, useMemo, isValidElement, type JSX, Fragment } from "react";

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
  if (!value) return null;

  const TriggerComp = asTrigger || "span";
  const ContentComp = asContent || "p";

  const termLegalData = useMemo(() => {
    const found = termLegal.find((term) => {
      const legalTerm = normalize(term["Término legal"] || "");
      return normalize(value || "").includes(legalTerm);
    });

    if (!found) return { label: "", explanation: "" };

    return {
      label: found["Término legal"] || "",
      explanation: found["Descripción"] || "",
    };
  }, [value]);

  const termData = useMemo(() => {
    const words = value.split(/\s+/).map((w) => normalize(w || ""));
    const found = termLegal.find((term) => {
      const mainTerm = normalize(term["Término"] || "");
      if (words.includes(mainTerm)) return true;

      // Check "Sinónimos o equivalentes"
      if (term["Sinónimos o equivalentes"]) {
        const synonyms = term["Sinónimos o equivalentes"]
          .split(",")
          .map((syn) => normalize(syn.replace(/\s+/g, "") || ""));
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

  const replacedValue = replaceStringToComponent(
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
              <TriggerComp
                className="font-semibold cursor-pointer underline"
                aria-label={source}
                dangerouslySetInnerHTML={{ __html: source }}
              />
            </TooltipTrigger>
            <TooltipContent
              classNameArrow="bg-white fill-white"
              className="bg-white text-black shadow-lg p-2 rounded-md max-w-[319px] max-h-[112px] text-[14px] text-balance"
            >
              <ContentComp
                aria-label={
                  termLegalData?.explanation ||
                  termData.explanation ||
                  "No descriptiong available."
                }
                dangerouslySetInnerHTML={{
                  __html:
                    termLegalData?.explanation ||
                    termData.explanation ||
                    "No descriptiong available.",
                }}
              />
            </TooltipContent>
          </Tooltip>
        )
      );
    }
  ) as (React.ReactNode | string)[];

  return replacedValue.map((item, index) => (
    <Fragment key={`wiki-${index}`}>
      {isValidElement(item) ? item : item}
    </Fragment>
  ));
};

export const Wiki = memo(WikiComponent);
