<script setup lang="ts">
import { computed } from 'vue'

import { inputFieldErrorStyle } from '@/components/input-field-error/inputFieldError.style'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import type { FormFieldErrors } from '@/types/formFieldErrors.type.js'
import type { StyleConfig } from '@/types/style.type.js'

const props = withDefaults(defineProps<{
  inputId: string
  errors: FormFieldErrors | null
  styleConfig?: StyleConfig<'inputFieldError'> | null
}>(), {
  styleConfig: null,
})

const themeProviderContext = injectThemeProviderContext()

const style = inputFieldErrorStyle()
const errorClasses = computed<string>(() => style.error())
</script>

<template>
  <span
    :id="`${props.inputId}-error`"
    :class="[errorClasses, themeProviderContext.theme.value]"
    :style="props.styleConfig"
    aria-live="assertive"
    role="alert"
    class="input-field-error-variant-default"
  >
    {{ props.errors?._errors[0] }}
  </span>
</template>
