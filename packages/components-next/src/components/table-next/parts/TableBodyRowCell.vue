<script setup lang="ts">
import { mergeClasses } from '@/class-variant/customClassVariants'
import { useInjectTableContext } from '@/components/table-next/table.context'

const {
  hasReachedHorizontalEnd,
  isFirstColumnSticky,
  isLastColumnSticky,
  isScrolledHorizontally,
  classConfig,
  customClassConfig,
  style,
} = useInjectTableContext()
</script>

<template>
  <div
    :class="[
      style.cell({
        class: mergeClasses(classConfig?.cell, customClassConfig?.cell),
      }),
      {
        'first:sticky first:left-0 first:z-1 first:border-r': isFirstColumnSticky,
        'last:sticky last:right-0 last:z-1 last:border-l': isLastColumnSticky,
        'first:border-r-secondary': isScrolledHorizontally,
        'first:border-r-transparent': !isScrolledHorizontally,
        'last:border-l-secondary': !hasReachedHorizontalEnd,
        'last:border-l-transparent': hasReachedHorizontalEnd,
      },
    ]"
    :data-sticky="isFirstColumnSticky || isLastColumnSticky || undefined"
    role="cell"
  >
    <slot />
  </div>
</template>
