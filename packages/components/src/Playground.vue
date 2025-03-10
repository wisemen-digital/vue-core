<script setup lang="ts">
import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import Button from '@/components/v2/button/Button.vue'
import DialogRoot from '@/components/v2/dialog/parts/DialogRoot.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'

setupDefaultStyles()
</script>

<template>
  <ConfigProvider locale="en-US">
    <ThemeProvider appearance="light">
      <Button @focus="(e) => console.log('e')">
        Button
      </Button>
    </ThemeProvider>

    <DialogRoot
      :class-config="{
        content: '',
      }"
    />
  </ConfigProvider>
</template>
