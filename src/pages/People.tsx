import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Mail, PhoneCall, Building } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock data for demonstration
const summaryData = {
  totalContacts: 850,
  activeEngagements: 245,
  responseRate: 78,
  organizationsCount: 120,
};

const contactData = [
  {
    name: "John Smith",
    organization: "Tech Corp",
    role: "Chief Technology Officer",
    lastContact: "2 days ago",
    engagementLevel: "High",
    status: "Active",
  },
  {
    name: "Sarah Johnson",
    organization: "Marketing Pro",
    role: "Marketing Director",
    lastContact: "1 week ago",
    engagementLevel: "Medium",
    status: "Active",
  },
  {
    name: "Michael Chen",
    organization: "Innovation Labs",
    role: "Product Director",
    lastContact: "3 days ago",
    engagementLevel: "High",
    status: "Active",
  },
  {
    name: "Emily Davis",
    organization: "Sales Direct",
    role: "VP Sales",
    lastContact: "5 days ago",
    engagementLevel: "High",
    status: "Active",
  },
  {
    name: "James Wilson",
    organization: "Tech Solutions",
    role: "Engineering Manager",
    lastContact: "2 weeks ago",
    engagementLevel: "Medium",
    status: "Inactive",
  },
  {
    name: "Lisa Anderson",
    organization: "Global Corp",
    role: "HR Director",
    lastContact: "1 month ago",
    engagementLevel: "Low",
    status: "Inactive",
  },
  {
    name: "Robert Taylor",
    organization: "Finance Plus",
    role: "CFO",
    lastContact: "1 week ago",
    engagementLevel: "Medium",
    status: "Active",
  },
  {
    name: "Maria Garcia",
    organization: "Tech Giants",
    role: "Technical Lead",
    lastContact: "4 days ago",
    engagementLevel: "High",
    status: "Active",
  },
  {
    name: "David Lee",
    organization: "Design Co",
    role: "Design Director",
    lastContact: "3 days ago",
    engagementLevel: "High",
    status: "Active",
  },
  {
    name: "Anna Kim",
    organization: "Market Leaders",
    role: "Strategy Head",
    lastContact: "1 week ago",
    engagementLevel: "Medium",
    status: "Active",
  },
];

const getEngagementColor = (engagement: string) => {
  const colors = {
    High: "text-green-600 bg-green-100",
    Medium: "text-blue-600 bg-blue-100",
    Low: "text-red-600 bg-red-100",
  };
  return colors[engagement as keyof typeof colors] || "text-gray-600 bg-gray-100";
};

const getStatusColor = (status: string) => {
  const colors = {
    Active: "text-green-600 bg-green-100",
    Inactive: "text-red-600 bg-red-100",
  };
  return colors[status as keyof typeof colors] || "text-gray-600 bg-gray-100";
};

const People = () => {
  const navigate = useNavigate();

  const handleRowClick = (name: string) => {
    // Convert contact name to URL-friendly format and ensure it matches the mock data keys
    const contactId = name.toLowerCase().replace(/\s+/g, '-');
    console.log('Navigating to contact:', contactId); // Debug log
    navigate(`/contact/${contactId}`);
  };

  return (
    <div className="flex-1 p-8 bg-gray-50">
      <h1 className="text-4xl font-semibold mb-6">Client Contacts</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="glass-effect">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-medium">Total Contacts</CardTitle>
            <Users className="h-5 w-5 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{summaryData.totalContacts}</div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-medium">Active Engagements</CardTitle>
            <Mail className="h-5 w-5 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{summaryData.activeEngagements}</div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-medium">Response Rate</CardTitle>
            <PhoneCall className="h-5 w-5 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{summaryData.responseRate}%</div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xl font-medium">Organizations</CardTitle>
            <Building className="h-5 w-5 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{summaryData.organizationsCount}</div>
          </CardContent>
        </Card>
      </div>

      {/* Contacts Table */}
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle>Contact List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Contact Name</TableHead>
                <TableHead>Organization</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Last Contact</TableHead>
                <TableHead>Engagement Level</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contactData.map((contact, index) => (
                <TableRow 
                  key={index}
                  className="cursor-pointer hover:bg-gray-50"
                  onClick={() => handleRowClick(contact.name)}
                >
                  <TableCell className="font-medium">{contact.name}</TableCell>
                  <TableCell>{contact.organization}</TableCell>
                  <TableCell>{contact.role}</TableCell>
                  <TableCell>{contact.lastContact}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-sm ${getEngagementColor(contact.engagementLevel)}`}>
                      {contact.engagementLevel}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-sm ${getStatusColor(contact.status)}`}>
                      {contact.status}
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