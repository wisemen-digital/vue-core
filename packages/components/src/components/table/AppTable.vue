<script setup lang="ts"  generic="TSchema, TFilters">
import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  useSlots,
} from 'vue'
import type { RouteLocationNamedRaw } from 'vue-router'

import AppTableActiveFiltersWarning from '@/components/table/AppTableActiveFiltersWarning.vue'
import AppTableBody from '@/components/table/AppTableBody.vue'
import AppTableEmptyState from '@/components/table/AppTableEmptyState.vue'
import AppTableEmptyStateOverlay from '@/components/table/AppTableEmptyStateOverlay.vue'
import AppTableFooter from '@/components/table/AppTableFooter.vue'
import AppTableHeader from '@/components/table/AppTableHeader.vue'
import AppTableTop from '@/components/table/AppTableTop.vue'
import type {
  PageChangeEvent,
  PaginatedData,
  Pagination,
  PaginationFilter,
  SortChangeEvent,
} from '@/types/pagination.type'
import type { TableColumn, TableEmptyTextProp } from '@/types/table.type'

const props = withDefaults(
  defineProps<{
    isLoading: boolean
    columns: TableColumn<TSchema>[]
    data: PaginatedData<TSchema> | null
    emptyText?: TableEmptyTextProp | null
    filters: PaginationFilter<TFilters>[]
    pagination: Pagination<TFilters>
    rowClick?: ((row: TSchema) => void) | null
    rowTarget?: string
    rowTo?: ((row: TSchema) => RouteLocationNamedRaw) | null
    shouldPinFirstColumn?: boolean
    shouldPinLastColumn?: boolean
    title: string
  }>(),
  {
    emptyText: null,
    rowClick: null,
    rowTo: null,
    shouldPinFirstColumn: false,
    shouldPinLastColumn: false,
  },
)

const tableContainerRef = ref<HTMLElement | null>(null)

// Used to observe the table's width and height to recalculate the variables below
let resizeObserver: ResizeObserver | null = null

// If `shouldPinFirstColumn` and `isScrolledToRight` are true,
// a border will be visible on the right side of the first column
const isScrolledToRight = ref<boolean>(false)

// If `shouldPinLastColumn` is true, a border will be visible on the
// left side of the last column
const hasReachedHorizontalScrollEnd = ref<boolean>(false)

// If vertically scrollable, the last item's border bottom will be removed
const canScrollVertically = ref<boolean>(false)

const slots = useSlots()

function getIsScrolledtoRight(element: HTMLElement): boolean {
  return element.scrollLeft > 0
}

function getCanScrollVertically(element: HTMLElement): boolean {
  return element.scrollHeight > element.clientHeight
}

function getHasReachedHorizontalScrollEnd(element: HTMLElement): boolean {
  return element.scrollLeft + element.clientWidth === element.scrollWidth
}

function onScroll(): void {
  handleTableResize()
}

function handleSortChange(sortChangeEvent: SortChangeEvent): void {
  props.pagination.handleSortChange(sortChangeEvent)
}

function handlePageChange(event: PageChangeEvent): void {
  props.pagination.handlePageChange(event)
}

function createResizeObserver(element: HTMLElement, onResize: () => void): ResizeObserver {
  const observer = new ResizeObserver(onResize)

  observer.observe(element)

  return observer
}

function handleTableResize(): void {
  if (tableContainerRef.value === null) {
    return
  }

  isScrolledToRight.value = getIsScrolledtoRight(tableContainerRef.value)
  canScrollVertically.value = getCanScrollVertically(tableContainerRef.value)
  hasReachedHorizontalScrollEnd.value = getHasReachedHorizontalScrollEnd(tableContainerRef.value)
}

function onClearFilters(): void {
  props.pagination.clearFilters()
}

const hasEmptyStateSlot = computed<boolean>(() => {
  return slots['empty-state'] !== undefined
})

const gridColsStyle = computed<string>(() => {
  return `${props.columns.map((col) => `minmax(${col.width},${col.maxWidth ?? 'auto'})`).join(' ')}`
})

const hasNoData = computed<boolean>(() => {
  return props.data?.data.length === 0 && !props.isLoading
})

const activeFilterCount = computed<number>(() => {
  const filters = props.pagination.paginationOptions.value.filters ?? null

  if (filters === null) {
    return 0
  }

  return Object
    .values(filters)
    .filter((value) => value !== null && value !== undefined && value !== '').length
})

onMounted(() => {
  if (tableContainerRef.value === null) {
    throw new Error('Table ref is null')
  }

  resizeObserver = createResizeObserver(tableContainerRef.value, handleTableResize)
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
})
</script>

<template>
  <div class="relative flex h-full flex-1 flex-col overflow-hidden rounded-xl border border-solid border-border bg-background">
    <AppTableTop
      :is-loading="props.isLoading"
      :title="props.title"
      :total="props.data?.total ?? null"
    />

    <div
      ref="tableContainerRef"
      class="h-full flex-1 overflow-y-auto"
      @scroll="onScroll"
    >
      <div
        :style="{
          gridTemplateColumns: gridColsStyle,
        }"
        class="grid items-start bg-background"
      >
        <AppTableHeader
          :columns="props.columns"
          :pagination-options="props.pagination.paginationOptions.value"
          :should-pin-first-column="props.shouldPinFirstColumn"
          :should-pin-last-column="props.shouldPinLastColumn"
          :is-scrolled-to-right="isScrolledToRight"
          :has-reached-horizontal-scroll-end="hasReachedHorizontalScrollEnd"
          @sort="handleSortChange"
        />

        <AppTableBody
          :columns="props.columns"
          :data="props.data?.data ?? []"
          :should-pin-first-column="props.shouldPinFirstColumn"
          :should-pin-last-column="props.shouldPinLastColumn"
          :is-scrolled-to-right="isScrolledToRight"
          :has-reached-horizontal-scroll-end="hasReachedHorizontalScrollEnd"
          :can-scroll-vertically="canScrollVertically"
          :has-active-filters="activeFilterCount > 0 && !props.isLoading"
          :row-click="props.rowClick"
          :row-to="props.rowTo"
          :row-target="props.rowTarget"
        />

        <AppTableEmptyState
          v-if="!hasEmptyStateSlot && (hasNoData || props.isLoading)"
          :active-filter-count="activeFilterCount"
          :column-count="props.columns.length"
          :should-pin-first-column="props.shouldPinFirstColumn"
          :should-pin-last-column="props.shouldPinLastColumn"
          :has-reached-horizontal-scroll-end="hasReachedHorizontalScrollEnd"
          :is-scrolled-to-right="isScrolledToRight"
          @clear-filters="onClearFilters"
        />
      </div>

      <AppTableActiveFiltersWarning
        v-if="activeFilterCount > 0 && !props.isLoading && !hasNoData"
        :active-filter-count="activeFilterCount"
        @clear-filters="onClearFilters"
      />
    </div>

    <slot name="empty-state">
      <AppTableEmptyStateOverlay
        v-if="hasNoData"
        :active-filter-count="activeFilterCount"
        :empty-text="props.emptyText"
        @clear-filters="onClearFilters"
      />
    </slot>

    <AppTableFooter
      :is-loading="props.isLoading"
      :pagination-options="props.pagination.paginationOptions.value"
      :total="props.data?.total ?? null"
      @page="handlePageChange"
    />
  </div>
</template>
