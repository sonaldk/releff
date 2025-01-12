import { ArrowLeft, Building2, Mail, Phone, Calendar, X } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactEngagementMetrics } from "@/components/contact/ContactEngagementMetrics";
import { RecentEmails } from "@/components/contact/RecentEmails";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, BarChart, Bar, 
  LineChart, Line
} from "recharts";

// Mock data for demonstration
const mockContactData = {
  "john-smith": {
    name: "John Smith",
    role: "Chief Technology Officer",
    organization: "Tech Corp",
    email: "john.smith@techcorp.com",
    phone: "+1 (555) 123-4567",
    lastContact: "2024-02-15",
    organizationContact: "Sarah Williams",
    lastMeeting: "March 15, 2024",
    lastContactPerson: "Mike Johnson",
    engagementScore: "High (85%)",
    sentiment: "Very Positive",
    influence: "Key Decision Maker",
    recentEmails: [
      {
        date: "Mar 15, 2024",
        subject: "Q2 Planning Meeting Notes",
        from: "Mike Johnson",
        hasAttachment: true
      },
      {
        date: "Mar 10, 2024",
        subject: "Product Roadmap Review",
        from: "Sarah Williams",
        hasAttachment: true
      },
      {
        date: "Mar 5, 2024",
        subject: "Follow-up: Technical Discussion",
        from: "Mike Johnson",
        hasAttachment: false
      },
      {
        date: "Mar 1, 2024",
        subject: "Partnership Opportunity",
        from: "Sarah Williams",
        hasAttachment: true
      },
      {
        date: "Feb 25, 2024",
        subject: "Weekly Update",
        from: "Mike Johnson",
        hasAttachment: false
      }
    ],
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
    organizationContact: "John Doe",
    lastMeeting: "February 5, 2024",
    lastContactPerson: "Jane Smith",
    engagementScore: "Medium (70%)",
    sentiment: "Positive",
    influence: "Influencer",
    recentEmails: [
      {
        date: "Feb 10, 2024",
        subject: "Marketing Strategy Discussion",
        from: "Jane Smith",
        hasAttachment: false
      },
      {
        date: "Feb 5, 2024",
        subject: "Follow-up on Campaign",
        from: "John Doe",
        hasAttachment: true
      },
      {
        date: "Jan 30, 2024",
        subject: "Weekly Check-in",
        from: "Jane Smith",
        hasAttachment: false
      },
      {
        date: "Jan 25, 2024",
        subject: "Q1 Goals Review",
        from: "John Doe",
        hasAttachment: true
      },
      {
        date: "Jan 20, 2024",
        subject: "Feedback on Proposal",
        from: "Jane Smith",
        hasAttachment: false
      }
    ],
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
    organizationContact: "Alice Brown",
    lastMeeting: "February 10, 2024",
    lastContactPerson: "Bob White",
    engagementScore: "High (90%)",
    sentiment: "Very Positive",
    influence: "Key Influencer",
    recentEmails: [
      {
        date: "Feb 12, 2024",
        subject: "Product Launch Update",
        from: "Bob White",
        hasAttachment: true
      },
      {
        date: "Feb 10, 2024",
        subject: "Feedback on Prototype",
        from: "Alice Brown",
        hasAttachment: false
      },
      {
        date: "Feb 5, 2024",
        subject: "Weekly Sync",
        from: "Bob White",
        hasAttachment: true
      },
      {
        date: "Feb 1, 2024",
        subject: "Q2 Planning",
        from: "Alice Brown",
        hasAttachment: false
      },
      {
        date: "Jan 28, 2024",
        subject: "Follow-up on Features",
        from: "Bob White",
        hasAttachment: true
      }
    ],
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

      {/* Basic Contact Information */}
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

      {/* Engagement Metrics */}
      <ContactEngagementMetrics
        lastMeeting={contact.lastMeeting}
        lastContactPerson={contact.lastContactPerson}
        engagementScore={contact.engagementScore}
        sentiment={contact.sentiment}
        influence={contact.influence}
        organizationContact={contact.organizationContact}
      />

      {/* Recent Emails */}
      <RecentEmails emails={contact.recentEmails} />

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
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
    </div>
  );
};

export default ContactDetail;
