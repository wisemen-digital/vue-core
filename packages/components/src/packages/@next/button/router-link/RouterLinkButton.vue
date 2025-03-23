<script setup lang="ts">
import RouterLinkButtonContentContainer from '@/packages/@next/button/router-link/parts/RouterLinkButtonContentContainer.vue'
import RouterLinkButtonIconLeft from '@/packages/@next/button/router-link/parts/RouterLinkButtonIconLeft.vue'
import RouterLinkButtonIconRight from '@/packages/@next/button/router-link/parts/RouterLinkButtonIconRight.vue'
import RouterLinkButtonRoot from '@/packages/@next/button/router-link/parts/RouterLinkButtonRoot.vue'
import type { RouterLinkButtonProps } from '@/packages/@next/button/router-link/routerLinkbutton.props'

const props = defineProps<RouterLinkButtonProps>()

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
  <RouterLinkButtonRoot v-bind="props">
    <RouterLinkButtonContentContainer>
      <slot name="icon-left">
        <RouterLinkButtonIconLeft />
      </slot>

      <slot name="default" />

      <slot name="icon-right">
        <RouterLinkButtonIconRight />
      </slot>
    </RouterLinkButtonContentContainer>
  </RouterLinkButtonRoot>
</template>
