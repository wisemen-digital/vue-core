<script setup lang="ts">
interface Props {
  indicatorColor?: string
  indicatorTop: number
  timeLabel: string
}

withDefaults(defineProps<Props>(), {
  indicatorColor: '#ef4444',
})
</script>

<template>
  <div
    :style="{
      top: `${indicatorTop - 12}px`,
      backgroundColor: indicatorColor,
    }"
    class="
      absolute right-0 z-20 rounded-md px-2 py-1 text-xs font-medium text-white
    "
  >
    {{ timeLabel }}
  </div>
</template>
