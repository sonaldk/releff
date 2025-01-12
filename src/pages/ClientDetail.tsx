import { useParams } from "react-router-dom";
import { ContactHeader } from "@/components/contact/ContactHeader";
import { ContactEngagementMetrics } from "@/components/contact/ContactEngagementMetrics";
import { RecentEmails } from "@/components/contact/RecentEmails";
import { EngagementCharts } from "@/components/contact/EngagementCharts";

// Mock database of clients - in a real app, this would come from an API
const clientsDatabase = {
  "techcorp-solutions": {
    name: "TechCorp Solutions",
    organization: "TechCorp Solutions",
    email: "info@techcorp.com",
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
  },
  "innovate-inc": {
    name: "Innovate Inc",
    organization: "Innovate Inc",
    email: "contact@innovate.com",
    phone: "+1 (555) 987-6543",
    lastContact: "2024-02-14",
    lastMeeting: "2024-02-09",
    lastContactPerson: "Mike Wilson",
    engagementScore: "92%",
    sentiment: "Very Positive",
    influence: "Medium",
    organizationContact: "Secondary",
    emails: [
      {
        date: "2024-02-14",
        subject: "Innovation Workshop Planning",
        from: "mike.wilson@innovate.com",
        hasAttachment: true
      },
      {
        date: "2024-02-11",
        subject: "Quarterly Review",
        from: "mike.wilson@innovate.com",
        hasAttachment: false
      }
    ],
    engagementHistory: [
      { month: "Jan", score: 80, meetings: 5, responses: 88 },
      { month: "Feb", score: 85, meetings: 7, responses: 92 },
      { month: "Mar", score: 92, meetings: 6, responses: 95 }
    ]
  }
};

const ClientDetail = () => {
  const { id } = useParams();
  
  // Get client data based on the URL parameter
  const clientData = id ? clientsDatabase[id as keyof typeof clientsDatabase] : null;

  // If client not found, show error message
  if (!clientData) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-red-600">Client not found</h1>
      </div>
    );
  }

  return (
    <div className="p-8">
      <ContactHeader
        name={clientData.organization}
        organization={clientData.name}
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