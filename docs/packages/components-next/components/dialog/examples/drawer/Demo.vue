<script setup lang="ts">
import {
  useVcDialog,
  VcButton,
} from '@wisemen/vue-core-components'

const dialog = useVcDialog({
  component: () => import('./Drawer.vue'),
})
</script>

<template>
  <VcButton
    variant="secondary"
    @click="dialog.open()"
  >
    Open drawer
  </VcButton>
</template>
