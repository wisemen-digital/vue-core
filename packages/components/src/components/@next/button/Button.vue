<script setup lang="ts">
import type { ButtonEmits, ButtonProps } from '@/components/@next/button/button.props'
import ButtonContentContainer from '@/components/@next/button/parts/ButtonContentContainer.vue'
import ButtonIconLeft from '@/components/@next/button/parts/ButtonIconLeft.vue'
import ButtonIconRight from '@/components/@next/button/parts/ButtonIconRight.vue'
import ButtonLoader from '@/components/@next/button/parts/ButtonLoader.vue'
import ButtonRoot from '@/components/@next/button/parts/ButtonRoot.vue'

const props = withDefaults(defineProps<ButtonProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isLoading: false,
  classConfig: null,
  iconLeft: null,
  iconRight: null,
  size: 'md',
  type: 'button',
  variant: 'primary',
})

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
