<script setup lang="ts">
import { VcButton, useDialog } from '@wisemen/vue-core'

const dialog = useDialog({
  component: () => import('./BasicDialog.vue'),
})

async function onClick(): Promise<void> {
  await dialog.open()
}
</script>

<template>
  <VcButton variant="secondary" @click="onClick">Show Dialog</VcButton>
</template>