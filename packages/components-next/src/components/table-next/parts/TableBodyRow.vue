<script setup lang="ts">
import { mergeClasses } from '@/class-variant/customClassVariants'
import Subgrid from '@/components/table/parts/Subgrid.vue'
import { useInjectTableContext } from '@/components/table-next/table.context'

const {
  classConfig,
  customClassConfig,
  style,
} = useInjectTableContext()
</script>

<template>
  <Subgrid
    :class="style.row({
      class: mergeClasses(classConfig?.row, customClassConfig?.row),
    })"
    role="row"
  >
    <slot />
  </Subgrid>
</template>
