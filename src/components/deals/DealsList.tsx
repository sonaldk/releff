import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

export const DealsList = ({ deals }: DealsListProps) => {
  const navigate = useNavigate();

  const handleRowClick = (dealName: string) => {
    const dealId = dealName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/dashboard/deal/${dealId}`);
  };

  return (
    <Card className="glass-effect">
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
              <TableCell>
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(deal.value)}
              </TableCell>
              <TableCell>{deal.stage}</TableCell>
              <TableCell>{deal.probability}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    deal.status === 'Active'
                      ? 'default'
                      : deal.status === 'At Risk'
                      ? 'destructive'
                      : 'secondary'
                  }
                >
                  {deal.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};