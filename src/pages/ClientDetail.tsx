import { useParams } from "react-router-dom";
import { ContactHeader } from "@/components/contact/ContactHeader";
import { ContactEngagementMetrics } from "@/components/contact/ContactEngagementMetrics";
import { RecentEmails } from "@/components/contact/RecentEmails";
import { EngagementCharts } from "@/components/contact/EngagementCharts";

// Mock data for development
const mockClientData = {
  name: "John Smith",
  organization: "TechCorp Solutions",
  email: "john.smith@techcorp.com",
  phone: "+1 (555) 123-4567",
  lastContact: "2024-02-15",
  lastMeeting: "2024-02-10",
  lastContactPerson: "Sarah Johnson",
  engagementScore: "85%",
  sentiment: "Positive",
  influence: "High",
  organizationContact: "Primary",
  emails: [
    {
      date: "2024-02-15",
      subject: "Project Update Meeting",
      from: "john.smith@techcorp.com",
      hasAttachment: true
    },
    {
      date: "2024-02-12",
      subject: "Contract Review",
      from: "john.smith@techcorp.com",
      hasAttachment: true
    },
    {
      date: "2024-02-08",
      subject: "Weekly Status Report",
      from: "john.smith@techcorp.com",
      hasAttachment: false
    }
  ],
  engagementHistory: [
    { month: "Jan", score: 75, meetings: 4, responses: 85 },
    { month: "Feb", score: 82, meetings: 6, responses: 90 },
    { month: "Mar", score: 85, meetings: 5, responses: 88 }
  ]
};

const ClientDetail = () => {
  const { id } = useParams();

  // In a real application, you would fetch client data based on the ID
  // For now, we'll use mock data
  const clientData = mockClientData;

  return (
    <div className="p-8">
      <ContactHeader
        name={clientData.name}
        organization={clientData.organization}
        email={clientData.email}
        phone={clientData.phone}
        lastContact={clientData.lastContact}
      />

      <ContactEngagementMetrics
        lastMeeting={clientData.lastMeeting}
        lastContactPerson={clientData.lastContactPerson}
        engagementScore={clientData.engagementScore}
        sentiment={clientData.sentiment}
        influence={clientData.influence}
        organizationContact={clientData.organizationContact}
      />

      <div className="grid grid-cols-1 gap-6">
        <RecentEmails emails={clientData.emails} />
        <EngagementCharts engagementHistory={clientData.engagementHistory} />
      </div>
    </div>
  );
};

export default ClientDetail;