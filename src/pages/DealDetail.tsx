import { useParams } from "react-router-dom";
import { DealHeader } from "@/components/deal/DealHeader";
import { DealMetrics } from "@/components/deal/DealMetrics";
import { mockDeals } from "@/data/mockDeals";

const DealDetail = () => {
  const { id } = useParams();
  
  const dealData = id ? mockDeals[id as keyof typeof mockDeals] : null;

  if (!dealData) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-red-600">Deal not found</h1>
      </div>
    );
  }

  return (
    <div className="p-8">
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
    </div>
  );
};

export default DealDetail;