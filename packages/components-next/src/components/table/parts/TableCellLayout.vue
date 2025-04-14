<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { computed } from 'vue'

import { useInjectTableContext } from '@/components/table/table.context'
import type { TableColumn } from '@/components/table/table.type'

const props = defineProps<{
  column: TableColumn<any>
}>()

const {
  hasReachedHorizontalEnd,
  isFirstColumnSticky,
  isLastColumnSticky,
  isScrolledHorizontally,
  columns,
} = useInjectTableContext()

const columnIndex = computed<number>(() => (
  columns.value.findIndex((column) => column.key === props.column.key)
))

const isFirstColumn = computed<boolean>(() => (
  columnIndex.value === 0
))

const isLastColumn = computed<boolean>(() => (
  columnIndex.value === columns.value.length - 1
))
</script>

<template>
  <Primitive
    :class="[
      {
        'sticky z-4': (isFirstColumn && isFirstColumnSticky) || (isLastColumn && isLastColumnSticky),
        'left-0 border-r': isFirstColumn && isFirstColumnSticky,
        'right-0 border-l': isLastColumn && isLastColumnSticky,
      },
      isFirstColumn && isFirstColumnSticky && isScrolledHorizontally
        ? 'border-r-secondary'
        : 'border-r-transparent',
      isLastColumn && isLastColumnSticky && hasReachedHorizontalEnd
        ? 'border-l-transparent'
        : 'border-l-secondary',
    ]"
    class="relative duration-200"
  >
    <slot />
  </Primitive>
</template>
