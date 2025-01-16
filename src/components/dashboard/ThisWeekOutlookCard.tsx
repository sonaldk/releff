import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const thisWeekOutlook = [
  { event: "Board Meeting", day: "Tuesday", priority: "high" },
  { event: "Product Launch", day: "Wednesday", priority: "high" },
  { event: "Team Training", day: "Thursday", priority: "medium" },
  { event: "Client Reviews", day: "Friday", priority: "medium" },
];

const getStatusColor = (status: string) => {
  const colors = {
    high: "text-red-500 bg-red-100",
    medium: "text-yellow-500 bg-yellow-100",
    low: "text-green-500 bg-green-100",
  };
  return colors[status as keyof typeof colors] || "text-gray-500 bg-gray-100";
};

export const ThisWeekOutlookCard = () => {
  return (
    <Card className="glass-effect">
      <CardHeader>
        <CardTitle className="text-xl">This Week Outlook</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px]">
          {thisWeekOutlook.map((item, index) => (
            <div key={index} className="flex items-center justify-between mb-4">
              <div>
                <p className="font-medium">{item.event}</p>
                <p className="text-sm text-gray-500">{item.day}</p>
              </div>
              <Badge className={getStatusColor(item.priority)}>
                {item.priority.toUpperCase()}
              </Badge>
            </div>
          ))}
        </ScrollArea>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="link" className="mt-4 w-full">View Full Schedule</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>This Week's Detailed Schedule</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              {thisWeekOutlook.map((item, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{item.event}</h3>
                    <Badge className={getStatusColor(item.priority)}>
                      {item.priority.toUpperCase()}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500">Day: {item.day}</p>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};