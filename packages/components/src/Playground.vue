<script setup lang="ts">
import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import Button from '@/packages/@next/button/button/Button.vue'
import IconButton from '@/packages/@next/button/icon/IconButton.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'

setupDefaultStyles()
</script>

<template>
  <ConfigProvider locale="en-US">
    <ThemeProvider appearance="light">
      <div class="flex w-full gap-lg h-screen items-center justify-center">
        <Button
          icon-left="search"
          variant="secondary-color"
        >
          Button
        </Button>

        <IconButton
          :is-loading="false"
          icon="search"
          variant="secondary-color"
          label="Search"
        />
      </div>
    </ThemeProvider>
  </ConfigProvider>
</template>
