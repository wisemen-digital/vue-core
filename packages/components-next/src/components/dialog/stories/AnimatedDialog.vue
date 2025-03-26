<script setup lang="ts">
import { Motion } from 'motion-v'

import Button from '@/components/button/default-button/Button.vue'
import DialogCloseButton from '@/components/dialog/parts/DialogCloseButton.vue'
import DialogContent from '@/components/dialog/parts/DialogContent.vue'
import DialogDescription from '@/components/dialog/parts/DialogDescription.vue'
import DialogOverlay from '@/components/dialog/parts/DialogOverlay.vue'
import DialogOverlayTransition from '@/components/dialog/parts/DialogOverlayTransition.vue'
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
          duration: 0.4,
        }"
        layout-id="dialog-content"
      >
        <div class=" w-[90vw] h-[90vh] p-2xl max-w-140 max-h-80">
          <DialogCloseButton class="!absolute top-2 right-2" />

          <DialogTitle>
            <h1 class="text-2xl font-semibold text-primary">
              Example dialog
            </h1>
          </DialogTitle>

          <DialogDescription>
            <p class="text-secondary">
              This is an example dialog.
            </p>
          </DialogDescription>

          <Button label="Button" />
        </div>
      </Motion>
    </DialogContent>

    <DialogOverlay>
      <DialogOverlayTransition />
    </DialogOverlay>
  </DialogRoot>
</template>
