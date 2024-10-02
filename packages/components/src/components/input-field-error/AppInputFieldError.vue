<script setup lang="ts">
import { computed } from 'vue'

import { inputFieldErrorStyle } from '@/components/input-field-error/inputFieldError.style'
import type { FormFieldErrors } from '@/types/formFieldErrors.type.js'

const props = defineProps<{
  errors: FormFieldErrors | null
}>()

const style = inputFieldErrorStyle()
const errorClasses = computed<string>(() => style.error())
</script>

<template>
  <span :class="errorClasses">
    {{ props.errors?._errors[0] }}
  </span>
</template>
