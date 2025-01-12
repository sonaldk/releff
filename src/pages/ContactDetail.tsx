import { ArrowLeft, Building2, Mail, Phone, Calendar, MessageSquare, X } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line
} from "recharts";
import { useState } from "react";

// Mock data for demonstration
const mockContactData = {
  "john-smith": {
    name: "John Smith",
    role: "Chief Technology Officer",
    organization: "Tech Corp",
    email: "john.smith@techcorp.com",
    phone: "+1 (555) 123-4567",
    lastContact: "2024-02-15",
    engagementHistory: [
      { month: "Jan", score: 85, meetings: 4, responses: 90 },
      { month: "Feb", score: 88, meetings: 5, responses: 85 },
      { month: "Mar", score: 92, meetings: 6, responses: 95 },
      { month: "Apr", score: 90, meetings: 4, responses: 88 },
      { month: "May", score: 95, meetings: 7, responses: 92 },
      { month: "Jun", score: 89, meetings: 5, responses: 87 }
    ]
  },
  "sarah-johnson": {
    name: "Sarah Johnson",
    role: "Marketing Director",
    organization: "Marketing Pro",
    email: "sarah.j@marketingpro.com",
    phone: "+1 (555) 234-5678",
    lastContact: "2024-02-10",
    engagementHistory: [
      { month: "Jan", score: 82, meetings: 3, responses: 88 },
      { month: "Feb", score: 85, meetings: 4, responses: 90 },
      { month: "Mar", score: 88, meetings: 5, responses: 92 },
      { month: "Apr", score: 86, meetings: 4, responses: 89 },
      { month: "May", score: 90, meetings: 6, responses: 94 },
      { month: "Jun", score: 87, meetings: 4, responses: 91 }
    ]
  },
  "michael-chen": {
    name: "Michael Chen",
    role: "Product Director",
    organization: "Innovation Labs",
    email: "m.chen@innovationlabs.com",
    phone: "+1 (555) 345-6789",
    lastContact: "2024-02-12",
    engagementHistory: [
      { month: "Jan", score: 88, meetings: 5, responses: 92 },
      { month: "Feb", score: 90, meetings: 6, responses: 94 },
      { month: "Mar", score: 93, meetings: 7, responses: 96 },
      { month: "Apr", score: 91, meetings: 5, responses: 93 },
      { month: "May", score: 94, meetings: 8, responses: 95 },
      { month: "Jun", score: 92, meetings: 6, responses: 94 }
    ]
  }
};

const ContactDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedYear] = useState("2024");

  const contact = mockContactData[id as keyof typeof mockContactData];

  if (!contact) {
    return <div>Contact not found</div>;
  }

  return (
    <div className="flex-1 p-8 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to People
        </button>
        <button
          onClick={() => navigate("/people")}
          className="text-gray-600 hover:text-gray-900"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Contact Information */}
      <Card className="mb-8 glass-effect">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{contact.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-5 w-5 text-gray-500" />
              <span>{contact.organization}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-gray-500" />
              <span>{contact.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-gray-500" />
              <span>{contact.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-gray-500" />
              <span>Last Contact: {contact.lastContact}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Year Filter */}
      <div className="mb-4">
        <select
          value={selectedYear}
          onChange={(e) => e.target.value}
          className="border rounded-md px-3 py-2"
        >
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Engagement Score Chart */}
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle>Engagement Score</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={contact.engagementHistory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="score"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Meetings Chart */}
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle>Monthly Meetings</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={contact.engagementHistory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="meetings" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Response Rate Chart */}
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle>Response Rate</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={contact.engagementHistory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="responses"
                  stroke="#ffc658"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Communication History */}
      <Card className="mt-8 glass-effect">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Communication History</CardTitle>
          <MessageSquare className="h-5 w-5 text-gray-500" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Add communication history items here */}
            <div className="border-b pb-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Project Update Meeting</p>
                  <p className="text-sm text-gray-500">Discussion about Q1 goals and technical roadmap</p>
                </div>
                <span className="text-sm text-gray-500">Feb 15, 2024</span>
              </div>
            </div>
            <div className="border-b pb-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">Email Follow-up</p>
                  <p className="text-sm text-gray-500">Sent documentation for new features</p>
                </div>
                <span className="text-sm text-gray-500">Feb 10, 2024</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactDetail;