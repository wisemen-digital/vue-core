<script setup lang="ts">
import AppSkeletonItem from '@/components/skeleton/AppSkeletonItem.vue'
import AppTableCell from '@/components/table/AppTableCell.vue'
import AppTableHeader from '@/components/table/AppTableHeader.vue'
import { injectTableContext } from '@/components/table/table.context.js'
import { NumberUtil } from '@/utils/number.util.js'

const tableContext = injectTableContext()
</script>

<template>
  <div
    :style="{
      gridTemplateColumns: tableContext.gridColsStyle.value,
    }"
    class="relative grid overflow-hidden"
  >
    <AppTableHeader :are-sticky-columns-disabled="true" />

    <div
      v-for="rowIndex in tableContext.pagination.value.paginationOptions.value.pagination.perPage"
      :key="rowIndex"
    >
      <div
        v-for="(column, columnIndex) of tableContext.columns.value"
        :key="column.key"
      >
        <AppTableCell>
          <Component
            :is="column.skeleton"
            v-if="column.skeleton !== undefined"
          />

          <AppSkeletonItem
            v-else
            :should-shimmer="true"
            :animation-delay-in-ms="columnIndex * 0.2"
            :style="{
              width: `${NumberUtil.generateRandomNumber(80, 100)}%`,
            }"
            class="my-1 h-4 min-w-4 rounded-md"
          />
        </AppTableCell>
      </div>
    </div>
  </div>
</template>
