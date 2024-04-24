<script setup lang="ts" generic="TSchema, TFilters">
import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from 'vue'
import { useI18n } from 'vue-i18n'
import type { RouteLocationNamedRaw } from 'vue-router'

import type {
  PageChangeEvent,
  PaginatedData,
  Pagination,
  SortChangeEvent,
  TableColumn,
  TableFilter,
} from '../../types/table.type'
import AppButton from '../button/AppButton.vue'
import AppText from '../text/AppText.vue'
import AppTableBody from './AppTableBody.vue'
import AppTableFooter from './AppTableFooter.vue'
import AppTableHeader from './AppTableHeader.vue'
import AppTableTop from './AppTableTop.vue'

const props = withDefaults(
  defineProps<{
    columns: TableColumn<TSchema>[]
    data: PaginatedData<TSchema> | null
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

const emit = defineEmits<{
  clearFilters: []
}>()

const tableRef = ref<HTMLElement | null>(null)

// Because of how css works, we need to apply a different width (w-fit) when scrollable
const isHorizontallyScrollable = ref<boolean>(false)
const isVerticallyScrollable = ref<boolean>(false)
const isScrolledToRight = ref<boolean>(false)
const hasReachedHorizontalScrollEnd = ref<boolean>(false)

let resizeObserver: ResizeObserver | null = null

const { t } = useI18n()

const activeFilterCount = computed<number>(() => {
  const filters = props.pagination.paginationOptions.value.filters ?? null

  if (filters === null) {
    return 0
  }

  return Object
    .values(filters)
    .filter(value => value !== null && value !== undefined && value !== '').length
})

const gridTemplateColumns = computed<string>(() => {
  return props.columns.reduce((acc, column) => {
    const colSpan = column.size ?? '1fr'
    return `${acc} ${colSpan}`
  }, '')
})

function handleSortChange(sortChangeEvent: SortChangeEvent): void {
  props.pagination.handleSortChange(sortChangeEvent)
}

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

function onClearFilters(): void {
  emit('clearFilters')
}

async function onDataChange(): Promise<void> {
  await nextTick()
  setIsHorizontallyScrollable()
  setIsVerticallyScrollable()
}

watch(() => props.data, () => {
  void onDataChange()
})

onMounted(() => {
  if (tableRef.value === null) {
    throw new Error('Table ref is null')
  }

  resizeObserver = createResizeObserver(tableRef.value, handleResize)
  setIsHorizontallyScrollable()
  setIsVerticallyScrollable()

  // Find a better way to handle this
  setTimeout(() => {
    handleResize()
  }, 100)
})

onBeforeUnmount(() => {
  resizeObserver?.unobserve(tableRef.value as Element)
})
</script>

<template>
  <div class="flex h-full flex-1 flex-col overflow-hidden rounded-xl border border-solid border-border">
    <AppTableTop
      :title="props.title"
      :is-loading="props.isLoading"
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
        :grid-template-columns="gridTemplateColumns"
        :has-reached-horizontal-scroll-end="hasReachedHorizontalScrollEnd"
        :is-horizontally-scrollable="isHorizontallyScrollable"
        :is-loading="props.isLoading"
        :is-scrolled-to-right="isScrolledToRight"
        :pin-first-column="props.pinFirstColumn"
        :pin-last-column="props.pinLastColumn"
        :active-filter-count="activeFilterCount"
        :row-click="props.rowClick"
        :row-to="props.rowTo"
      >
        <template #empty-state>
          <slot name="empty-state" />
        </template>
      </AppTableBody>

      <div
        v-if="activeFilterCount !== 0 && !props.isLoading && props.data !== null && props.data.data.length > 0"
        class="sticky left-0 flex items-center justify-center gap-x-2 p-4"
      >
        <AppText
          variant="caption"
          class="text-muted-foreground"
        >
          {{ t('components.table.results_might_be_hidden_because_of_active_filters', { count: activeFilterCount }) }}
        </AppText>

        <AppButton
          size="xs"
          icon-right="close"
          variant="secondary"
          @click="onClearFilters"
        >
          {{ t('components.table.clear_filters') }}
        </AppButton>
      </div>
    </div>

    <AppTableFooter
      :pagination-options="props.pagination.paginationOptions.value"
      :total="props.data?.total ?? null"
      :is-loading="props.isLoading"
      @page="handlePageChange"
    />
  </div>
</template>
