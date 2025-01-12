import { useParams } from "react-router-dom";
import { ContactHeader } from "@/components/contact/ContactHeader";
import { ContactEngagementMetrics } from "@/components/contact/ContactEngagementMetrics";
import { RecentEmails } from "@/components/contact/RecentEmails";
import { EngagementCharts } from "@/components/contact/EngagementCharts";
import { mockContactData } from "@/data/mockData";
import { Loader2 } from "lucide-react";

const ContactDetail = () => {
  const { id } = useParams();
  const contact = mockContactData[id as keyof typeof mockContactData];

  if (!id) {
    return <div className="flex-1 p-8">Contact ID is required</div>;
  }

  if (!contact) {
    return (
      <div className="flex-1 p-8 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex-1 p-8 bg-gray-50/50">
      <ContactHeader
        name={contact.name}
        organization={contact.organization}
        email={contact.email}
        phone={contact.phone}
        lastContact={contact.lastContact}
      />

      <ContactEngagementMetrics
        lastMeeting={contact.lastMeeting}
        lastContactPerson={contact.lastContactPerson}
        engagementScore={contact.engagementScore}
        sentiment={contact.sentiment}
        influence={contact.influence}
        organizationContact={contact.organizationContact}
      />

      <RecentEmails emails={contact.recentEmails} />

      <EngagementCharts engagementHistory={contact.engagementHistory} />
    </div>
  );
};

export default ContactDetail;