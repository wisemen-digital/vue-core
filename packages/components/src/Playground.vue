<script setup lang="ts">
import { ref } from 'vue'

import Checkbox from '@/components/checkbox/Checkbox.vue'
import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'

setupDefaultStyles()

const value = ref<boolean>(false)
</script>

<template>
  <ConfigProvider locale="en">
    <ThemeProvider
      :is-dark-mode-enabled="false"
      theme="default"
      class="p-5xl"
    >
      <Checkbox v-model="value" />
    </ThemeProvider>
  </ConfigProvider>
</template>
