<script setup lang="ts">
import { computed } from 'vue'

import { provideThemeProviderContext } from '@/components/theme-provider/themeProvider.context'

const props = withDefaults(defineProps<{
  isDarkModeEnabled?: boolean
  theme: string & {} | 'default'
}>(), {
  isDarkModeEnabled: false,
})

const theme = computed<string>(() => {
  const themeClasses = [
    props.theme,
  ]

  if (props.isDarkModeEnabled) {
    themeClasses.push('dark')
  }
  else {
    themeClasses.push('light')
  }

  return themeClasses.join(' ')
})

provideThemeProviderContext({
  theme,
})
</script>

<template>
  <div :class="theme">
    <slot />
  </div>
</template>
