<script setup lang="ts">
import { ModuleProvider } from '@wisemen/vue-core-module-registry'
import AppContent from './AppContent.vue'
import { setupModules } from './lib/moduleRegistry';

const registry = setupModules()
</script>

<template>
  <ModuleProvider :registry="registry">
    <AppContent />
  </ModuleProvider>
</template>
