<script setup lang="ts">
import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import Select from '@/packages/@next/select/Select.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'

setupDefaultStyles()
</script>

<template>
  <ConfigProvider
    locale="en-US"
    teleport-target-selector="#test"
  >
    <ThemeProvider appearance="light">
      <div class="flex w-full gap-lg h-[100vh] items-center justify-center">
        <Select
          :model-value="null"
          :filter="{
            isEnabled: true,
            isInline: true,
          }"
          class="w-72"
        />
      </div>

      <div id="test" />
    </ThemeProvider>
  </ConfigProvider>
</template>
