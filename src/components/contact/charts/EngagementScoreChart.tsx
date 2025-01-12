import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface EngagementHistory {
  month: string;
  score: number;
}

interface EngagementScoreChartProps {
  data: EngagementHistory[];
}

export const EngagementScoreChart = memo(({ data }: EngagementScoreChartProps) => {
  return (
    <Card className="glass-effect">
      <CardHeader>
        <CardTitle>Engagement Score</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="score" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
});

EngagementScoreChart.displayName = 'EngagementScoreChart';