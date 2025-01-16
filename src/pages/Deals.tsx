import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DollarSign, TrendingUp, Users, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

const getStatusColor = (status: string) => {
  const colors = {
    Active: "text-blue-600 bg-blue-100",
    Won: "text-green-600 bg-green-100",
    "At Risk": "text-red-600 bg-red-100",
  };
  return colors[status as keyof typeof colors] || "text-gray-600 bg-gray-100";
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const Deals = () => {
  const navigate = useNavigate();

  const handleRowClick = (dealName: string) => {
    // Convert deal name to URL-friendly format for the ID
    const dealId = dealName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/deal/${dealId}`);
  };

  return (
    <div className="flex-1 p-8 bg-background">
      <h1 className="text-4xl font-semibold mb-6">Deals</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="glass-effect">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-medium">Total Deals</CardTitle>
            <Briefcase className="h-5 w-5 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{summaryData.totalDeals}</div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-medium">Active Deals</CardTitle>
            <TrendingUp className="h-5 w-5 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{summaryData.activeDeals}</div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-medium">Total Value</CardTitle>
            <DollarSign className="h-5 w-5 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{formatCurrency(summaryData.totalValue)}</div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-medium">Avg Deal Size</CardTitle>
            <Users className="h-5 w-5 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{formatCurrency(summaryData.avgDealSize)}</div>
          </CardContent>
        </Card>
      </div>

      {/* Deals Table */}
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle>Active Deals</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Deal Name</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Stage</TableHead>
                <TableHead>Probability</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dealsData.map((deal, index) => (
                <TableRow 
                  key={index}
                  className="cursor-pointer hover:bg-gray-50"
                  onClick={() => handleRowClick(deal.name)}
                >
                  <TableCell className="font-medium">{deal.name}</TableCell>
                  <TableCell>{deal.client}</TableCell>
                  <TableCell>{formatCurrency(deal.value)}</TableCell>
                  <TableCell>{deal.stage}</TableCell>
                  <TableCell>{deal.probability}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(deal.status)}`}>
                      {deal.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Deals;