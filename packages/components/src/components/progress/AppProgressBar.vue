<script setup lang="ts">
import {
  ProgressIndicator,
  ProgressRoot,
} from 'radix-vue'
import {
  computed,
  defineProps,
} from 'vue'

import { useProgressBarStyle } from '@/components/progress/progress.style'
import type { ProgressPosition } from '@/components/sonner/types'

type ProgressBarColor = 'destructive'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warn'

interface AutoColor {
  color: ProgressBarColor
  value: number
}

const props = withDefaults(
  defineProps<{
    isPercentageVisible: boolean

    autoColor?: AutoColor[]

    color: ProgressBarColor

    maxValue: number

    minValue: number

    percentagePosition: ProgressPosition

    tooltip: boolean

    transitionDuration: number

    value: number

  }>(),
  {
    hasAutoColor: false,
    isPercentageVisible: false,
    color: 'primary',
    maxValue: 100,
    minValue: 0,
    percentagePosition: 'outside',
    tooltip: false,
    transitionDuration: 10,
    value: 0,
  },
)

const progress = computed<number>(() => {
  return Math.max(props.minValue, Math.min(props.value, props.maxValue))
})

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
  if (props.autoColor !== undefined && props.autoColor.length > 0) {
    const autoColor = props.autoColor.find((color) => progressPercentage.value >= color.value)

    return progressStyle.progressIndicator({
      color: autoColor?.color ?? 'primary',
    })
  }

  return progressStyle.progressIndicator({
    color: props.color,
  })
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
      :class="`absolute left-0 top-0 h-full rounded-full transition-all ${progressBarColorClass} transition ease-in duration-${props.transitionDuration} `"
    />
    <span
      v-if="props.isPercentageVisible && props.percentagePosition === 'inside'"
      :style="percentageInside"
      class="z-10 text-white mix-blend-difference"
    >
      {{ `${progressPercentage.toFixed(2)}%` }}
    </span>
  </ProgressRoot>
  <span
    v-if="props.isPercentageVisible && props.percentagePosition === 'outside'"
    :style="percentageOutside"
  >
    {{ `${progressPercentage.toFixed(2)}%` }}
  </span>
</template>
