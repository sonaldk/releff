import { ContactEngagementMetrics } from "@/components/contact/ContactEngagementMetrics";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

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
  const getProgressColor = (value: string) => {
    const numValue = parseInt(value);
    if (numValue >= 80) return "bg-green-500";
    if (numValue >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="overflow-hidden backdrop-blur-sm bg-white/30 border-none shadow-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Engagement Score</h3>
            <div className="space-y-4">
              <Progress 
                value={parseInt(clientData.engagementScore)} 
                className="h-2"
              />
              <p className="text-2xl font-bold">{clientData.engagementScore}</p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="overflow-hidden backdrop-blur-sm bg-white/30 border-none shadow-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Customer Satisfaction</h3>
            <div className="space-y-4">
              <Progress 
                value={parseInt(clientData.customerSatisfaction)} 
                className={`h-2 ${getProgressColor(clientData.customerSatisfaction)}`}
              />
              <p className="text-2xl font-bold">{clientData.customerSatisfaction}</p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="overflow-hidden backdrop-blur-sm bg-white/30 border-none shadow-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Relationship Score</h3>
            <div className="space-y-4">
              <Progress 
                value={parseInt(clientData.relationshipScore)} 
                className={`h-2 ${getProgressColor(clientData.relationshipScore)}`}
              />
              <p className="text-2xl font-bold">{clientData.relationshipScore}</p>
            </div>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="overflow-hidden backdrop-blur-sm bg-white/30 border-none shadow-xl">
          <ContactEngagementMetrics {...clientData} />
        </Card>
      </motion.div>
    </motion.div>
  );
};