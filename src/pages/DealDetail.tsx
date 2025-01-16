import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { DealHeader } from "@/components/deal/DealHeader";
import { DealMetrics } from "@/components/deal/DealMetrics";
import { TasksModule } from "@/components/tasks/TasksModule";

// Mock database for demonstration
const dealsDatabase = {
  "enterprise-software-license": {
    name: "Enterprise Software License",
    client: "TechCorp Solutions",
    value: 450000,
    startDate: "2024-01-15",
    probability: "75%",
    stage: "Negotiation",
    timeInStage: "14 days",
    nextAction: "Contract Review",
    decisionMakers: "3 Identified",
    competitorStatus: "Leading",
    riskLevel: "Medium",
    documentStatus: "In Review",
    lastContact: "2024-02-15",
    communicationStats: {
      emails: 45,
      meetings: 8,
      calls: 12
    }
  },
  "cloud-migration-project": {
    name: "Cloud Migration Project",
    client: "Global Systems Inc",
    value: 280000,
    startDate: "2024-02-01",
    probability: "60%",
    stage: "Proposal",
    timeInStage: "7 days",
    nextAction: "Technical Review",
    decisionMakers: "2 Identified",
    competitorStatus: "Competitive",
    riskLevel: "Low",
    documentStatus: "Pending",
    lastContact: "2024-02-14",
    communicationStats: {
      emails: 28,
      meetings: 5,
      calls: 8
    }
  }
};

const DealDetail = () => {
  const { id } = useParams();
  console.log("DealDetail - Component mounted");
  console.log("DealDetail - URL parameter id:", id);
  console.log("DealDetail - Available deals in database:", Object.keys(dealsDatabase));

  const { data: dealData, isLoading } = useQuery({
    queryKey: ['deal', id],
    queryFn: () => {
      console.log("DealDetail - Fetching data for id:", id);
      
      if (!id) {
        console.error("DealDetail - No ID provided");
        throw new Error("No deal ID provided");
      }

      const dealId = id.toLowerCase();
      console.log("DealDetail - Normalized deal ID:", dealId);
      console.log("DealDetail - Looking for deal in database:", dealId);
      
      const deal = dealsDatabase[dealId as keyof typeof dealsDatabase];
      console.log("DealDetail - Found deal:", deal);

      if (!deal) {
        console.error("DealDetail - Deal not found in database");
        throw new Error(`Deal not found: ${dealId}`);
      }

      return deal;
    },
  });

  console.log("DealDetail - Query result:", { isLoading, dealData });

  if (isLoading) {
    console.log("DealDetail - Loading state");
    return <div className="p-8">Loading...</div>;
  }

  if (!dealData) {
    console.log("DealDetail - No deal data found");
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-red-600">Deal not found</h1>
        <p className="mt-2">The requested deal could not be found. ID: {id}</p>
      </div>
    );
  }

  console.log("DealDetail - Rendering deal:", dealData);

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