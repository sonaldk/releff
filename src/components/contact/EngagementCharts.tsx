import { memo } from "react";
import { EngagementScoreChart } from "./charts/EngagementScoreChart";
import { MonthlyMeetingsChart } from "./charts/MonthlyMeetingsChart";
import { ResponseRateChart } from "./charts/ResponseRateChart";

interface EngagementHistory {
  month: string;
  score: number;
  meetings: number;
  responses: number;
}

interface EngagementChartsProps {
  engagementHistory: EngagementHistory[];
}

export const EngagementCharts = memo(({ engagementHistory }: EngagementChartsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <EngagementScoreChart data={engagementHistory} />
      <MonthlyMeetingsChart data={engagementHistory} />
      <ResponseRateChart data={engagementHistory} />
    </div>
  );
});

EngagementCharts.displayName = 'EngagementCharts';