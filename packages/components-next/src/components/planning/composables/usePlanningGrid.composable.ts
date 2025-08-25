import type { Ref } from 'vue'
import { computed } from 'vue'

import type {
  PlanningItem,
  PlanningTimeSlot,
} from '@/components/planning/planning.types'

function formatHour(hour: number): string {
  return `${hour.toString().padStart(2, '0')}:00`
}

export function usePlanningGrid<T extends PlanningItem = PlanningItem>(
  items: Ref<T[]> | T[],
  startHour: number | Ref<number>,
  endHour: number | Ref<number>,
) {
  const hours = computed<PlanningTimeSlot[]>(() => {
    const startHourValue
      = typeof startHour === 'number' ? startHour : startHour.value
    const endHourValue = typeof endHour === 'number' ? endHour : endHour.value

    const timeSlots: PlanningTimeSlot[] = []

    for (let i = startHourValue; i < endHourValue; i++) {
      timeSlots.push({
        hour: i,
        label: formatHour(i),
      })
    }

    return timeSlots
  })

  const totalHeight = computed<number>(() => hours.value.length * 48)

  function getItemsForDay(day: string): T[] {
    const itemsValue = Array.isArray(items) ? items : items.value

    return itemsValue.filter((item) => {
      const itemDate = new Date(item.startsAt)

      if (Number.isNaN(itemDate.getTime())) {
        console.warn('Invalid date found in item:', item)

        return false
      }

      const itemDay = itemDate.toISOString().split('T')[0]

      return itemDay === day
    })
  }

  return {
    getItemsForDay,
    hours,
    totalHeight,
  }
}
