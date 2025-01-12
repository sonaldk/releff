import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Building2, Users, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";

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

const getHealthColor = (health: string) => {
  const colors = {
    Excellent: "text-green-600 bg-green-100",
    Good: "text-blue-600 bg-blue-100",
    "At Risk": "text-red-600 bg-red-100",
  };
  return colors[health as keyof typeof colors] || "text-gray-600 bg-gray-100";
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const Organisation = () => {
  const navigate = useNavigate();

  const handleRowClick = (clientName: string) => {
    // For demo purposes, using the client name as ID
    // In production, use actual client IDs
    const clientId = clientName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/client/${clientId}`);
  };

  return (
    <div className="flex-1 p-8 bg-gray-50">
      <h1 className="text-4xl font-semibold mb-6">Organisation</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="glass-effect">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-medium">Total Clients</CardTitle>
            <Building2 className="h-5 w-5 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{summaryData.totalClients}</div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-medium">Total Deals</CardTitle>
            <Users className="h-5 w-5 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{summaryData.totalDeals}</div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-5 w-5 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{formatCurrency(summaryData.totalRevenue)}</div>
          </CardContent>
        </Card>
      </div>

      {/* Clients Table */}
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle>Client List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Client Name</TableHead>
                <TableHead>Employees</TableHead>
                <TableHead>Website</TableHead>
                <TableHead>Deals Closed</TableHead>
                <TableHead>Total Revenue</TableHead>
                <TableHead>Client Health</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clientsData.map((client, index) => (
                <TableRow 
                  key={index}
                  className="cursor-pointer hover:bg-gray-50"
                  onClick={() => handleRowClick(client.name)}
                >
                  <TableCell className="font-medium">{client.name}</TableCell>
                  <TableCell>{client.employees}</TableCell>
                  <TableCell>{client.website}</TableCell>
                  <TableCell>{client.dealsCount}</TableCell>
                  <TableCell>{formatCurrency(client.revenue)}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-sm ${getHealthColor(client.health)}`}>
                      {client.health}
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

export default Organisation;
