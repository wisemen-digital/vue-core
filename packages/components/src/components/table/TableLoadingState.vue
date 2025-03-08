<script setup lang="ts">
import SkeletonItem from '@/components/skeleton/SkeletonItem.vue'
import { injectTableContext } from '@/components/table/table.context'
import TableCell from '@/components/table/TableCell.vue'
import TableHeader from '@/components/table/TableHeader.vue'
import { NumberUtil } from '@/utils/number.util'

const props = withDefaults(defineProps<{
  hideHeader?: boolean
}>(), {
  hideHeader: false,
})

const tableContext = injectTableContext()
</script>

<template>
  <div
    :style="{
      gridTemplateColumns: tableContext.gridColsStyle.value,
    }"
    class="relative grid overflow-hidden"
  >
    <TableHeader
      v-if="!props.hideHeader"
      :are-sticky-columns-disabled="true"
    />

    <div
      v-for="rowIndex in tableContext.pagination.value.paginationOptions.value.pagination.limit"
      :key="rowIndex"
    >
      <div
        v-for="(column, columnIndex) of tableContext.columns.value"
        :key="column.key"
      >
        <TableCell>
          <Component
            :is="column.skeleton"
            v-if="column.skeleton !== undefined"
          />

          <SkeletonItem
            v-else
            :should-shimmer="true"
            :animation-delay-in-ms="columnIndex * 0.2"
            :style="{
              width: `${NumberUtil.generateRandomNumber(80, 100)}%`,
            }"
            class="my-1 h-4 min-w-4 rounded-md"
          />
        </TableCell>
      </div>
    </div>
  </div>
</template>
