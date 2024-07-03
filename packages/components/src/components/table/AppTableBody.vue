<script setup lang="ts" generic="TSchema">
import {
  type Component,
  computed,
  h,
} from 'vue'
import type { RouteLocationNamedRaw } from 'vue-router'
import { RouterLink } from 'vue-router'

import AppTableTextCell from '@/components/table/AppTableTextCell.vue'
import { useTableStyle } from '@/components/table/table.style'
import type { TableColumn } from '@/types/table.type'

const props = defineProps<{
  hasActiveFilters: boolean
  hasReachedHorizontalScrollEnd: boolean
  isScrolledToRight: boolean
  canScrollVertically: boolean
  columns: TableColumn<TSchema>[]
  data: TSchema[]
  rowClick: ((row: TSchema) => void) | null
  rowTarget?: string
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

const tableStyle = useTableStyle()

const hasLastBorder = computed<boolean>(() => props.canScrollVertically && !props.hasActiveFilters)
const hasRightBorder = computed<boolean>(() => props.isScrolledToRight && props.shouldPinFirstColumn)
const hasLeftBorder = computed<boolean>(() => !props.hasReachedHorizontalScrollEnd && props.shouldPinLastColumn)

const bodyColumnClasses = computed<string>(() => tableStyle.bodyColumn({
  hasLeftBorder: hasLeftBorder.value,
  hasRightBorder: hasRightBorder.value,
  shouldPinFirstColumn: props.shouldPinFirstColumn,
  shouldPinLastColumn: props.shouldPinLastColumn,
}))

const bodyContainerClasses = computed<string>(() => tableStyle.bodyContainer({
  hasLastBorder: hasLastBorder.value,
}))
</script>

<template>
  <Component
    :is="rowComponent"
    v-for="(row, i) of data"
    :key="i"
    :target="props.rowTarget"
    :to="props.rowTo ? props.rowTo(row) : undefined"
    :style="{
      gridColumn: '1 / -1',
    }"
    :class="bodyContainerClasses"
    @click="onRowClick(row)"
  >
    <div
      v-for="column of columns"
      :key="column.id"
      :class="bodyColumnClasses"
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
