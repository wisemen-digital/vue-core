import { useInfiniteScroll } from '@vueuse/core'
import type { ComputedRef } from 'vue'
import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from 'vue'

import type { TableColumn } from '@/components/table/table.type'

interface UseTableOptions {
  columns: ComputedRef<TableColumn<any>[]>
  rowCount: ComputedRef<number>
  onNextPage: () => void
}

interface UseTable {
  hasReachedHorizontalEnd: ComputedRef<boolean>
  hasVerticalOverflow: ComputedRef<boolean>
  isScrolledHorizontally: ComputedRef<boolean>
  gridTemplateColumns: ComputedRef<string>
  setTableScrollContainerRef: (el: HTMLElement) => void
}

const DEFAULT_INFINITE_SCROLL_DISTANCE = 100

export function useTable(
  {
    columns,
    rowCount,
    onNextPage,
  }: UseTableOptions,
): UseTable {
  const tableScrollContainerRef = ref<HTMLElement | null>(null)

  const isScrolledHorizontally = ref<boolean>(false)
  const hasReachedHorizontalEnd = ref<boolean>(false)
  const hasVerticalOverflow = ref<boolean>(false)

  useInfiniteScroll(
    computed<HTMLElement | null>(() => tableScrollContainerRef.value),
    onNextPage,
    { distance: DEFAULT_INFINITE_SCROLL_DISTANCE },
  )

  const gridTemplateColumns = computed<string>(() => (
    `${columns.value.map((col) => `minmax(${col.width ?? 'min-content'},${col.maxWidth ?? 'auto'})`).join(' ')}`
  ))

  function setTableScrollContainerRef(el: HTMLElement): void {
    tableScrollContainerRef.value = el
  }

  function updateScrollState(): void {
    const el = tableScrollContainerRef.value

    if (el === null) {
      return
    }

    isScrolledHorizontally.value = el.scrollLeft > 0
    hasReachedHorizontalEnd.value = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1
    hasVerticalOverflow.value = el.scrollHeight > el.clientHeight
  }

  watch(rowCount, () => {
    setTimeout(updateScrollState)
  })

  onMounted(() => {
    if (tableScrollContainerRef.value === null) {
      throw new Error('Table scroll container ref is null')
    }

    updateScrollState()
    tableScrollContainerRef.value.addEventListener('scroll', updateScrollState)
    tableScrollContainerRef.value.addEventListener('resize', updateScrollState)
  })

  onBeforeUnmount(() => {
    if (tableScrollContainerRef.value === null) {
      return
    }

    tableScrollContainerRef.value.removeEventListener('scroll', updateScrollState)
    tableScrollContainerRef.value.removeEventListener('resize', updateScrollState)
  })

  return {
    hasReachedHorizontalEnd: computed<boolean>(() => hasReachedHorizontalEnd.value),
    hasVerticalOverflow: computed<boolean>(() => hasVerticalOverflow.value),
    isScrolledHorizontally: computed<boolean>(() => isScrolledHorizontally.value),
    gridTemplateColumns,
    setTableScrollContainerRef,
  }
}
