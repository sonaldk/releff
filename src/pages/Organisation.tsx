import { Building2, Users, DollarSign } from "lucide-react";
import { SummaryCard } from "@/components/dashboard/SummaryCards";
import { ClientList } from "@/components/organisation/ClientList";

// Mock data for demonstration
const summaryData = {
  totalClients: 45,
  totalDeals: 128,
  totalRevenue: 2450000,
};

const clientsData = [
  {
    name: "TechCorp Solutions",
    employees: 250,
    website: "techcorp.com",
    dealsCount: 8,
    revenue: 450000,
    health: "Excellent",
  },
  {
    name: "Global Systems Inc",
    employees: 180,
    website: "globalsys.com",
    dealsCount: 5,
    revenue: 280000,
    health: "Good",
  },
  {
    name: "Innovate AI",
    employees: 120,
    website: "innovateai.com",
    dealsCount: 3,
    revenue: 150000,
    health: "At Risk",
  },
  {
    name: "DataFlow Analytics",
    employees: 90,
    website: "dataflow.io",
    dealsCount: 4,
    revenue: 200000,
    health: "Good",
  },
  {
    name: "CloudNet Services",
    employees: 150,
    website: "cloudnet.com",
    dealsCount: 6,
    revenue: 320000,
    health: "Excellent",
  },
  {
    name: "SecureStack",
    employees: 85,
    website: "securestack.io",
    dealsCount: 3,
    revenue: 180000,
    health: "Good",
  },
  {
    name: "DevOps Pro",
    employees: 110,
    website: "devopspro.com",
    dealsCount: 4,
    revenue: 220000,
    health: "Good",
  },
  {
    name: "Smart Solutions Ltd",
    employees: 200,
    website: "smartsol.com",
    dealsCount: 7,
    revenue: 380000,
    health: "Excellent",
  },
  {
    name: "Digital Dynamics",
    employees: 75,
    website: "digidyn.com",
    dealsCount: 2,
    revenue: 120000,
    health: "At Risk",
  },
  {
    name: "Future Systems",
    employees: 160,
    website: "futuresys.com",
    dealsCount: 5,
    revenue: 250000,
    health: "Good",
  },
];

const Organisation = () => {
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
      <ClientList clients={clientsData} />
    </div>
  );
};

export default Organisation;
