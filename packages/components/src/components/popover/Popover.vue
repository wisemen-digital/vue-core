<script setup lang="ts">
import {
  PopoverArrow,
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
} from 'reka-ui'
import { computed, useAttrs } from 'vue'

import { injectConfigContext } from '@/components/config-provider/config.context'
import type { PopoverProps } from '@/components/popover/popover.props'
import { usePopoverStyle } from '@/components/popover/popover.style'
import PopoverTrigger from '@/components/popover/PopoverTrigger.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { ThemeUtil } from '@/utils/theme.util'

const props = withDefaults(defineProps<PopoverProps>(), {
  testId: null,
  isArrowHidden: false,
  popoverAlign: 'center',
  popoverCollisionPaddingInPx: 10,
  popoverContainerElement: null,
  popoverOffsetInPx: 10,
  popoverSide: 'bottom',
  popoverWidth: null,
  styleConfig: null,
})

const isOpen = defineModel<boolean>('isOpen', {
  default: false,
  required: false,
})

const attrs = useAttrs()

const themeProviderContext = injectThemeProviderContext()
const configContext = injectConfigContext()

const popoverStyle = usePopoverStyle()

const contentClasses = computed<string>(() => popoverStyle.content({
  width: props.popoverWidth ?? '',
}))
const arrowBoxClasses = computed<string>(() => popoverStyle.arrowBox())
const arrowClasses = computed<string>(() => popoverStyle.arrow())
</script>

<template>
  <PopoverRoot v-model:open="isOpen">
    <!-- It's possible to use either the default slot with an own implementation of the trigger or the named slot -->
    <!-- If the default slot is used, the trigger should be wrapped in `PopoverTrigger` -->
    <!-- The reason both options are possible is because in some cases `PopoverAnchor`
         is used for custom positioning -->
    <slot>
      <PopoverTrigger>
        <slot name="trigger" />
      </PopoverTrigger>
    </slot>

    <PopoverPortal :to="configContext.teleportTargetSelector">
      <PopoverContent
        v-bind="attrs"
        :align="props.popoverAlign"
        :side="props.popoverSide"
        :data-test-id="props.testId"
        :side-offset="props.popoverOffsetInPx"
        :hide-when-detached="true"
        :class="[
          contentClasses,
          ThemeUtil.getClasses(themeProviderContext.theme.value, themeProviderContext.darkModeValue.value),
        ]"
        :style="props.styleConfig"
        :collision-boundary="props.popoverContainerElement"
        :collision-padding="props.popoverCollisionPaddingInPx"
        sticky="always"
        position="popper"
        class="popover-default"
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
