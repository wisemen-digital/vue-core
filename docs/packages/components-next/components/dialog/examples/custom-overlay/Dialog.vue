<script setup lang="ts">
import {
  VcDialog,
  VcDialogCloseButton,
  VcDialogDescription,
  VcDialogTitle,
} from '@wisemen/vue-core-components'
</script>

<template>
  <VcDialog
    :prevent-esc="true"
    :class-config="{
      overlay: 'bg-brand-950/15 backdrop-blur-none',
      content: 'shadow-sm shadow-brand-500/2',
    }"
    class="p-3xl max-h-[90vh] min-h-80 w-120 max-w-[90vw]"
  >
    <VcDialogTitle>
      <h1 class="text-primary text-2xl font-bold">
        Overlay
      </h1>
    </VcDialogTitle>

    <VcDialogDescription>
      <p class="text-primary mt-xl">
        This is an example dialog.
      </p>
    </VcDialogDescription>

    <div class="absolute top-2 right-2">
      <VcDialogCloseButton />
    </div>
  </VcDialog>
</template>
