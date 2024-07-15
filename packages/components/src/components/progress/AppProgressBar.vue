<script setup lang="ts">
import {
  computed,
  defineProps,
  withDefaults,
} from 'vue'

const props = withDefaults(
  defineProps<{
    maxValue?: number
    minValue?: number
    percentagePosition?: 'inside' | 'outside'
    progress: number
    showPercentage?: boolean
  }>(),
  {
    maxValue: 100,
    minValue: 0,
    percentage: 0,
    percentagePosition: 'outside',
    showPercentage: false,
  },
)

const progressBarColor = computed<string>(() => {
  return calculateProgressBarColor(props.progress)
})

const percentageTextColor = computed<string>(() => {
  return calculatePercentageTextColor(props.progress)
})

function calculateProgressBarColor(progress?: number): string {
  if (progress == null) {
    return 'bg-gray-200'
  }

  const normalizedProgress = Math.min(Math.max(progress, props.minValue), props.maxValue)

  if (normalizedProgress > props.maxValue * 0.8) {
    return 'bg-green-500'
  }
  else if (normalizedProgress >= props.maxValue * 0.5) {
    return 'bg-orange-500'
  }

  return 'bg-red-500'
}

function calculatePercentageTextColor(progress?: number): string {
  if (progress == null) {
    return 'text-gray-400'
  }

  const normalizedProgress = Math.min(Math.max(progress, props.minValue), props.maxValue)

  return normalizedProgress > props.maxValue * 0.5 ? 'text-black' : 'text-white'
}
</script>

<template>
  <div class="flex items-center">
    <div class="relative h-6 w-full rounded-full bg-gray-200">
      <div
        :style="{ width: `${props.percentage || 0}%` }"
        :class="[progressBarColor]"
        class="h-full rounded-full"
        Handle
        indeterminate
        progress
      >
        <span
          v-if="props.showPercentage && props.percentagePosition === 'inside'"
          :class="[percentageTextColor]"
          class="absolute inset-0 flex items-center justify-center"
        >
          {{ props.progress || 0 }} </span>
      </div>
    </div>
    <span
      v-if="props.showPercentage && props.percentagePosition === 'outside'"
      class="ml-2"
    >
      {{ props.progress || 0 }} </span>
  </div>
</template>
