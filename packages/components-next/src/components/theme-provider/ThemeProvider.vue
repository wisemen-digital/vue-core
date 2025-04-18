<script setup lang="ts">
import { computed } from 'vue'

import {
  injectThemeProviderContext,
  provideThemeProviderContext,
} from '@/components/theme-provider/themeProvider.context'
import type { Appearance } from '@/composables/appearance/appearance.composable'

const props = withDefaults(defineProps<{
  /**
   * The appearance of the application ('dark', 'light', 'system').
   * @default false
   */
  appearance?: Appearance | null
  /**
   * The chosen theme for the application.
   * @default null
   */
  theme?: string & {} | 'default' | null
}>(), {
  appearance: null,
  theme: null,
})

defineSlots<{
  /**
   * Wrap your application in this component to provide theme configuration to all components.
   */
  default: () => void
}>()

const themeContext = injectThemeProviderContext()

const computedAppearance = computed<Appearance>(() => (
  props.appearance ?? themeContext.appearance.value ?? 'light'
))

const theme = computed<string>(
  () => props.theme ?? themeContext.theme.value,
)

provideThemeProviderContext({
  appearance: computedAppearance,
  theme,
})
</script>

<template>
  <div :class="[theme, computedAppearance]">
    <slot />
  </div>
</template>
