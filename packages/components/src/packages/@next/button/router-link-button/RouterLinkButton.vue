<script setup lang="ts">
import {
  AnimatePresence,
  Motion,
  MotionConfig,
} from 'motion-v'

import RouterLinkButtonIconLeft from '@/packages/@next/button/router-link-button/parts/RouterLinkButtonIconLeft.vue'
import RouterLinkButtonIconRight from '@/packages/@next/button/router-link-button/parts/RouterLinkButtonIconRight.vue'
import RouterLinkButtonLabel from '@/packages/@next/button/router-link-button/parts/RouterLinkButtonLabel.vue'
import RouterLinkButtonRoot from '@/packages/@next/button/router-link-button/parts/RouterLinkButtonRoot.vue'
import type { RouterLinkButtonProps } from '@/packages/@next/button/router-link-button/routerLinkButton.props'
import AnimateSize from '@/packages/@next/shared/AnimateSize.vue'

const props = defineProps<RouterLinkButtonProps>()

defineSlots<{
  /**
   * Slot to override the default left-side icon of the button.
   */
  'icon-left': () => void
  /**
   * Slot to override the default right-side icon of the button.
   */
  'icon-right': () => void
  /**
   * Slot for the button's label.
   */
  'label': () => void
  /**
   * Slot to override the default loading indicator.
   */
  'loader': () => void
}>()
</script>

<template>
  <RouterLinkButtonRoot v-bind="props">
    <MotionConfig
      :transition="{
        duration: 0.4,
        type: 'spring',
        bounce: 0,
      }"
    >
      <AnimateSize>
        <AnimatePresence mode="popLayout">
          <Motion
            v-if="props.iconLeft !== null"
            :initial="{ opacity: 0, scale: 0.8 }"
            :animate="{ opacity: 1, scale: 1 }"
            :exit="{ opacity: 0, scale: 0.8 }"
          >
            <slot name="icon-left">
              <RouterLinkButtonIconLeft />
            </slot>
          </Motion>
        </AnimatePresence>
      </AnimateSize>

      <slot name="label">
        <RouterLinkButtonLabel />
      </slot>

      <slot name="icon-right">
        <RouterLinkButtonIconRight />
      </slot>
    </MotionConfig>
  </RouterLinkButtonRoot>
</template>
