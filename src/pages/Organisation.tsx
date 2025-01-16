import { Building2, Users, DollarSign } from "lucide-react";
import { SummaryCard } from "@/components/dashboard/SummaryCards";
import { ClientList } from "@/components/organisation/ClientList";
import { clientsList } from "@/data/mockClients";

const Organisation = () => {
  // Calculate summary data from clientsList
  const summaryData = {
    totalClients: clientsList.length,
    totalDeals: clientsList.reduce((acc, client) => acc + client.dealsCount, 0),
    totalRevenue: clientsList.reduce((acc, client) => acc + client.revenue, 0),
  };

  return (
    <div className="flex-1 p-8 bg-gray-50">
      <h1 className="text-4xl font-semibold mb-6">Organisation</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <SummaryCard
          title="Total Clients"
          value={summaryData.totalClients}
          Icon={Building2}
        />
        <SummaryCard
          title="Total Deals"
          value={summaryData.totalDeals}
          Icon={Users}
        />
        <SummaryCard
          title="Total Revenue"
          value={new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(summaryData.totalRevenue)}
          Icon={DollarSign}
        />
      </div>

      {/* Clients Table */}
      <ClientList clients={clientsList} />
    </div>
  );
};

export default Organisation;