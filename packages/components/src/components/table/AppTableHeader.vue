<script setup lang="ts" generic="TSchema">
import { computed } from 'vue'

import AppIcon from '@/components/icon/AppIcon.vue'
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
  paginationOptions: PaginationOptions<unknown>
  shouldPinFirstColumn: boolean
  shouldPinLastColumn: boolean
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
    return 'arrowDown'
  }

  if (isColumnCurrentlySorted && currentSortDirection.value === 'desc') {
    return 'arrowUp'
  }

  return 'arrowUpDown'
}
</script>

<template>
  <div
    :style="{
      gridColumn: '1 / -1',
    }"
    class="sticky top-0 z-20 grid min-w-full grid-cols-subgrid border-b border-solid border-border bg-muted-background"
  >
    <Component
      :is="getComponent(column.isSortable ?? false)"
      v-for="column in props.columns"
      :key="column.id"
      :class="{
        'first:sticky first:left-0 first:z-10 first:border-r first:border-solid first:border-r-transparent': props.shouldPinFirstColumn,
        'last:sticky last:right-0 last:z-10 last:border-l last:border-solid last:border-l-transparent': props.shouldPinLastColumn,
        'first:!border-r-border': props.isScrolledToRight && props.shouldPinFirstColumn,
        'last:!border-l-border': !props.hasReachedHorizontalScrollEnd && props.shouldPinLastColumn,
      }"
      class="group relative flex items-center gap-x-2 bg-muted-background px-6 py-3 text-left outline-none focus-visible:bg-neutral-100"
      @click="handleSortColumnButtonClick(column)"
    >
      <AppText
        class="truncate"
        variant="subtext"
      >
        {{ column.label }}
      </AppText>

      <AppIcon
        v-if="column.isSortable ?? false"
        :class="[
          isColumnSorted(column.id)
            ? 'text-foreground'
            : 'text-muted-foreground/50 group-hover:text-foreground group-focus-visible:text-foreground',
        ]"
        :icon="getColumnIcon(column.id)"
        class="duration-200"
        size="sm"
      />
    </Component>
  </div>
</template>
