<script setup lang="ts">
import { computed } from 'vue'

import AppIconButton from '@/components/button/icon-button/AppIconButton.vue'
import { injectTableContext } from '@/components/table/table.context.js'
import type { Icon } from '@/icons/icons.js'
import type {
  PaginationOptions,
  SortChangeEvent,
  SortDirection,
} from '@/types/pagination.type.js'
import type { TableColumn } from '@/types/table.type.js'

const props = defineProps<{
  column: TableColumn<any>
}>()

const tableContext = injectTableContext()

const paginationOptions = computed<PaginationOptions<unknown>>(
  () => tableContext.pagination.value.paginationOptions.value,
)

const currentSortDirection = computed<SortDirection | null>(() => {
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

function getCurrentSortDirection(currentDirection: SortDirection | null): SortDirection {
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
    class="flex h-full items-center px-3xl py-lg"
  >
    <slot name="left" />

    <label class="flex items-center gap-x-2">
      <span class="select-none whitespace-nowrap text-xs font-medium text-tertiary">
        <slot name="label">
          {{ props.column.headerLabel }}
        </slot>
      </span>

      <AppIconButton
        v-if="sortIcon !== null"
        :icon="sortIcon"
        :style-config="{
          '--icon-button-size-default': '20px',
          '--icon-button-icon-size-default': '14px',
          '--button-border-radius-default': 'var(--radius-sm)',
          '--button-bg-color-default': 'transparent',
          '--button-border-color-default': 'transparent',
          '--button-border-color-hover': 'transparent',
          '--button-border-color-focus': 'transparent',
          '--button-border-color-active': 'transparent',
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
