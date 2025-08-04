<script setup lang="ts">
import {
  onMounted,
  ref,
} from 'vue'

import { useInjectTableContext } from '@/components/table-next/table.context'

const {
  gridTemplateColumnsClass, setTableScrollContainerRef,
} = useInjectTableContext()

const tableScrollContainerRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (tableScrollContainerRef.value === null) {
    throw new Error('tableScrollContainerRef is null')
  }

  setTableScrollContainerRef(tableScrollContainerRef.value)
})
</script>

<template>
  <div
    ref="tableScrollContainerRef"
    :class="gridTemplateColumnsClass"
    class="grid overflow-auto"
  >
    <slot />
  </div>
</template>
