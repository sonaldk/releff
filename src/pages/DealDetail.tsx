import { useParams } from "react-router-dom";
import { DealHeader } from "@/components/deal/DealHeader";
import { DealMetrics } from "@/components/deal/DealMetrics";

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
  
  const dealData = id ? dealsDatabase[id as keyof typeof dealsDatabase] : null;

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