import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  path: string;
  label: string;
  icon: LucideIcon;
  isActive: boolean;
  expanded?: boolean;
  onClick?: () => void;
}

export const NavItem = ({ path, label, icon: Icon, isActive, expanded, onClick }: NavItemProps) => {
  return (
    <Link
      to={path}
      className={cn(
        "relative flex items-center px-3 py-2 rounded-lg transition-all duration-200",
        "hover:bg-nav-hover group",
        isActive && "bg-nav-active nav-item-active"
      )}
      onClick={onClick}
    >
      <Icon className="h-5 w-5 shrink-0" />
      {expanded && <span className="ml-3 animate-fade-in">{label}</span>}
      {expanded === false && (
        <div className="absolute left-14 px-2 py-1 bg-nav-background border border-nav-border rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
          {label}
        </div>
      )}
    </Link>
  );
};