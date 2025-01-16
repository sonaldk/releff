import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const recentActivities = [
  { action: "Deal closed", details: "MetaTech Solutions - $200k", time: "2h ago" },
  { action: "New contact added", details: "Sarah Chen - VP Engineering", time: "5h ago" },
  { action: "Meeting scheduled", details: "Product demo with InnovateAI", time: "1d ago" },
];

export const RecentActivitiesCard = () => {
  return (
    <Card className="glass-effect">
      <CardHeader>
        <CardTitle className="text-xl">Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px]">
          {recentActivities.map((activity, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center justify-between">
                <p className="font-medium">{activity.action}</p>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">{activity.details}</p>
            </div>
          ))}
        </ScrollArea>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="link" className="mt-4 w-full">View All Activities</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Recent Activities Details</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{activity.action}</h3>
                    <span className="text-sm text-gray-500">{activity.time}</span>
                  </div>
                  <p className="text-sm text-gray-500">{activity.details}</p>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};