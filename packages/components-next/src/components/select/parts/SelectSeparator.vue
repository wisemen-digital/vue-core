<script setup lang="ts">
import { useInjectSelectContext } from '@/components/select/select.context'
import { mergeClasses } from '@/customClassVariants'

const {
  allItems,
  classConfig,
  customClassConfig,
  filteredItems,
  style,
} = useInjectSelectContext()
</script>

<template>
  <div
    v-if="allItems.size === filteredItems.size"
    :class="style.separator({
      class: mergeClasses(customClassConfig.separator, classConfig?.separator),
    })"
    aria-hidden="true"
  />
</template>
