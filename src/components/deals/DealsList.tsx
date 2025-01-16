import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useNavigate } from "react-router-dom";

interface Deal {
  name: string;
  client: string;
  value: number;
  stage: string;
  probability: string;
  status: string;
}

interface DealsListProps {
  deals: Deal[];
}

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

export const DealsList = ({ deals }: DealsListProps) => {
  const navigate = useNavigate();

  const handleRowClick = (dealName: string) => {
    // Convert the deal name to kebab case for the URL
    const dealId = dealName.toLowerCase().replace(/\s+/g, '-');
    console.log("DealsList - Clicked deal:", dealName);
    console.log("DealsList - Generated dealId:", dealId);
    console.log("DealsList - Navigating to path:", `/dashboard/deal/${dealId}`);
    navigate(`/dashboard/deal/${dealId}`);
  };

  console.log("DealsList - Rendering with deals:", deals);

  return (
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
            {deals.map((deal, index) => (
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
  );
};