<script setup lang="ts">
import { computed } from 'vue'

import { inputFieldHintStyle } from '@/components/input-field-hint/inputFieldHint.style'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import type { StyleConfig } from '@/types/style.type'
import { ThemeUtil } from '@/utils/theme.util'

const props = withDefaults(defineProps<{
  inputId: string
  hint: string
  styleConfig?: StyleConfig<'inputFieldHint'> | null
}>(), {
  styleConfig: null,
})

const themeProviderContext = injectThemeProviderContext()

const style = inputFieldHintStyle()
const hintClasses = computed<string>(() => style.hint())
</script>

<template>
  <span
    :id="`${props.inputId}-hint`"
    :class="[
      hintClasses,
      ThemeUtil.getClasses(themeProviderContext.theme.value, themeProviderContext.isDarkModeEnabled.value),
    ]"
    :style="props.styleConfig"
    aria-live="polite"
    role="alert"
    class="input-field-hint-default"
  >
    {{ props.hint }}
  </span>
</template>
