import { RequirementIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { CircleHelp, Headset } from "lucide-react";
import { Logo } from "./logo";
// import { TemplateOfInterest } from "./templates-of-interest";
import { memo } from "react";
import { Progress } from "@/components/ui/progress";
import { useProgressBarStore } from "@/store/progress-bar.store";

export const Header = memo(() => {
  const { progress } = useProgressBarStore();

  return (
    <>
      <div className="layout-container bg-white">
        <header
          role="banner"
          className="relative z-10 p-3 flex-shrink-0 flex justify-between items-center h-[82px] top-0 left-0 right-0 transition-colors duration-200"
        >
          <nav
            aria-label="Menu Principal"
            className="flex items-center justify-between w-full"
          >
            <Logo
              aria-label="Logo de Migración"
              tabIndex={0}
              className="md:h-11 md:w-[222.44px] h-[33.5px] w-[169.36px]"
            />
            <div
              role="menu"
              aria-labelledby="menu-item-elements"
              className="items-center justify-between gap-5 hidden xl:flex"
            >
              <a
                role="menuitem"
                href="tel:+8095082555"
                rel="noopener noreferrer"
                className={cn(
                  "mr-4 flex items-center pb-[20px] mt-[24px] group border-spacing-4 gap-2 border-b-4 border-transparent hover:border-white transition-all duration-200"
                )}
              >
                <p className="flex items-center justify-between gap-1.5 capitalize">
                  ¿Necesitas ayuda?
                  <span className="font-bold">809-508-2555</span>
                </p>
                <Headset className="size-6" />
              </a>
              <div className="h-[38px] rounded-full w-[1px] hidden xl:flex bg-gray-200" />
              {/* <div className="items-center gap-2 ml-2 xl:flex">
                        <TemplateOfInterest />
                    </div> */}
            </div>
          </nav>
          <div className="flex items-center justify-center xl:hidden">
            {/* <TemplateOfInterest /> */}
          </div>
        </header>
      </div>
      <Progress
        value={progress}
        className="bg-[#E2E8F0] rounded-none"
        classNameIndicator="bg-[#0072D7]"
      />
    </>
  );
});
