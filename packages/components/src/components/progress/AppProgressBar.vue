<script setup lang="ts">
import {
  ProgressIndicator,
  ProgressRoot,
} from 'radix-vue'
import {
  computed,
  defineProps,
  ref,
  watch,
} from 'vue'

import { useProgressBarStyle } from '@/components/progress/progress.style'

type ProgressBarColor = 'destructive'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warn'
  | undefined

const props = withDefaults(
  defineProps<{
    color: ProgressBarColor

    maxValue: number

    minValue: number

    percentagePosition: string

    showPercentage: boolean

    transitionDuration: number

    useAutoColor: boolean

    value: number

  }>(),
  {
    color: 'primary',
    maxValue: 100,
    minValue: 0,
    percentagePosition: 'outside',
    showPercentage: false,
    transitionDuration: 10,
    useAutoColor: false,
    value: 0,
  },
)

const progress = ref<number>(props.value)
const progressStyle = useProgressBarStyle()

const progressContainerClass = computed<string>(() => progressStyle.container())
const percentageInside = computed<string>(() => progressStyle.percentageInside())
const percentageOutside = computed<string>(() => progressStyle.percentageOutside())

const progressPercentage = computed<number>(() => {
  const max = props.maxValue
  const min = props.minValue
  const value = Math.max(min, Math.min(progress.value, max))

  if (max === min) {
    return 0
  }

  return ((value - min) / (max - min)) * 100
})

const progressBarColorClass = computed<string>(() => {
  const color = props.useAutoColor
    ? (progressPercentage.value >= 80 ? 'success' : progressPercentage.value >= 50 ? 'warn' : 'destructive')
    : (props.color ?? 'primary')

  return progressStyle.progressIndicator({
    color,
  })
})

watch(() => props.value, (newValue) => {
  progress.value = Math.max(props.minValue, Math.min(newValue, props.maxValue))
})
</script>

<template>
  <ProgressRoot
    v-model="progress"
    :class="[progressContainerClass, percentageInside]"
    style="transform: translateZ(0)"
  >
    <ProgressIndicator

      :style="`transform: translateX(-${100 - progressPercentage}%)`"
      :class="`${progressBarColorClass} transition ease-in duration-${props.transitionDuration} `"
    />
    <span
      v-if="props.showPercentage && props.percentagePosition === 'inside'"
      :style="percentageInside"
      class="z-10 text-white mix-blend-difference"
    >
      {{ `${progressPercentage.toFixed(2)}%` }}
    </span>
  </ProgressRoot>
  <span
    v-if="props.showPercentage && props.percentagePosition === 'outside'"
    :style="percentageOutside"
  >
    {{ `${progressPercentage.toFixed(2)}%` }}
  </span>
</template>
