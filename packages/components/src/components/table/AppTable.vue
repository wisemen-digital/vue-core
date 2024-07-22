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
import {
  type TableStyleProps,
  useTableStyle,
} from '@/components/table/table.style'
import type {
  FilterChangeEvent,
  PaginatedData,
  Pagination,
  PaginationFilter,
  SortChangeEvent,
} from '@/types/pagination.type'
import type {
  TableColumn,
  TableEmptyTextProp,
} from '@/types/table.type'

const props = withDefaults(
  defineProps<{
    title: string
    isLoading: boolean
    isTopHidden?: boolean
    columns: TableColumn<TSchema>[]
    data: PaginatedData<TSchema> | null
    emptyText?: TableEmptyTextProp | null
    filters: PaginationFilter<TFilters>[]
    pagination: Pagination<TFilters>
    rowClick?: ((row: TSchema) => void) | null
    rowTarget?: string
    rowTo?: ((row: TSchema) => RouteLocationNamedRaw) | null
    searchFilterKey?: keyof TFilters
    shouldPinFirstColumn?: boolean
    shouldPinLastColumn?: boolean
    variant?: TableStyleProps['variant']
  }>(),
  {
    isTopHidden: false,
    emptyText: null,
    rowClick: null,
    rowTo: null,
    shouldPinFirstColumn: false,
    shouldPinLastColumn: false,
    variant: 'default',
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
  return props.data?.data.length === 0 && props.isLoading === false
})

const activeFilterCount = computed<number>(() => {
  const filters = props.pagination.paginationOptions.value.filters ?? null

  if (filters === null) {
    return 0
  }

  return Object.keys(filters).length
})

function onFilterChange(filterChangeEvent: FilterChangeEvent<TFilters>): void {
  props.pagination.handleFilterChange(filterChangeEvent)
  props.pagination.handlePageChange({
    page: 0,
    perPage: props.pagination.paginationOptions.value.pagination.perPage,
  })
}

onMounted(() => {
  if (tableContainerRef.value === null) {
    throw new Error('Table ref is null')
  }

  resizeObserver = createResizeObserver(tableContainerRef.value, handleTableResize)
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
})

const tableStyle = useTableStyle()

const containerClasses = computed<string>(() => tableStyle.container())
const gridClasses = computed<string>(() => tableStyle.grid())
const tableClasses = computed<string>(() => tableStyle.table({
  variant: props.variant,
}))
</script>

<template>
  <div :class="tableClasses">
    <AppTableTop
      v-if="!isTopHidden"
      :is-loading="props.isLoading"
      :title="props.title"
      :total="props.data?.total ?? null"
      :filters="props.filters"
      :variant="props.variant"
      :pagination="props.pagination"
      :search-filter-key="props.searchFilterKey"
      @filter="onFilterChange"
      @clear="onClearFilters"
    />

    <div
      ref="tableContainerRef"
      :class="containerClasses"
      @scroll="onScroll"
    >
      <div
        :style="{
          gridTemplateColumns: gridColsStyle,
        }"
        :class="gridClasses"
      >
        <AppTableHeader
          :columns="props.columns"
          :pagination-options="props.pagination.paginationOptions.value"
          :variant="props.variant"
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
      :pagination="(props.pagination as Pagination<unknown>)"
      :total="props.data?.total ?? null"
    />
  </div>
</template>
