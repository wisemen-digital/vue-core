<script setup lang="ts">
import {
  AppDialog,
  AppDialogCloseButton,
  AppDialogDescription,
  AppDialogTitle,
} from '@wisemen/vue-core'
</script>

<template>
  <AppDialog>
    <div class="relative h-[80vh] w-[80vw] p-8">
      <AppDialogCloseButton class="!absolute right-4 top-4" />

      <AppDialogTitle>
        <h1 class="text-2xl font-bold text-primary">
          Dialog title
        </h1>
      </AppDialogTitle>

      <AppDialogDescription>
        <p class="mt-md text-tertiary">
          This is a description of the dialog.
        </p>
      </AppDialogDescription>
    </div>
  </AppDialog>
</template>
