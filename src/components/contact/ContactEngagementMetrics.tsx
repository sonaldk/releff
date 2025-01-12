import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, MessageSquare, TrendingUp, Heart, Gauge, AlertTriangle, SmilePlus } from "lucide-react";

interface ContactMetricsProps {
  lastMeeting: string;
  lastContactPerson: string;
  engagementScore: string;
  sentiment: string;
  influence: string;
  organizationContact: string;
  riskIndex: string;
  customerSatisfaction: string;
}

const MetricCard = memo(({ title, value, icon: Icon }: { title: string; value: string; icon: any }) => (
  <Card className="glass-effect">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-gray-500" />
    </CardHeader>
    <CardContent>
      <div className="text-lg font-semibold">{value}</div>
    </CardContent>
  </Card>
));

MetricCard.displayName = 'MetricCard';

export const ContactEngagementMetrics = memo(({
  lastMeeting,
  lastContactPerson,
  engagementScore,
  sentiment,
  influence,
  organizationContact,
  riskIndex,
  customerSatisfaction,
}: ContactMetricsProps) => {
  const metrics = [
    { title: "Organization Contact", value: organizationContact, icon: Users },
    { title: "Last Meeting", value: lastMeeting, icon: Calendar },
    { title: "Last Contact", value: lastContactPerson, icon: MessageSquare },
    { title: "Engagement Score", value: engagementScore, icon: Gauge },
    { title: "Risk Index", value: riskIndex, icon: AlertTriangle },
    { title: "Customer Satisfaction", value: customerSatisfaction, icon: SmilePlus },
    { title: "Sentiment", value: sentiment, icon: Heart },
    { title: "Influence Level", value: influence, icon: TrendingUp },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
      {metrics.map((metric, index) => (
        <MetricCard
          key={`${metric.title}-${index}`}
          title={metric.title}
          value={metric.value}
          icon={metric.icon}
        />
      ))}
    </div>
  );
});

ContactEngagementMetrics.displayName = 'ContactEngagementMetrics';