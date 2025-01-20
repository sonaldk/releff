import { RecentEmails } from "@/components/contact/RecentEmails";
import { EngagementCharts } from "@/components/contact/EngagementCharts";
import { LatestNews } from "@/components/contact/LatestNews";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

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
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <Card className="overflow-hidden backdrop-blur-sm bg-white/30 border-none shadow-xl">
        <RecentEmails emails={emails} />
      </Card>
      
      <Card className="overflow-hidden backdrop-blur-sm bg-white/30 border-none shadow-xl">
        <EngagementCharts engagementHistory={engagementHistory} />
      </Card>
      
      <Card className="overflow-hidden backdrop-blur-sm bg-white/30 border-none shadow-xl">
        <LatestNews />
      </Card>
    </motion.div>
  );
};