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
        from: "info@techcorp.com",
        hasAttachment: true
      },
      {
        date: "2024-02-12",
        subject: "Contract Review",
        from: "info@techcorp.com",
        hasAttachment: true
      }
    ],
    engagementHistory: [
      { month: "Jan", score: 75, meetings: 4, responses: 85 },
      { month: "Feb", score: 82, meetings: 6, responses: 90 },
      { month: "Mar", score: 85, meetings: 5, responses: 88 }
    ]
  },
  "global-systems-inc": {
    name: "Global Systems Inc",
    organization: "Global Systems Inc",
    email: "contact@globalsys.com",
    phone: "+1 (555) 234-5678",
    lastContact: "2024-02-14",
    lastMeeting: "2024-02-08",
    lastContactPerson: "Michael Brown",
    engagementScore: "78%",
    sentiment: "Good",
    influence: "Medium",
    organizationContact: "Primary",
    emails: [
      {
        date: "2024-02-14",
        subject: "System Integration Planning",
        from: "contact@globalsys.com",
        hasAttachment: true
      }
    ],
    engagementHistory: [
      { month: "Jan", score: 70, meetings: 3, responses: 80 },
      { month: "Feb", score: 75, meetings: 4, responses: 85 },
      { month: "Mar", score: 78, meetings: 4, responses: 82 }
    ]
  },
  "innovate-ai": {
    name: "Innovate AI",
    organization: "Innovate AI",
    email: "hello@innovateai.com",
    phone: "+1 (555) 345-6789",
    lastContact: "2024-02-13",
    lastMeeting: "2024-02-07",
    lastContactPerson: "Emma Watson",
    engagementScore: "92%",
    sentiment: "Very Positive",
    influence: "High",
    organizationContact: "Secondary",
    emails: [
      {
        date: "2024-02-13",
        subject: "AI Implementation Review",
        from: "hello@innovateai.com",
        hasAttachment: true
      }
    ],
    engagementHistory: [
      { month: "Jan", score: 88, meetings: 5, responses: 90 },
      { month: "Feb", score: 90, meetings: 6, responses: 92 },
      { month: "Mar", score: 92, meetings: 5, responses: 95 }
    ]
  },
  "dataflow-analytics": {
    name: "DataFlow Analytics",
    organization: "DataFlow Analytics",
    email: "info@dataflow.io",
    phone: "+1 (555) 456-7890",
    lastContact: "2024-02-12",
    lastMeeting: "2024-02-06",
    lastContactPerson: "David Chen",
    engagementScore: "88%",
    sentiment: "Positive",
    influence: "Medium",
    organizationContact: "Primary",
    emails: [
      {
        date: "2024-02-12",
        subject: "Analytics Dashboard Review",
        from: "info@dataflow.io",
        hasAttachment: true
      }
    ],
    engagementHistory: [
      { month: "Jan", score: 82, meetings: 4, responses: 85 },
      { month: "Feb", score: 85, meetings: 5, responses: 87 },
      { month: "Mar", score: 88, meetings: 5, responses: 90 }
    ]
  },
  "cloudnet-services": {
    name: "CloudNet Services",
    organization: "CloudNet Services",
    email: "support@cloudnet.com",
    phone: "+1 (555) 567-8901",
    lastContact: "2024-02-11",
    lastMeeting: "2024-02-05",
    lastContactPerson: "Lisa Park",
    engagementScore: "95%",
    sentiment: "Excellent",
    influence: "High",
    organizationContact: "Primary",
    emails: [
      {
        date: "2024-02-11",
        subject: "Cloud Infrastructure Planning",
        from: "support@cloudnet.com",
        hasAttachment: true
      }
    ],
    engagementHistory: [
      { month: "Jan", score: 90, meetings: 6, responses: 92 },
      { month: "Feb", score: 92, meetings: 7, responses: 94 },
      { month: "Mar", score: 95, meetings: 6, responses: 96 }
    ]
  },
  "securestack": {
    name: "SecureStack",
    organization: "SecureStack",
    email: "contact@securestack.io",
    phone: "+1 (555) 678-9012",
    lastContact: "2024-02-10",
    lastMeeting: "2024-02-04",
    lastContactPerson: "James Wilson",
    engagementScore: "87%",
    sentiment: "Good",
    influence: "Medium",
    organizationContact: "Secondary",
    emails: [
      {
        date: "2024-02-10",
        subject: "Security Assessment Results",
        from: "contact@securestack.io",
        hasAttachment: true
      }
    ],
    engagementHistory: [
      { month: "Jan", score: 82, meetings: 4, responses: 85 },
      { month: "Feb", score: 85, meetings: 5, responses: 86 },
      { month: "Mar", score: 87, meetings: 5, responses: 88 }
    ]
  },
  "devops-pro": {
    name: "DevOps Pro",
    organization: "DevOps Pro",
    email: "info@devopspro.com",
    phone: "+1 (555) 789-0123",
    lastContact: "2024-02-09",
    lastMeeting: "2024-02-03",
    lastContactPerson: "Alex Thompson",
    engagementScore: "89%",
    sentiment: "Positive",
    influence: "High",
    organizationContact: "Primary",
    emails: [
      {
        date: "2024-02-09",
        subject: "DevOps Pipeline Review",
        from: "info@devopspro.com",
        hasAttachment: true
      }
    ],
    engagementHistory: [
      { month: "Jan", score: 84, meetings: 5, responses: 86 },
      { month: "Feb", score: 86, meetings: 6, responses: 88 },
      { month: "Mar", score: 89, meetings: 5, responses: 90 }
    ]
  },
  "smart-solutions-ltd": {
    name: "Smart Solutions Ltd",
    organization: "Smart Solutions Ltd",
    email: "contact@smartsol.com",
    phone: "+1 (555) 890-1234",
    lastContact: "2024-02-08",
    lastMeeting: "2024-02-02",
    lastContactPerson: "Rachel Green",
    engagementScore: "93%",
    sentiment: "Excellent",
    influence: "High",
    organizationContact: "Primary",
    emails: [
      {
        date: "2024-02-08",
        subject: "Solution Architecture Review",
        from: "contact@smartsol.com",
        hasAttachment: true
      }
    ],
    engagementHistory: [
      { month: "Jan", score: 88, meetings: 6, responses: 90 },
      { month: "Feb", score: 90, meetings: 7, responses: 92 },
      { month: "Mar", score: 93, meetings: 6, responses: 94 }
    ]
  },
  "digital-dynamics": {
    name: "Digital Dynamics",
    organization: "Digital Dynamics",
    email: "info@digidyn.com",
    phone: "+1 (555) 901-2345",
    lastContact: "2024-02-07",
    lastMeeting: "2024-02-01",
    lastContactPerson: "Tom Baker",
    engagementScore: "82%",
    sentiment: "Good",
    influence: "Medium",
    organizationContact: "Secondary",
    emails: [
      {
        date: "2024-02-07",
        subject: "Digital Transformation Plan",
        from: "info@digidyn.com",
        hasAttachment: true
      }
    ],
    engagementHistory: [
      { month: "Jan", score: 76, meetings: 3, responses: 80 },
      { month: "Feb", score: 79, meetings: 4, responses: 81 },
      { month: "Mar", score: 82, meetings: 4, responses: 83 }
    ]
  },
  "future-systems": {
    name: "Future Systems",
    organization: "Future Systems",
    email: "contact@futuresys.com",
    phone: "+1 (555) 012-3456",
    lastContact: "2024-02-06",
    lastMeeting: "2024-01-31",
    lastContactPerson: "Sophie Martinez",
    engagementScore: "86%",
    sentiment: "Positive",
    influence: "Medium",
    organizationContact: "Primary",
    emails: [
      {
        date: "2024-02-06",
        subject: "Future Tech Implementation",
        from: "contact@futuresys.com",
        hasAttachment: true
      }
    ],
    engagementHistory: [
      { month: "Jan", score: 80, meetings: 4, responses: 83 },
      { month: "Feb", score: 83, meetings: 5, responses: 85 },
      { month: "Mar", score: 86, meetings: 5, responses: 87 }
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