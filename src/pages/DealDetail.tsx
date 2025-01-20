import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { DealHeader } from "@/components/deal/DealHeader";
import { DealMetrics } from "@/components/deal/DealMetrics";
import { TasksModule } from "@/components/tasks/TasksModule";
import { dealsDatabase } from "@/utils/dealsData";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const DealDetail = () => {
  const { id } = useParams();
  const [openSections, setOpenSections] = useState({
    metrics: true,
    tasks: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const { data: dealData, isLoading } = useQuery({
    queryKey: ['deal', id],
    queryFn: () => {
      if (!id) {
        throw new Error("No deal ID provided");
      }

      const deal = dealsDatabase[id.toLowerCase()];
      
      if (!deal) {
        throw new Error(`Deal not found: ${id}`);
      }

      return deal;
    },
  });

  if (isLoading) {
    return <div className="p-8">Loading...</div>;
  }

  if (!dealData) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-red-600">Deal not found</h1>
        <p className="mt-2">The requested deal could not be found. ID: {id}</p>
      </div>
    );
  }

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
        <h3 className="text-lg font-medium">{title}</h3>
        <CollapsibleTrigger asChild>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => toggleSection(section)}
            className="hover:bg-gray-100"
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
        {children}
      </CollapsibleContent>
    </Collapsible>
  );

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative">
        <div className="p-4 md:p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto">
          <DealHeader
            name={dealData.name}
            client={dealData.client}
            value={dealData.value}
            startDate={dealData.startDate}
          />

          <CardWrapper section="metrics" title="Deal Metrics">
            <DealMetrics
              probability={dealData.probability}
              stage={dealData.stage}
              timeInStage={dealData.timeInStage}
              nextAction={dealData.nextAction}
              decisionMakers={dealData.decisionMakers}
              competitorStatus={dealData.competitorStatus}
              riskLevel={dealData.riskLevel}
              documentStatus={dealData.documentStatus}
              lastContact={dealData.lastContact}
              communicationStats={dealData.communicationStats}
            />
          </CardWrapper>

          <CardWrapper section="tasks" title="Tasks">
            <TasksModule entityType="deal" entityId={id || ''} />
          </CardWrapper>
        </div>
      </div>
    </div>
  );
};

export default DealDetail;