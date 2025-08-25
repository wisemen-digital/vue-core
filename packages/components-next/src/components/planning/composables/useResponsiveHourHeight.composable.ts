import type { Ref } from 'vue'
import {
  computed,
  onMounted,
  onUnmounted,
  ref,
} from 'vue'

export interface UseResponsiveHourHeightOptions {
  containerRef: Ref<HTMLElement | null>
  endHour: number | Ref<number>
  minimumHourHeight: number | Ref<number>
  startHour: number | Ref<number>
}

export function useResponsiveHourHeight(options: UseResponsiveHourHeightOptions) {
  const {
    containerRef,
    endHour,
    minimumHourHeight,
    startHour,
  } = options

  const containerHeight = ref<number>(0)
  let resizeObserver: ResizeObserver | null = null

  const totalHours = computed<number>(() => {
    const startHourValue = typeof startHour === 'number' ? startHour : startHour.value
    const endHourValue = typeof endHour === 'number' ? endHour : endHour.value

    return endHourValue - startHourValue
  })

  const calculatedHourHeight = computed<number>(() => {
    const minHeight = typeof minimumHourHeight === 'number' ? minimumHourHeight : minimumHourHeight.value

    if (containerHeight.value === 0 || totalHours.value === 0) {
      return minHeight
    }

    const reservedSpace = 120
    const availableHeight = containerHeight.value - reservedSpace
    const calculatedHeight = Math.floor(availableHeight / totalHours.value)

    return Math.max(minHeight, calculatedHeight)
  })

  function updateContainerHeight(): void {
    if (containerRef.value) {
      containerHeight.value = containerRef.value.clientHeight
    }
  }

  onMounted(() => {
    if (containerRef.value) {
      updateContainerHeight()

      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          containerHeight.value = entry.contentRect.height
        }
      })

      resizeObserver.observe(containerRef.value)
    }
  })

  onUnmounted(() => {
    if (resizeObserver) {
      resizeObserver.disconnect()
    }
  })

  return {
    calculatedHourHeight,
    containerHeight,
  }
}
