import { UrgentDealsCard } from "@/components/dashboard/UrgentDealsCard";
import { AccountsAtRiskCard } from "@/components/dashboard/AccountsAtRiskCard";
import { TaskRemindersCard } from "@/components/dashboard/TaskRemindersCard";
import { RecentActivitiesCard } from "@/components/dashboard/RecentActivitiesCard";
import { LastWeekRecapCard } from "@/components/dashboard/LastWeekRecapCard";
import { ThisWeekOutlookCard } from "@/components/dashboard/ThisWeekOutlookCard";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [openSections, setOpenSections] = useState({
    row1: true,
    row2: true,
    row3: true,
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
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <CollapsibleTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm"
          onClick={() => toggleSection(section)}
          className="hover:bg-gray-100"
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

  return (
    <div className="flex-1 p-8 bg-gray-50 space-y-8">
      <h1 className="text-4xl font-semibold mb-6">Dashboard</h1>
      
      <div className="space-y-8">
        <Collapsible open={openSections.row1}>
          <SectionHeader 
            title="Critical Updates" 
            section="row1"
            isOpen={openSections.row1}
          />
          <CollapsibleContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <UrgentDealsCard />
              <AccountsAtRiskCard />
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
              <TaskRemindersCard />
              <RecentActivitiesCard />
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
              <LastWeekRecapCard />
              <ThisWeekOutlookCard />
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default Index;