import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ChartBar, 
  Calendar, 
  Users, 
  TrendingUp, 
  Gauge, 
  AlertTriangle, 
  CheckCircle2,
  Clock,
  FileText,
  MessageSquare
} from "lucide-react";

interface DealMetricsProps {
  probability: string;
  stage: string;
  timeInStage: string;
  nextAction: string;
  decisionMakers: string;
  competitorStatus: string;
  riskLevel: string;
  documentStatus: string;
  lastContact: string;
  communicationStats: {
    emails: number;
    meetings: number;
    calls: number;
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

export const DealMetrics = memo(({
  probability,
  stage,
  timeInStage,
  nextAction,
  decisionMakers,
  competitorStatus,
  riskLevel,
  documentStatus,
  lastContact,
  communicationStats,
}: DealMetricsProps) => {
  const metrics = [
    { title: "Win Probability", value: probability, icon: ChartBar },
    { title: "Deal Stage", value: stage, icon: TrendingUp },
    { title: "Time in Stage", value: timeInStage, icon: Clock },
    { title: "Next Action", value: nextAction, icon: CheckCircle2 },
    { title: "Decision Makers", value: decisionMakers, icon: Users },
    { title: "Competitor Status", value: competitorStatus, icon: Gauge },
    { title: "Risk Level", value: riskLevel, icon: AlertTriangle },
    { title: "Document Status", value: documentStatus, icon: FileText },
    { title: "Last Contact", value: lastContact, icon: Calendar },
  ];

  const communicationMetrics = [
    { title: "Total Emails", value: communicationStats.emails, icon: MessageSquare },
    { title: "Total Meetings", value: communicationStats.meetings, icon: Calendar },
    { title: "Total Calls", value: communicationStats.calls, icon: Users },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard
            key={`${metric.title}-${index}`}
            title={metric.title}
            value={metric.value}
            icon={metric.icon}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {communicationMetrics.map((metric, index) => (
          <MetricCard
            key={`communication-${metric.title}-${index}`}
            title={metric.title}
            value={metric.value}
            icon={metric.icon}
          />
        ))}
      </div>
    </div>
  );
});

DealMetrics.displayName = 'DealMetrics';