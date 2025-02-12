<script setup lang="ts">
import { VcButton, VcDialogContainer, useDialog } from '@wisemen/vue-core'

const dialog = useDialog({
  component: () => import('./BasicDialog.vue'),
})

async function onClick(): Promise<void> {
  await dialog.open()
}
</script>

<template>
  <div>
    <VcDialogContainer />
    <VcButton variant="secondary" @click="onClick">Show Dialog</VcButton>
  </div>
</template>