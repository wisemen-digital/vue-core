<script setup lang="ts">
import {
  type Component,
  computed,
  ref,
} from 'vue'

import { injectTableContext } from '@/components/table/table.context.js'
import { provideTableRowContext } from '@/components/table/tableRow.context.js'

const props = defineProps<{
  row: unknown
  rowIndex: number
}>()

const tableContext = injectTableContext()

const isExpanded = ref<boolean>(false)

const expandableComponent = computed<Component | null>(() => {
  if (tableContext.expandedRowContent.value === null) {
    return null
  }

  return tableContext.expandedRowContent.value(props.row)
})

provideTableRowContext({
  isExpanded,
})
</script>

<template>
  <div class="col-span-full grid grid-cols-subgrid">
    <div
      role="row"
      class="col-span-full grid grid-cols-subgrid"
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
            'first:border-r-secondary first:shadow-table-sticky-left-column': tableContext.isScrolledToRight.value && tableContext.isFirstColumnSticky.value,
            'last:border-l-secondary last:shadow-table-sticky-right-column': !tableContext.hasReachedHorizontalScrollEnd.value && tableContext.isLastColumnSticky.value,
            'border-b-secondary': props.rowIndex !== tableContext.data.value!.data.length - 1,
          },
        ]"
        role="cell"
        class="overflow-hidden border border-solid border-transparent bg-primary duration-200"
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
      <AppCollapsable>
        <div v-if="expandableComponent !== null && isExpanded">
          <Component :is="expandableComponent" />
        </div>
      </AppCollapsable>
    </div> -->
  </div>
</template>
