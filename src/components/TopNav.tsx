import { AlignLeft, UserRound, Check, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const TopNav = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to sign out. Please try again.",
      });
    } else {
      navigate("/auth");
    }
  };

  return (
    <nav className="w-full h-14 glass-effect border-b border-nav-border px-4 flex items-center justify-between fixed top-0 left-0 z-50">
      <div className="flex items-center gap-2">
        <AlignLeft className="h-5 w-5" />
        <span className="font-semibold text-lg">Releff</span>
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
        <Button
          variant="ghost"
          size="icon"
          onClick={handleLogout}
          className="ml-2"
        >
          <LogOut className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  );
};