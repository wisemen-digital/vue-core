<script setup lang="ts" generic="TSchema, TFilters">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from 'vue'
import type { RouteLocationNamedRaw } from 'vue-router'

import type {
  PageChangeEvent,
  PaginatedData,
  Pagination,
  SortChangeEvent,
  TableColumn,
  TableFilter,
} from '../../types/table.type'
import AppTableBody from './AppTableBody.vue'
import AppTableFooter from './AppTableFooter.vue'
import AppTableHeader from './AppTableHeader.vue'
import AppTableTop from './AppTableTop.vue'

const props = withDefaults(
  defineProps<{
    columns: TableColumn<TSchema>[]
    data: PaginatedData<TSchema> | null
    emptyMessage: string
    filters: TableFilter<TFilters>[]
    isLoading: boolean
    pagination: Pagination<TFilters>
    pinFirstColumn?: boolean
    pinLastColumn?: boolean
    rowClick?: ((row: TSchema) => void) | null
    rowTo?: ((row: TSchema) => RouteLocationNamedRaw) | null
    title: string
  }>(),
  {
    pinFirstColumn: false,
    pinLastColumn: false,
    rowClick: null,
    rowTo: null,
  },
)

const tableRef = ref<HTMLElement | null>(null)

// Because of how css works, we need to apply a different width (w-fit) when scrollable
const isHorizontallyScrollable = ref<boolean>(false)
const isVerticallyScrollable = ref<boolean>(false)
const isScrolledToRight = ref<boolean>(false)
const hasReachedHorizontalScrollEnd = ref<boolean>(false)

let resizeObserver: ResizeObserver | null = null

const gridTemplateColumns = computed<string>(() => {
  return props.columns.reduce((acc, column) => {
    const colSpan = column.size ?? '1fr'
    return `${acc} ${colSpan}`
  }, '')
})

function handleSortChange(sortChangeEvent: SortChangeEvent): void {
  props.pagination.handleSortChange(sortChangeEvent)
}

// function handleFilterChange(filterId: keyof TFilters, value: unknown): void {
//  const updatedFilters = {
//    ...paginationOptions.filters,
//    [filterId]: value,
//  } as FilterChangeEvent<TFilters>
//
//  emit('filter', updatedFilters)
// }

function handlePageChange(event: PageChangeEvent): void {
  props.pagination.handlePageChange(event)
}

function setIsHorizontallyScrollable(): void {
  if (tableRef.value === null) {
    return
  }

  const { clientWidth, scrollWidth } = tableRef.value

  isHorizontallyScrollable.value = scrollWidth > clientWidth
}

function setIsVerticallyScrollable(): void {
  if (tableRef.value === null) {
    return
  }

  const { clientHeight, scrollHeight } = tableRef.value

  isVerticallyScrollable.value = scrollHeight > clientHeight
}

function setIsScrolledToRight(): void {
  if (tableRef.value === null) {
    return
  }

  const { scrollLeft } = tableRef.value

  isScrolledToRight.value = scrollLeft > 0
}

function setHasReachedHorizontalScrollEnd(): void {
  if (tableRef.value === null) {
    return
  }

  const {
    clientWidth,
    scrollLeft,
    scrollWidth,
  } = tableRef.value

  hasReachedHorizontalScrollEnd.value = scrollWidth - clientWidth === scrollLeft
}

function createResizeObserver(element: HTMLElement, onResize: () => void): ResizeObserver {
  const observer = new ResizeObserver(onResize)
  observer.observe(element)

  return observer
}

function handleResize(): void {
  setIsHorizontallyScrollable()
  setIsVerticallyScrollable()
}

function handleScroll(): void {
  setIsScrolledToRight()
  setHasReachedHorizontalScrollEnd()
}

async function onDataChange(): Promise<void> {
  await nextTick()
  setIsHorizontallyScrollable()
  setIsVerticallyScrollable()
}

watch(() => props.data, onDataChange)

onMounted(() => {
  if (tableRef.value === null) {
    throw new Error('Table ref is null')
  }

  resizeObserver = createResizeObserver(tableRef.value, handleResize)
  setIsHorizontallyScrollable()
  setIsVerticallyScrollable()
})

onBeforeUnmount(() => {
  resizeObserver?.unobserve(tableRef.value as Element)
})
</script>

<template>
  <div class="flex h-full flex-1 flex-col overflow-hidden rounded-xl border border-solid border-border">
    <AppTableTop
      :title="props.title"
      :total="props.data?.total ?? null"
    />

    <div
      ref="tableRef"
      class="flex size-full flex-1 flex-col overflow-auto bg-background"
      @scroll="handleScroll"
    >
      <AppTableHeader
        v-if="!props.isLoading"
        :columns="props.columns"
        :grid-template-columns="gridTemplateColumns"
        :has-reached-horizontal-scroll-end="hasReachedHorizontalScrollEnd"
        :is-horizontally-scrollable="isHorizontallyScrollable"
        :is-scrolled-to-right="isScrolledToRight"
        :pagination-options="props.pagination.paginationOptions.value"
        :pin-first-column="props.pinFirstColumn"
        :pin-last-column="props.pinLastColumn"
        @sort="handleSortChange"
      />

      <AppTableBody
        :is-vertically-scrollable="isVerticallyScrollable"
        :columns="props.columns"
        :data="props.data?.data ?? []"
        :empty-message="props.emptyMessage"
        :grid-template-columns="gridTemplateColumns"
        :has-reached-horizontal-scroll-end="hasReachedHorizontalScrollEnd"
        :is-horizontally-scrollable="isHorizontallyScrollable"
        :is-loading="props.isLoading"
        :is-scrolled-to-right="isScrolledToRight"
        :pin-first-column="props.pinFirstColumn"
        :pin-last-column="props.pinLastColumn"
        :row-click="props.rowClick"
        :row-to="props.rowTo"
      />
    </div>

    <AppTableFooter
      :pagination-options="props.pagination.paginationOptions.value"
      :total="props.data?.total ?? null"
      @page="handlePageChange"
    />
  </div>
</template>
