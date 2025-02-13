import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { clientsDatabase } from "@/data/clientsDatabase"; // Import the database

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

export const ClientList = ({ clients }: ClientListProps) => {
  const navigate = useNavigate();

  const handleRowClick = (clientName: string) => {
    // Convert client name to a valid URL-friendly format and ensure it matches database keys
    const clientId = clientName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
      .trim();
    
    console.log('Attempting to navigate to client:', clientId); // Debug log
    console.log('Available client IDs:', Object.keys(clientsDatabase)); // Debug log
    
    // Check if the client exists in the database
    if (clientsDatabase[clientId as keyof typeof clientsDatabase]) {
      navigate(`/dashboard/client/${clientId}`);
    } else {
      console.error(`Client not found in database: ${clientId}`);
      // You might want to show a toast here to inform the user
    }
  };

  const getHealthColor = (health: string) => {
    const colors = {
      Excellent: "text-green-600 bg-green-100",
      Good: "text-blue-600 bg-blue-100",
      "At Risk": "text-red-600 bg-red-100",
    };
    return colors[health as keyof typeof colors] || "text-gray-600 bg-gray-100";
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Client Name</TableHead>
            <TableHead>Employees</TableHead>
            <TableHead>Website</TableHead>
            <TableHead>Deals</TableHead>
            <TableHead>Revenue</TableHead>
            <TableHead>Health</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client, index) => (
            <TableRow
              key={index}
              className="cursor-pointer hover:bg-accent/50"
              onClick={() => handleRowClick(client.name)}
            >
              <TableCell className="font-medium">{client.name}</TableCell>
              <TableCell>{client.employees}</TableCell>
              <TableCell>{client.website}</TableCell>
              <TableCell>{client.dealsCount}</TableCell>
              <TableCell>
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(client.revenue)}
              </TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-sm ${getHealthColor(client.health)}`}>
                  {client.health}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};