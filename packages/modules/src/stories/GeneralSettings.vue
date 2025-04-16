<script setup lang="ts">
import {
  useVcDialog,
  VcButton,
} from '@wisemen/vue-core-components'

import SettingsSection from '@/modules/settings/parts/content/SettingsSection.vue'

const dialog = useVcDialog({ component: () => import('./NestedDialog.vue') })
</script>

<template>
  <SettingsSection>
    <slot />

    <VcButton @click="dialog.open()">
      Button
    </VcButton>
  </SettingsSection>
</template>
