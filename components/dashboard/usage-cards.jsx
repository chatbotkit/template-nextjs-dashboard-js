'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Database, MessageCircle, MessagesSquare, Zap } from 'lucide-react'

function formatNumber(n) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`
  return n.toLocaleString()
}

export default function UsageCards({ usage }) {
  const stats = [
    {
      title: 'Tokens Used',
      value: formatNumber(usage.tokens || 0),
      description: 'Current billing period',
      icon: Zap,
    },
    {
      title: 'Conversations',
      value: formatNumber(usage.conversations || 0),
      description: 'Total conversations',
      icon: MessagesSquare,
    },
    {
      title: 'Messages',
      value: formatNumber(usage.messages || 0),
      description: 'Total messages',
      icon: MessageCircle,
    },
    {
      title: 'Resources',
      value: formatNumber(
        (usage.database?.datasets || 0) +
          (usage.database?.skillsets || 0) +
          (usage.database?.abilities || 0) +
          (usage.database?.files || 0)
      ),
      description: 'Datasets, skillsets, abilities, files',
      icon: Database,
    },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <CardDescription>{stat.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
