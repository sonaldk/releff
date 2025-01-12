import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Mail, Upload, UserPlus, StickyNote, Phone, Building2, Users, Calendar, Gauge, MessageSquare, Timer, Brain } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";

// Mock data - replace with real data in production
const clientData = {
  name: "TechCorp Solutions",
  industry: "Technology",
  location: "San Francisco, CA",
  employees: 250,
  yearFounded: 2015,
  revenue: "$45M",
  website: "techcorp.com",
  contacts: [
    { name: "John Smith", role: "CEO", engagement: 85, isFirstContact: true, isClosestContact: true, lastContact: "2024-02-15" },
    { name: "Sarah Johnson", role: "CTO", engagement: 75, isFirstContact: false, isClosestContact: false, lastContact: "2024-02-10" },
    { name: "Mike Brown", role: "Product Manager", engagement: 60, isFirstContact: false, isClosestContact: false, lastContact: "2024-02-01" },
  ],
  recentEmails: [
    { subject: "Q1 Project Update", date: "2024-02-15", sentiment: "positive" },
    { subject: "Meeting Minutes", date: "2024-02-10", sentiment: "neutral" },
    { subject: "Contract Review", date: "2024-02-01", sentiment: "negative" },
  ],
  attachments: [
    { name: "Q1_Report.pdf", date: "2024-02-15", type: "pdf" },
    { name: "Contract_v2.docx", date: "2024-02-10", type: "docx" },
    { name: "Presentation.pptx", date: "2024-02-01", type: "pptx" },
  ],
  metrics: {
    clientScore: 85,
    sentimentScore: 78,
    responseRate: 92,
    intentScore: 88,
  },
  sentimentTrend: [
    { month: "Jan", score: 75 },
    { month: "Feb", score: 82 },
    { month: "Mar", score: 78 },
  ],
};

const ClientDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  // Colors for charts
  const COLORS = ["#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

  return (
    <div className="flex-1 p-8 bg-gray-50">
      {/* Header with actions */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-semibold">{clientData.name}</h1>
        <div className="flex gap-4">
          <Button variant="outline" className="gap-2">
            <StickyNote size={20} />
            Add Note
          </Button>
          <Button variant="outline" className="gap-2">
            <Upload size={20} />
            Upload
          </Button>
          <Button variant="outline" className="gap-2">
            <Mail size={20} />
            Send Email
          </Button>
          <Button variant="outline" className="gap-2">
            <UserPlus size={20} />
            Add Contact
          </Button>
        </div>
      </div>

      {/* Basic Info Card */}
      <Card className="mb-6 glass-effect">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            Company Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-gray-500">Industry</p>
            <p className="font-medium">{clientData.industry}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="font-medium">{clientData.location}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Employees</p>
            <p className="font-medium">{clientData.employees}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Revenue</p>
            <p className="font-medium">{clientData.revenue}</p>
          </div>
        </CardContent>
      </Card>

      {/* Main content grid */}
      <div className="grid grid-cols-12 gap-6">
        {/* Contacts Card */}
        <Card className="col-span-4 glass-effect">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Key Contacts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[400px] pr-4">
              {clientData.contacts.map((contact, index) => (
                <div key={index} className="mb-4 p-4 rounded-lg bg-white/50 border">
                  <div className="flex items-center gap-3 mb-2">
                    <Avatar />
                    <div>
                      <p className="font-medium">{contact.name}</p>
                      <p className="text-sm text-gray-500">{contact.role}</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Engagement</span>
                      <span>{contact.engagement}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-600 rounded-full h-2"
                        style={{ width: `${contact.engagement}%` }}
                      />
                    </div>
                  </div>
                  {contact.isFirstContact && (
                    <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded mt-2 mr-2">
                      First Contact
                    </span>
                  )}
                  {contact.isClosestContact && (
                    <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-800 rounded mt-2">
                      Closest Contact
                    </span>
                  )}
                </div>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Metrics Cards */}
        <div className="col-span-8 grid grid-cols-2 gap-6">
          {/* Client Score */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gauge className="h-5 w-5" />
                Client Score
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={[
                      { value: clientData.metrics.clientScore, name: "Score" },
                      { value: 100 - clientData.metrics.clientScore, name: "Remaining" }
                    ]}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <Cell fill="#8B5CF6" />
                    <Cell fill="#E5E7EB" />
                  </Pie>
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-2xl font-bold"
                    fill="#1F2937"
                  >
                    {clientData.metrics.clientScore}%
                  </text>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Sentiment Analysis */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Sentiment Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={clientData.sentimentTrend}>
                  <XAxis dataKey="month" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="score" stroke="#8B5CF6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Response Rate */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Timer className="h-5 w-5" />
                Response Rate
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={[
                      { value: clientData.metrics.responseRate, name: "Rate" },
                      { value: 100 - clientData.metrics.responseRate, name: "Remaining" }
                    ]}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <Cell fill="#10B981" />
                    <Cell fill="#E5E7EB" />
                  </Pie>
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-2xl font-bold"
                    fill="#1F2937"
                  >
                    {clientData.metrics.responseRate}%
                  </text>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Intent Score */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Intent Score
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={[
                      { value: clientData.metrics.intentScore, name: "Score" },
                      { value: 100 - clientData.metrics.intentScore, name: "Remaining" }
                    ]}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <Cell fill="#EC4899" />
                    <Cell fill="#E5E7EB" />
                  </Pie>
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-2xl font-bold"
                    fill="#1F2937"
                  >
                    {clientData.metrics.intentScore}%
                  </text>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Communications */}
        <Card className="col-span-12 glass-effect">
          <CardHeader>
            <CardTitle>Recent Communications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6">
              {/* Recent Emails */}
              <div>
                <h3 className="text-lg font-medium mb-4">Recent Emails</h3>
                <ScrollArea className="h-[200px]">
                  {clientData.recentEmails.map((email, index) => (
                    <div key={index} className="mb-3 p-3 rounded-lg bg-white/50 border">
                      <p className="font-medium">{email.subject}</p>
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>{email.date}</span>
                        <span className={`capitalize ${
                          email.sentiment === 'positive' ? 'text-green-600' :
                          email.sentiment === 'negative' ? 'text-red-600' :
                          'text-gray-600'
                        }`}>
                          {email.sentiment}
                        </span>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </div>

              {/* Recent Attachments */}
              <div>
                <h3 className="text-lg font-medium mb-4">Recent Attachments</h3>
                <ScrollArea className="h-[200px]">
                  {clientData.attachments.map((attachment, index) => (
                    <div key={index} className="mb-3 p-3 rounded-lg bg-white/50 border">
                      <p className="font-medium">{attachment.name}</p>
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>{attachment.date}</span>
                        <span className="uppercase">{attachment.type}</span>
                      </div>
                    </div>
                  ))}
                </ScrollArea>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClientDetail;
