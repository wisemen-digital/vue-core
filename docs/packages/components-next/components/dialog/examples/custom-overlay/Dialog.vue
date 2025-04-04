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
    class="max-w-[90vw] w-120 max-h-[90vh] min-h-80 p-3xl"
  >
    <VcDialogTitle>
      <h1 class="text-2xl text-primary font-bold">
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
