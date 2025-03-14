<script setup lang="ts">
import type { IconButtonProps } from '@/packages/@next/button/icon/iconButton.props'
import IconButtonContentContainer from '@/packages/@next/button/icon/parts/IconButtonContentContainer.vue'
import IconButtonIcon from '@/packages/@next/button/icon/parts/IconButtonIcon.vue'
import IconButtonLoader from '@/packages/@next/button/icon/parts/IconButtonLoader.vue'
import IconButtonRoot from '@/packages/@next/button/icon/parts/IconButtonRoot.vue'
import type { ButtonEmits } from '@/packages/@next/button/shared/sharedButton.props'

const props = withDefaults(defineProps<IconButtonProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isLoading: false,
  classConfig: null,
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
  <IconButtonRoot
    v-bind="props"
    @click="emit('click', $event)"
  >
    <IconButtonContentContainer>
      <IconButtonIcon />
    </IconButtonContentContainer>

    <slot name="loader">
      <IconButtonLoader />
    </slot>
  </IconButtonRoot>
</template>
