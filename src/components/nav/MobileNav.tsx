import { Menu, X } from "lucide-react";
import { NavItem } from "./NavItem";
import { NavItemType } from "./types";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  toggleMenu: () => void;
  navItems: NavItemType[];
  isActive: (path: string) => boolean;
}

export const MobileNav = ({ isOpen, toggleMenu, navItems, isActive }: MobileNavProps) => {
  return (
    <nav className="w-full glass-effect border-b border-nav-border">
      <div className="flex items-center justify-between p-4">
        <span className="text-lg font-semibold">Menu</span>
        <button
          onClick={toggleMenu}
          className="p-2 rounded-lg hover:bg-nav-hover transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="p-4 space-y-2">
          {navItems.map((item) => (
            <NavItem
              key={item.path}
              {...item}
              isActive={isActive(item.path)}
              expanded={true}
              onClick={toggleMenu}
            />
          ))}
        </div>
      )}
    </nav>
  );
};