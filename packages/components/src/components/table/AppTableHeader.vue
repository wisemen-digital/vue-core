<script setup lang="ts" generic="TSchema">
import { computed } from 'vue'

import type { Icon } from '../../icons/icons'
import type {
  PaginationOptions,
  SortChangeEvent,
  SortDirection,
  TableColumn,
} from '../../types/table.type'
import AppIcon from '../icon/AppIcon.vue'
import AppText from '../text/AppText.vue'

const props = defineProps<{
  columns: TableColumn<TSchema>[]
  gridTemplateColumns: string
  hasReachedHorizontalScrollEnd: boolean
  isHorizontallyScrollable: boolean
  isScrolledToRight: boolean
  paginationOptions: PaginationOptions<unknown>
  pinFirstColumn: boolean
  pinLastColumn: boolean
}>()

const emit = defineEmits<{
  sort: [event: SortChangeEvent]
}>()

const currentSortDirection = computed<SortDirection>(() => {
  const { sort } = props.paginationOptions

  const columnId = Object.keys(sort ?? {})[0]

  return getCurrentSortDirection(sort ?? null, columnId)
})

function getCurrentSortDirection(sort: SortChangeEvent | null, columnId: string): SortDirection {
  return sort?.[columnId] ?? 'asc'
}

function toggleSortDirection(direction: SortDirection): SortDirection {
  return direction === 'asc' ? 'desc' : 'asc'
}

function isColumnSorted(columnId: string): boolean {
  const isSameColumn = Object.keys(props.paginationOptions.sort ?? {})[0] === columnId

  return isSameColumn
}

function handleSortChange(columnId: string): void {
  const isSameColumn = isColumnSorted(columnId)

  let direction = getCurrentSortDirection(props.paginationOptions.sort ?? null, columnId)

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
  const updatedSort = {
    [columnId]: direction,
  } as SortChangeEvent

  emit('sort', updatedSort)
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
</script>

<template>
  <div
    :class="[props.isHorizontallyScrollable ? 'w-fit' : 'w-full']"
    :style="{
      gridTemplateColumns: props.gridTemplateColumns,
    }"
    class="sticky top-0 z-20 grid border-y border-solid border-border bg-muted-background"
  >
    <Component
      :is="getComponent(column.isSortable ?? false)"
      v-for="column in columns"
      :key="column.id"
      :class="[
        isScrolledToRight ? 'first:border-r-border' : 'first:border-r-transparent',
        hasReachedHorizontalScrollEnd ? 'last:border-l-transparent' : 'last:border-l-border',
        {
          'left-0 bg-muted-background first:sticky first:z-10 first:border-r first:border-solid': props.pinFirstColumn,
        },
        {
          'right-0 bg-muted-background last:sticky last:z-10 last:border-l last:border-solid':
            props.pinLastColumn && props.isHorizontallyScrollable,
        },
      ]"
      class="group flex items-center gap-x-2 rounded-none px-6 py-3 outline-none focus-visible:bg-neutral-100"
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
