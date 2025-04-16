<script setup lang="ts">
import {
  useVcDialog,
  VcButton,
} from '@wisemen/vue-core-components'

const dialog = useVcDialog({ component: () => import('./Settings.vue') })
</script>

<template>
  <Story title="Settings">
    <div>
      <VcButton
        v-if="true"
        @click="dialog.open"
      >
        Open settings
      </VcButton>
    </div>
  </Story>
</template>
