import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, UserPlus, UserCheck, DollarSign } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock data for demonstration
const summaryData = {
  totalEmployees: 1250,
  newHires: 45,
  retentionRate: 95,
  avgSalary: 85000,
};

const employeeData = [
  {
    name: "John Smith",
    department: "Engineering",
    role: "Senior Developer",
    tenure: "3 years",
    performance: "Excellent",
    engagement: "High",
  },
  {
    name: "Sarah Johnson",
    department: "Marketing",
    role: "Marketing Manager",
    tenure: "2 years",
    performance: "Good",
    engagement: "Medium",
  },
  {
    name: "Michael Chen",
    department: "Product",
    role: "Product Owner",
    tenure: "4 years",
    performance: "Excellent",
    engagement: "High",
  },
  {
    name: "Emily Davis",
    department: "Sales",
    role: "Account Executive",
    tenure: "1 year",
    performance: "Good",
    engagement: "High",
  },
  {
    name: "James Wilson",
    department: "Engineering",
    role: "DevOps Engineer",
    tenure: "2 years",
    performance: "Good",
    engagement: "Medium",
  },
  {
    name: "Lisa Anderson",
    department: "HR",
    role: "HR Manager",
    tenure: "5 years",
    performance: "Excellent",
    engagement: "High",
  },
  {
    name: "Robert Taylor",
    department: "Finance",
    role: "Financial Analyst",
    tenure: "2 years",
    performance: "Good",
    engagement: "Medium",
  },
  {
    name: "Maria Garcia",
    department: "Engineering",
    role: "Frontend Developer",
    tenure: "1 year",
    performance: "Good",
    engagement: "High",
  },
  {
    name: "David Lee",
    department: "Product",
    role: "UX Designer",
    tenure: "3 years",
    performance: "Excellent",
    engagement: "High",
  },
  {
    name: "Anna Kim",
    department: "Marketing",
    role: "Content Strategist",
    tenure: "2 years",
    performance: "Good",
    engagement: "Medium",
  },
];

const getPerformanceColor = (performance: string) => {
  const colors = {
    Excellent: "text-green-600 bg-green-100",
    Good: "text-blue-600 bg-blue-100",
    "Needs Improvement": "text-red-600 bg-red-100",
  };
  return colors[performance as keyof typeof colors] || "text-gray-600 bg-gray-100";
};

const getEngagementColor = (engagement: string) => {
  const colors = {
    High: "text-green-600 bg-green-100",
    Medium: "text-blue-600 bg-blue-100",
    Low: "text-red-600 bg-red-100",
  };
  return colors[engagement as keyof typeof colors] || "text-gray-600 bg-gray-100";
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

const People = () => {
  const navigate = useNavigate();

  const handleRowClick = (employeeName: string) => {
    // For demo purposes, using the employee name as ID
    // In production, use actual employee IDs
    const employeeId = employeeName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/employee/${employeeId}`);
  };

  return (
    <div className="flex-1 p-8 bg-gray-50">
      <h1 className="text-4xl font-semibold mb-6">People</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="glass-effect">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-medium">Total Employees</CardTitle>
            <Users className="h-5 w-5 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{summaryData.totalEmployees}</div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-medium">New Hires (YTD)</CardTitle>
            <UserPlus className="h-5 w-5 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{summaryData.newHires}</div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-medium">Retention Rate</CardTitle>
            <UserCheck className="h-5 w-5 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{summaryData.retentionRate}%</div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-medium">Avg. Salary</CardTitle>
            <DollarSign className="h-5 w-5 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{formatCurrency(summaryData.avgSalary)}</div>
          </CardContent>
        </Card>
      </div>

      {/* Employees Table */}
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle>Employee List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Employee Name</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Tenure</TableHead>
                <TableHead>Performance</TableHead>
                <TableHead>Engagement</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employeeData.map((employee, index) => (
                <TableRow 
                  key={index}
                  className="cursor-pointer hover:bg-gray-50"
                  onClick={() => handleRowClick(employee.name)}
                >
                  <TableCell className="font-medium">{employee.name}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>{employee.role}</TableCell>
                  <TableCell>{employee.tenure}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-sm ${getPerformanceColor(employee.performance)}`}>
                      {employee.performance}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-sm ${getEngagementColor(employee.engagement)}`}>
                      {employee.engagement}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default People;