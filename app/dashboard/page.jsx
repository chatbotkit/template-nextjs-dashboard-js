import {
  fetchRecentEvents,
  fetchUsage,
  fetchUsageSeries,
} from '@/actions/analytics'
import DashboardHeader from '@/components/dashboard/dashboard-header'
import EventLog from '@/components/dashboard/event-log'
import UsageCards from '@/components/dashboard/usage-cards'
import UsageCharts from '@/components/dashboard/usage-charts'

export default async function DashboardPage() {
  const [usage, series, events] = await Promise.all([
    fetchUsage(),
    fetchUsageSeries(),
    fetchRecentEvents(),
  ])

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="mx-auto max-w-7xl space-y-6 px-4 py-8">
        <div>
          <h1 className="text-2xl font-bold">Overview</h1>
          <p className="text-muted-foreground">
            Your ChatBotKit usage at a glance
          </p>
        </div>

        <UsageCards usage={usage} />
        <UsageCharts series={series} />
        <EventLog events={events} />
      </main>
    </div>
  )
}
