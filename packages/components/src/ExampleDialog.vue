<script setup lang="ts">
import {
  AnimatePresence,
  Motion,
} from 'motion-v'

import DialogCloseButton from '@/packages/@next/dialog/parts/DialogCloseButton.vue'
import DialogContent from '@/packages/@next/dialog/parts/DialogContent.vue'
import DialogDescription from '@/packages/@next/dialog/parts/DialogDescription.vue'
import DialogOverlay from '@/packages/@next/dialog/parts/DialogOverlay.vue'
import DialogOverlayTransition from '@/packages/@next/dialog/parts/DialogOverlayTransition.vue'
import DialogPortal from '@/packages/@next/dialog/parts/DialogPortal.vue'
import DialogRoot from '@/packages/@next/dialog/parts/DialogRoot.vue'
import DialogTitle from '@/packages/@next/dialog/parts/DialogTitle.vue'
</script>

<template>
  <DialogRoot
    :prevent-esc="true"
    :class-config="{
      // content: 'top-0 right-0 translate-x-0 translate-y-0 h-full left-auto',
    }"
  >
    <DialogPortal>
      <AnimatePresence>
        <DialogContent>
          <Motion
            :transition="{
              duration: 0.4,
              type: 'spring',
              bounce: 0.2,
            }"
            layout-id="test"
          >
            <div class="w-120 h-60 p-xl">
              <div class="flex items-center gap-x-md">
                <DialogCloseButton class="absolute top-1 right-1" />
              </div>

              <Motion
                :transition="{
                  duration: 0.4,
                  type: 'spring',
                  bounce: 0.2,
                }"
                layout-id="title"
                class="inline-block"
              >
                <DialogTitle>
                  <h1 class="text-display-xs font-bold">
                    Hello world
                  </h1>
                </DialogTitle>
              </Motion>

              <DialogDescription>
                <p>This is a description</p>
              </DialogDescription>
            </div>
          </Motion>
        </DialogContent>
      </AnimatePresence>

      <DialogOverlay>
        <DialogOverlayTransition />
      </DialogOverlay>
    </DialogPortal>
  </DialogRoot>
</template>
