<script setup lang="ts">
import { RouterLink } from 'vue-router'

import { mergeClasses } from '@/class-variant/customClassVariants'
import Subgrid from '@/components/table/parts/Subgrid.vue'
import { useInjectTableContext } from '@/components/table-next/table.context'
import type { TableRowAction } from '@/components/table-next/table.type'

const props = withDefaults(defineProps<{
  action?: TableRowAction | null
}>(), {
  action: null,
})

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
    <RouterLink
      v-if="props.action?.type === 'link'"
      :to="props.action.to"
      class="absolute inset-0 z-2 cursor-pointer outline-none"
    />

    <button
      v-if="props.action?.type === 'button'"
      class="absolute inset-0 z-2 cursor-pointer outline-none"
      @click="props.action.onClick()"
    />

    <slot />
  </Subgrid>
</template>
