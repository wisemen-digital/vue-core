<script setup lang="ts">
import AppTableHeaderCell from '@/components/table/AppTableHeaderCell.vue'
import { injectTableContext } from '@/components/table/table.context'

const props = withDefaults(defineProps<{
  areStickyColumnsDisabled?: boolean
}>(), {
  areStickyColumnsDisabled: false,
})

const tableContext = injectTableContext()
</script>

<template>
  <div
    class="sticky top-0 z-20 col-span-full grid h-11 grid-cols-subgrid border-b border-solid border-secondary"
    role="row"
  >
    <div
      v-for="column of tableContext.columns.value"
      :key="column.key"
      :class="{
        'first:sticky first:left-0 first:z-10 first:border-r first:border-solid first:border-transparent': tableContext.isFirstColumnSticky.value && !props.areStickyColumnsDisabled,
        'last:sticky last:right-0 last:z-10 last:border-l last:border-solid last:border-transparent': tableContext.isLastColumnSticky.value && !props.areStickyColumnsDisabled,
        'first:border-r-secondary first:shadow-table-sticky-left-column': tableContext.isScrolledToRight.value && tableContext.isFirstColumnSticky.value,
        'last:border-l-secondary last:shadow-table-sticky-right-column': !tableContext.hasReachedHorizontalScrollEnd.value && tableContext.isLastColumnSticky.value,
      }"
      role="rowgroup"
      class="overflow-hidden bg-table-header-bg-color-default duration-200"
    >
      <Component
        :is="column.header(column)"
        v-if="column.header !== undefined"
      />

      <AppTableHeaderCell
        v-else
        :column="column"
      />
    </div>
  </div>
</template>
