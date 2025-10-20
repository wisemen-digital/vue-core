<script setup lang="ts">
interface Props {
  currentDayIndex: number
  indicatorColor?: string
  indicatorTop: number
  visibleDays: string[]
}

withDefaults(defineProps<Props>(), {
  indicatorColor: '#ef4444',
})
</script>

<template>
  <div
    v-if="currentDayIndex >= 0"
    :style="{ top: `${indicatorTop}px` }"
    class="pointer-events-none absolute z-20 w-full"
  >
    <div
      :style="{
        backgroundColor: indicatorColor,
      }"
      class="absolute h-0.5 w-full"
    />

    <div
      :style="{
        backgroundColor: indicatorColor,
        left: `${(100 / visibleDays.length) * currentDayIndex}%`,
        width: `${100 / visibleDays.length}%`,
      }"
      class="absolute mt-[-1px] h-1"
    />
  </div>
</template>
