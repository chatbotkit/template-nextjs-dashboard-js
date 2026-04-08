'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

function formatDate(timestamp) {
  return new Date(timestamp).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  })
}

function SeriesChart({ title, description, data, color }) {
  const chartData = (data || []).map((point) => ({
    date: formatDate(point.date),
    value: point.total,
  }))

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {chartData.length === 0 ? (
          <p className="flex h-[200px] items-center justify-center text-sm text-muted-foreground">
            No data available yet
          </p>
        ) : (
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 12 }}
                className="text-muted-foreground"
              />
              <YAxis
                tick={{ fontSize: 12 }}
                className="text-muted-foreground"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '6px',
                  fontSize: '12px',
                }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  )
}

export default function UsageCharts({ series }) {
  return (
    <div className="grid gap-4 lg:grid-cols-3">
      <SeriesChart
        title="Token Usage"
        description="Daily token consumption (90 days)"
        data={series.tokens}
        color="hsl(220, 70%, 50%)"
      />
      <SeriesChart
        title="Conversations"
        description="Daily conversation volume (90 days)"
        data={series.conversations}
        color="hsl(142, 70%, 45%)"
      />
      <SeriesChart
        title="Messages"
        description="Daily message volume (90 days)"
        data={series.messages}
        color="hsl(262, 70%, 50%)"
      />
    </div>
  )
}
