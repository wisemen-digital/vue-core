<script setup lang="ts">
import { ref } from 'vue'

import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import Select from '@/packages/@next/select/Select.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'

setupDefaultStyles()

const value = ref<string[]>([])
</script>

<template>
  <ConfigProvider
    locale="en-NL"
    teleport-target-selector="#test"
  >
    <ThemeProvider appearance="light">
      <div class="flex w-full gap-lg h-[100vh] items-center justify-center">
        <Select
          v-model="value"
          :filter="{
            isEnabled: true,
            isInline: true,
            // fn: (option, searchTerm) => option.includes(searchTerm),
          }"
          :display-fn="option => option"
          icon-left="search"
          class="w-72"
        />
      </div>

      <div id="test" />
    </ThemeProvider>
  </ConfigProvider>
</template>
