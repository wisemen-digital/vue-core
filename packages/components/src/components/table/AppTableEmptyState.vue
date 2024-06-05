<script setup lang="ts">
import AppSkeletonLoaderRow from '@/components/skeleton-loader/AppSkeletonLoaderRow.vue'

const props = defineProps<{
  hasReachedHorizontalScrollEnd: boolean
  isScrolledToRight: boolean
  activeFilterCount: number
  columnCount: number
  shouldPinFirstColumn: boolean
  shouldPinLastColumn: boolean
}>()
</script>

<template>
  <div
    :style="{
      gridColumn: '1 / -1',
    }"
    class="relative grid h-full grid-cols-subgrid"
  >
    <div
      v-for="i in 7"
      :key="i"
      :style="{
        gridColumn: '1 / -1',
      }"
      class="grid grid-cols-subgrid"
    >
      <div
        v-for="columnIndex of props.columnCount"
        :key="columnIndex"
        :class="{
          'first:sticky first:left-0 first:z-10 first:border-r first:border-solid first:border-r-transparent first:bg-background group-hover:bg-muted-background group-focus:bg-muted-background': shouldPinFirstColumn,
          'bg-background last:sticky last:right-0 last:z-10 last:border-l last:border-solid last:border-l-transparent group-hover:bg-muted-background group-focus:bg-muted-background': shouldPinLastColumn,
          'first:!border-r-border': props.isScrolledToRight && props.shouldPinFirstColumn,
          'last:!border-l-border': !props.hasReachedHorizontalScrollEnd && props.shouldPinLastColumn,
        }"
        class="px-6 py-4"
      >
        <AppSkeletonLoaderRow />
      </div>
    </div>

    <div class="absolute left-0 top-0 z-10 size-full bg-gradient-to-b from-transparent to-background" />
  </div>
</template>
