<script setup lang="ts">
import type { ButtonProps } from '@/components/button/default-button/button.props'
import ButtonContent from '@/components/button/default-button/parts/ButtonContent.vue'
import ButtonIconLeft from '@/components/button/default-button/parts/ButtonIconLeft.vue'
import ButtonIconRight from '@/components/button/default-button/parts/ButtonIconRight.vue'
import ButtonLoader from '@/components/button/default-button/parts/ButtonLoader.vue'
import ButtonRoot from '@/components/button/default-button/parts/ButtonRoot.vue'
import type { ButtonEmits } from '@/components/button/shared/sharedButton.props'

const props = defineProps<ButtonProps>()

const emit = defineEmits<ButtonEmits>()

defineSlots<{
  /**
   *  Slot to override the main content of the button.
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
    <slot name="loader">
      <ButtonLoader />
    </slot>

    <ButtonContent>
      <slot name="icon-left">
        <ButtonIconLeft />
      </slot>

      <slot />

      <slot name="icon-right">
        <ButtonIconRight />
      </slot>
    </ButtonContent>
  </ButtonRoot>
</template>
