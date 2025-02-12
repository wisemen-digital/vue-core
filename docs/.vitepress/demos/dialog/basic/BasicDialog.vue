<script setup lang="ts">
import { VcDialogTitle, VcDialogDescription, VcDialog } from '@wisemen/vue-core'
</script>

<template>
  <div>
    <VcDialog>
      <div>
        <VcDialogTitle>Dialog Title</VcDialogTitle>
        <VcDialogDescription>
          This is a dialog description. You can put any content here.
        </VcDialogDescription>
        <p>
          And then this is the main content of the dialog.
        </p>
      </div>
    </VcDialog>
  </div>
</template>