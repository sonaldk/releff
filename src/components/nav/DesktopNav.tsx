import { ChevronLeft, ChevronRight } from "lucide-react";
import { NavItem } from "./NavItem";
import { NavItemType } from "./types";
import { cn } from "@/lib/utils";

interface DesktopNavProps {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
  navItems: NavItemType[];
  isActive: (path: string) => boolean;
}

export const DesktopNav = ({ expanded, setExpanded, navItems, isActive }: DesktopNavProps) => {
  return (
    <nav
      className={cn(
        "relative h-screen glass-effect border-r border-nav-border transition-all duration-200 ease-out",
        expanded ? "animate-nav-expand w-64" : "animate-nav-collapse w-20"
      )}
    >
      <div className="flex flex-col h-full p-4">
        <div className="flex items-center justify-between mb-8">
          {expanded && (
            <span className="text-lg font-semibold animate-fade-in">Menu</span>
          )}
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-2 rounded-lg hover:bg-nav-hover transition-colors"
            aria-label={expanded ? "Collapse menu" : "Expand menu"}
          >
            {expanded ? (
              <ChevronLeft className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
          </button>
        </div>

        <div className="space-y-2">
          {navItems.map((item) => (
            <NavItem
              key={item.path}
              {...item}
              isActive={isActive(item.path)}
              expanded={expanded}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};