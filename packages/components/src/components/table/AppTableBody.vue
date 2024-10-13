<script setup lang="ts">
import { injectTableContext } from '@/components/table/table.context.js'

const tableContext = injectTableContext()
</script>

<template>
  <div
    role="rowgroup"
    class="col-span-full grid grid-cols-subgrid"
  >
    <div
      v-for="(row, rowIndex) of tableContext.data.value!.data"
      :key="rowIndex"
      role="row"
      class="col-span-full grid grid-cols-subgrid"
    >
      <div
        v-for="column of tableContext.columns.value"
        :key="column.key"
        :data-test-id="column.testId"
        :class="[
          tableContext.rowClass.value?.(row) ?? null,
          {
            'first:sticky first:left-0 first:z-10 first:border-r first:border-solid': tableContext.isFirstColumnSticky.value,
            'last:sticky last:right-0 last:z-10 last:border-l last:border-solid': tableContext.isLastColumnSticky.value,
            'first:border-r-secondary first:shadow-table-sticky-left-column': tableContext.isScrolledToRight.value && tableContext.isFirstColumnSticky.value,
            'last:border-l-secondary last:shadow-table-sticky-right-column': !tableContext.hasReachedHorizontalScrollEnd.value && tableContext.isLastColumnSticky.value,
            'border-b-secondary': rowIndex !== tableContext.data.value!.data.length - 1,
          },
        ]"
        role="cell"
        class="overflow-hidden border border-solid border-transparent bg-primary duration-200"
      >
        <Component :is="column.cell(row)" />
      </div>
    </div>
  </div>
</template>
