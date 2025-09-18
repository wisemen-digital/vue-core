<script setup lang="ts">
import { Primitive } from 'reka-ui'
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
   * When true, the ThemeProvider will render its child components directly instead of wrapping them in a div.
   * @default false
   */
  asChild?: boolean
  /**
   * The chosen theme for the application.
   * @default null
   */
  theme?: string & {} | 'default' | null
}>(), {
  appearance: null,
  asChild: false,
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
  <Primitive
    :as-child="props.asChild"
    :class="[theme, computedAppearance]"
  >
    <slot />
  </Primitive>
</template>
