<script setup lang="ts">
import ButtonContentContainer from '@/packages/@next/button/button/parts/ButtonContentContainer.vue'
import ButtonIconLeft from '@/packages/@next/button/button/parts/ButtonIconLeft.vue'
import ButtonIconRight from '@/packages/@next/button/button/parts/ButtonIconRight.vue'
import ButtonLoader from '@/packages/@next/button/button/parts/ButtonLoader.vue'
import ButtonRoot from '@/packages/@next/button/button/parts/ButtonRoot.vue'
import type { ButtonProps } from '@/packages/@next/button/shared/button.props'
import type { ButtonEmits } from '@/packages/@next/button/shared/sharedButton.props'

const props = defineProps<ButtonProps>()

const emit = defineEmits<ButtonEmits>()

defineSlots<{
  /**
   * Slot for the button's main content. Typically used to render the button's text.
   */
  'default': () => void

  /**
   * Slot to override the default left-side icon of the button.
   */
  'icon-left': () => void

  /**
   * Slot to override the default right-side icon of the button.
   */
  'icon-right': () => void

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
    <ButtonContentContainer>
      <slot name="icon-left">
        <ButtonIconLeft />
      </slot>

      <slot name="default" />

      <slot name="icon-right">
        <ButtonIconRight />
      </slot>
    </ButtonContentContainer>

    <slot name="loader">
      <ButtonLoader />
    </slot>
  </ButtonRoot>
</template>
