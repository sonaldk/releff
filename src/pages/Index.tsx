import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock data - in a real app, this would come from an API
const urgentDeals = [
  { name: "Enterprise Solution Deal", status: "delayed", amount: "$150,000" },
  { name: "Cloud Migration Project", status: "pending_approval", amount: "$80,000" },
  { name: "Security Suite Upgrade", status: "at_risk", amount: "$95,000" },
];

const accountsAtRisk = [
  { name: "TechCorp Inc.", reason: "no_engagement", lastEngagement: "30 days ago" },
  { name: "Global Systems", reason: "champion_left", details: "CTO departed" },
  { name: "Innovate Co.", reason: "delayed_payment", amount: "$25,000" },
];

const taskReminders = [
  { task: "Follow up on proposal", deadline: "Tomorrow", priority: "high" },
  { task: "Schedule QBR", deadline: "This week", priority: "medium" },
  { task: "Contract renewal discussion", deadline: "Next week", priority: "medium" },
];

const recentActivities = [
  { action: "Deal closed", details: "MetaTech Solutions - $200k", time: "2h ago" },
  { action: "New contact added", details: "Sarah Chen - VP Engineering", time: "5h ago" },
  { action: "Meeting scheduled", details: "Product demo with InnovateAI", time: "1d ago" },
];

const lastWeekRecap = [
  { metric: "Deals Closed", value: "5", change: "+2", trend: "positive" },
  { metric: "New Leads", value: "24", change: "+8", trend: "positive" },
  { metric: "Customer Meetings", value: "15", change: "-3", trend: "negative" },
  { metric: "Revenue Generated", value: "$320K", change: "+15%", trend: "positive" },
];

const thisWeekOutlook = [
  { event: "Board Meeting", day: "Tuesday", priority: "high" },
  { event: "Product Launch", day: "Wednesday", priority: "high" },
  { event: "Team Training", day: "Thursday", priority: "medium" },
  { event: "Client Reviews", day: "Friday", priority: "medium" },
];

const getStatusColor = (status: string) => {
  const colors = {
    delayed: "text-red-500 bg-red-100",
    pending_approval: "text-yellow-500 bg-yellow-100",
    at_risk: "text-orange-500 bg-orange-100",
    high: "text-red-500 bg-red-100",
    medium: "text-yellow-500 bg-yellow-100",
    low: "text-green-500 bg-green-100",
    positive: "text-green-500 bg-green-100",
    negative: "text-red-500 bg-red-100",
  };
  return colors[status as keyof typeof colors] || "text-gray-500 bg-gray-100";
};

const Index = () => {
  return (
    <div className="flex min-h-screen">
      <Navbar />
      <main className="flex-1 p-8 bg-gray-50">
        <h1 className="text-4xl font-semibold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Urgent Deals Card */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="text-xl">Urgent Deals</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                {urgentDeals.map((deal, index) => (
                  <div key={index} className="flex items-center justify-between mb-4">
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
            </CardContent>
          </Card>

          {/* Accounts at Risk Card */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="text-xl">Accounts at Risk</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                {accountsAtRisk.map((account, index) => (
                  <div key={index} className="mb-4">
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
            </CardContent>
          </Card>

          {/* Task Reminders Card */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="text-xl">Task Reminders</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px]">
                {taskReminders.map((task, index) => (
                  <div key={index} className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-medium">{task.task}</p>
                      <p className="text-sm text-gray-500">{task.deadline}</p>
                    </div>
                    <Badge className={getStatusColor(task.priority)}>
                      {task.priority.toUpperCase()}
                    </Badge>
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>

          {/* Recent Activities Card */}
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
            </CardContent>
          </Card>

          {/* Last Week Recap Card */}
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
            </CardContent>
          </Card>

          {/* This Week Outlook Card */}
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
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;