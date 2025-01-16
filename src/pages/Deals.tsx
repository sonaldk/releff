import { DollarSign, TrendingUp, Users, Briefcase } from "lucide-react";
import { SummaryCard } from "@/components/dashboard/SummaryCards";
import { DealsList } from "@/components/deals/DealsList";

// Mock data for demonstration
const summaryData = {
  totalDeals: 128,
  activeDeals: 45,
  totalValue: 3250000,
  avgDealSize: 85000,
};

const dealsData = [
  {
    name: "Enterprise Software License",
    client: "TechCorp Solutions",
    value: 450000,
    stage: "Negotiation",
    probability: "75%",
    status: "Active",
  },
  {
    name: "Cloud Migration Project",
    client: "Global Systems Inc",
    value: 280000,
    stage: "Proposal",
    probability: "60%",
    status: "Active",
  },
  {
    name: "AI Implementation",
    client: "Innovate AI",
    value: 150000,
    stage: "Discovery",
    probability: "40%",
    status: "At Risk",
  },
  {
    name: "Data Analytics Platform",
    client: "DataFlow Analytics",
    value: 200000,
    stage: "Closed Won",
    probability: "100%",
    status: "Won",
  },
  {
    name: "Security Suite Upgrade",
    client: "SecureStack",
    value: 180000,
    stage: "Negotiation",
    probability: "80%",
    status: "Active",
  },
];

const Deals = () => {
  return (
    <div className="flex-1 p-8 bg-background">
      <h1 className="text-4xl font-semibold mb-6">Deals</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <SummaryCard
          title="Total Deals"
          value={summaryData.totalDeals}
          Icon={Briefcase}
        />
        <SummaryCard
          title="Active Deals"
          value={summaryData.activeDeals}
          Icon={TrendingUp}
        />
        <SummaryCard
          title="Total Value"
          value={new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(summaryData.totalValue)}
          Icon={DollarSign}
        />
        <SummaryCard
          title="Avg Deal Size"
          value={new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(summaryData.avgDealSize)}
          Icon={Users}
        />
      </div>

      {/* Deals Table */}
      <DealsList deals={dealsData} />
    </div>
  );
};

export default Deals;
