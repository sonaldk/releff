import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useNavigate } from "react-router-dom";

interface Client {
  name: string;
  employees: number;
  website: string;
  dealsCount: number;
  revenue: number;
  health: string;
}

interface ClientListProps {
  clients: Client[];
}

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

export const ClientList = ({ clients }: ClientListProps) => {
  const navigate = useNavigate();

  const handleRowClick = (clientName: string) => {
    const clientId = clientName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/client/${clientId}`);
  };

  return (
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
            {clients.map((client, index) => (
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
  );
};