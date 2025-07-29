import { MenuIcon } from "@/components/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";
import { Headset, Menu } from "lucide-react";
import {
  Fragment,
  memo,
  type ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { WINDOWS_DATA } from "../constants";

export const TemplateOfInterest = memo(() => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const data = useMemo(
    () => Object.entries(WINDOWS_DATA).map(([slug, data]) => ({ slug, data })),
    [WINDOWS_DATA]
  );
  const [showTemplate, setShowTemplate] = useState(false);

  const handleOnClick = useCallback(
    () => setShowTemplate(false),
    [setShowTemplate]
  );

  const content = useMemo(
    () => (
      <Fragment>
        {!isMobile && (
          <div className="flex items-center justify-between w-full">
            <h4
              role="heading"
              aria-level={4}
              className="text-lg font-bold text-center"
            >
              Enlaces de interés
            </h4>
          </div>
        )}
        <Divider className="mb-4 h-[2px] md:hidden" />
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue={"Ventanilla"}
        >
          <div className="flex xl:hidden flex-col items-center justify-between gap-5 text-psBackground">
            <a
              role="link"
              href={"tel:+8095082555"}
              rel="noopener noreferrer"
              onClick={handleOnClick}
              className={cn(
                "flex items-center justify-between w-full flex-row-reverse group border-spacing-4 gap-2 border-b-4 border-transparent hover:border-white transition-all duration-200"
              )}
            >
              <Headset className="size-7" />
              <p className="flex flex-col items-center justify-between gap-1.5 text-[16px] font-medium capitalize">
                ¿Necesitas ayuda?
                <span className="font-medium text-[16px]">
                  809-508-2555 Ext. 3890
                </span>
              </p>
            </a>
          </div>
          <Divider className="mt-2 h-[2px]" />
          {data.map((item, index) => (
            <AccordionItem
              key={item.slug}
              className={cn(index === data.length - 1 && "!border-none")}
              value={item.slug}
            >
              <AccordionTrigger className="font-medium hover:no-underline flex-none w-full cursor-pointer">
                {item.slug}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="gap-4 grid grid-cols-3 w-full">
                  {item.data?.map(({ name, url, icon }) => (
                    <li
                      key={`window-${name}`}
                      className="flex flex-col items-center justify-center gap-3 hover:bg-accent hover:text-accent-foreground p-1"
                    >
                      <a
                        role="link"
                        href={url}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="flex flex-col items-center justify-center gap-3"
                      >
                        <img
                          src={icon}
                          alt={`${name} logo`}
                          width={60}
                          height={60}
                          className="animate-pulse rounded-full bg-slate-700 size-[60px]"
                          onLoad={(props) => {
                            props.currentTarget.classList.remove(
                              "animate-pulse",
                              "rounded-full",
                              "bg-slate-700",
                              "size-[60px]"
                            );
                          }}
                        />
                        <span className="text-[13px] text-psBackground font-semibold text-center">
                          {name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Fragment>
    ),
    [data, isMobile]
  );

  return (
    <TemplateOfInterestContent
      showTemplate={showTemplate}
      setShowTemplate={setShowTemplate}
      button={
        <Button
          role="menuitem"
          aria-label="Enlaces de interés"
          variant={"outline-basic"}
          onClick={() => setShowTemplate(true)}
          className="rounded-sm border-none bg-white"
        >
          <MenuIcon className="hidden lg:block size-8" />
          <Menu className="size-8 lg:hidden" />
        </Button>
      }
      content={content}
      isMobile={isMobile}
    />
  );
});

interface TemplateOfInterestContentProps {
  button: ReactNode;
  content: ReactNode;
  isMobile: boolean;
  showTemplate: boolean;
  setShowTemplate: (_value: boolean) => void;
}

function TemplateOfInterestContent({
  button,
  content,
  isMobile,
  setShowTemplate,
  showTemplate,
}: TemplateOfInterestContentProps) {
  if (!isMobile) {
    return (
      <Popover>
        <PopoverTrigger asChild>{button}</PopoverTrigger>
        <PopoverContent className="min-w-[337px] p-0">
          <ScrollArea
            type="always"
            className="flex flex-col items-center justify-center max-h-[745px] p-4"
          >
            {content}
          </ScrollArea>
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={showTemplate} onClose={() => setShowTemplate(false)}>
      <DrawerTrigger asChild>{button}</DrawerTrigger>
      <DrawerContent className="max-h-screen h-[95%]">
        <DrawerHeader>
          <DrawerTitle>Enlaces de interés</DrawerTitle>
        </DrawerHeader>
        <ScrollArea
          type="always"
          className="flex flex-col items-center justify-center p-4"
        >
          {content}
        </ScrollArea>
        <DrawerFooter>
          <DrawerClose>
            <Button onClick={() => setShowTemplate(false)} variant="outline">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
