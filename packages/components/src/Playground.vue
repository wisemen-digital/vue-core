<script setup lang="ts">
import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'

setupDefaultStyles()
</script>

<template>
  <ConfigProvider locale="en-US">
    <ThemeProvider>
      <div class="flex h-screen items-center justify-center" />
    </ThemeProvider>
  </ConfigProvider>
</template>
