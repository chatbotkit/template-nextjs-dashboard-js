'use server'

import { getChatBotKitClient } from '@/lib/chatbotkit'
import { requireSession } from '@/lib/session'

export async function fetchUsage() {
  await requireSession()

  const cbk = getChatBotKitClient()
  const usage = await cbk.usage.fetch()

  return usage
}

export async function fetchUsageSeries() {
  await requireSession()

  const cbk = getChatBotKitClient()
  const series = await cbk.usage.series.fetch()

  return series
}

export async function fetchRecentEvents() {
  await requireSession()

  const cbk = getChatBotKitClient()
  const { items } = await cbk.event.log.list({ order: 'desc', take: 20 })

  return items
}
