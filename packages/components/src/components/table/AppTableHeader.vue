<script setup lang="ts" generic="TSchema, TFilters">
import { computed } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
import {
  type TableStyleProps,
  useTableStyle,
} from '@/components/table/table.style'
import AppText from '@/components/text/AppText.vue'
import type { Icon } from '@/icons/icons'
import type {
  PaginationOptions,
  SortChangeEvent,
  SortDirection,
} from '@/types/pagination.type'
import type { TableColumn } from '@/types/table.type'

const props = defineProps<{
  hasReachedHorizontalScrollEnd: boolean
  isScrolledToRight: boolean
  columns: TableColumn<TSchema>[]
  paginationOptions: PaginationOptions<TFilters>
  shouldPinFirstColumn: boolean
  shouldPinLastColumn: boolean
  variant: TableStyleProps['variant']
}>()

const emit = defineEmits<{
  sort: [event: SortChangeEvent]
}>()

const currentSortDirection = computed<SortDirection>(() => {
  return getCurrentSortDirection(props.paginationOptions.sort?.direction ?? null)
})

function getCurrentSortDirection(currentDirection: SortDirection | null): SortDirection {
  return currentDirection ?? 'asc'
}

function toggleSortDirection(direction: SortDirection): SortDirection {
  return direction === 'asc' ? 'desc' : 'asc'
}

function isColumnSorted(columnId: string): boolean {
  return props.paginationOptions.sort?.key === columnId
}

function handleSortChange(columnId: string): void {
  const isSameColumn = isColumnSorted(columnId)

  let direction = getCurrentSortDirection(props.paginationOptions.sort?.direction ?? null)

  if (shouldRemoveSort(isSameColumn, direction)) {
    removeSort()

    return
  }

  if (isSameColumn) {
    direction = toggleSortDirection(direction)
  }
  else {
    direction = 'asc'
  }

  updateSort(columnId, direction)
}

function shouldRemoveSort(isSameColumn: boolean, direction: 'asc' | 'desc'): boolean {
  return isSameColumn && direction === 'desc'
}

function removeSort(): void {
  const updatedSort = {} as SortChangeEvent

  emit('sort', updatedSort)
}

function updateSort(columnId: string, direction: 'asc' | 'desc'): void {
  emit('sort', {
    direction,
    key: columnId,
  })
}

function getComponent(isSortable: boolean): string {
  return isSortable ? 'button' : 'AppText'
}

function handleSortColumnButtonClick(column: TableColumn<TSchema>): void {
  const isSortable = column.isSortable ?? false

  if (!isSortable) {
    return
  }

  handleSortChange(column.id)
}

function getColumnIcon(columnId: string): Icon {
  const isColumnCurrentlySorted = isColumnSorted(columnId)

  if (isColumnCurrentlySorted && currentSortDirection.value === 'asc') {
    return 'arrowUp'
  }

  if (isColumnCurrentlySorted && currentSortDirection.value === 'desc') {
    return 'arrowDown'
  }

  return 'arrowUpDown'
}

const hasRightBorder = computed<boolean>(() => props.isScrolledToRight && props.shouldPinFirstColumn)
const hasLeftBorder = computed<boolean>(() => !props.hasReachedHorizontalScrollEnd && props.shouldPinLastColumn)
const tableStyle = useTableStyle()

const headerContainerClasses = computed<string>(() => tableStyle.headerContainer({
  variant: props.variant,
}))
const headerColumnClasses = computed<string>(() => tableStyle.headerColumn({
  hasLeftBorder: hasLeftBorder.value,
  hasRightBorder: hasRightBorder.value,
  shouldPinFirstColumn: props.shouldPinFirstColumn,
  shouldPinLastColumn: props.shouldPinLastColumn,
}))
const headerTextClasses = computed<string>(() => tableStyle.headerText())
</script>

<template>
  <div
    :style="{
      gridColumn: '1 / -1',
    }"
    :class="headerContainerClasses"
  >
    <Component
      :is="getComponent(column.isSortable ?? false)"
      v-for="column in props.columns"
      :key="column.id"
      :class="headerColumnClasses"
      @click="handleSortColumnButtonClick(column)"
    >
      <AppText
        :class="headerTextClasses"
        variant="subtext"
      >
        {{ column.label }}
      </AppText>

      <AppIcon
        v-if="column.isSortable ?? false"
        :class="tableStyle.headerIcon({ isColumnSorted: isColumnSorted(column.id) })"
        :icon="getColumnIcon(column.id)"
        size="sm"
      />
    </Component>
  </div>
</template>
