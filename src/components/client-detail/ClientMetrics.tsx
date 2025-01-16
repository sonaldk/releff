import { ContactEngagementMetrics } from "@/components/contact/ContactEngagementMetrics";

interface ClientMetricsProps {
  clientData: {
    lastMeeting: string;
    lastContactPerson: string;
    engagementScore: string;
    sentiment: string;
    influence: string;
    organizationContact: string;
    riskIndex: string;
    customerSatisfaction: string;
    deepestRelationship: string;
    broadestRelationship: string;
    relationshipScore: string;
    interactionMetrics: {
      deals: number;
      emails: number;
      calls: number;
      meetings: number;
    };
  };
}

export const ClientMetrics = ({ clientData }: ClientMetricsProps) => {
  return (
    <ContactEngagementMetrics
      lastMeeting={clientData.lastMeeting}
      lastContactPerson={clientData.lastContactPerson}
      engagementScore={clientData.engagementScore}
      sentiment={clientData.sentiment}
      influence={clientData.influence}
      organizationContact={clientData.organizationContact}
      riskIndex={clientData.riskIndex}
      customerSatisfaction={clientData.customerSatisfaction}
      deepestRelationship={clientData.deepestRelationship}
      broadestRelationship={clientData.broadestRelationship}
      relationshipScore={clientData.relationshipScore}
      interactionMetrics={clientData.interactionMetrics}
    />
  );
};