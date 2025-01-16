import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const accountsAtRisk = [
  { name: "TechCorp Inc.", reason: "no_engagement", lastEngagement: "30 days ago" },
  { name: "Global Systems", reason: "champion_left", details: "CTO departed" },
  { name: "Innovate Co.", reason: "delayed_payment", amount: "$25,000" },
];

export const AccountsAtRiskCard = () => {
  const navigate = useNavigate();

  const handleAccountClick = (accountName: string) => {
    const accountId = accountName.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');
    navigate(`/organisation/${accountId}`);
  };

  return (
    <Card className="glass-effect">
      <CardHeader>
        <CardTitle className="text-xl">Accounts at Risk</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px]">
          {accountsAtRisk.map((account, index) => (
            <div 
              key={index} 
              className="mb-4 p-2 hover:bg-gray-50 rounded cursor-pointer transition-colors"
              onClick={() => handleAccountClick(account.name)}
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
              {accountsAtRisk.map((account, index) => (
                <div 
                  key={index} 
                  className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => handleAccountClick(account.name)}
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