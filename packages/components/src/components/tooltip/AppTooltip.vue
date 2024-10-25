<script setup lang="ts">
import {
  TooltipArrow,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from 'reka-ui'
import { computed } from 'vue'

import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import type { AppTooltipProps } from '@/components/tooltip/tooltip.props'
import { tooltipStyle } from '@/components/tooltip/tooltip.style'

const props = withDefaults(defineProps<AppTooltipProps>(), {
  isArrowHidden: false,
  isHidden: false,
  align: 'center',
  collisionPaddingInPx: 10,
  containerElement: null,
  delayDuration: 0,
  disableCloseOnTriggerClick: false,
  disableHoverableContent: false,
  offsetInPx: 10,
  popoverWidth: null,
  side: 'bottom',
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
      <TooltipTrigger :as-child="true">
        <slot name="trigger" />
      </TooltipTrigger>

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
          :collision-boundary="props.containerElement"
          :collision-padding="props.collisionPaddingInPx"
          :side="props.side"
          :side-offset="props.offsetInPx"
          :align="props.align"
          :hide-when-detached="true"
          sticky="always"
          class="tooltip-variant-default"
          position="popper"
        >
          <!-- Without this relative div, the arrow is a bit glitchy -->
          <div class="relative size-full">
            <!-- Since we can't apply `overflow-hidden` on the parent div, we need another wrapper -->
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
