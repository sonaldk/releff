import { useParams } from "react-router-dom";
import { ArrowLeft, Building2, Users, DollarSign, AlertTriangle, Activity, Ticket } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockClients } from "@/data/mockClients";
import { useNavigate } from "react-router-dom";

const ClientDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const clientData = id ? mockClients[id as keyof typeof mockClients] : null;

  if (!clientData) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-red-600">Client not found</h1>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </button>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">{clientData.name}</h1>
          <Badge 
            variant={clientData.status === "At Risk" ? "destructive" : "default"}
            className="text-sm"
          >
            {clientData.status}
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-red-500" />
              Risk Assessment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Risk Reason</p>
                <p className="font-medium">{clientData.reason}</p>
              </div>
              {'details' in clientData && clientData.details && (
                <div>
                  <p className="text-sm text-gray-500">Details</p>
                  <p className="font-medium">{clientData.details}</p>
                </div>
              )}
              {'lastEngagement' in clientData && clientData.lastEngagement && (
                <div>
                  <p className="text-sm text-gray-500">Last Engagement</p>
                  <p className="font-medium">{clientData.lastEngagement}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building2 className="h-5 w-5 mr-2" />
              Company Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Industry</p>
                <p className="font-medium">{clientData.industry}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Annual Revenue</p>
                <p className="font-medium">{clientData.revenue}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Employees</p>
                <p className="font-medium">{clientData.employees}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="h-5 w-5 mr-2" />
              Engagement Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Engagement Score</p>
                <p className="font-medium">{clientData.riskMetrics.engagementScore}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Churn Probability</p>
                <p className="font-medium">{clientData.riskMetrics.churnProbability}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Meeting</p>
                <p className="font-medium">{clientData.riskMetrics.lastMeeting}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Ticket className="h-5 w-5 mr-2" />
              Support Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Open Tickets</p>
                <p className="font-medium">{clientData.riskMetrics.openTickets}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Active Deals</p>
                <p className="font-medium">{clientData.activeDeals}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Contacts</p>
                <p className="font-medium">{clientData.contacts}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClientDetail;