<script setup lang="ts">
import { injectTableContext } from '@/components/table/table.context'
import TableHeaderCell from '@/components/table/TableHeaderCell.vue'

const props = withDefaults(defineProps<{
  areStickyColumnsDisabled?: boolean
}>(), {
  areStickyColumnsDisabled: false,
})

const tableContext = injectTableContext()
</script>

<template>
  <div
    class="sticky top-0 z-20 col-span-full grid h-11 grid-cols-subgrid border-b border-solid border-(--table-row-border-color-default)"
    role="row"
  >
    <div
      v-for="column of tableContext.columns.value"
      :key="column.key"
      :class="{
        'first:sticky first:left-0 first:z-10 first:border-r first:border-solid first:border-transparent': tableContext.isFirstColumnSticky.value && !props.areStickyColumnsDisabled,
        'last:sticky last:right-0 last:z-10 last:border-l last:border-solid last:border-transparent': tableContext.isLastColumnSticky.value && !props.areStickyColumnsDisabled,
        'first:border-r-(--table-row-border-color-default) first:shadow-table-sticky-left-column': tableContext.isScrolledToRight.value && tableContext.isFirstColumnSticky.value,
        'last:border-l-(--table-row-border-color-default) last:shadow-table-sticky-right-column': !tableContext.hasReachedHorizontalScrollEnd.value && tableContext.isLastColumnSticky.value,
      }"
      class="overflow-hidden bg-(--table-header-bg-color-default) duration-200"
    >
      <Component
        :is="column.header(column)"
        v-if="column.header !== undefined"
      />

      <TableHeaderCell
        v-else
        :column="column"
      />
    </div>
  </div>
</template>
