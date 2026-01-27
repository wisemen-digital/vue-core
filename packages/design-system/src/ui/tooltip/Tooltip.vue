<script setup lang="ts">
import {
  TooltipContent as RekaTooltipContent,
  TooltipPortal as RekaTooltipPortal,
  TooltipRoot as RekaTooltipRoot,
  TooltipTrigger as RekaTooltipTrigger,
} from 'reka-ui'

import { POPPER_PROPS_DEFAULTS } from '@/types/popper.type'
import ThemeProvider from '@/ui/theme-provider/ThemeProvider.vue'
import type { TooltipProps } from '@/ui/tooltip/tooltip.props'
import TooltipArrow from '@/ui/tooltip/TooltipArrow.vue'

const props = withDefaults(defineProps<TooltipProps>(), {
  ...POPPER_PROPS_DEFAULTS,
  isDisabled: false,
  delayDuration: 300,
  disableCloseOnTriggerClick: false,
  disableHoverableContent: false,
})

const isOpen = defineModel<boolean>('isOpen', {
  default: false,
  required: false,
})
</script>

<template>
  <RekaTooltipRoot
    v-model:open="isOpen"
    :delay-duration="props.delayDuration"
    :disable-closing-trigger="props.disableCloseOnTriggerClick"
    :disable-hoverable-content="props.disableHoverableContent"
    :disabled="props.isDisabled"
    :ignore-non-keyboard-focus="true"
  >
    <RekaTooltipTrigger
      :as-child="true"
      :reference="props.popoverAnchorReferenceElement ?? undefined"
    >
      <slot name="trigger" />
    </RekaTooltipTrigger>

    <RekaTooltipPortal to="body">
      <ThemeProvider :as-child="true">
        <RekaTooltipContent
          :align="props.popoverAlign"
          :align-offset="props.popoverAlignOffset"
          :collision-padding="props.popoverCollisionPadding"
          :collision-boundary="props.popoverContainerElement"
          :side="props.popoverSide"
          :side-offset="props.popoverSideOffset"
          :class="{
            'w-(--reka-tooltip-trigger-width)': props.popoverWidth === 'anchor-width',
            'w-(--reka-tooltip-content-available-width)': props.popoverWidth === 'available-width',
          }"
          :data-animation="props.popoverAnimationName ?? 'tooltip-default'"
          position-strategy="absolute"
          sticky="always"
          class="z-40 will-change-[transform,filter,opacity]"
        >
          <div
            class="
              relative size-full overflow-hidden rounded-sm border
              border-secondary bg-primary shadow-lg
            "
          >
            <slot name="content" />
          </div>

          <TooltipArrow v-if="props.isPopoverArrowVisible" />
        </RekaTooltipContent>
      </ThemeProvider>
    </RekaTooltipPortal>
  </RekaTooltipRoot>
</template>

<style>
@keyframes tooltipFadeIn {
  from {
    opacity: 0;
    filter: blur(2px);
  }
}

@keyframes tooltipFadeOut {
  to {
    opacity: 0;
    filter: blur(2px);
  }
}

[data-animation='tooltip-default'][data-state='delayed-open'] {
  animation: tooltipFadeIn 150ms ease-in-out;
}

[data-animation='tooltip-default'][data-state='closed'] {
  animation: tooltipFadeOut 150ms ease-in-out;
}
</style>
