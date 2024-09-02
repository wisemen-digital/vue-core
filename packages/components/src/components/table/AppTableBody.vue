<script setup lang="ts" generic="TSchema">
import {
  type Component,
  computed,
  h,
  ref,
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
  expandedContent: ((row: TSchema) => Component) | null
  rowClick: ((row: TSchema) => void) | null
  rowTarget?: string
  rowTo: ((row: TSchema) => RouteLocationNamedRaw) | null
  shouldPinFirstColumn: boolean
  shouldPinLastColumn: boolean
}>()

const expandedRows = ref<number[]>([])

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

function onRowClick(row: TSchema, rowId: number): void {
  if (props.rowClick !== null) {
    props.rowClick(row)
  }

  toggleRow(row, rowId)
}

function toggleRow(row: TSchema, rowId: number): void {
  if (props.expandedContent === null || props.expandedContent(row) === null) {
    return
  }

  if (!expandedRows.value.includes(rowId)) {
    expandedRows.value = [
      ...expandedRows.value,
      rowId,
    ]

    return
  }

  expandedRows.value = expandedRows.value.filter((id) => id !== rowId)
}
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
    @click="onRowClick(row, i)"
  >
    <div
      v-for="column of columns"
      :key="column.id"
      :data-testid="column.testId"
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

    <div
      v-if="expandedRows.includes(i) && props.expandedContent !== null"
      :class="bodyColumnClasses"
      class="col-span-full"
    >
      <Component
        :is="props.expandedContent(row)"
      />
    </div>
  </Component>
</template>
