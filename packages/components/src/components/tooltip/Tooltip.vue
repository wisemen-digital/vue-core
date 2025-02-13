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
import { useTooltipStyle } from '@/components/tooltip/tooltip.style'
import TooltipTrigger from '@/components/tooltip/TooltipTrigger.vue'
import { ThemeUtil } from '@/utils/theme.util'

const props = withDefaults(defineProps<TooltipProps>(), {
  isArrowHidden: false,
  isHidden: false,
  delayDuration: 0,
  disableHoverableContent: false,
  enableCloseOnTriggerClick: false,
  popoverAlign: 'center',
  popoverCollisionPaddingInPx: 10,
  popoverContainerElement: null,
  popoverOffsetInPx: 10,
  popoverSide: 'bottom',
  popoverWidth: null,
  styleConfig: null,
})


defineSlots<{
  /**
   * The content that will trigger the tooltip.
   */
  'trigger': () => void
  /**
   * Use this to render your own trigger. Import VcTooltipTrigger for the trigger to work.
   */
  'default': () => void
  /**
   * The content to display in the tooltip.
   */
  'content': () => void
}>()

const themeProviderContext = injectThemeProviderContext()

const tooltipStyle = useTooltipStyle()

const contentClasses = computed<string>(() => tooltipStyle.content())
const arrowBoxClasses = computed<string>(() => tooltipStyle.arrowBox())
const arrowClasses = computed<string>(() => tooltipStyle.arrow())
</script>

<template>
  <TooltipProvider>
    <TooltipRoot
      :delay-duration="props.delayDuration"
      :disable-closing-trigger="!props.enableCloseOnTriggerClick"
      :disable-hoverable-content="props.disableHoverableContent"
      :ignore-non-keyboard-focus="true"
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
              'w-(--reka-tooltip-trigger-width)': props.popoverWidth === 'anchor-width',
              'w-(--reka-tooltip-content-available-width)': props.popoverWidth === 'available-width',
            },
            contentClasses,
            ThemeUtil.getClasses(themeProviderContext.theme.value, themeProviderContext.appearance.value),
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
