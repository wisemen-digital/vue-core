<script setup lang="ts">
import { computed } from 'vue'

import { provideThemeProviderContext } from '@/components/theme-provider/themeProvider.context'

const props = defineProps<{
  theme: 'dark' | 'light' | string & {}
}>()

provideThemeProviderContext({
  theme: computed<string>(() => props.theme === 'light' 
    ? '' 
    : props.theme
  ),
})
</script>

<template>
  <slot />
</template>
