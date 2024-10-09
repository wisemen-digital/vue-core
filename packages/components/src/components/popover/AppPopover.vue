<script setup lang="ts">
import {
  PopoverArrow,
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger,
} from 'reka-ui'
import {
  computed,
  useSlots,
} from 'vue'

import {
  type AppPopoverProps,
  appPopoverPropsDefaultValues,
} from '@/components/popover/popover.props'
import { popoverStyle } from '@/components/popover/popover.style.js'

const props = withDefaults(defineProps<AppPopoverProps>(), appPopoverPropsDefaultValues)

const isOpen = defineModel<boolean>('isOpen', {
  default: false,
  required: false,
})

const slots = useSlots()
const style = popoverStyle()

// if (slots.default === undefined) {
//   throw new Error('[POPOVER] The `trigger` slot is required.')
// }

const contentClasses = computed<string>(() => style.content())
const arrowBoxClasses = computed<string>(() => style.arrowBox())
const arrowClasses = computed<string>(() => style.arrow())
</script>

<template>
  <PopoverRoot v-model:open="isOpen">
    <!-- It's possible to use either the default slot with an own implementation of the trigger or the named slot -->
    <!-- If the default slot is used, the trigger should be wrapped in `AppPopoverTrigger` -->
    <!-- The reason both options are possible is because in some cases `AppPopoverAnchor`
         is used for custom positioning
    -->
    <slot>
      <PopoverTrigger :as-child="true">
        <slot name="trigger" />
      </PopoverTrigger>
    </slot>

    <PopoverPortal>
      <PopoverContent
        :align="props.align"
        :side="props.side"
        :side-offset="props.offsetInPx"
        :class="[
          {
            'w-[--reka-popover-trigger-width]': props.popoverWidth === 'anchor-width',
            'w-[--reka-popover-content-available-width]': props.popoverWidth === 'available-width',
          },
          contentClasses,
        ]"
        :style="props.styleConfig"
        :collision-boundary="props.containerElement"
        :collision-padding="props.collisionPaddingInPx"
      >
        <!-- Without this relative div, the arrow is a bit glitchy -->
        <div class="relative size-full">
          <!-- Since we can't apply `overflow-hidden` on the parent div, we need another wrapper -->
          <div class="relative size-full overflow-hidden">
            <slot name="content" />
          </div>

          <PopoverArrow
            v-if="!props.isArrowHidden"
            :as-child="true"
          >
            <div :class="arrowBoxClasses">
              <div :class="arrowClasses" />
            </div>
          </PopoverArrow>
        </div>
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>
