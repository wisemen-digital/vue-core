<script setup lang="ts">
import { computed } from 'vue'

import IconButton from '@/components/button/icon-button/IconButton.vue'
import { injectTableContext } from '@/components/table/table.context'
import type { Icon } from '@/icons/icons'
import type {
  PaginationOptions,
  PaginationSortOrder,
  SortChangeEvent,
} from '@/types/pagination.type'
import type { TableColumn } from '@/types/table.type'

const props = defineProps<{
  column: TableColumn<any>
}>()

const tableContext = injectTableContext()

const paginationOptions = computed<PaginationOptions<unknown>>(
  () => tableContext.pagination.value.paginationOptions.value,
)

const currentSortDirection = computed<PaginationSortOrder | null>(() => {
  return getCurrentSortDirection(paginationOptions.value.sort?.direction ?? null)
})

const isCurrentColumnBeingSorted = computed<boolean>(() => {
  return props.column.key === paginationOptions.value.sort?.key
})

const sortIcon = computed<Icon | null>(() => {
  if (!props.column.isSortable) {
    return null
  }

  if (!isCurrentColumnBeingSorted.value) {
    return 'switchVertical'
  }

  if (currentSortDirection.value === 'asc') {
    return 'arrowUp'
  }

  return 'arrowDown'
})

const ariaSort = computed<'ascending' | 'descending' | 'none'>(() => {
  if (!props.column.isSortable || !isCurrentColumnBeingSorted.value) {
    return 'none'
  }

  if (currentSortDirection.value === 'asc') {
    return 'ascending'
  }

  return 'descending'
})

function getCurrentSortDirection(currentDirection: PaginationSortOrder | null): PaginationSortOrder {
  return currentDirection ?? 'asc'
}

function handleSortChange(): void {
  // If the column is already sorted
  //    - If the current sort direction is 'asc', change it to 'desc'
  if (isCurrentColumnBeingSorted.value && currentSortDirection.value === 'asc') {
    tableContext.pagination.value.handleSortChange({
      direction: 'desc',
      key: props.column.key,
    })

    return
  }
  //    - If the current sort direction is 'desc', remove the sort
  if (isCurrentColumnBeingSorted.value && currentSortDirection.value === 'desc') {
    tableContext.pagination.value.handleSortChange({} as SortChangeEvent)

    return
  }

  // If column is not already sorted, sort it and set the current sort direction to 'asc'
  tableContext.pagination.value.handleSortChange({
    direction: 'asc',
    key: props.column.key,
  })
}
</script>

<template>
  <div
    :aria-sort="ariaSort"
    role="columnheader"
    class="px-3xl py-lg flex h-full items-center"
  >
    <slot name="left" />

    <label class="flex items-center gap-x-2">
      <span class="text-(size:--table-header-label-font-size-default) font-(--table-header-label-font-weight-default) text-(color:--table-header-label-text-color-default) select-none whitespace-nowrap">
        <slot name="label">
          {{ props.column.headerLabel }}
        </slot>
      </span>

      <IconButton
        v-if="sortIcon !== null"
        :icon="sortIcon"
        :style-config="{
          '--icon-button-size-default': '20px',
          '--icon-button-icon-size-default': '14px',
          '--icon-button-border-radius-default': 'var(--radius-sm)',
          '--icon-button-bg-color-default': 'transparent',
          '--icon-button-border-color-default': 'transparent',
          '--icon-button-border-color-hover': 'transparent',
          '--icon-button-border-color-focus': 'transparent',
          '--icon-button-border-color-active': 'transparent',
        }"
        size="sm"
        variant="tertiary"
        label="Sort"
        @click="handleSortChange"
      />
    </label>

    <slot name="right" />
  </div>
</template>
