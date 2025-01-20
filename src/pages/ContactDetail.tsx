import { useParams } from "react-router-dom";
import { ContactHeader } from "@/components/contact/ContactHeader";
import { ContactEngagementMetrics } from "@/components/contact/ContactEngagementMetrics";
import { RecentEmails } from "@/components/contact/RecentEmails";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const mockContactData = {
  "john-smith": {
    name: "John Smith",
    role: "Chief Technology Officer",
    organization: "Tech Corp",
    email: "john.smith@techcorp.com",
    phone: "+1 (555) 123-4567",
    lastContact: "2024-02-15",
    organizationContact: "Sarah Williams",
    lastMeeting: "March 15, 2024",
    lastContactPerson: "Mike Johnson",
    engagementScore: "High (85%)",
    sentiment: "Very Positive",
    influence: "Key Decision Maker",
    riskIndex: "Low",
    customerSatisfaction: "95%",
    deepestRelationship: "Mike Johnson (15 years)",
    broadestRelationship: "Sarah Williams (8 departments)",
    relationshipScore: "92/100",
    interactionMetrics: {
      deals: 12,
      emails: 450,
      calls: 85,
      meetings: 24
    },
    recentEmails: [
      {
        date: "Mar 15, 2024",
        subject: "Q2 Planning Meeting Notes",
        from: "Mike Johnson",
        hasAttachment: true
      },
      {
        date: "Mar 10, 2024",
        subject: "Product Roadmap Review",
        from: "Sarah Williams",
        hasAttachment: true
      },
      {
        date: "Mar 5, 2024",
        subject: "Follow-up: Technical Discussion",
        from: "Mike Johnson",
        hasAttachment: false
      },
      {
        date: "Mar 1, 2024",
        subject: "Partnership Opportunity",
        from: "Sarah Williams",
        hasAttachment: true
      },
      {
        date: "Feb 25, 2024",
        subject: "Weekly Update",
        from: "Mike Johnson",
        hasAttachment: false
      }
    ],
    engagementHistory: [
      { month: "Jan", score: 85, meetings: 4, responses: 90 },
      { month: "Feb", score: 88, meetings: 5, responses: 85 },
      { month: "Mar", score: 92, meetings: 6, responses: 95 },
      { month: "Apr", score: 90, meetings: 4, responses: 88 },
      { month: "May", score: 95, meetings: 7, responses: 92 },
      { month: "Jun", score: 89, meetings: 5, responses: 87 }
    ]
  },
  "sarah-johnson": {
    name: "Sarah Johnson",
    role: "Marketing Director",
    organization: "Marketing Pro",
    email: "sarah.j@marketingpro.com",
    phone: "+1 (555) 234-5678",
    lastContact: "2024-02-10",
    organizationContact: "John Doe",
    lastMeeting: "February 5, 2024",
    lastContactPerson: "Jane Smith",
    engagementScore: "Medium (70%)",
    sentiment: "Positive",
    influence: "Influencer",
    riskIndex: "Medium",
    customerSatisfaction: "88%",
    deepestRelationship: "John Doe (8 years)",
    broadestRelationship: "Alex Thompson (5 departments)",
    relationshipScore: "78/100",
    interactionMetrics: {
      deals: 8,
      emails: 320,
      calls: 45,
      meetings: 16
    },
    recentEmails: [
      {
        date: "Feb 10, 2024",
        subject: "Marketing Strategy Discussion",
        from: "Jane Smith",
        hasAttachment: false
      },
      {
        date: "Feb 5, 2024",
        subject: "Follow-up on Campaign",
        from: "John Doe",
        hasAttachment: true
      },
      {
        date: "Jan 30, 2024",
        subject: "Weekly Check-in",
        from: "Jane Smith",
        hasAttachment: false
      },
      {
        date: "Jan 25, 2024",
        subject: "Q1 Goals Review",
        from: "John Doe",
        hasAttachment: true
      },
      {
        date: "Jan 20, 2024",
        subject: "Feedback on Proposal",
        from: "Jane Smith",
        hasAttachment: false
      }
    ],
    engagementHistory: [
      { month: "Jan", score: 82, meetings: 3, responses: 88 },
      { month: "Feb", score: 85, meetings: 4, responses: 90 },
      { month: "Mar", score: 88, meetings: 5, responses: 92 },
      { month: "Apr", score: 86, meetings: 4, responses: 89 },
      { month: "May", score: 90, meetings: 6, responses: 94 },
      { month: "Jun", score: 87, meetings: 4, responses: 91 }
    ]
  },
  "michael-chen": {
    name: "Michael Chen",
    role: "Product Director",
    organization: "Innovation Labs",
    email: "m.chen@innovationlabs.com",
    phone: "+1 (555) 345-6789",
    lastContact: "2024-02-12",
    organizationContact: "Alice Brown",
    lastMeeting: "February 10, 2024",
    lastContactPerson: "Bob White",
    engagementScore: "High (90%)",
    sentiment: "Very Positive",
    influence: "Key Influencer",
    riskIndex: "Low",
    customerSatisfaction: "92%",
    deepestRelationship: "Bob White (12 years)",
    broadestRelationship: "Alice Brown (7 departments)",
    relationshipScore: "88/100",
    interactionMetrics: {
      deals: 15,
      emails: 580,
      calls: 92,
      meetings: 28
    },
    recentEmails: [
      {
        date: "Feb 12, 2024",
        subject: "Product Launch Update",
        from: "Bob White",
        hasAttachment: true
      },
      {
        date: "Feb 10, 2024",
        subject: "Feedback on Prototype",
        from: "Alice Brown",
        hasAttachment: false
      },
      {
        date: "Feb 5, 2024",
        subject: "Weekly Sync",
        from: "Bob White",
        hasAttachment: true
      },
      {
        date: "Feb 1, 2024",
        subject: "Q2 Planning",
        from: "Alice Brown",
        hasAttachment: false
      },
      {
        date: "Jan 28, 2024",
        subject: "Follow-up on Features",
        from: "Bob White",
        hasAttachment: true
      }
    ],
    engagementHistory: [
      { month: "Jan", score: 88, meetings: 5, responses: 92 },
      { month: "Feb", score: 90, meetings: 6, responses: 94 },
      { month: "Mar", score: 93, meetings: 7, responses: 96 },
      { month: "Apr", score: 91, meetings: 5, responses: 93 },
      { month: "May", score: 94, meetings: 8, responses: 95 },
      { month: "Jun", score: 92, meetings: 6, responses: 94 }
    ]
  }
};

const ContactDetail = () => {
  const { id } = useParams();
  const contact = mockContactData[id as keyof typeof mockContactData];
  const [openSections, setOpenSections] = useState({
    metrics: true,
    communications: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  if (!contact) {
    return <div>Contact not found</div>;
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
          <ContactHeader
            name={contact.name}
            organization={contact.organization}
            email={contact.email}
            phone={contact.phone}
            lastContact={contact.lastContact}
          />

          <CardWrapper section="metrics" title="Engagement Metrics">
            <ContactEngagementMetrics
              lastMeeting={contact.lastMeeting}
              lastContactPerson={contact.lastContactPerson}
              engagementScore={contact.engagementScore}
              sentiment={contact.sentiment}
              influence={contact.influence}
              organizationContact={contact.organizationContact}
              riskIndex={contact.riskIndex}
              customerSatisfaction={contact.customerSatisfaction}
              deepestRelationship={contact.deepestRelationship}
              broadestRelationship={contact.broadestRelationship}
              relationshipScore={contact.relationshipScore}
              interactionMetrics={contact.interactionMetrics}
            />
          </CardWrapper>

          <CardWrapper section="communications" title="Recent Communications">
            <RecentEmails emails={contact.recentEmails} />
          </CardWrapper>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;