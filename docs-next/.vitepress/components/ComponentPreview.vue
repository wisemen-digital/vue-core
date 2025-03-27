<script setup lang="ts">
import { VcThemeProvider, VcConfigProvider } from '@wisemen/vue-core-components'
</script>

<template>
  <div class="mt-2xl">
    <VcConfigProvider>
      <VcThemeProvider class="vp-raw">
        <div class="vp-raw flex items-center justify-center p-20 border border-solid border-secondary rounded-xl bg-primary">
          <slot />
        </div>
      </VcThemeProvider>
    </VcConfigProvider>
  </div>
</template>