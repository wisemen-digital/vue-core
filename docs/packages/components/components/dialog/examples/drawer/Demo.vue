<script setup lang="ts">
import {
  useDialog,
  VcButton,
} from '@wisemen/vue-core-components'

import Drawer from './Drawer.vue'

const dialog = useDialog(Drawer)
</script>

<template>
  <VcButton
    variant="secondary"
    @click="dialog.open()"
  >
    Open drawer
  </VcButton>
</template>
