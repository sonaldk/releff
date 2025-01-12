import { memo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface ResponseHistory {
  month: string;
  responses: number;
}

interface ResponseRateChartProps {
  data: ResponseHistory[];
}

export const ResponseRateChart = memo(({ data }: ResponseRateChartProps) => {
  return (
    <Card className="glass-effect">
      <CardHeader>
        <CardTitle>Response Rate</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="responses" stroke="#ffc658" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
});

ResponseRateChart.displayName = 'ResponseRateChart';