import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  LayoutDashboard,
  Building2,
  Users,
  MessageSquareMore,
  Cable,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  DollarSign,
} from "lucide-react";

const navItems = [
  { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { path: "/dashboard/organisation", label: "Organisation", icon: Building2 },
  { path: "/dashboard/people", label: "People", icon: Users },
  { path: "/dashboard/deals", label: "Deals", icon: DollarSign },
  { path: "/dashboard/ask-ai", label: "Ask AI", icon: MessageSquareMore },
  { path: "/dashboard/integrations", label: "Integrations", icon: Cable },
];

export const Navbar = () => {
  const [expanded, setExpanded] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  const isActive = (path: string) => {
    if (path === "/dashboard") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {isMobile ? (
        <nav className="w-full glass-effect border-b border-nav-border">
          <div className="flex items-center justify-between p-4">
            <span className="text-lg font-semibold">Menu</span>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg hover:bg-nav-hover transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="p-4 space-y-2">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={cn(
                    "relative flex items-center px-3 py-2 rounded-lg transition-all duration-200",
                    "hover:bg-nav-hover",
                    isActive(path) && "bg-nav-active nav-item-active"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span className="ml-3">{label}</span>
                </Link>
              ))}
            </div>
          )}
        </nav>
      ) : (
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
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={cn(
                    "relative flex items-center px-3 py-2 rounded-lg transition-all duration-200",
                    "hover:bg-nav-hover group",
                    isActive(path) && "bg-nav-active nav-item-active"
                  )}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {expanded && (
                    <span className="ml-3 animate-fade-in">{label}</span>
                  )}
                  {!expanded && (
                    <div className="absolute left-14 px-2 py-1 bg-nav-background border border-nav-border rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                      {label}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      )}
    </>
  );
};