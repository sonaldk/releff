import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { DealHeader } from "@/components/deal/DealHeader";
import { DealMetrics } from "@/components/deal/DealMetrics";
import { TasksModule } from "@/components/tasks/TasksModule";
import { dealsDatabase } from "@/utils/dealsData";

const DealDetail = () => {
  const { id } = useParams();

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

  return (
    <div className="p-8 space-y-8 bg-background min-h-screen w-full">
      <DealHeader
        name={dealData.name}
        client={dealData.client}
        value={dealData.value}
        startDate={dealData.startDate}
      />

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

      <TasksModule entityType="deal" entityId={id || ''} />
    </div>
  );
};

export default DealDetail;