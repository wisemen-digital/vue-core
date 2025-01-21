<script setup lang="ts">
import { computed } from 'vue'

import {
  injectThemeProviderContext,
  provideThemeProviderContext,
} from '@/components/theme-provider/themeProvider.context'
import type { DarkModeValue } from '@/composables/dark-mode/darkMode.composable'
import { ThemeUtil } from '@/utils/theme.util'

const props = withDefaults(defineProps<{
  darkModeValue?: DarkModeValue | null
  theme?: string & {} | 'default' | null
}>(), {
  darkModeValue: null,
  theme: null,
})

const themeContext = injectThemeProviderContext()

const darkModeValueComputed = computed<DarkModeValue>(() => (
  props.darkModeValue ?? themeContext.darkModeValue.value ?? 'light'
))

const theme = computed<string>(() =>
  props.theme ?? themeContext.theme.value)

provideThemeProviderContext({
  darkModeValue: darkModeValueComputed,
  theme,
})
</script>

<template>
  <div :class="ThemeUtil.getClasses(theme, darkModeValueComputed)">
    <slot />
  </div>
</template>
