import { AlignLeft, UserRound, Check } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const TopNav = () => {
  const isMobile = useIsMobile();

  return (
    <nav className="w-full h-14 glass-effect border-b border-nav-border px-4 flex items-center justify-between fixed top-0 left-0 z-50">
      <div className="flex items-center gap-2">
        <AlignLeft className="h-5 w-5" />
        <span className="font-semibold text-lg">Orga Connect Hub</span>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <UserRound className="h-5 w-5" />
          {!isMobile && <span>John Doe</span>}
        </div>
        <div className="flex items-center gap-2">
          <Check className="h-5 w-5 text-green-500" />
          {!isMobile && <span>Logged In</span>}
        </div>
      </div>
    </nav>
  );
};