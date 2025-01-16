import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockClients } from "@/data/mockClients";

const ClientDetail = () => {
  const { id } = useParams();
  
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
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{clientData.name}</h1>
        <Badge className="bg-red-100 text-red-500">{clientData.status}</Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Risk Assessment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Risk Reason</p>
                <p className="font-medium">{clientData.reason}</p>
              </div>
              {clientData.details && (
                <div>
                  <p className="text-sm text-gray-500">Details</p>
                  <p className="font-medium">{clientData.details}</p>
                </div>
              )}
              <div>
                <p className="text-sm text-gray-500">Risk Metrics</p>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div>
                    <p className="text-sm text-gray-500">Engagement Score</p>
                    <p className="font-medium">{clientData.riskMetrics.engagementScore}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Churn Probability</p>
                    <p className="font-medium">{clientData.riskMetrics.churnProbability}</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Company Information</CardTitle>
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
              <div>
                <p className="text-sm text-gray-500">Active Deals</p>
                <p className="font-medium">{clientData.activeDeals}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClientDetail;