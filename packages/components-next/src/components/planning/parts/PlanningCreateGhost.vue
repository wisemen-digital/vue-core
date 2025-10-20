<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  day: string
  height: number
  top: number
}

const props = defineProps<Props>()

const ghostStyle = computed<Record<string, string>>(() => ({
  height: `${props.height}px`,
  top: `${props.top}px`,
}))
</script>

<template>
  <div
    :style="ghostStyle"
    class="
      pointer-events-none absolute right-0 left-0 z-40 rounded border-2
      border-dashed border-blue-400 bg-blue-100 p-1 text-xs opacity-50
    "
  />
</template>
