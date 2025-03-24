<script setup lang="ts">
import {
  AnimatePresence,
  Motion,
} from 'motion-v'

import type { IconButtonProps } from '@/packages/@next/button/icon-button/iconButton.props'
import IconButtonIcon from '@/packages/@next/button/icon-button/parts/IconButtonIcon.vue'
import IconButtonLoader from '@/packages/@next/button/icon-button/parts/IconButtonLoader.vue'
import IconButtonRoot from '@/packages/@next/button/icon-button/parts/IconButtonRoot.vue'
import type { ButtonEmits } from '@/packages/@next/button/shared/sharedButton.props'

const props = defineProps<IconButtonProps>()

const emit = defineEmits<ButtonEmits>()

defineSlots<{
  /**
   * Slot to override the icon.
   */
  icon: () => void
  /**
   * Slot to override the default loading indicator.
   */
  loader: () => void
}>()
</script>

<template>
  <IconButtonRoot
    v-bind="props"
    @click="emit('click', $event)"
  >
    <AnimatePresence
      :initial="false"
      mode="popLayout"
    >
      <Motion
        v-if="!props.isLoading"
        :initial="{ opacity: 0, scale: 0.8 }"
        :animate="{ opacity: 1, scale: 1 }"
        :exit="{ opacity: 0, scale: 0.8 }"
      >
        <slot name="icon">
          <IconButtonIcon />
        </slot>
      </Motion>

      <Motion
        v-if="props.isLoading"
        :initial="{ opacity: 0, scale: 0.8 }"
        :animate="{ opacity: 1, scale: 1 }"
        :exit="{ opacity: 0, scale: 0.8 }"
      >
        <slot name="loader">
          <IconButtonLoader />
        </slot>
      </Motion>
    </AnimatePresence>
  </IconButtonRoot>
</template>
