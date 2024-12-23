<script setup lang="ts">
import { ref } from 'vue'

import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import RadioGroup from '@/components/radio-group/RadioGroup.vue'
import RadioGroupItem from '@/components/radio-group/RadioGroupItem.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'

setupDefaultStyles()

const items = [
  'a',
  'b',
  'c',
]

const value = ref<string>('a')
</script>

<template>
  <ConfigProvider
    locale="nl"
    google-maps-api-key="AIzaSyATX2fY3BZwaKeURsQhwpEVLmLRr27s4vw"
  >
    <ThemeProvider
      :is-dark-mode-enabled="false"
      theme="default"
      class="p-11xl grid grid-cols-2 bg-primary min-h-screen"
    >
      <RadioGroup
        v-model="value"
        class=""
      >
        <RadioGroupItem
          v-for="item of items"
          :key="item"
          :value="item"
          :label="`Label ${item}`"
          :style-config="{
            '--radio-group-item-indicator-bg-color-checked': 'red',
          }"
        />
      </RadioGroup>
    </ThemeProvider>
  </configprovider>
</template>
