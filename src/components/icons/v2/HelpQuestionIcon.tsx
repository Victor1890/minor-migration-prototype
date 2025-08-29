import type { SVGProps } from "react";

export function HelpQuestionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" fill="white" />
      <path
        d="M24 45C35.598 45 45 35.598 45 24C45 12.402 35.598 3 24 3C12.402 3 3 12.402 3 24C3 35.598 12.402 45 24 45Z"
        stroke="#003876"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M24 36C24.5523 36 25 35.5523 25 35C25 34.4477 24.5523 34 24 34C23.4477 34 23 34.4477 23 35C23 35.5523 23.4477 36 24 36Z"
        fill="#003876"
        stroke="#003876"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
      <path
        d="M18 17.3704C18.9237 13.7262 21.7932 11.8392 25.0058 12.0107C28.1782 12.1792 31.1313 13.9874 30.9955 18.1802C30.8015 24.1411 24.685 23.3328 24.0016 29"
        stroke="#003876"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  );
}
