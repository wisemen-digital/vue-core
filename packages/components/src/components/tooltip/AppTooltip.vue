<script setup lang="ts">
import { TooltipPortal, TooltipTrigger } from 'radix-vue'
import { useSlots } from 'vue'

import AppText from '../text/AppText.vue'
import AppTooltipContent from './AppTooltipContent.vue'
import AppTooltipProvider from './AppTooltipProvider.vue'

const props = withDefaults(
  defineProps<{
    /**
     * The alignment of the tooltip content.
     * @default 'center'
     */
    align?: 'center' | 'end' | 'start'
    /**
     * The content to show in the tooltip.
     * @default null
     */
    content?: null | string
    /**
     * The duration in milliseconds to wait before showing the tooltip.
     * @default 0
     */
    delayDuration?: number
    /**
     * When true, clicking on trigger will not close the content.
     * @default false
     */
    disableCloseOnTriggerClick?: boolean
    /**
     * When true, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.
     * @default false
     */
    disableHoverableContent?: boolean
    /**
     * When true, the arrow will be hidden.
     * @default false
     */
    hideArrow?: boolean
    /**
     * When true, the tooltip will be hidden.
     * @default false
     */
    isHidden?: boolean
    /**
     * The offset of the tooltip content.
     * @default 10
     */
    offset?: number
    /**
     * The side of the trigger the tooltip should be on.
     * @default 'top'
     */
    side?: 'bottom' | 'left' | 'right' | 'top'
  }>(),
  {
    align: 'center',
    content: null,
    delayDuration: 0,
    disableCloseOnTriggerClick: false,
    disableHoverableContent: false,
    hideArrow: false,
    isHidden: false,
    offset: 10,
    side: 'top',
  },
)

const slots = useSlots()

if (props.content === null && slots.content === undefined) {
  throw new Error('[TOOLTIP] Either the `content` prop or `content` slot must be provided.')
}
</script>

<template>
  <AppTooltipProvider
    :delay-duration="props.delayDuration"
    :disable-close-on-trigger-click="props.disableCloseOnTriggerClick"
    :disable-hoverable-content="props.disableHoverableContent"
  >
    <TooltipTrigger :as-child="true">
      <slot />
    </TooltipTrigger>

    <TooltipPortal>
      <AppTooltipContent
        v-if="!props.isHidden"
        :align="props.align"
        :has-arrow="!props.hideArrow"
        :offset="props.offset"
        :side="props.side"
      >
        <slot name="content">
          <AppText
            class="max-w-xs px-3 py-1.5 text-center text-sm text-popover-foreground"
            variant="subtext"
          >
            {{ props.content }}
          </AppText>
        </slot>
      </AppTooltipContent>
    </TooltipPortal>
  </AppTooltipProvider>
</template>
