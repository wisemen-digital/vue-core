<script setup lang="ts">
import { VcDialogTitle, VcDialogDescription, VcDialog, VcButton, VcDialogCloseButton } from '@wisemen/vue-core'
</script>

<template>
  <VcDialog>
    <div class="py-2 px-3">
      <VcDialogTitle>
        <p>
          Dialog Title
        </p>
      </VcDialogTitle>
      <VcDialogDescription>
        <p>
          This is a dialog description.
        </p>
      </VcDialogDescription>
      <p class="py-2">
        And then this is the main content of the dialog.
      </p>

      <VcDialogCloseButton>
        <VcButton variant="tertiary" size="sm">
          Close
        </VcButton>
      </VcDialogCloseButton>
    </div>
  </VcDialog>
</template>