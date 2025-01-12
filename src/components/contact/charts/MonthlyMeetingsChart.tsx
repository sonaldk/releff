import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface MeetingsHistory {
  month: string;
  meetings: number;
}

interface MonthlyMeetingsChartProps {
  data: MeetingsHistory[];
}

export const MonthlyMeetingsChart = memo(({ data }: MonthlyMeetingsChartProps) => {
  return (
    <Card className="glass-effect">
      <CardHeader>
        <CardTitle>Monthly Meetings</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="meetings" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
});

MonthlyMeetingsChart.displayName = 'MonthlyMeetingsChart';