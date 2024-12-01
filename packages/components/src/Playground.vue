<script setup lang="ts">
import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import ScrollArea from '@/components/scroll-area/ScrollArea.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'

setupDefaultStyles()

// const value = ref<boolean>(false)
</script>

<template>
  <ConfigProvider locale="en">
    <ThemeProvider
      :is-dark-mode-enabled="false"
      theme="default"
      class="p-5xl"
    >
      <!-- <Checkbox v-model="value" /> -->

      <ScrollArea
        :style="{
          height: '50vh',
        }"
      >
        <div>
          <ul class="w-[200vw]">
            <li
              v-for="i in 200"
              :key="i"
            >
              {{ i }}
            </li>
          </ul>
        </div>
      </ScrollArea>
    </ThemeProvider>
  </ConfigProvider>
</template>
