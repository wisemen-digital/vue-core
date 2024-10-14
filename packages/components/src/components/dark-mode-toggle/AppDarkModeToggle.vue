<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { watch } from 'vue'

import AppSwitch from '@/components/switch/AppSwitch.vue'

const isDarkMode = useLocalStorage<boolean>('isDarkMode', false)

watch(isDarkMode, (isDarkMode) => {
  if (isDarkMode) {
    document.documentElement.classList.add('dark')
  }
  else {
    document.documentElement.classList.remove('dark')
  }
}, {
  immediate: true,
})
</script>

<template>
  <AppSwitch
    v-model="isDarkMode"
    icon-checked="moonStar"
    icon-unchecked="sun"
    label="Dark mode"
  />
</template>
