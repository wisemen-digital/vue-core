<script setup lang="ts">
import {
  PopoverArrow,
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger,
} from 'reka-ui'
import { computed } from 'vue'

import type { AppPopoverProps } from '@/components/popover/popover.props'
import { popoverStyle } from '@/components/popover/popover.style.js'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'

const props = withDefaults(defineProps<AppPopoverProps>(), {
  testId: null,
  isArrowHidden: false,
  align: 'center',
  collisionPaddingInPx: 10,
  containerElement: null,
  offsetInPx: 10,
  popoverWidth: null,
  side: 'bottom',
  styleConfig: null,
})

const isOpen = defineModel<boolean>('isOpen', {
  default: false,
  required: false,
})

const themeContext = injectThemeProviderContext()

const style = popoverStyle()

const contentClasses = computed<string>(() => style.content())
const arrowBoxClasses = computed<string>(() => style.arrowBox())
const arrowClasses = computed<string>(() => style.arrow())
</script>

<template>
  <PopoverRoot v-model:open="isOpen">
    <!-- It's possible to use either the default slot with an own implementation of the trigger or the named slot -->
    <!-- If the default slot is used, the trigger should be wrapped in `AppPopoverTrigger` -->
    <!-- The reason both options are possible is because in some cases `AppPopoverAnchor`
         is used for custom positioning -->
    <slot>
      <PopoverTrigger :as-child="true">
        <slot name="trigger" />
      </PopoverTrigger>
    </slot>

    <PopoverPortal>
      <PopoverContent
        :align="props.align"
        :side="props.side"
        :data-test-id="props.testId"
        :side-offset="props.offsetInPx"
        :hide-when-detached="true"
        :class="[
          {
            'w-[--reka-popover-trigger-width]': props.popoverWidth === 'anchor-width',
            'w-[--reka-popover-content-available-width]': props.popoverWidth === 'available-width',
          },
          contentClasses,
          themeContext.theme.value,
        ]"
        :style="props.styleConfig"
        :collision-boundary="props.containerElement"
        :collision-padding="props.collisionPaddingInPx"
        sticky="always"
        position="popper"
        class="popover-variant-default"
      >
        <!-- Without this relative div, the arrow is a bit glitchy -->
        <div class="relative size-full">
          <!-- Since we can't apply `overflow-hidden` on the parent div, we need another wrapper -->
          <div class="relative size-full overflow-hidden rounded-popover-border-radius-default">
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
