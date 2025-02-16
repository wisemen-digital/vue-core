<script setup lang="ts">
import { ref } from 'vue'

import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import Select from '@/components/select-v2/Select.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'
import type { SelectItem } from '@/types/select.type'

setupDefaultStyles()

const value = ref<string>(
  '1',
)

const selectItems: SelectItem<string>[] = [
  ...Array.from({ length: 20 }).fill(null).map((_, index) => ({
    type: 'option',
    value: index.toString(),
  })) as any,
]
</script>

<template>
  <ConfigProvider locale="en">
    <ThemeProvider>
      <div class="p-24 grid grid-cols-1 gap-4xl">
        <Select
          v-model="value"
          :items="selectItems"
          :display-fn="item => item"
          :filter-fn="(option, searchTerm) => option.includes(searchTerm)"
          class="w-72"
        />
      </div>
    </ThemeProvider>
  </ConfigProvider>
</template>
