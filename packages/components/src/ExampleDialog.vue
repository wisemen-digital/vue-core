<script setup lang="ts">
import {
  AnimatePresence,
  Motion,
} from 'motion-v'

import DialogCloseButton from '@/packages/@next/dialog/parts/DialogCloseButton.vue'
import DialogContent from '@/packages/@next/dialog/parts/DialogContent.vue'
import DialogOverlay from '@/packages/@next/dialog/parts/DialogOverlay.vue'
import DialogOverlayTransition from '@/packages/@next/dialog/parts/DialogOverlayTransition.vue'
import DialogPortal from '@/packages/@next/dialog/parts/DialogPortal.vue'
import DialogRoot from '@/packages/@next/dialog/parts/DialogRoot.vue'

const emit = defineEmits<{
  closeDialog: []
}>()
</script>

<template>
  <DialogRoot
    :class-config="{

    }"
  >
    <DialogPortal>
      <AnimatePresence>
        <DialogContent :as-child="true">
          <Motion
            :transition="{
              duration: 0.4,
              type: 'spring',
              bounce: 0.2,
            }"
            layout-id="test"
          >
            <div class="w-80 h-40 p-xl">
              <DialogCloseButton class="absolute top-1 right-1" />
              <Motion
                :transition="{
                  duration: 0.4,
                  type: 'spring',
                  bounce: 0.2,
                }"
                layout-id="title"
                class="inline-block"
              >
                <h1 class="text-2xl font-bold">
                  Hello world
                </h1>
              </Motion>
            </div>
          </Motion>
        </DialogContent>
      </AnimatePresence>

      <DialogOverlayTransition>
        <DialogOverlay />
      </DialogOverlayTransition>
    </DialogPortal>
  </DialogRoot>
</template>
