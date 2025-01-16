import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const taskReminders = [
  { task: "Follow up on proposal", deadline: "Tomorrow", priority: "high" },
  { task: "Schedule QBR", deadline: "This week", priority: "medium" },
  { task: "Contract renewal discussion", deadline: "Next week", priority: "medium" },
];

const getStatusColor = (status: string) => {
  const colors = {
    high: "text-red-500 bg-red-100",
    medium: "text-yellow-500 bg-yellow-100",
    low: "text-green-500 bg-green-100",
  };
  return colors[status as keyof typeof colors] || "text-gray-500 bg-gray-100";
};

export const TaskRemindersCard = () => {
  const navigate = useNavigate();

  const handleTaskClick = (task: string) => {
    const taskId = task.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-');
    navigate(`/tasks/${taskId}`);
  };

  return (
    <Card className="glass-effect">
      <CardHeader>
        <CardTitle className="text-xl">Task Reminders</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px]">
          {taskReminders.map((task, index) => (
            <div 
              key={index} 
              className="flex items-center justify-between mb-4 p-2 hover:bg-gray-50 rounded cursor-pointer transition-colors"
              onClick={() => handleTaskClick(task.task)}
            >
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
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="link" className="mt-4 w-full">View All Task Reminders</Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Task Reminders Details</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              {taskReminders.map((task, index) => (
                <div 
                  key={index} 
                  className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => handleTaskClick(task.task)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold">{task.task}</h3>
                    <Badge className={getStatusColor(task.priority)}>
                      {task.priority.toUpperCase()}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500">Deadline: {task.deadline}</p>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
};