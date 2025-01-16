import { useParams } from "react-router-dom";
import { TasksModule } from "@/components/tasks/TasksModule";
import { ClientHeader } from "@/components/client-detail/ClientHeader";
import { ClientMetrics } from "@/components/client-detail/ClientMetrics";
import { ClientCommunication } from "@/components/client-detail/ClientCommunication";
import { clientsDatabase } from "@/data/clientsDatabase";

const ClientDetail = () => {
  const { id } = useParams();
  console.log("Client ID from params:", id); // Debug log

  // Ensure id exists and is a valid key in the database
  const clientData = id ? clientsDatabase[id as keyof typeof clientsDatabase] : null;
  console.log("Client data:", clientData); // Debug log

  if (!clientData) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-red-600">Client not found</h1>
        <p className="mt-2">The requested client could not be found.</p>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-8 bg-background min-h-screen">
      <ClientHeader clientData={clientData} />
      <ClientMetrics clientData={clientData} />
      <ClientCommunication 
        emails={clientData.emails}
        engagementHistory={clientData.engagementHistory}
      />
      <TasksModule entityType="client" entityId={id || ''} />
    </div>
  );
};

export default ClientDetail;