<script setup lang="ts">
import {
  PopoverArrow,
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger,
} from 'radix-vue'
import { useSlots } from 'vue'

import AppPopoverCloseButton from './AppPopoverCloseButton.vue'

const props = withDefaults(
  defineProps<{
    /**
     * The alignment of the popover content.
     * @default 'center'
     */
    align?: 'center' | 'end' | 'start'
    /**
     * When true, the arrow will be hidden.
     * @default false
     */
    hideArrow?: boolean
    /**
     * The offset of the popover content.
     * @default 10
     */
    offset?: number
    /**
     * The side of the trigger the popover should be on.
     * @default 'top'
     */
    side?: 'bottom' | 'left' | 'right' | 'top'
  }>(),
  {
    align: 'center',
    hideArrow: false,
    offset: 10,
    side: 'top',
  },
)

defineSlots<{
  /**
   * (Required) The content to show in the tooltip.
   */
  content: () => unknown
  /**
   * (Required) The trigger element. But be a single, interactive element.
   */
  default: () => unknown
}>()

const slots = useSlots()

if (slots.default === undefined) {
  throw new Error('[POPOVER] The `trigger` slot is required.')
}
</script>

<template>
  <PopoverRoot>
    <PopoverTrigger :as-child="true">
      <slot />
    </PopoverTrigger>

    <PopoverPortal>
      <!-- eslint-disable tailwindcss/no-custom-classname -->
      <PopoverContent
        :align="props.align"
        :has-arrow="!props.hideArrow"
        :side="props.side"
        :side-offset="props.offset"
        class="popover-content rounded-popover bg-popover shadow-popover-shadow"
      >
        <!-- eslint-enable tailwindcss/no-custom-classname -->
        <AppPopoverCloseButton class="!absolute right-0 top-0" />

        <slot name="content" />

        <PopoverArrow
          v-if="!props.hideArrow"
          :as-child="true"
        >
          <div class="relative z-popover -mb-4 h-4 w-10 overflow-hidden">
            <div
              class="absolute left-1/2 size-4 -translate-x-1/2 -translate-y-3 rotate-45 rounded-sm bg-popover shadow-popover-shadow"
            />
          </div>
        </PopoverArrow>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
