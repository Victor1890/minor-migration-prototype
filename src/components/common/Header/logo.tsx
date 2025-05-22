import { LogoMigrationWithColorIcon } from "@/components/icons";
import { memo } from "react";

interface ILogoProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

export const Logo = memo(function ({
  href = "/",
  ...props
}: Partial<ILogoProps>) {
  return (
    <a {...props} href={href}>
      <LogoMigrationWithColorIcon />
    </a>
  );
});
