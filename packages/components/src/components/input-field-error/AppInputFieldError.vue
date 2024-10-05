<script setup lang="ts">
import { computed } from 'vue'

import { inputFieldErrorStyle } from '@/components/input-field-error/inputFieldError.style'
import type { FormFieldErrors } from '@/types/formFieldErrors.type.js'
import type { StyleConfig } from '@/types/style.type.js'

const props = withDefaults(defineProps<{
  errors: FormFieldErrors | null
  styleConfig: StyleConfig<'inputFieldError'> | null
}>(), {
  styleConfig: null,
})

const style = inputFieldErrorStyle()
const errorClasses = computed<string>(() => style.error())
</script>

<template>
  <span
    :class="errorClasses"
    :style="props.styleConfig"
  >
    {{ props.errors?._errors[0] }}
  </span>
</template>
