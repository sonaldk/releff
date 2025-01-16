import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  LayoutDashboard,
  Building2,
  Users,
  MessageSquareMore,
  Cable,
  DollarSign,
} from "lucide-react";
import { MobileNav } from "./nav/MobileNav";
import { DesktopNav } from "./nav/DesktopNav";
import { NavItemType } from "./nav/types";

const navItems: NavItemType[] = [
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

  return isMobile ? (
    <MobileNav
      isOpen={mobileMenuOpen}
      toggleMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
      navItems={navItems}
      isActive={isActive}
    />
  ) : (
    <DesktopNav
      expanded={expanded}
      setExpanded={setExpanded}
      navItems={navItems}
      isActive={isActive}
    />
  );
};