<script setup lang="ts">
import AppButton from '@/components/button/button/AppButton.vue'
import AppDialogContainer from '@/components/dialog/AppDialogContainer.vue'
import { useDialog } from '@/components/dialog/dialog.composable.js'

const exampleDialog = useDialog({
  animateFromTrigger: false,
  component: () => import('@/ExampleDialog.vue'),
})
</script>

<template>
  <div>
    <AppDialogContainer />

    <AppButton
      :id="exampleDialog.triggerId"
      @click="exampleDialog.open()"
    >
      Trigger dialog
    </AppButton>
  </div>
</template>
