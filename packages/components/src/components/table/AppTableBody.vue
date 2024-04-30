<script setup lang="ts" generic="TSchema">
import {
  type Component,
  computed,
  h,
} from 'vue'
import type { RouteLocationNamedRaw } from 'vue-router'
import { RouterLink } from 'vue-router'

import AppTableTextCell from '@/components/table/AppTableTextCell.vue'
import type { TableColumn } from '@/types/table.type'

const props = defineProps<{
  hasActiveFilters: boolean
  hasReachedHorizontalScrollEnd: boolean
  isScrolledToRight: boolean
  canScrollVertically: boolean
  columns: TableColumn<TSchema>[]
  data: TSchema[]
  rowClick: ((row: TSchema) => void) | null
  rowTo: ((row: TSchema) => RouteLocationNamedRaw) | null
  shouldPinFirstColumn: boolean
  shouldPinLastColumn: boolean
}>()

const rowComponent = computed<Component | string | typeof RouterLink>(() => {
  if (props.rowClick !== null) {
    return h('button', {
      type: 'button',
    })
  }

  if (props.rowTo !== null) {
    return RouterLink
  }

  return 'div'
})

function onRowClick(row: TSchema): void {
  if (props.rowClick !== null) {
    props.rowClick (row)
  }
}
</script>

<template>
  <Component
    :is="rowComponent"
    v-for="(row, i) of data"
    :key="i"
    :to="props.rowTo ? props.rowTo(row) : undefined"
    :class="{
      'last:border-0': canScrollVertically && !hasActiveFilters,
    }"
    :style="{
      gridColumn: '1 / -1',
    }"
    class="group grid grid-cols-subgrid items-center border-b border-solid border-border outline-none hover:bg-muted-background focus:bg-muted-background"
    @click="onRowClick(row)"
  >
    <div
      v-for="column of columns"
      :key="column.id"
      :class="{
        'first:sticky first:left-0 first:z-10 first:border-r first:border-solid first:border-r-transparent first:bg-background group-hover:bg-muted-background group-focus:bg-muted-background': shouldPinFirstColumn,
        'bg-background last:sticky last:right-0 last:z-10 last:border-l last:border-solid last:border-l-transparent group-hover:bg-muted-background group-focus:bg-muted-background': shouldPinLastColumn,
        'first:!border-r-border': props.isScrolledToRight && props.shouldPinFirstColumn,
        'last:!border-l-border': !props.hasReachedHorizontalScrollEnd && props.shouldPinLastColumn,
      }"
      class="relative flex h-full items-center px-6 py-4 text-left"
    >
      <Component
        :is="column.render(row)"
        v-if="column.render !== undefined"
      />

      <AppTableTextCell v-else>
        {{ column.value(row) }}
      </AppTableTextCell>
    </div>
  </Component>
</template>
