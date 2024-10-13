<script setup lang="ts">
const props = withDefaults(defineProps<{
  /**
   * The animation delay in milliseconds
   * @default 0
   */
  animationDelayInMs?: number
  /**
   * Whether the skeleton item should shimmer
   * @default false
   */
  shouldShimmer?: boolean
}>(), {
  animationDelayInMs: 0,
  shouldShimmer: false,
})
</script>

<template>
  <div
    :aria-busy="true"
    class="relative overflow-hidden rounded bg-tertiary"
    role="status"
    aria-live="polite"
  >
    <div
      v-if="props.shouldShimmer"
      :style="{
        animationDelay: `${props.animationDelayInMs}ms`,
      }"
      class="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent dark:via-black/30"
    />
  </div>
</template>
