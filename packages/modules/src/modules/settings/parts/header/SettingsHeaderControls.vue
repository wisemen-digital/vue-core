<script setup lang="ts">
import { VcIconButton } from '@wisemen/vue-core-components'

import { useInjectSettingsContext } from '@/modules/settings/settings.context'

const {
  canGoBack,
  canGoForward,
  goBack,
  goForward,
} = useInjectSettingsContext()
</script>

<template>
  <div class="-ml-lg flex">
    <VcIconButton
      :is-disabled="!canGoBack"
      :class-config="{
        root: 'w-7',
      }"
      icon="chevronLeft"
      label="Back"
      variant="tertiary"
      size="sm"
      @click="goBack"
    />

    <VcIconButton
      :is-disabled="!canGoForward"
      :class-config="{
        root: 'w-7',
      }"
      icon="chevronRight"
      label="Forward"
      variant="tertiary"
      size="sm"
      @click="goForward"
    />
  </div>
</template>
