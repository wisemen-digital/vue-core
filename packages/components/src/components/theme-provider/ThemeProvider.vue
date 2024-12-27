<script setup lang="ts">
import { computed } from 'vue'

import {
  injectThemeProviderContext,
  provideThemeProviderContext,
} from '@/components/theme-provider/themeProvider.context'
import { ThemeUtil } from '@/utils/theme.util'

const props = withDefaults(defineProps<{
  isDarkModeEnabled?: boolean | null
  theme?: string & {} | 'default' | null
}>(), {
  isDarkModeEnabled: null,
  theme: null,
})

const themeContext = injectThemeProviderContext()

const isDarkModeEnabled = computed<boolean>(() => (
  props.isDarkModeEnabled ?? themeContext.isDarkModeEnabled.value
))

const theme = computed<string>(() =>
  props.theme ?? themeContext.theme.value)

provideThemeProviderContext({
  isDarkModeEnabled,
  theme,
})
</script>

<template>
  <div :class="ThemeUtil.getClasses(theme, isDarkModeEnabled)">
    <slot />
  </div>
</template>
