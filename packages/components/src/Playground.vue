<script setup lang="ts">
import ConfigProvider from '@/components/config-provider/ConfigProvider.vue'
import ThemeProvider from '@/components/theme-provider/ThemeProvider.vue'
import { setupDefaultStyles } from '@/styling/setupDefaultStyles'

setupDefaultStyles()
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
      <!--  -->
    </ThemeProvider>
  </configprovider>
</template>
