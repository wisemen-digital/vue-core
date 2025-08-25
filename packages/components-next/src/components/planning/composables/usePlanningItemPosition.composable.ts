import type { Ref } from 'vue'
import { computed } from 'vue'

import type { PlanningItem } from '@/components/planning/planning.types'

export interface UsePlanningItemPositionOptions {
  endHour: number | Ref<number>
  hourHeight: number | Ref<number>
  startHour: number | Ref<number>
}

export function usePlanningItemPosition<T extends PlanningItem = PlanningItem>(
  item: T,
  options: UsePlanningItemPositionOptions,
) {
  const {
    endHour,
    hourHeight,
    startHour,
  } = options

  const itemStart = computed<Date>(() => new Date(item.startsAt))
  const itemEnd = computed<Date>(() => new Date(item.endsAt))

  const startHourWithMinutes = computed<number>(() => {
    const date = itemStart.value

    return date.getHours() + date.getMinutes() / 60
  })

  const endHourWithMinutes = computed<number>(() => {
    const date = itemEnd.value

    return date.getHours() + date.getMinutes() / 60
  })

  const duration = computed<number>(() => {
    return endHourWithMinutes.value - startHourWithMinutes.value
  })

  const top = computed<number>(() => {
    const startHourValue = typeof startHour === 'number' ? startHour : startHour.value
    const hourHeightValue = typeof hourHeight === 'number' ? hourHeight : hourHeight.value

    const relativeStart = startHourWithMinutes.value - startHourValue

    return Math.max(0, relativeStart * hourHeightValue)
  })

  const height = computed<number>(() => {
    const hourHeightValue = typeof hourHeight === 'number' ? hourHeight : hourHeight.value

    return Math.max(20, duration.value * hourHeightValue)
  })

  const isVisible = computed<boolean>(() => {
    const startHourValue = typeof startHour === 'number' ? startHour : startHour.value
    const endHourValue = typeof endHour === 'number' ? endHour : endHour.value

    return endHourWithMinutes.value > startHourValue
      && startHourWithMinutes.value < endHourValue
  })

  const timeLabel = computed<string>(() => {
    const start = itemStart.value.toLocaleTimeString([], {
      hour: '2-digit',
      hour12: false,
      minute: '2-digit',
    })
    const end = itemEnd.value.toLocaleTimeString([], {
      hour: '2-digit',
      hour12: false,
      minute: '2-digit',
    })

    return `${start} - ${end}`
  })

  const durationLabel = computed<string>(() => {
    const hours = Math.floor(duration.value)
    const minutes = Math.round((duration.value - hours) * 60)

    if (hours === 0) {
      return `${minutes}m`
    }
    else if (minutes === 0) {
      return `${hours}h`
    }
    else {
      return `${hours}h ${minutes}m`
    }
  })

  return {
    isVisible,
    duration,
    durationLabel,
    endHourWithMinutes,
    height,
    itemEnd,
    itemStart,
    startHourWithMinutes,
    timeLabel,
    top,
  }
}
