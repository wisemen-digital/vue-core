import type { Ref } from 'vue'
import {
  computed,
  onMounted,
  onUnmounted,
  ref,
} from 'vue'

export interface UsePlanningLiveTimeIndicatorOptions {
  endHour: number | Ref<number>
  hourHeight: number | Ref<number>
  selectedWeekStart: Ref<Date>
  startHour: number | Ref<number>
  updateInterval?: number
}

export function usePlanningLiveTimeIndicator(options: UsePlanningLiveTimeIndicatorOptions) {
  const {
    hourHeight,
    selectedWeekStart,
    startHour,
    updateInterval = 60_000,
  } = options

  const now = ref<Date>(new Date())
  let intervalId: NodeJS.Timeout | null = null

  const indicatorVisible = computed<boolean>(() => {
    const today = new Date()
    const weekStart = selectedWeekStart.value
    const weekEnd = new Date(weekStart)

    weekEnd.setDate(weekStart.getDate() + 6)
    weekEnd.setHours(23, 59, 59, 999)

    const todayDateOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    const weekStartDateOnly = new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate())
    const weekEndDateOnly = new Date(weekEnd.getFullYear(), weekEnd.getMonth(), weekEnd.getDate())

    return todayDateOnly >= weekStartDateOnly && todayDateOnly <= weekEndDateOnly
  })

  const currentDayIndex = computed<number>(() => {
    if (!indicatorVisible.value) {
      return -1
    }

    const today = new Date()

    const todayDay = today.getDay()
    const mondayBasedDay = todayDay === 0 ? 6 : todayDay - 1

    return mondayBasedDay
  })

  const indicatorTop = computed<number>(() => {
    const currentHour = now.value.getHours()
    const currentMinutes = now.value.getMinutes()
    const totalMinutes = currentHour * 60 + currentMinutes
    const relativeHour = totalMinutes / 60 - (typeof startHour === 'number' ? startHour : startHour.value)
    const hourHeightValue = typeof hourHeight === 'number' ? hourHeight : hourHeight.value

    return Math.max(0, relativeHour * hourHeightValue)
  })

  const indicatorTimeLabel = computed<string>(() => {
    return now.value.toLocaleTimeString([], {
      hour: '2-digit',
      hour12: false,
      minute: '2-digit',
    })
  })

  function updateTime(): void {
    now.value = new Date()
  }

  onMounted(() => {
    updateTime()
    intervalId = setInterval(updateTime, updateInterval)
  })

  onUnmounted(() => {
    if (intervalId) {
      clearInterval(intervalId)
    }
  })

  return {
    currentDayIndex,
    indicatorTimeLabel,
    indicatorTop,
    indicatorVisible,
    now,
  }
}
