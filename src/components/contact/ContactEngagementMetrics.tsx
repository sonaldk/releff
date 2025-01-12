import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, MessageSquare, TrendingUp, Heart, Gauge, Mail } from "lucide-react";

interface ContactMetricsProps {
  lastMeeting: string;
  lastContactPerson: string;
  engagementScore: string;
  sentiment: string;
  influence: string;
  organizationContact: string;
}

export const ContactEngagementMetrics = ({
  lastMeeting,
  lastContactPerson,
  engagementScore,
  sentiment,
  influence,
  organizationContact,
}: ContactMetricsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
      <Card className="glass-effect">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Organization Contact</CardTitle>
          <Users className="h-4 w-4 text-gray-500" />
        </CardHeader>
        <CardContent>
          <div className="text-lg font-semibold">{organizationContact}</div>
        </CardContent>
      </Card>

      <Card className="glass-effect">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Last Meeting</CardTitle>
          <Calendar className="h-4 w-4 text-gray-500" />
        </CardHeader>
        <CardContent>
          <div className="text-lg font-semibold">{lastMeeting}</div>
        </CardContent>
      </Card>

      <Card className="glass-effect">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Last Contact</CardTitle>
          <MessageSquare className="h-4 w-4 text-gray-500" />
        </CardHeader>
        <CardContent>
          <div className="text-lg font-semibold">{lastContactPerson}</div>
        </CardContent>
      </Card>

      <Card className="glass-effect">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Engagement Score</CardTitle>
          <Gauge className="h-4 w-4 text-gray-500" />
        </CardHeader>
        <CardContent>
          <div className="text-lg font-semibold">{engagementScore}</div>
        </CardContent>
      </Card>

      <Card className="glass-effect">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Sentiment</CardTitle>
          <Heart className="h-4 w-4 text-gray-500" />
        </CardHeader>
        <CardContent>
          <div className="text-lg font-semibold">{sentiment}</div>
        </CardContent>
      </Card>

      <Card className="glass-effect">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Influence Level</CardTitle>
          <TrendingUp className="h-4 w-4 text-gray-500" />
        </CardHeader>
        <CardContent>
          <div className="text-lg font-semibold">{influence}</div>
        </CardContent>
      </Card>
    </div>
  );
};