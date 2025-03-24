<script setup lang="ts">
import {
  TooltipProvider as RekaTooltipProvider,
  TooltipRoot as RekaTooltipRoot,
} from 'reka-ui'
import { computed } from 'vue'

import { useComponentClassConfig } from '@/customClassVariants'
import {
  type CreateTooltipStyle,
  createTooltipStyle,
} from '@/packages/@next/tooltip/style/tooltip.style'
import { useProvideTooltipContext } from '@/packages/@next/tooltip/tooltip.context'
import type { TooltipProps } from '@/packages/@next/tooltip/tooltip.props'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<TooltipProps>(), {
  id: null,
  testId: null,
  isArrowHidden: false,
  isHidden: false,
  classConfig: null,
  closeOnTriggerClick: false,
  delayDuration: 200,
  disableHoverableContent: false,
  popoverAlign: 'center',
  popoverCollisionPaddingInPx: 10,
  popoverContainerElement: null,
  popoverOffsetInPx: 10,
  popoverSide: 'top',
  popoverWidth: null,
})

const isOpen = defineModel<boolean>('isOpen', {
  default: false,
  required: false,
})

const tooltipStyle = computed<CreateTooltipStyle>(() => createTooltipStyle({}))

const customClassConfig = useComponentClassConfig('tooltip', {})

useProvideTooltipContext({
  ...toComputedRefs(props),
  isOpen: computed<boolean>(() => isOpen.value),
  customClassConfig,
  style: tooltipStyle,
})
</script>

<template>
  <RekaTooltipProvider>
    <RekaTooltipRoot
      v-model:open="isOpen"
      :delay-duration="props.delayDuration"
      :disable-hoverable-content="props.disableHoverableContent"
      :disable-closing-trigger="props.disableCloseOnTriggerClick"
      :disabled="props.isHidden"
      :ignore-non-keyboard-focus="true"
    >
      <slot />
    </RekaTooltipRoot>
  </RekaTooltipProvider>
</template>
