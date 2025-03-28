<script setup lang="ts">
import { VcButton, useDrawer } from '@wisemen/vue-core'

const drawer = useDrawer({
  component: () => import('./BasicDrawer.vue'),
})

async function onClick(): Promise<void> {
  await drawer.open()
}
</script>

<template>
  <VcButton variant="secondary" @click="onClick">Show Drawer</VcButton>
</template>