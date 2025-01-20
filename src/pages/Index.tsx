import { UrgentDealsCard } from "@/components/dashboard/UrgentDealsCard";
import { AccountsAtRiskCard } from "@/components/dashboard/AccountsAtRiskCard";
import { TaskRemindersCard } from "@/components/dashboard/TaskRemindersCard";
import { RecentActivitiesCard } from "@/components/dashboard/RecentActivitiesCard";
import { LastWeekRecapCard } from "@/components/dashboard/LastWeekRecapCard";
import { ThisWeekOutlookCard } from "@/components/dashboard/ThisWeekOutlookCard";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [openSections, setOpenSections] = useState({
    row1: true,
    row2: true,
    row3: true,
    urgentDeals: true,
    accountsAtRisk: true,
    taskReminders: true,
    recentActivities: true,
    lastWeekRecap: true,
    thisWeekOutlook: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const SectionHeader = ({ 
    title, 
    section,
    isOpen 
  }: { 
    title: string; 
    section: keyof typeof openSections;
    isOpen: boolean;
  }) => (
    <div className="flex items-center justify-between mb-6 bg-white/50 p-4 rounded-lg backdrop-blur-sm border border-white/20 shadow-sm">
      <div className="flex items-center gap-2">
        <Sparkles className="h-6 w-6 text-purple-500" />
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          {title}
        </h2>
      </div>
      <CollapsibleTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => toggleSection(section)}
          className="hover:bg-white/50 transition-colors"
        >
          {isOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </CollapsibleTrigger>
    </div>
  );

  const CardWrapper = ({
    children,
    section,
    title,
  }: {
    children: React.ReactNode;
    section: keyof typeof openSections;
    title: string;
  }) => (
    <Collapsible open={openSections[section]} className="w-full">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-medium text-gray-700">{title}</h3>
        <CollapsibleTrigger asChild>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => toggleSection(section)}
            className="hover:bg-white/50 transition-colors"
          >
            {openSections[section] ? (
              <ChevronUp className="h-3 w-3" />
            ) : (
              <ChevronDown className="h-3 w-3" />
            )}
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <div className="transform transition-all duration-200 hover:scale-[1.01]">
          {children}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative">
        <div className="p-4 md:p-6 lg:p-8 space-y-8 max-w-[1600px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <Sparkles className="h-8 w-8 text-purple-500 animate-pulse" />
          </div>
          
          <div className="space-y-8">
            <Collapsible open={openSections.row1}>
              <SectionHeader 
                title="Critical Updates" 
                section="row1"
                isOpen={openSections.row1}
              />
              <CollapsibleContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CardWrapper section="urgentDeals" title="Urgent Deals">
                    <UrgentDealsCard />
                  </CardWrapper>
                  <CardWrapper section="accountsAtRisk" title="Accounts at Risk">
                    <AccountsAtRiskCard />
                  </CardWrapper>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={openSections.row2}>
              <SectionHeader 
                title="Tasks & Activities" 
                section="row2"
                isOpen={openSections.row2}
              />
              <CollapsibleContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CardWrapper section="taskReminders" title="Task Reminders">
                    <TaskRemindersCard />
                  </CardWrapper>
                  <CardWrapper section="recentActivities" title="Recent Activities">
                    <RecentActivitiesCard />
                  </CardWrapper>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={openSections.row3}>
              <SectionHeader 
                title="Performance Overview" 
                section="row3"
                isOpen={openSections.row3}
              />
              <CollapsibleContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <CardWrapper section="lastWeekRecap" title="Last Week Recap">
                    <LastWeekRecapCard />
                  </CardWrapper>
                  <CardWrapper section="thisWeekOutlook" title="This Week Outlook">
                    <ThisWeekOutlookCard />
                  </CardWrapper>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;