<script setup lang="ts">
import { computed, defineProps } from 'vue'

import { useProgressBarStyle } from './progressBarStyles'

const props = defineProps<{
  percentagePosition?: 'inside' | 'outside'
  progress: number
  showPercentage?: boolean
}>()

const styles = computed(() => useProgressBarStyle({
  percentagePosition: props.percentagePosition,
  showPercentage: props.showPercentage,
}))

const progressBarColor = computed(() => {
  if (props.progress > 80) { return 'bg-green-500' }
  if (props.progress >= 50) { return 'bg-orange-500' }

  return 'bg-red-500'
})

const percentageTextColor = computed(() => {
  if (props.progress > 50) { return 'text-black' }

  return 'text-white'
})
</script>

<template>
  <div class="flex items-center">
    <div :class="styles.container">
      <div
        :style="{ width: `${progress}%` }"
        :class="progressBarColor"
      >
        <span
          v-if="showPercentage && percentagePosition === 'inside'"
          :class="percentageTextColor"
        >
          {{ progress }}%
        </span>
      </div>
    </div>
    <span
      v-if="showPercentage && percentagePosition === 'outside'"
      :class="styles.percentageOutside"
    >
      {{ progress }}%
    </span>
  </div>
</template>
