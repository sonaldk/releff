import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock data for demonstration
const tasksDatabase = {
  "follow-up-on-proposal": {
    task: "Follow up on proposal",
    deadline: "Tomorrow",
    priority: "high",
    assignedTo: "John Smith",
    description: "Send follow-up email regarding the pending proposal",
    status: "Pending",
    createdAt: "2024-02-15",
  },
  "schedule-qbr": {
    task: "Schedule QBR",
    deadline: "This week",
    priority: "medium",
    assignedTo: "Sarah Johnson",
    description: "Coordinate with the client for Quarterly Business Review",
    status: "Not Started",
    createdAt: "2024-02-14",
  },
  "contract-renewal-discussion": {
    task: "Contract renewal discussion",
    deadline: "Next week",
    priority: "medium",
    assignedTo: "Mike Wilson",
    description: "Prepare and schedule contract renewal meeting",
    status: "In Progress",
    createdAt: "2024-02-13",
  },
};

const getStatusColor = (priority: string) => {
  const colors = {
    high: "text-red-500 bg-red-100",
    medium: "text-yellow-500 bg-yellow-100",
    low: "text-green-500 bg-green-100",
  };
  return colors[priority as keyof typeof colors] || "text-gray-500 bg-gray-100";
};

const TaskDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const taskData = id ? tasksDatabase[id as keyof typeof tasksDatabase] : null;

  if (!taskData) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-red-600">Task not found</h1>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Tasks
        </button>
        <button
          onClick={() => navigate("/tasks")}
          className="text-gray-600 hover:text-gray-900"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-2xl font-bold">{taskData.task}</CardTitle>
            <Badge className={getStatusColor(taskData.priority)}>
              {taskData.priority.toUpperCase()}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Deadline</p>
                <p className="text-lg">{taskData.deadline}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Assigned To</p>
                <p className="text-lg">{taskData.assignedTo}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Status</p>
                <p className="text-lg">{taskData.status}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Created At</p>
                <p className="text-lg">{taskData.createdAt}</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Description</p>
              <p className="text-lg">{taskData.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaskDetail;