<script setup lang="ts">
import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import Button from '@/packages/@next/button/button/Button.vue'
import Popover from '@/packages/@next/popover/Popover.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'

setupDefaultStyles()
</script>

<template>
  <ConfigProvider
    locale="en-US"
    teleport-target-selector="#test"
  >
    <ThemeProvider appearance="light">
      <div class="flex w-full gap-lg h-screen items-center justify-center">
        <Popover :is-close-button-hidden="true">
          <template #trigger>
            <Button>Trigger</Button>
          </template>

          <template #content>
            <img
              src="https://images.unsplash.com/photo-1740715537042-6de862cdaab4?q=80&w=2477&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="w-80 h-40 p-xs rounded-xl"
            >
          </template>
        </Popover>
      </div>

      <div id="test" />
    </ThemeProvider>
  </ConfigProvider>
</template>
