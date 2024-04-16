<script setup lang="ts" generic="TSchema">
import type { Component } from 'vue'
import {
  computed,
  h,
} from 'vue'
import type { RouteLocationNamedRaw } from 'vue-router'
import { RouterLink } from 'vue-router'

import type { TableColumn } from '../../types/table.type'
import AppText from '../text/AppText.vue'
import AppTableSkeletonLoader from './AppTableSkeletonLoader.vue'
import AppTableTextCell from './AppTableTextCell.vue'

const props = defineProps<{
  columns: TableColumn<TSchema>[]
  data: TSchema[]
  emptyMessage: string
  gridTemplateColumns: string
  hasReachedHorizontalScrollEnd: boolean
  isHorizontallyScrollable: boolean
  isLoading: boolean
  isScrolledToRight: boolean
  isVerticallyScrollable: boolean
  pinFirstColumn: boolean
  pinLastColumn: boolean
  rowClick: ((row: TSchema) => void) | null
  rowTo: ((row: TSchema) => RouteLocationNamedRaw) | null
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

const areRowsClickable = computed<boolean>(() => props.rowClick !== null || props.rowTo !== null)
</script>

<template>
  <div class="flex size-full flex-1 flex-col">
    <AppTableSkeletonLoader v-if="props.isLoading" />

    <div
      v-else-if="props.data.length === 0 && props.emptyMessage !== null"
      class="flex h-full items-center justify-center p-4"
    >
      <AppText variant="subtext">
        {{ props.emptyMessage }}
      </AppText>
    </div>

    <Component
      :is="rowComponent"
      v-for="(row, index) in props.data"
      :key="index"
      :as="rowComponent"
      :to="props.rowTo ? props.rowTo(row) : undefined"
      :class="[
        props.isHorizontallyScrollable ? 'w-fit' : 'w-full',
        {
          'last:border-b-0': isVerticallyScrollable,
        },
      ]"
      :style="{
        gridTemplateColumns: props.gridTemplateColumns,
      }"
      class="group grid items-center rounded-none border-b border-solid border-border outline-none hover:bg-muted-background focus:bg-muted-background"
      @click="onRowClick(row)"
    >
      <div
        v-for="column in props.columns"
        :key="column.id"
        :class="[
          props.isScrolledToRight ? 'first:border-r-border' : 'first:border-r-transparent',
          props.hasReachedHorizontalScrollEnd ? 'last:border-l-transparent' : 'last:border-l-border',
          {
            'left-0 bg-background first:sticky first:z-10 first:border-r first:border-solid': props.pinFirstColumn,
          },
          {
            'right-0 bg-background last:sticky last:z-10 last:border-l last:border-solid':
              props.pinLastColumn && props.isHorizontallyScrollable,
          },
          {
            'group-hover:bg-muted-background group-focus-visible:bg-muted-background': areRowsClickable,
          },
        ]"
        class="flex h-full items-center px-6 py-4"
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
  </div>
</template>
