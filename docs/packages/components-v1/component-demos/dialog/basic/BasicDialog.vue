<script setup lang="ts">
import {
  VcButton,
  VcDialog,
  VcDialogCloseButton,
  VcDialogDescription,
  VcDialogTitle,
} from '@wisemen/vue-core'
</script>

<template>
  <VcDialog>
    <div class="px-3 py-2">
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
        <VcButton
          variant="tertiary"
          size="sm"
        >
          Close
        </VcButton>
      </VcDialogCloseButton>
    </div>
  </VcDialog>
</template>
