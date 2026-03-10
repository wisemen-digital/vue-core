<script setup lang="ts">
import { Primitive } from 'reka-ui'
import { computed } from 'vue'

import type { Appearance } from '@/types/appearance.type'
import {
  useInjectThemeProviderContext,
  useProvideThemeProviderContext,
} from '@/ui/theme-provider/themeProvider.context'

const props = withDefaults(defineProps<{
  /**
   * The appearance of the application ('dark', 'light', 'system').
   * @default false
   */
  appearance?: Appearance | null
  /**
   * Whether to render the child component directly without any wrapping element.
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

const themeContext = useInjectThemeProviderContext()

const computedAppearance = computed<Appearance>(() => (
  props.appearance ?? themeContext.appearance.value ?? 'light'
))

const theme = computed<string>(
  () => props.theme ?? themeContext.theme.value,
)

useProvideThemeProviderContext({
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
