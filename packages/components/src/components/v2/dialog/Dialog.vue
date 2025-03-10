<script setup lang="ts">
import DialogCloseButton from '@/components/v2/dialog/parts/DialogCloseButton.vue'
import DialogContent from '@/components/v2/dialog/parts/DialogContent.vue'
import DialogDescription from '@/components/v2/dialog/parts/DialogDescription.vue'
import DialogOverlay from '@/components/v2/dialog/parts/DialogOverlay.vue'
import DialogRoot from '@/components/v2/dialog/parts/DialogRoot.vue'
import DialogTitle from '@/components/v2/dialog/parts/DialogTitle.vue'
</script>

<template>
  <DialogRoot>
    <DialogOverlay />

    <DialogContent>
      <DialogTitle />
      <DialogDescription />
      <DialogCloseButton />
    </DialogContent>
  </DialogRoot>
</template>
