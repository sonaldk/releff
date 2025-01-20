import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, MessageSquare, TrendingUp, Heart, Gauge, AlertTriangle, SmilePlus, Link, Network, Handshake, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";

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

const MetricCard = memo(({ title, value, icon: Icon, subtitle, className }: { 
  title: string; 
  value: string | number; 
  icon: any; 
  subtitle?: string;
  className?: string;
}) => (
  <Card className={cn("glass-effect", className)}>
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
  sentiment,
  influence,
  organizationContact,
  riskIndex,
  deepestRelationship,
  broadestRelationship,
  interactionMetrics,
}: ContactMetricsProps) => {
  const categories = [
    {
      title: "Relationship Metrics",
      className: "bg-gradient-to-br from-purple-50 to-indigo-50",
      metrics: [
        { title: "Organization Contact", value: organizationContact, icon: Users },
        { title: "Deepest Relationship", value: deepestRelationship, icon: Link },
        { title: "Broadest Relationship", value: broadestRelationship, icon: Network },
      ]
    },
    {
      title: "Risk & Sentiment",
      className: "bg-gradient-to-br from-rose-50 to-orange-50",
      metrics: [
        { title: "Risk Index", value: riskIndex, icon: AlertTriangle },
        { title: "Sentiment", value: sentiment, icon: Heart },
        { title: "Influence Level", value: influence, icon: TrendingUp },
      ]
    },
    {
      title: "Recent Interactions",
      className: "bg-gradient-to-br from-emerald-50 to-teal-50",
      metrics: [
        { title: "Last Meeting", value: lastMeeting, icon: Calendar, subtitle: `with ${lastContactPerson}` },
      ]
    },
    {
      title: "Interaction Summary",
      className: "bg-gradient-to-br from-blue-50 to-cyan-50",
      metrics: [
        { title: "Deals Closed", value: interactionMetrics.deals, icon: Handshake },
        { title: "Total Emails", value: interactionMetrics.emails, icon: MessageSquare },
        { title: "Total Calls", value: interactionMetrics.calls, icon: PhoneCall },
        { title: "Total Meetings", value: interactionMetrics.meetings, icon: Calendar },
      ]
    }
  ];

  return (
    <div className="space-y-8 p-6">
      {categories.map((category, idx) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold">{category.title}</h3>
          <div className={cn(
            "grid gap-4",
            category.metrics.length > 3 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4" : "grid-cols-1 md:grid-cols-3"
          )}>
            {category.metrics.map((metric, index) => (
              <MetricCard
                key={`${metric.title}-${index}`}
                title={metric.title}
                value={metric.value}
                icon={metric.icon}
                subtitle={metric.subtitle}
                className={category.className}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
});

ContactEngagementMetrics.displayName = 'ContactEngagementMetrics';