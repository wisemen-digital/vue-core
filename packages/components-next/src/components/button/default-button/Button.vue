<script setup lang="ts">
import {
  AnimatePresence,
  Motion,
  MotionConfig,
} from 'motion-v'

import type { ButtonProps } from '@/components/button/default-button/button.props'
import ButtonIconLeft from '@/components/button/default-button/parts/ButtonIconLeft.vue'
import ButtonIconRight from '@/components/button/default-button/parts/ButtonIconRight.vue'
import ButtonLabel from '@/components/button/default-button/parts/ButtonLabel.vue'
import ButtonLoader from '@/components/button/default-button/parts/ButtonLoader.vue'
import ButtonRoot from '@/components/button/default-button/parts/ButtonRoot.vue'
import type { ButtonEmits } from '@/components/button/shared/sharedButton.props'
import AnimateSize from '@/components/shared/AnimateSize.vue'

const props = defineProps<ButtonProps>()

const emit = defineEmits<ButtonEmits>()

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
   *  Slot to override the label of the button.
   */
  'label': () => void
  /**
   * Slot to override the default loading indicator.
   */
  'loader': () => void
}>()
</script>

<template>
  <ButtonRoot
    v-bind="props"
    @click="emit('click', $event)"
  >
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
            v-if="props.isLoading"
            :initial="{ opacity: 0, scale: 0.75 }"
            :animate="{ opacity: 1, scale: 1 }"
            :exit="{ opacity: 0, scale: 0.75 }"
          >
            <slot name="loader">
              <ButtonLoader />
            </slot>
          </Motion>

          <Motion
            v-else
            :initial="{ opacity: 0, scale: 0.75 }"
            :animate="{ opacity: 1, scale: 1 }"
            :exit="{ opacity: 0, scale: 0.75 }"
          >
            <slot name="icon-left">
              <ButtonIconLeft />
            </slot>
          </Motion>
        </AnimatePresence>
      </AnimateSize>

      <slot name="label">
        <ButtonLabel />
      </slot>

      <AnimateSize>
        <AnimatePresence mode="popLayout">
          <Motion
            v-if="!props.isLoading"
            :initial="{ opacity: 0, scale: 0.75 }"
            :animate="{ opacity: 1, scale: 1 }"
            :exit="{ opacity: 0, scale: 0.75 }"
          >
            <slot name="icon-right">
              <ButtonIconRight />
            </slot>
          </Motion>
        </AnimatePresence>
      </AnimateSize>
    </MotionConfig>
  </ButtonRoot>
</template>
