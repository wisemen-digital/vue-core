<script setup lang="ts">
import AppDialog from '@/components/dialog/AppDialog.vue'
import AppDialogCloseButton from '@/components/dialog/AppDialogCloseButton.vue'
import AppDialogDescription from '@/components/dialog/AppDialogDescription.vue'
import AppDialogTitle from '@/components/dialog/AppDialogTitle.vue'
</script>

<template>
  <AppDialog>
    <div class="h-[500px] w-[700px]">
      <AppDialogTitle>
        <h1>Title</h1>
      </AppDialogTitle>

      <AppDialogDescription>
        <p>Description</p>
      </AppDialogDescription>

      <AppDialogCloseButton />
    </div>
  </AppDialog>
</template>
