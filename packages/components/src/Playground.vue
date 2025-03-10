<script setup lang="ts">
import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'

setupDefaultStyles()

// const dialog = useDialog({
//   overlay: () => import('...'),
//   transition: () => import('...'),
//   component: () => import('...'),
// })
</script>

<template>
  <ConfigProvider locale="en-US">
    <ThemeProvider />
  </ConfigProvider>
</template>
