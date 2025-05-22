import * as React from "react";

import { cn } from "@/lib/utils";

export interface DividerProps
  extends React.InputHTMLAttributes<HTMLHRElement> {}

const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ className, ...props }, ref) => {
    return (
      <hr
        {...props}
        ref={ref}
        role="separator"
        className={cn(
          "shrink-0 border-none w-full bg-[#E2E8F0] h-[1px]",
          className
        )}
      />
    );
  }
);
Divider.displayName = "Divider";

export { Divider };
