import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, MessageSquare, TrendingUp, Heart, Gauge, AlertTriangle, SmilePlus, Link, Network, Handshake, PhoneCall } from "lucide-react";

interface ContactMetricsProps {
  lastMeeting: string;
  lastContactPerson: string;
  engagementScore: string;
  sentiment: string;
  influence: string;
  organizationContact: string;
  riskIndex: string;
  customerSatisfaction: string;
  deepestRelationship: string;
  broadestRelationship: string;
  relationshipScore: string;
  interactionMetrics: {
    deals: number;
    emails: number;
    calls: number;
    meetings: number;
  };
}

const MetricCard = memo(({ title, value, icon: Icon, subtitle }: { title: string; value: string | number; icon: any; subtitle?: string }) => (
  <Card className="glass-effect">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-gray-500" />
    </CardHeader>
    <CardContent>
      <div className="text-lg font-semibold">{value}</div>
      {subtitle && <div className="text-sm text-gray-500">{subtitle}</div>}
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
  deepestRelationship,
  broadestRelationship,
  relationshipScore,
  interactionMetrics,
}: ContactMetricsProps) => {
  const metrics = [
    { title: "Organization Contact", value: organizationContact, icon: Users },
    { title: "Deepest Relationship", value: deepestRelationship, icon: Link },
    { title: "Broadest Relationship", value: broadestRelationship, icon: Network },
    { title: "Last Meeting", value: lastMeeting, icon: Calendar, subtitle: `with ${lastContactPerson}` },
    { title: "Relationship Score", value: relationshipScore, icon: Gauge },
    { title: "Risk Index", value: riskIndex, icon: AlertTriangle },
    { title: "Customer Satisfaction", value: customerSatisfaction, icon: SmilePlus },
    { title: "Sentiment", value: sentiment, icon: Heart },
    { title: "Influence Level", value: influence, icon: TrendingUp },
  ];

  const interactionMetricsData = [
    { title: "Deals Closed", value: interactionMetrics.deals, icon: Handshake },
    { title: "Total Emails", value: interactionMetrics.emails, icon: MessageSquare },
    { title: "Total Calls", value: interactionMetrics.calls, icon: PhoneCall },
    { title: "Total Meetings", value: interactionMetrics.meetings, icon: Calendar },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard
            key={`${metric.title}-${index}`}
            title={metric.title}
            value={metric.value}
            icon={metric.icon}
            subtitle={metric.subtitle}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {interactionMetricsData.map((metric, index) => (
          <MetricCard
            key={`interaction-${metric.title}-${index}`}
            title={metric.title}
            value={metric.value}
            icon={metric.icon}
          />
        ))}
      </div>
    </div>
  );
});

ContactEngagementMetrics.displayName = 'ContactEngagementMetrics';