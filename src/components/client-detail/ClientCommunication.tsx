import { RecentEmails } from "@/components/contact/RecentEmails";
import { EngagementCharts } from "@/components/contact/EngagementCharts";
import { LatestNews } from "@/components/contact/LatestNews";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { LineChart, Line } from 'recharts';

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="h-[300px]"
        >
          <Card className="h-full overflow-hidden backdrop-blur-sm bg-white/30 border-none shadow-xl">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Engagement Score Trend</h3>
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={engagementHistory}>
                  <defs>
                    <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="score" stroke="#8884d8" fillOpacity={1} fill="url(#colorScore)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="h-[300px]"
        >
          <Card className="h-full overflow-hidden backdrop-blur-sm bg-white/30 border-none shadow-xl">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Meeting & Response Metrics</h3>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={engagementHistory}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="meetings" stroke="#82ca9d" />
                  <Line type="monotone" dataKey="responses" stroke="#ffc658" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </motion.div>
      </div>

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