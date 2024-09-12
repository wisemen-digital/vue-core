<script setup lang="ts">
import {
  ProgressIndicator,
  ProgressRoot,
} from 'radix-vue'
import {
  computed,
  defineProps,
} from 'vue'

import { useProgressBarStyle } from '@/components/progress-bar/progress.style'
import type { ProgressPosition } from '@/components/sonner/types'
import AppTooltip from '@/components/tooltip/AppTooltip.vue'

type ProgressBarColor = 'destructive'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warn'

type textColor = 'black' | 'white'

interface AutoColor {
  color: ProgressBarColor
  value: number
}

const props = withDefaults(
  defineProps<{
    hasTooltip: boolean

    isPercentageVisible: boolean

    autoColor?: AutoColor[]

    color: ProgressBarColor

    dynamic?: boolean

    maxValue: number

    minValue: number

    numbersAfterComma: number

    percentagePosition: ProgressPosition

    rounded?: boolean

    textColor: textColor

    transitionDuration: number

    value: number

  }>(),
  {
    hasAutoColor: false,
    hasTooltip: false,
    isPercentageVisible: false,
    color: 'primary',
    maxValue: 100,
    minValue: 0,
    numbersAfterComma: 0,
    percentagePosition: 'outside',
    rounded: true,
    transitionDuration: 10,
    value: 0,
  },
)

defineSlots<{
  /** Content of the tooltip. Only rendered if hasTooltip is true */
  tooltip: () => void
}>()

const progress = computed<number>(() => {
  return Math.max(props.minValue, Math.min(props.value, props.maxValue))
})

const progressStyle = useProgressBarStyle()

const progressContainerClass = computed<string>(() => progressStyle.container())
const percentageInside = computed<string>(() => progressStyle.percentageInside())
const percentageOutside = computed<string>(() => progressStyle.percentageOutside())
const dynamicPercentage = computed<string>(() => progressStyle.dynamicPercentage())
const progressContainerRounded = computed<string>(() => {
  return props.rounded ? 'rounded-full' : ''
})

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
    v-if="!props.hasTooltip"
    v-model="progress"
    :class="[progressContainerClass, percentageInside, progressContainerRounded]"
    style="transform: translateZ(0)"
  >
    <ProgressIndicator
      :style="{ width: `${progressPercentage}%` }"
      :class="`absolute left-0 top-0 h-full w-full ${progressContainerRounded} transition-all ${progressBarColorClass} transition ease-in duration-${props.transitionDuration} `"
    >
      <span
        v-if="props.dynamic && props.isPercentageVisible"
        :class="`${dynamicPercentage} text-${props.textColor}`"
      >{{ `${progressPercentage.toFixed(props.numbersAfterComma)}%` }}</span>
    </ProgressIndicator>
    <span
      v-if="props.isPercentageVisible && props.percentagePosition === 'inside' && !props.dynamic"
      :style="percentageInside"
      class="z-10 text-white mix-blend-difference"
    >
      {{ `${progressPercentage.toFixed(props.numbersAfterComma)}%` }}
    </span>
  </ProgressRoot>
  <span
    v-if="props.isPercentageVisible && props.percentagePosition === 'outside' && !props.dynamic"
    :style="percentageOutside"
    :class="`text-${props.textColor}`"
  >
    {{ `${progressPercentage.toFixed(props.numbersAfterComma)}%` }}
  </span>

  <AppTooltip v-if="props.hasTooltip">
    <template #default>
      <ProgressRoot
        v-model="progress"
        :class="[progressContainerClass, percentageInside, progressContainerRounded]"
        style="transform: translateZ(0)"
      >
        <ProgressIndicator
          :style="{ width: `${progressPercentage}%` }"
          :class="`absolute left-0 top-0 h-full w-full ${progressContainerRounded} transition-all ${progressBarColorClass} transition ease-in duration-${props.transitionDuration} `"
        >
          <span
            v-if="props.dynamic && props.isPercentageVisible"
            :class="`${dynamicPercentage} text-${props.textColor}`"
          >{{ `${progressPercentage.toFixed(props.numbersAfterComma)}%` }}</span>
        </ProgressIndicator>
        <span
          v-if="props.isPercentageVisible && props.percentagePosition === 'inside' && !props.dynamic"
          :style="percentageInside"
          class="z-10 text-white mix-blend-difference"
        >
          {{ `${progressPercentage.toFixed(props.numbersAfterComma)}%` }}
        </span>
      </ProgressRoot>
      <span
        v-if="props.isPercentageVisible && props.percentagePosition === 'outside' && !props.dynamic"
        :style="percentageOutside"
        :class="`text-${props.textColor}`"
      >
        {{ `${progressPercentage.toFixed(props.numbersAfterComma)}%` }}
      </span>
    </template>
    <template #content>
      <slot name="tooltip" />
    </template>
  </apptooltip>
</template>
