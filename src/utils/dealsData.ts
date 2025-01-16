export interface Deal {
  name: string;
  client: string;
  value: number;
  startDate: string;
  probability: string;
  stage: string;
  timeInStage: string;
  nextAction: string;
  decisionMakers: string;
  competitorStatus: string;
  riskLevel: string;
  documentStatus: string;
  lastContact: string;
  communicationStats: {
    emails: number;
    meetings: number;
    calls: number;
  };
}

export const dealsDatabase: Record<string, Deal> = {
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