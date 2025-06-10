import { TooltipProvider } from "@/components/ui/tooltip";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return <TooltipProvider>{children}</TooltipProvider>;
}
