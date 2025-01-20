import { RecentEmails } from "@/components/contact/RecentEmails";
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
}

export const ClientCommunication = ({ emails }: ClientCommunicationProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="overflow-hidden backdrop-blur-sm bg-white/30 border-none shadow-xl">
          <RecentEmails emails={emails} />
        </Card>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="overflow-hidden backdrop-blur-sm bg-white/30 border-none shadow-xl">
          <LatestNews />
        </Card>
      </motion.div>
    </motion.div>
  );
};