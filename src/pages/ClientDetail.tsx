import { useParams } from "react-router-dom";
import { TasksModule } from "@/components/tasks/TasksModule";
import { ClientHeader } from "@/components/client-detail/ClientHeader";
import { ClientMetrics } from "@/components/client-detail/ClientMetrics";
import { ClientCommunication } from "@/components/client-detail/ClientCommunication";
import { clientsDatabase } from "@/data/clientsDatabase";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const ClientDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  
  const clientData = id ? clientsDatabase[id as keyof typeof clientsDatabase] : null;

  if (!clientData) {
    return (
      <div className="p-8 min-h-screen bg-background">
        <h1 className="text-2xl font-bold text-red-600">Client not found</h1>
        <p className="mt-2">The requested client could not be found. ID: {id}</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-4 md:p-6 lg:p-8 space-y-6 max-w-[1600px] mx-auto"
        >
          <ClientHeader clientData={clientData} />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-8"
            >
              <ClientMetrics clientData={clientData} />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-4"
            >
              <ClientCommunication 
                emails={clientData.emails}
                engagementHistory={clientData.engagementHistory}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="h-[300px]">
                <div className="p-6 h-full backdrop-blur-sm bg-white/30 rounded-lg shadow-xl border-none">
                  <h3 className="text-lg font-semibold mb-4">Engagement Score Trend</h3>
                  <ResponsiveContainer width="100%" height={220}>
                    <AreaChart data={clientData.engagementHistory}>
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
              </div>

              <div className="h-[300px]">
                <div className="p-6 h-full backdrop-blur-sm bg-white/30 rounded-lg shadow-xl border-none">
                  <h3 className="text-lg font-semibold mb-4">Meeting & Response Metrics</h3>
                  <ResponsiveContainer width="100%" height={220}>
                    <LineChart data={clientData.engagementHistory}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="meetings" stroke="#82ca9d" />
                      <Line type="monotone" dataKey="responses" stroke="#ffc658" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="backdrop-blur-sm bg-white/30 rounded-lg shadow-xl border-none p-6"
          >
            <TasksModule entityType="client" entityId={id || ''} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ClientDetail;