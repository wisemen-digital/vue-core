<script setup lang="ts">
import AppSwitch from '@/components/switch/AppSwitch.vue'
import { useDarkMode } from '@/composables/index'

const { isDarkMode } = useDarkMode()
</script>

<template>
  <AppSwitch
    v-model="isDarkMode"
    icon-checked="moonStar"
    icon-unchecked="sun"
    label="Dark mode"
  />
</template>
