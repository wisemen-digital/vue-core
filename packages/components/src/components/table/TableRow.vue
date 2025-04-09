<script setup lang="ts">
import type { Component } from 'vue'
import {
  computed,
  ref,
} from 'vue'

import { injectTableContext } from '@/components/table/table.context'
import { provideTableRowContext } from '@/components/table/tableRow.context'

const props = defineProps<{
  row: unknown
  rowIndex: number
}>()

const tableContext = injectTableContext()

const isExpanded = ref<boolean>(false)

// TODO: this is not finished yet!
const _expandableComponent = computed<Component | null>(() => {
  if (tableContext.expandedRowContent.value === null) {
    return null
  }

  return tableContext.expandedRowContent.value(props.row)
})

provideTableRowContext({ isExpanded })
</script>

<template>
  <div class="col-span-full grid grid-cols-subgrid">
    <div
      role="row"
      class="group col-span-full grid grid-cols-subgrid"
    >
      <div
        v-for="column of tableContext.columns.value"
        :key="column.key"
        :data-test-id="column.testId"
        :class="[
          tableContext.rowClass.value?.(props.row, props.rowIndex) ?? null,
          {
            'first:sticky first:left-0 first:z-10 first:border-r first:border-solid': tableContext.isFirstColumnSticky.value,
            'last:sticky last:right-0 last:z-10 last:border-l last:border-solid': tableContext.isLastColumnSticky.value,
            'first:shadow-table-sticky-left-column first:border-r-(--table-row-border-color-default)': tableContext.isScrolledToRight.value && tableContext.isFirstColumnSticky.value,
            'last:shadow-table-sticky-right-column last:border-l-(--table-row-border-color-default)': !tableContext.hasReachedHorizontalScrollEnd.value && tableContext.isLastColumnSticky.value,
            'border-b-(--table-row-border-color-default)': props.rowIndex !== tableContext.data.value!.data.length - 1 || !tableContext.canScrollVertically.value,
          },
        ]"
        role="cell"
        class="
          bg-primary overflow-hidden border border-solid border-transparent
          duration-200
        "
      >
        <Component :is="column.cell(props.row)" />
      </div>
    </div>

    <!-- TODO: this is not finished yet! -->
    <!-- <div
      :class="{
        'border-b-secondary': props.rowIndex !== tableContext.data.value!.data.length - 1,
      }"
      class="col-span-full border-b border-solid border-secondary"
    >
      <Collapsable>
        <div v-if="expandableComponent !== null && isExpanded">
          <Component :is="expandableComponent" />
        </div>
      </AppCollapsable>
    </div> -->
  </div>
</template>
