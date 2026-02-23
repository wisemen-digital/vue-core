<script setup lang="ts">
const props = withDefaults(defineProps<{
  /**
   * Whether the skeleton item should shimmer
   * @default false
   */
  animate?: boolean
  /**
   * The animation delay in milliseconds
   * @default 0
   */
  animationDelayInMs?: number
}>(), {
  animate: false,
  animationDelayInMs: 0,
})
</script>

<template>
  <div
    :aria-busy="true"
    class="
      relative overflow-hidden rounded-md bg-tertiary
      dark:bg-secondary
    "
    role="status"
    aria-live="polite"
  >
    <!-- eslint-disable better-tailwindcss/no-unregistered-classes -->
    <div
      v-if="props.animate"
      :style="{ animationDelay: `${props.animationDelayInMs}ms` }"
      class="shimmer absolute inset-0"
    />
  </div>
</template>

<style scoped>
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.shimmer {
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  animation: shimmer 1.5s infinite;
}
</style>
