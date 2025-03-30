<script setup lang="ts">
import {
  VcConfigProvider,
  VcDialogContainer,
  VcThemeProvider,
} from '@wisemen/vue-core-components'
</script>

<template>
  <div class="relative mt-2xl">
    <VcConfigProvider
      locale="en-NL"
      teleport-target-selector="#teleport-target"
    >
      <VcThemeProvider
        appearance="light"
        class="vp-raw"
      >
        <div class="vp-raw flex items-center justify-center p-20 border border-solid border-secondary rounded-xl bg-primary">
          <slot />
        </div>

        <div id="teleport-target" />
        <VcDialogContainer />
      </VcThemeProvider>
    </VcConfigProvider>
  </div>
</template>
