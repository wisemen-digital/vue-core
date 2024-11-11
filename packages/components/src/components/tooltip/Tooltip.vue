<script setup lang="ts">
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
} from 'reka-ui'
import { computed } from 'vue'

import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import type { TooltipProps } from '@/components/tooltip/tooltip.props'
import { tooltipStyle } from '@/components/tooltip/tooltip.style'
import TooltipTrigger from '@/components/tooltip/TooltipTrigger.vue'

const props = withDefaults(defineProps<TooltipProps>(), {
  isArrowHidden: false,
  isHidden: false,
  delayDuration: 0,
  disableCloseOnTriggerClick: false,
  disableHoverableContent: false,
  popoverAlign: 'center',
  popoverCollisionPaddingInPx: 10,
  popoverContainerElement: null,
  popoverOffsetInPx: 10,
  popoverSide: 'bottom',
  popoverWidth: null,
  styleConfig: null,
})

const themeProviderContext = injectThemeProviderContext()

const style = tooltipStyle()

const contentClasses = computed<string>(() => style.content())
const arrowBoxClasses = computed<string>(() => style.arrowBox())
const arrowClasses = computed<string>(() => style.arrow())
</script>

<template>
  <TooltipProvider>
    <TooltipRoot
      :delay-duration="props.delayDuration"
      :disable-closing-trigger="props.disableCloseOnTriggerClick"
      :disable-hoverable-content="props.disableHoverableContent"
    >
      <slot>
        <TooltipTrigger>
          <slot name="trigger" />
        </TooltipTrigger>
      </slot>

      <TooltipPortal>
        <TooltipContent
          v-if="!props.isHidden"
          :class="[
            {
              'w-[--reka-tooltip-trigger-width]': props.popoverWidth === 'anchor-width',
              'w-[--reka-tooltip-content-available-width]': props.popoverWidth === 'available-width',
            },
            contentClasses,
            themeProviderContext.theme.value,
          ]"
          :style="props.styleConfig"
          :collision-boundary="props.popoverContainerElement"
          :collision-padding="props.popoverCollisionPaddingInPx"
          :side="props.popoverSide"
          :side-offset="props.popoverOffsetInPx"
          :align="props.popoverAlign"
          :hide-when-detached="true"
          sticky="always"
          class="tooltip-default"
          position="popper"
        >
          <!-- Without this relative div, the arrow is a bit glitchy -->
          <div class="relative size-full">
            <!-- Since we can't ly `overflow-hidden` on the parent div, we need another wrer -->
            <div class="relative size-full overflow-hidden">
              <slot name="content" />
            </div>

            <TooltipArrow
              v-if="!props.isArrowHidden"
              :as-child="true"
            >
              <div :class="arrowBoxClasses">
                <div :class="arrowClasses" />
              </div>
            </TooltipArrow>
          </div>
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>
