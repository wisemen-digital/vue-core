<script setup lang="ts">
import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import Button from '@/packages/@next/button/button/Button.vue'
import IconButton from '@/packages/@next/button/icon/IconButton.vue'
import Tooltip from '@/packages/@next/tooltip/Tooltip.vue'
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
        <Button
          icon-left="search"
          variant="secondary-color"
        >
          Button
        </Button>

        <Tooltip :disable-close-on-trigger-click="true">
          <template #trigger>
            <IconButton
              :is-loading="false"
              icon="search"
              variant="secondary-color"
              label="Search"
            />
          </template>

          <template #content>
            <div class="flex px-sm py-xs">
              <span class="text-sm text-primary">
                Click to search
              </span>
            </div>
          </template>
        </Tooltip>
      </div>

      <div id="test" />
    </ThemeProvider>
  </ConfigProvider>
</template>
