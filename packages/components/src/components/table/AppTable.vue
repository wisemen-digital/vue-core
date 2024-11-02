<script setup lang="ts" generic="Tschema, TFilters">
import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  useSlots,
  type VNode,
  watch,
} from 'vue'

import AppTableBody from '@/components/table/AppTableBody.vue'
import AppTableBottom from '@/components/table/AppTableBottom.vue'
import AppTableEmptyState from '@/components/table/AppTableEmptyState.vue'
import AppTableHeader from '@/components/table/AppTableHeader.vue'
import AppTableLoadingState from '@/components/table/AppTableLoadingState.vue'
import AppTablePageCount from '@/components/table/AppTablePageCount.vue'
import AppTablePagination from '@/components/table/pagination/AppTablePagination.vue'
import { provideTableContext } from '@/components/table/table.context'
import type { AppTableProps } from '@/components/table/table.props'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import type { PaginatedData, Pagination } from '@/types/pagination.type'
import type { TableColumn } from '@/types/table.type'

const props = withDefaults(defineProps<AppTableProps<Tschema, TFilters>>(), {
  isFirstColumnSticky: false,
  isLastColumnSticky: false,
  expandedRowContent: null,
  rowClass: null,
  styleConfig: null,
})

const themeProviderContext = injectThemeProviderContext()

const slots = useSlots()

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

const hasTopSlot = computed<boolean>(() => slots.top !== undefined)

const gridColsStyle = computed<string>(() => (
  `${props.columns.map((col) => `minmax(${col.width ?? 'min-content'},${col.maxWidth ?? 'auto'})`).join(' ')}`
))

const isEmpty = computed<boolean>(() => (
  props.data !== null && props.data.meta.total === 0 && !props.isLoading
))

function getIsScrolledtoRight(element: HTMLElement): boolean {
  return element.scrollLeft > 0
}

function getCanScrollVertically(element: HTMLElement): boolean {
  return element.scrollHeight > element.clientHeight
}

function getHasReachedHorizontalScrollEnd(element: HTMLElement): boolean {
  return element.scrollLeft + element.clientWidth >= element.scrollWidth
}

function createResizeObserver(element: HTMLElement, onResize: () => void): ResizeObserver {
  const observer = new ResizeObserver(onResize)

  observer.observe(element)

  return observer
}

function handleTableResize(tableContainerEl: HTMLElement): void {
  isScrolledToRight.value = getIsScrolledtoRight(tableContainerEl)
  canScrollVertically.value = getCanScrollVertically(tableContainerEl)
  hasReachedHorizontalScrollEnd.value = getHasReachedHorizontalScrollEnd(tableContainerEl)
}

function onScroll(): void {
  handleTableResize(tableContainerRef.value!)
}

watch(() => props.data, () => {
  if (tableContainerRef.value === null) {
    return
  }

  handleTableResize(tableContainerRef.value)
}, {
  flush: 'post',
})

onMounted(() => {
  const tableContainerEl = tableContainerRef.value

  if (tableContainerEl === null) {
    return
  }

  resizeObserver = createResizeObserver(tableContainerEl, () => {
    handleTableResize(tableContainerEl)
  })
})

onBeforeUnmount(() => {
  resizeObserver?.disconnect()
})

provideTableContext({
  hasReachedHorizontalScrollEnd: computed<boolean>(() => hasReachedHorizontalScrollEnd.value),
  isFirstColumnSticky: computed<boolean>(() => props.isFirstColumnSticky),
  isLastColumnSticky: computed<boolean>(() => props.isLastColumnSticky),
  isLoading: computed<boolean>(() => props.isLoading),
  isScrolledToRight: computed<boolean>(() => isScrolledToRight.value),
  canScrollVertically: computed<boolean>(() => canScrollVertically.value),
  columns: computed<TableColumn<unknown>[]>(() => props.columns as TableColumn<unknown>[]),
  data: computed<PaginatedData<unknown> | null>(() => props.data),
  expandedRowContent: computed<((row: unknown) => VNode) | null>(
    () => props.expandedRowContent as ((row: unknown) => VNode) | null),
  gridColsStyle,
  pagination: computed<Pagination<unknown>>(() => props.pagination),
  rowClass: computed<((row: unknown, rowIndex: number) => string) | null>(
    () => props.rowClass as ((row: unknown, rowIndex: number) => string) | null),
})
</script>

<template>
  <div
    :style="props.styleConfig"
    :class="themeProviderContext.theme.value"
    class="table-variant-default relative flex h-full flex-1 flex-col overflow-hidden rounded-table-border-radius-default border border-solid border-table-border-color-default bg-primary"
  >
    <div
      v-if="hasTopSlot"
      class="border-b border-solid border-secondary"
    >
      <slot name="top" />
    </div>

    <div class="relative flex h-full flex-1 flex-col overflow-hidden">
      <AppTableLoadingState v-if="isLoading" />
      <AppTableEmptyState v-else-if="isEmpty" />

      <div
        v-else
        ref="tableContainerRef"
        :aria-rowcount="data!.meta.total"
        class="h-full flex-1 overflow-y-auto"
        tabindex="0"
        role="table"
        @scroll="onScroll"
      >
        <div
          :style="{
            gridTemplateColumns: gridColsStyle,
          }"
          class="grid"
        >
          <AppTableHeader />
          <AppTableBody />
        </div>
      </div>
    </div>

    <AppTableBottom v-if="!isEmpty">
      <slot name="bottom">
        <div class="flex w-full items-center justify-between">
          <slot name="page-count">
            <AppTablePageCount />
          </slot>

          <AppTablePagination>
            <template #default="{ items }">
              <slot
                :items="items"
                name="pagination"
              />
            </template>
          </AppTablePagination>
        </div>
      </slot>
    </AppTableBottom>
  </div>
</template>
