<script setup lang="ts" generic="Tschema, TFilters">
import { useInfiniteScroll } from '@vueuse/core'
import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  useSlots,
  type VNode,
  watch,
} from 'vue'

import TablePagination from '@/components/table/pagination/TablePagination.vue'
import { provideTableContext } from '@/components/table/table.context'
import type { TableProps } from '@/components/table/table.props'
import TableBody from '@/components/table/TableBody.vue'
import TableBottom from '@/components/table/TableBottom.vue'
import TableEmptyState from '@/components/table/TableEmptyState.vue'
import TableHeader from '@/components/table/TableHeader.vue'
import TableLoadingState from '@/components/table/TableLoadingState.vue'
import TablePageCount from '@/components/table/TablePageCount.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import type { PaginatedData, Pagination } from '@/types/pagination.type'
import type { TableColumn } from '@/types/table.type'
import { ThemeUtil } from '@/utils/theme.util'

const props = withDefaults(defineProps<TableProps<Tschema, TFilters>>(), {
  isFetching: false,
  isFirstColumnSticky: false,
  isLastColumnSticky: false,
  expandedRowContent: null,
  rowClass: null,
  styleConfig: null,
  variant: 'default',
})

defineSlots<{
  /**
   * Use this to render your own table bottom.
   */
  'bottom': () => void
  /**
   * Use this to render your own empty state.
   */
  'empty-state': () => void
  /**
   * Use this to render your own empty state when no data is found.
   */
  'empty-state-no-data-actions': () => void
  /**
   * Use this to render your own empty state when no results are found.
   */
  'empty-state-no-results-actions': () => void
  /**
   * Use this to render your own page count in the table bottom.
   */
  'page-count': () => void
  /**
   * Use this to render your own pagination in the table bottom.
   */
  'pagination': ({ items }: { items: ({ type: 'ellipsis' } | { type: 'page', value: number })[] }) => void
  /**
   * Use this to add content to the top of the table.
   */
  'top': () => void
}>()

const themeProviderContext = injectThemeProviderContext()

const slots = useSlots()

const scrollContainerRef = ref<HTMLElement | null>(null)

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
const hasBottomSlot = computed<boolean>(() => slots.bottom !== undefined)

const gridColsStyle = computed<string>(() => (
  `${props.columns.map((col) => `minmax(${col.width ?? 'min-content'},auto)`).join(' ')}`
))

const hasActiveFilters = computed<boolean>(
  () => props.pagination.paginationOptions.value.filters !== undefined
    && Object.keys(props.pagination.paginationOptions.value.filters).length > 0,
)

const hasActiveSearch = computed<boolean>(() => {
  const search = props.pagination.paginationOptions.value.search ?? null

  return search !== null && search.length > 0
})

const isEmpty = computed<boolean>(() => {
  return props.data !== null && props.data.meta.total === 0 && !props.isLoading
})

const hasMoreThanOnePage = computed<boolean>(() => {
  if (props.data === null) {
    return false
  }

  const meta = props.data.meta

  if ('limit' in meta) {
    const total = meta?.total ?? 0
    const limit = meta?.limit ?? 0

    return total > limit
  }

  return false
})

const variantClass = computed<string | null>(() => {
  if (props.variant === 'borderless') {
    return 'table-borderless'
  }

  return null
})

const isInfiniteScroll = computed<boolean>(() => props.infiniteScroll !== undefined)

const isPaginationVisible = computed<boolean>(() => {
  const hasOffset = props.pagination.paginationOptions.value.pagination.type === 'offset'

  return !isEmpty.value && hasOffset && !isInfiniteScroll.value
})

function getIsScrolledToRight(element: HTMLElement): boolean {
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
  isScrolledToRight.value = getIsScrolledToRight(tableContainerEl)
  canScrollVertically.value = getCanScrollVertically(tableContainerEl)
  hasReachedHorizontalScrollEnd.value = getHasReachedHorizontalScrollEnd(tableContainerEl)
}

function onScroll(): void {
  if (scrollContainerRef.value === null) {
    return
  }

  handleTableResize(scrollContainerRef.value)
}

useInfiniteScroll(
  scrollContainerRef,
  async () => {
    if (props.infiniteScroll === undefined) {
      return
    }

    await props.infiniteScroll.onNext()
  },
  {
    distance: props.infiniteScroll?.distance,
  },
)

watch(() => props.data, () => {
  if (scrollContainerRef.value === null) {
    return
  }

  handleTableResize(scrollContainerRef.value)
}, {
  flush: 'post',
})

onMounted(() => {
  const tableContainerEl = scrollContainerRef.value

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
    :class="[
      variantClass,
      ThemeUtil.getClasses(themeProviderContext.theme.value, themeProviderContext.appearance.value),
    ]"
    class="table-default relative flex h-full flex-1 flex-col overflow-hidden rounded-(--table-border-radius-default) border border-solid border-(--table-border-color-default) bg-(--table-bg-color-default)"
  >
    <div
      v-if="hasTopSlot"
      class="border-b border-solid border-secondary"
    >
      <slot name="top" />
    </div>

    <div class="relative flex h-full flex-1 flex-col overflow-hidden">
      <TableLoadingState v-if="isLoading" />

      <slot
        v-else-if="isEmpty"
        name="empty-state"
      >
        <TableEmptyState :has-active-filters="hasActiveFilters || hasActiveSearch">
          <template #empty-state-no-data-actions>
            <slot name="empty-state-no-data-actions" />
          </template>

          <template #empty-state-no-results-actions>
            <slot name="empty-state-no-results-actions" />
          </template>
        </TableEmptyState>
      </slot>

      <div
        v-else
        ref="scrollContainerRef"
        :aria-rowcount="data?.meta?.total ?? 0"
        class="h-full flex-1 overflow-y-auto"
        role="table"
        @scroll="onScroll"
      >
        <div
          :style="{
            gridTemplateColumns: gridColsStyle,
          }"
          class="grid"
        >
          <TableHeader />
          <TableBody />
        </div>
        <TableLoadingState
          v-if="isInfiniteScroll && props.isFetching"
          :hide-header="true"
        />
      </div>
    </div>

    <TableBottom v-if="hasBottomSlot || isPaginationVisible">
      <slot name="bottom">
        <div
          v-if="isPaginationVisible"
          class="flex w-full items-center justify-between"
        >
          <slot name="page-count">
            <TablePageCount />
          </slot>

          <TablePagination v-if="hasMoreThanOnePage">
            <template #default="{ items }">
              <slot
                :items="items"
                name="pagination"
              />
            </template>
          </TablePagination>
        </div>
      </slot>
    </TableBottom>
  </div>
</template>
