<script setup lang="ts">
import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import Button from '@/components/@next/button/Button.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'

setupDefaultStyles()
</script>

<template>
  <ConfigProvider locale="en-US">
    <ThemeProvider appearance="light">
      <Button @click="(e) => console.log('e')">
        Button
      </Button>
    </ThemeProvider>
  </ConfigProvider>
</template>
