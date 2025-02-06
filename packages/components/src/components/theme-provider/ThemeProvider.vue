<script setup lang="ts">
import { computed } from 'vue'

import {
  injectThemeProviderContext,
  provideThemeProviderContext,
} from '@/components/theme-provider/themeProvider.context'
import type { DarkModeValue } from '@/composables/dark-mode/darkMode.composable'
import { ThemeUtil } from '@/utils/theme.util'

const props = withDefaults(defineProps<{
  appearance?: DarkModeValue | null
  theme?: string & {} | 'default' | null
}>(), {
  appearance: null,
  theme: null,
})

const themeContext = injectThemeProviderContext()

const appearanceComputed = computed<DarkModeValue>(() => (
  props.appearance ?? themeContext.appearance.value ?? 'light'
))

const theme = computed<string>(() =>
  props.theme ?? themeContext.theme.value)

provideThemeProviderContext({
  appearance: appearanceComputed,
  theme,
})
</script>

<template>
  <div :class="ThemeUtil.getClasses(theme, appearanceComputed)">
    <slot />
  </div>
</template>
