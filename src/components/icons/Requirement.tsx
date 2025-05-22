import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

interface RequirementIconProps extends SVGProps<SVGSVGElement> {
  strokeColor?: string;
}

export function RequirementIcon({
  strokeColor,
  ...props
}: RequirementIconProps) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 7H8"
        stroke={cn(strokeColor || "#031942")}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M12 7H17"
        stroke={cn(strokeColor || "#031942")}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M7 12H8"
        stroke={cn(strokeColor || "#031942")}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M12 12H17"
        stroke={cn(strokeColor || "#031942")}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M7 17H12"
        stroke={cn(strokeColor || "#031942")}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path d="M16 23V17H22L16 23Z" fill={cn(strokeColor || "#031942")} />
      <path
        d="M16 23V17H22"
        stroke={cn(strokeColor || "#031942")}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M16 23H2V1H22V17L16 23Z"
        stroke={cn(strokeColor || "#031942")}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  );
}
