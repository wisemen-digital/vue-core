<script setup lang="ts">
import { Motion } from 'motion-v'

import DialogCloseButton from '@/components/dialog/parts/DialogCloseButton.vue'
import DialogContent from '@/components/dialog/parts/DialogContent.vue'
import DialogDescription from '@/components/dialog/parts/DialogDescription.vue'
import DialogOverlay from '@/components/dialog/parts/DialogOverlay.vue'
import DialogRoot from '@/components/dialog/parts/DialogRoot.vue'
import DialogTitle from '@/components/dialog/parts/DialogTitle.vue'
</script>

<template>
  <DialogRoot>
    <DialogContent>
      <Motion
        :transition="{
          type: 'spring',
          bounce: 0.2,
          duration: 0.6,
        }"
        layout-id="dialog-content"
      >
        <div class="p-2xl h-[90vh] max-h-60 w-[90vw] max-w-120">
          <div class="absolute top-2 right-2">
            <DialogCloseButton />
          </div>

          <Motion
            :transition="{
              type: 'spring',
              bounce: 0.2,
              duration: 0.6,
            }"
            layout-id="dialog-title"
            class="inline-block"
          >
            <DialogTitle>
              <h1 class="text-primary text-2xl font-semibold">
                Example dialog
              </h1>
            </DialogTitle>
          </Motion>

          <DialogDescription>
            <p class="text-secondary">
              This is an example dialog.
            </p>
          </DialogDescription>
        </div>
      </Motion>
    </DialogContent>

    <DialogOverlay>
      <Motion
        :initial="{
          opacity: 0,
        }"
        :animate="{
          opacity: 1,
        }"
        :exit="{
          opacity: 0,
        }"
        :transition="{
          duration: 0.4,
        }"
      />
    </DialogOverlay>
  </DialogRoot>
</template>
