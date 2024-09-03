<script setup lang="ts">
import { TooltipPortal, TooltipTrigger } from 'radix-vue'
import { computed } from 'vue'

import AppText from '@/components/text/AppText.vue'
import AppTooltipContent from '@/components/tooltip/AppTooltipContent.vue'
import AppTooltipProvider from '@/components/tooltip/AppTooltipProvider.vue'
import { useTooltipStyle } from '@/components/tooltip/tooltip.style'

const props = withDefaults(
  defineProps<{
    /**
     * When true, the tooltip will be hidden.
     * @default false
     */
    isHidden?: boolean
    /**
     * The alignment of the tooltip content.
     * @default 'center'
     */
    align?: 'center' | 'end' | 'start'
    /**
     * The element to render the tooltip in. By default this is the viewport
     */
    containerElement?: HTMLElement | null
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
    isHidden: false,
    align: 'center',
    containerElement: null,
    content: null,
    delayDuration: 0,
    disableCloseOnTriggerClick: false,
    disableHoverableContent: false,
    hideArrow: false,
    offset: 10,
    side: 'top',
  },
)

defineSlots<{
  /** Override the content of the tooltip */
  content: () => void
  /** Trigger element for the toolip */
  default: () => void
}>()

const tooltipStyle = useTooltipStyle()

const contentTextClasses = computed<string>(() => tooltipStyle.contentText())
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
        :container-element="props.containerElement"
      >
        <slot name="content">
          <AppText
            :class="contentTextClasses"
            variant="subtext"
          >
            {{ props.content }}
          </AppText>
        </slot>
      </AppTooltipContent>
    </TooltipPortal>
  </AppTooltipProvider>
</template>
