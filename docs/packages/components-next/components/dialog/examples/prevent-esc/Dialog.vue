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
    class="p-3xl max-h-[90vh] min-h-80 w-120 max-w-[90vw]"
  >
    <VcDialogTitle>
      <h1 class="text-primary text-2xl font-bold">
        Prevent Esc
      </h1>
    </VcDialogTitle>

    <VcDialogDescription>
      <p class="text-primary mt-xl">
        This dialog will not close when the escape key is pressed.
      </p>
    </VcDialogDescription>

    <div class="absolute top-2 right-2">
      <VcDialogCloseButton />
    </div>
  </VcDialog>
</template>
