import { RecentEmails } from "@/components/contact/RecentEmails";
import { EngagementCharts } from "@/components/contact/EngagementCharts";
import { LatestNews } from "@/components/contact/LatestNews";

interface ClientCommunicationProps {
  emails: Array<{
    date: string;
    subject: string;
    from: string;
    hasAttachment: boolean;
  }>;
  engagementHistory: Array<{
    month: string;
    score: number;
    meetings: number;
    responses: number;
  }>;
}

export const ClientCommunication = ({ emails, engagementHistory }: ClientCommunicationProps) => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <RecentEmails emails={emails} />
      <EngagementCharts engagementHistory={engagementHistory} />
      <LatestNews />
    </div>
  );
};