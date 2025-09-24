<script setup lang="ts">
import {
  useDialog,
  VcButton,
} from '@wisemen/vue-core-components'

import Dialog from './Dialog.vue'

const dialog = useDialog(Dialog)
</script>

<template>
  <VcButton
    variant="secondary"
    @click="dialog.open()"
  >
    Enable 2FA
  </VcButton>
</template>
