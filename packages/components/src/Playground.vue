<script setup lang="ts">
import {
  VcConfigProvider,
  VcThemeProvider,
} from '@/components/index'
</script>

<template>
  <VcConfigProvider
    locale="en-NL"
    teleport-target-selector="#test"
  >
    <VcThemeProvider appearance="light">
      <div id="test" />
    </VcThemeProvider>
  </VcConfigProvider>
</template>
