<script setup lang="ts">
import { useAttrs } from 'vue'

import DialogContent from '@/components/@next/dialog/parts/DialogContent.vue'
import DialogContentTransition from '@/components/@next/dialog/parts/DialogContentTransition.vue'
import DialogOverlay from '@/components/@next/dialog/parts/DialogOverlay.vue'
import DialogOverlayTransition from '@/components/@next/dialog/parts/DialogOverlayTransition.vue'
import DialogPortal from '@/components/@next/dialog/parts/DialogPortal.vue'
import DialogRoot from '@/components/@next/dialog/parts/DialogRoot.vue'

const isOpen = defineModel<boolean>('isOpen', {
  default: false,
})

const attrs = useAttrs()
</script>

<template>
  <DialogRoot v-model:is-open="isOpen">
    <DialogPortal>
      <DialogOverlayTransition>
        <DialogOverlay />
      </DialogOverlayTransition>

      <DialogContentTransition>
        <DialogContent v-bind="attrs">
          <slot />
        </DialogContent>
      </DialogContentTransition>
    </DialogPortal>
  </DialogRoot>
</template>
