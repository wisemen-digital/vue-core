<script setup lang="ts">
import { useInjectTableContext } from '@/components/table/table.context'
import { mergeClasses } from '@/customClassVariants'

const props = withDefaults(defineProps<{
  /**
   * When set to true, the cell will have the primary text color to make it stand out
   * @default false
   */
  isPrimaryCell?: boolean
}>(), {
  isInteractive: false,
  isPrimaryCell: false,
})

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectTableContext()
</script>

<template>
  <div
    :data-primary-cell="props.isPrimaryCell || undefined"
    :class="style.cell({
      class: mergeClasses(classConfig?.cell, customClassConfig?.cell),
    })"
    role="cell"
  >
    <slot />
  </div>
</template>
