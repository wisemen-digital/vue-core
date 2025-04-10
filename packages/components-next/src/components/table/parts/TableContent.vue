<script setup lang="ts">
import { useInjectTableContext } from '@/components/table/table.context'

const {
  isEmpty,
  isLoading,
  gridTemplateColumns,
} = useInjectTableContext()
</script>

<template>
  <div
    :style="{ gridTemplateColumns }"
    class="grid"
  >
    <slot v-if="!isEmpty && !isLoading" />
  </div>
</template>
