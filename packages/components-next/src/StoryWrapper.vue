<script setup lang="ts">
import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
</script>

<template>
  <div>
    <ConfigProvider
      locale="en-NL"
      teleport-target-selector="#teleport-target"
    >
      <ThemeProvider>
        <div class="h-screen flex items-center justify-center gap-lg">
          <slot />
        </div>

        <div id="teleport-target" />
      </ThemeProvider>
    </ConfigProvider>
  </div>
</template>
