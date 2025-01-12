import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Users, BarChart3, Globe } from "lucide-react";

const Organisation = () => {
  return (
    <div className="p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Organization Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="glass-effect">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
            <Users className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Departments</CardTitle>
            <Building2 className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
            <BarChart3 className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12.4M</div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Locations</CardTitle>
            <Globe className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle>Department Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Engineering", count: 450 },
                { name: "Sales", count: 320 },
                { name: "Marketing", count: 180 },
                { name: "HR", count: 90 },
              ].map((dept) => (
                <div key={dept.name} className="flex items-center justify-between">
                  <span className="font-medium">{dept.name}</span>
                  <span className="text-gray-600">{dept.count} employees</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardHeader>
            <CardTitle>Recent Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { date: "2024-03-15", update: "New office opened in Singapore" },
                { date: "2024-03-10", update: "Q1 targets exceeded by 15%" },
                { date: "2024-03-05", update: "New HR policies implemented" },
                { date: "2024-03-01", update: "Company-wide training completed" },
              ].map((update) => (
                <div key={update.date} className="flex items-center justify-between">
                  <span className="text-gray-600">{update.date}</span>
                  <span className="font-medium">{update.update}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Organisation;