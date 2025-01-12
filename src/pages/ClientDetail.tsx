import { useParams, useNavigate } from "react-router-dom";
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Mail, Upload, UserPlus, StickyNote, X } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

// Mock data for development
const mockClientData = {
  id: "1",
  name: "TechCorp Solutions",
  industry: "Technology",
  location: "San Francisco, CA",
  contacts: [
    { name: "John Smith", role: "CTO", engagementRate: 85, isClosest: true, isFirst: false },
    { name: "Sarah Johnson", role: "Product Manager", engagementRate: 75, isClosest: false, isFirst: true },
    { name: "Mike Brown", role: "Engineering Lead", engagementRate: 65, isClosest: false, isFirst: false },
  ],
  recentEmails: [
    { subject: "Project Update", date: "2024-01-10", attachments: 2 },
    { subject: "Meeting Notes", date: "2024-01-08", attachments: 1 },
    { subject: "Proposal Review", date: "2024-01-05", attachments: 3 },
  ],
  yearlyMetrics: {
    2023: { clientScore: 85, responseRate: 92, intentScore: 88 },
    2022: { clientScore: 78, responseRate: 85, intentScore: 82 },
    2021: { clientScore: 72, responseRate: 80, intentScore: 75 },
  }
};

const ClientDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState("2023");
  const clientData = mockClientData;

  // Transform data for charts
  const years = Object.keys(clientData.yearlyMetrics);
  const chartData = years.map(year => ({
    year,
    clientScore: clientData.yearlyMetrics[year].clientScore,
    responseRate: clientData.yearlyMetrics[year].responseRate,
    intentScore: clientData.yearlyMetrics[year].intentScore,
  }));

  return (
    <div className="flex-1 p-8 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">{clientData.name}</h1>
        <div className="flex items-center gap-3">
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
              {years.map(year => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <StickyNote className="w-4 h-4 mr-2" />
              Add Note
            </Button>
            <Button variant="outline" size="sm">
              <Upload className="w-4 h-4 mr-2" />
              Upload
            </Button>
            <Button variant="outline" size="sm">
              <Mail className="w-4 h-4 mr-2" />
              Send Email
            </Button>
            <Button variant="outline" size="sm">
              <UserPlus className="w-4 h-4 mr-2" />
              Add Contact
            </Button>
            <Button variant="ghost" size="sm" onClick={() => navigate('/organization')}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Basic Details Card */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Basic Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p><span className="font-medium">Industry:</span> {clientData.industry}</p>
              <p><span className="font-medium">Location:</span> {clientData.location}</p>
            </div>
          </CardContent>
        </Card>

        {/* Connected People Card */}
        <Card className="col-span-1 xl:col-span-2">
          <CardHeader>
            <CardTitle>Connected People</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px]">
              {clientData.contacts.map((contact, index) => (
                <div key={index} className="flex items-center justify-between mb-4 p-3 bg-white rounded-lg shadow-sm">
                  <div>
                    <p className="font-medium">{contact.name}</p>
                    <p className="text-sm text-gray-500">{contact.role}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    {contact.isClosest && <Badge className="bg-green-100 text-green-800">Closest Contact</Badge>}
                    {contact.isFirst && <Badge className="bg-blue-100 text-blue-800">First Contact</Badge>}
                    <span className="text-sm font-medium">{contact.engagementRate}% Engagement</span>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Client Score Card - Area Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Client Score Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="clientScore" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Response Rate Card - Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Response Rate Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="responseRate" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Intent Score Card - Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Intent Score Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="intentScore" stroke="#ff7300" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Emails Card */}
        <Card className="col-span-1 xl:col-span-3">
          <CardHeader>
            <CardTitle>Recent Emails & Attachments</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px]">
              {clientData.recentEmails.map((email, index) => (
                <div key={index} className="flex items-center justify-between mb-4 p-3 bg-white rounded-lg shadow-sm">
                  <div>
                    <p className="font-medium">{email.subject}</p>
                    <p className="text-sm text-gray-500">{email.date}</p>
                  </div>
                  <Badge variant="secondary">
                    {email.attachments} attachment{email.attachments !== 1 ? 's' : ''}
                  </Badge>
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClientDetail;