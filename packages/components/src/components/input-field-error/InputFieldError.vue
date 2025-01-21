<script setup lang="ts">
import { computed } from 'vue'

import { inputFieldErrorStyle } from '@/components/input-field-error/inputFieldError.style'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import type { StyleConfig } from '@/types/style.type'
import { ThemeUtil } from '@/utils/theme.util'

const props = withDefaults(defineProps<{
  inputId: string
  errors: string[]
  styleConfig?: StyleConfig<'inputFieldError'> | null
}>(), {
  errors: () => [],
  styleConfig: null,
})

const themeProviderContext = injectThemeProviderContext()

const style = inputFieldErrorStyle()
const errorClasses = computed<string>(() => style.error())
</script>

<template>
  <span
    v-if="props.errors.length > 0"
    :id="`${props.inputId}-error`"
    :class="[
      errorClasses,
      ThemeUtil.getClasses(themeProviderContext.theme.value, themeProviderContext.darkModeValue.value),
    ]"
    :style="props.styleConfig"
    aria-live="assertive"
    role="alert"
    class="input-field-error-default"
  >
    {{ props.errors[0] }}
  </span>
</template>
