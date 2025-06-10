import type { SVGProps } from "react";

export function ExclamationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="3"
      height="10"
      viewBox="0 0 3 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.75 8.5C2.75 8.9141 2.4141 9.25 2 9.25C1.5859 9.25 1.25 8.9141 1.25 8.5V5.25H0.75C0.3359 5.25 0 4.9141 0 4.5C0 4.0859 0.3359 3.75 0.75 3.75H1.5C2.1895 3.75 2.75 4.3105 2.75 5V8.5ZM2 2.5C1.448 2.5 1 2.051 1 1.5C1 0.949 1.448 0.5 2 0.5C2.552 0.5 3 0.949 3 1.5C3 2.051 2.552 2.5 2 2.5Z"
        fill="white"
      />
    </svg>
  );
}
