import type { Ref } from 'vue'
import {
  computed,
  ref,
} from 'vue'

import type {
  PlanningDay,
  PlanningWeekInfo,
} from '@/components/planning/planning.types'

export interface UsePlanningWeekOptions {
  hiddenDays?: number[]
  locale?: string
}

export function usePlanningWeek(options: UsePlanningWeekOptions = {}) {
  const {
    hiddenDays = [], locale = 'en-US',
  } = options

  const selectedWeekStart = ref<Date>(getWeekStart(new Date()))

  const weekInfo = computed<PlanningWeekInfo>(() => {
    const start = selectedWeekStart.value
    const end = new Date(start)

    end.setDate(start.getDate() + 6)

    return {
      days: generateWeekDays(start, hiddenDays, locale),
      end,
      label: formatWeekRange(start, end, locale),
      start,
      weekNumber: getWeekNumber(start),
    }
  })

  const visibleDays = computed<string[]>(() =>
    weekInfo.value.days.map((day) => day.date))

  const visibleDayLabels = computed<string[]>(() =>
    weekInfo.value.days.map((day) => day.label))

  function goToToday(): void {
    selectedWeekStart.value = getWeekStart(new Date())
  }

  function prevWeek(): void {
    const newStart = new Date(selectedWeekStart.value)

    newStart.setDate(newStart.getDate() - 7)
    selectedWeekStart.value = newStart
  }

  function nextWeek(): void {
    const newStart = new Date(selectedWeekStart.value)

    newStart.setDate(newStart.getDate() + 7)
    selectedWeekStart.value = newStart
  }

  return {
    goToToday,
    nextWeek,
    prevWeek,
    selectedWeekStart: selectedWeekStart as Ref<Date>,
    visibleDayLabels,
    visibleDays,
    weekInfo,
  }
}

function getWeekStart(date: Date): Date {
  const start = new Date(date)
  const day = start.getDay()
  const diff = start.getDate() - day + (day === 0 ? -6 : 1)

  start.setDate(diff)
  start.setHours(0, 0, 0, 0)

  return start
}

function getWeekNumber(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 1)
  const days = Math.floor((date.getTime() - start.getTime()) / (24 * 60 * 60 * 1000))

  return Math.ceil((days + start.getDay() + 1) / 7)
}

function formatWeekRange(start: Date, end: Date, locale: string): string {
  const formatter = new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'short',
    year: start.getFullYear() !== end.getFullYear() ? 'numeric' : undefined,
  })

  const startStr = formatter.format(start)
  const endStr = formatter.format(end)

  return `${startStr} - ${endStr}`
}

function generateWeekDays(weekStart: Date, hiddenDays: number[], locale: string): PlanningDay[] {
  const days: PlanningDay[] = []
  const today = new Date()

  today.setHours(0, 0, 0, 0)

  for (let i = 0; i < 7; i++) {
    if (hiddenDays.includes(i)) {
      continue
    }

    const date = new Date(weekStart)

    date.setDate(weekStart.getDate() + i)

    const dayOfWeek = date.getDay()
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
    const isToday = date.getTime() === today.getTime()
    const dateStr = date ? date.toISOString().split('T')[0] ?? '' : ''

    days.push({
      isToday,
      isWeekend,
      date: dateStr,
      label: new Intl.DateTimeFormat(locale, {
        day: 'numeric',
        weekday: 'short',
      }).format(date),
    })
  }

  return days
}
