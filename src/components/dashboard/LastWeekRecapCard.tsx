import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const lastWeekRecap = [
  { metric: "Deals Closed", value: "5", change: "+2", trend: "positive" },
  { metric: "New Leads", value: "24", change: "+8", trend: "positive" },
  { metric: "Customer Meetings", value: "15", change: "-3", trend: "negative" },
  { metric: "Revenue Generated", value: "$320K", change: "+15%", trend: "positive" },
];

const getStatusColor = (status: string) => {
  const colors = {
    positive: "text-green-500 bg-green-100",
    negative: "text-red-500 bg-red-100",
  };
  return colors[status as keyof typeof colors] || "text-gray-500 bg-gray-100";
};

export const LastWeekRecapCard = () => {
  return (
    <Card className="glass-effect">
      <CardHeader>
        <CardTitle className="text-xl">Last Week Recap</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px]">
          {lastWeekRecap.map((item, index) => (
            <div key={index} className="flex items-center justify-between mb-4">
              <div>
                <p className="font-medium">{item.metric}</p>
                <p className="text-2xl font-bold">{item.value}</p>
              </div>
              <Badge className={getStatusColor(item.trend)}>
                {item.change}
              </Badge>
            </div>
          ))}
        </ScrollArea>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="link" className="mt-4 w-full">View Full Recap</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Last Week's Detailed Recap</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              {lastWeekRecap.map((item, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{item.metric}</h3>
                    <Badge className={getStatusColor(item.trend)}>
                      {item.change}
                    </Badge>
                  </div>
                  <p className="text-2xl font-bold">{item.value}</p>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};