import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface UrgentDeal {
  id: string;
  name: string;
  status: string;
  amount: string;
}

const urgentDeals = [
  { id: "enterprise-software", name: "Enterprise Solution Deal", status: "delayed", amount: "$150,000" },
  { id: "cloud-migration", name: "Cloud Migration Project", status: "pending_approval", amount: "$80,000" },
  { id: "security-suite", name: "Security Suite Upgrade", status: "at_risk", amount: "$95,000" },
];

const getStatusColor = (status: string) => {
  const colors = {
    delayed: "text-red-500 bg-red-100",
    pending_approval: "text-yellow-500 bg-yellow-100",
    at_risk: "text-orange-500 bg-orange-100",
  };
  return colors[status as keyof typeof colors] || "text-gray-500 bg-gray-100";
};

export const UrgentDealsCard = () => {
  const navigate = useNavigate();

  const handleDealClick = (dealId: string) => {
    navigate(`/dashboard/deal/${dealId}`);
  };

  return (
    <Card className="glass-effect">
      <CardHeader>
        <CardTitle className="text-xl">Urgent Deals</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px]">
          {urgentDeals.map((deal) => (
            <div
              key={deal.id}
              onClick={() => handleDealClick(deal.id)}
              className="flex items-center justify-between mb-4 p-3 rounded-lg hover:bg-blue-50/80 hover:backdrop-blur-sm cursor-pointer transition-all duration-200"
            >
              <div>
                <p className="font-medium">{deal.name}</p>
                <p className="text-sm text-gray-500">{deal.amount}</p>
              </div>
              <Badge className={getStatusColor(deal.status)}>
                {deal.status.replace("_", " ").toUpperCase()}
              </Badge>
            </div>
          ))}
        </ScrollArea>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="link" className="mt-4 w-full">View All Urgent Deals</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Urgent Deals Details</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              {urgentDeals.map((deal) => (
                <div
                  key={deal.id}
                  onClick={() => handleDealClick(deal.id)}
                  className="p-4 border rounded-lg hover:bg-blue-50/80 hover:backdrop-blur-sm cursor-pointer transition-all duration-200"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{deal.name}</h3>
                    <Badge className={getStatusColor(deal.status)}>
                      {deal.status.replace("_", " ").toUpperCase()}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500">Amount: {deal.amount}</p>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};