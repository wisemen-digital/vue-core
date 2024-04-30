<script setup lang="ts"  generic="TSchema, TFilters">
import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
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
import AppTableActiveFiltersWarning from './AppTableActiveFiltersWarning.vue'
import AppTableBody from './AppTableBody.vue'
import AppTableEmptyState from './AppTableEmptyState.vue'
import AppTableEmptyStateOverlay from './AppTableEmptyStateOverlay.vue'
import AppTableFooter from './AppTableFooter.vue'
import AppTableHeader from './AppTableHeader.vue'
import AppTableTop from './AppTableTop.vue'

const props = withDefaults(
  defineProps<{
    columns: TableColumn<TSchema>[]
    data: PaginatedData<TSchema> | null
    filters: TableFilter<TFilters>[]
    isInfiniteScroll?: boolean
    isLoading: boolean
    pagination: Pagination<TFilters>
    rowClick?: ((row: TSchema) => void) | null
    rowTo?: ((row: TSchema) => RouteLocationNamedRaw) | null
    shouldPinFirstColumn?: boolean
    shouldPinLastColumn?: boolean
    title: string
  }>(),
  {
    isInfiniteScroll: false,
    rowClick: null,
    rowTo: null,
    shouldPinFirstColumn: false,
    shouldPinLastColumn: false,
  },
)

const emit = defineEmits<{
  clearFilters: []
}>()

const INFINITE_SCROLL_OFFSET = 100

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

function getIsScrolledtoRight(element: HTMLElement): boolean {
  return element.scrollLeft > 0
}

function getCanScrollVertically(element: HTMLElement): boolean {
  return element.scrollHeight > element.clientHeight
}

function getHasReachedHorizontalScrollEnd(element: HTMLElement): boolean {
  return element.scrollLeft + element.clientWidth === element.scrollWidth
}

function handleInfiniteScroll(): void {
  if (!props.isInfiniteScroll) {
    return
  }

  if (tableContainerRef.value === null) {
    return
  }

  if (props.data === null) {
    return
  }

  if (props.isLoading) {
    return
  }

  const {
    clientHeight,
    scrollHeight,
    scrollTop,
  } = tableContainerRef.value

  if (scrollHeight - scrollTop > clientHeight + INFINITE_SCROLL_OFFSET) {
    return
  }

  const { page, perPage } = props.pagination.paginationOptions.value.pagination

  const totalPages = Math.ceil(props.data.total / perPage)

  if (page === totalPages) {
    return
  }

  props.pagination.handlePageChange({
    page: page + 1,
    perPage,
  })
}

function onScroll(): void {
  handleTableResize()
  handleInfiniteScroll()
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
  emit('clearFilters')
}

const gridColsStyle = computed<string>(() => {
  return `${props.columns.map(col => `minmax(${col.size},auto)`).join(' ')}`
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
    .filter(value => value !== null && value !== undefined && value !== '').length
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
  <div class="flex h-full flex-1 flex-col overflow-hidden rounded-xl border border-solid border-border">
    <AppTableTop
      :is-loading="props.isLoading"
      :title="props.title"
      :total="props.data?.total ?? null"
    />

    <div
      ref="tableContainerRef"
      class="h-full overflow-y-auto"
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

        <AppTableEmptyState
          v-if="hasNoData || props.isLoading"
          :active-filter-count="activeFilterCount"
          :column-count="props.columns.length"
          :should-pin-first-column="props.shouldPinFirstColumn"
          :should-pin-last-column="props.shouldPinLastColumn"
          :has-reached-horizontal-scroll-end="hasReachedHorizontalScrollEnd"
          :is-scrolled-to-right="isScrolledToRight"
          @clear-filters="onClearFilters"
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
        />
      </div>

      <AppTableActiveFiltersWarning
        v-if="activeFilterCount > 0 && !props.isLoading && !hasNoData"
        :active-filter-count="activeFilterCount"
        @clear-filters="onClearFilters"
      />
    </div>

    <AppTableEmptyStateOverlay
      v-if="hasNoData"
      :active-filter-count="activeFilterCount"
      @clear-filters="onClearFilters"
    />

    <AppTableFooter
      v-if="!props.isInfiniteScroll"
      :is-loading="props.isLoading"
      :pagination-options="props.pagination.paginationOptions.value"
      :total="props.data?.total ?? null"
      @page="handlePageChange"
    />
  </div>
</template>
