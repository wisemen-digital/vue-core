<script setup lang="ts">
import { useInjectTableContext } from '@/components/table-next/table.context'

const {
  gridTemplateColumns,
} = useInjectTableContext()
</script>

<template>
  <div
    :style="{
      gridTemplateColumns,
    }"
    class="grid"
  >
    <slot />
  </div>
</template>
