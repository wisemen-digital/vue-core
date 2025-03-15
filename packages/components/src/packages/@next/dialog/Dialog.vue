<script setup lang="ts">
import { useAttrs } from 'vue'

import type { DialogProps } from '@/packages/@next/dialog/dialog.props'
import DialogContent from '@/packages/@next/dialog/parts/DialogContent.vue'
import DialogContentTransition from '@/packages/@next/dialog/parts/DialogContentTransition.vue'
import DialogOverlay from '@/packages/@next/dialog/parts/DialogOverlay.vue'
import DialogOverlayTransition from '@/packages/@next/dialog/parts/DialogOverlayTransition.vue'
import DialogPortal from '@/packages/@next/dialog/parts/DialogPortal.vue'
import DialogRoot from '@/packages/@next/dialog/parts/DialogRoot.vue'

const props = withDefaults(defineProps<DialogProps>(), {
  id: null,
  teleportTargetId: null,
  testId: null,
  classConfig: null,
  hideOverlay: false,
  mode: 'overlay',
  preventClickOutside: false,
  preventEsc: false,
})

const emit = defineEmits<{
  close: []
}>()

defineSlots<{
  /**
   * Slot for the main content of the dialog.
   */
  default: () => void
}>()

const isOpen = defineModel<boolean>('isOpen', {
  default: false,
})

const attrs = useAttrs()
</script>

<template>
  <DialogRoot
    v-bind="props"
    v-model:is-open="isOpen"
    @close="emit('close')"
  >
    <DialogPortal>
      <DialogOverlay>
        <DialogOverlayTransition />
      </DialogOverlay>

      <DialogContent v-bind="attrs">
        <DialogContentTransition>
          <slot />
        </DialogContentTransition>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
