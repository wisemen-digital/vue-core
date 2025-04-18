<script setup lang="ts">
import { computed } from 'vue'

import { mergeClasses } from '@/class-variant/customClassVariants'
import Button from '@/components/button/default-button/Button.vue'
import TableCellLayout from '@/components/table/parts/TableCellLayout.vue'
import { useInjectTableContext } from '@/components/table/table.context'
import { useInjectTableHeaderCellContext } from '@/components/table/tableHeaderCell.context'
import type {
  PaginationOptions,
  PaginationSortOrder,
} from '@/composables/pagination/pagination.type'
import type { Icon } from '@/icons/icons'

const {
  classConfig,
  customClassConfig,
  pagination,
  style,
} = useInjectTableContext()

const { column } = useInjectTableHeaderCellContext()

const paginationOptions = computed<PaginationOptions<any>>(
  () => pagination.value.paginationOptions.value,
)

const currentSortDirection = computed<PaginationSortOrder | null>(() => {
  return getCurrentSortDirection(paginationOptions.value.sort?.order ?? null)
})

const isCurrentColumnBeingSorted = computed<boolean>(() => {
  return column.value.key === paginationOptions.value.sort?.key
})

const sortIcon = computed<Icon | null>(() => {
  if (!column.value.isSortable) {
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
  if (!column.value.isSortable || !isCurrentColumnBeingSorted.value) {
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

function onSortChange(): void {
  // If the column is already sorted
  //    - If the current sort direction is 'asc', change it to 'desc'
  if (isCurrentColumnBeingSorted.value && currentSortDirection.value === 'asc') {
    pagination.value.handleSortChange({
      key: column.value.key as never,
      order: 'desc',
    })

    return
  }
  //    - If the current sort direction is 'desc', remove the sort
  if (isCurrentColumnBeingSorted.value && currentSortDirection.value === 'desc') {
    pagination.value.handleSortChange({} as never)

    return
  }

  // If column is not already sorted, sort it and set the current sort direction to 'asc'
  pagination.value.handleSortChange({
    key: column.value.key as never,
    order: 'asc',
  })
}
</script>

<template>
  <TableCellLayout
    :column="column"
    :class="style.headerCell({
      class: mergeClasses(classConfig?.headerCell, customClassConfig?.headerCell),
    })"
    :aria-sort="ariaSort"
    role="columnheader"
    class="sticky"
  >
    <div>
      <slot name="left" />

      <Button
        :class-config="{
          root: 'p-0 px-0 h-auto !bg-transparent min-w-auto rounded-sm !text-secondary',
          iconRight: isCurrentColumnBeingSorted ? 'text-secondary' : 'text-disabled',
          ...customClassConfig?.headerCellButton,
          ...classConfig?.headerCellButton,
        }"
        :icon-right="sortIcon"
        :is-disabled="!column.isSortable"
        variant="tertiary"
        @click="onSortChange"
      >
        {{ column.headerLabel }}
      </Button>

      <slot name="right" />
    </div>
  </TablecellLayout>
</template>
