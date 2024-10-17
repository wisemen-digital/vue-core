<script setup lang="ts">
import AppButton from '@/components/button/button/AppButton.vue'
import AppDialogContainer from '@/components/dialog/AppDialogContainer.vue'
import { useDialog } from '@/composables/dialog/dialog.composable.js'

const exampleDialog = useDialog({
  animateFromTrigger: false,
  component: () => import('@/ExampleDialog.vue'),
})

const exampleDialog2 = useDialog({
  animateFromTrigger: true,
  component: () => import('@/ExampleDialog.vue'),
})
</script>

<template>
  <AppDialogContainer />

  <div class="grid grid-cols-3 gap-12">
    <div>
      <AppButton
        :id="exampleDialog.triggerId"
        @click="exampleDialog.open()"
      >
        Trigger dialog
      </AppButton>
    </div>

    <div>
      <AppButton
        :id="exampleDialog2.triggerId"
        @click="exampleDialog2.open()"
      >
        Trigger dialog
      </AppButton>
    </div>
  </div>
</template>
