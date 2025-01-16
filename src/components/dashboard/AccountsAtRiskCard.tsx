import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { mockClients } from "@/data/mockClients";

const accountsAtRisk = [
  { id: "techcorp-inc", name: "TechCorp Inc.", reason: "no_engagement", lastEngagement: "30 days ago" },
  { id: "global-systems", name: "Global Systems", reason: "champion_left", details: "CTO departed" },
  { id: "innovate-co", name: "Innovate Co.", reason: "delayed_payment", amount: "$25,000" },
];

export const AccountsAtRiskCard = () => {
  const navigate = useNavigate();

  const handleAccountClick = (accountId: string) => {
    if (mockClients[accountId]) {
      navigate(`/dashboard/client/${accountId}`);
    }
  };

  return (
    <Card className="glass-effect">
      <CardHeader>
        <CardTitle className="text-xl">Accounts at Risk</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px]">
          {accountsAtRisk.map((account) => (
            <div 
              key={account.id} 
              className="mb-4 p-3 rounded-lg hover:bg-blue-50/80 hover:backdrop-blur-sm cursor-pointer transition-all duration-200"
              onClick={() => handleAccountClick(account.id)}
            >
              <div className="flex items-center justify-between">
                <p className="font-medium">{account.name}</p>
                <Badge className="bg-red-100 text-red-500">AT RISK</Badge>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {account.reason === "no_engagement" && "No engagement in 30 days"}
                {account.reason === "champion_left" && "Key champion left"}
                {account.reason === "delayed_payment" && "Delayed payment"}
              </p>
            </div>
          ))}
        </ScrollArea>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="link" className="mt-4 w-full">View All At-Risk Accounts</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>At-Risk Accounts Details</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              {accountsAtRisk.map((account) => (
                <div 
                  key={account.id} 
                  className="p-4 border rounded-lg hover:bg-blue-50/80 hover:backdrop-blur-sm cursor-pointer transition-all duration-200"
                  onClick={() => handleAccountClick(account.id)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{account.name}</h3>
                    <Badge className="bg-red-100 text-red-500">AT RISK</Badge>
                  </div>
                  <p className="text-sm text-gray-500">
                    {account.reason === "no_engagement" && "No engagement in 30 days"}
                    {account.reason === "champion_left" && "Key champion left"}
                    {account.reason === "delayed_payment" && "Delayed payment"}
                  </p>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};