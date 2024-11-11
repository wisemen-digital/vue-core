<script setup lang="ts">
import {
  VcDialog,
  VcDialogCloseButton,
  VcDialogDescription,
  VcDialogTitle,
} from '@wisemen/vue-core'
</script>

<template>
  <VcDialog>
    <div class="relative h-[80vh] w-[80vw] p-8">
      <VcDialogCloseButton class="!absolute right-4 top-4" />

      <VcDialogTitle>
        <h1 class="text-2xl font-bold text-primary">
          Dialog title
        </h1>
      </VcDialogTitle>

      <VcDialogDescription>
        <p class="mt-md text-tertiary">
          This is a description of the vcdialog.
        </p>
      </VcDialogDescription>
    </div>
  </VcDialog>
</template>
