<script setup lang="ts">
import { computed } from 'vue'

import AnimateHeight from '@/components/animate-height/AnimateHeight.vue'
import { mergeClasses } from '@/customClassVariants'
import { useInjectFormFieldContext } from '@/packages/@next/form-field/formField.context'
import type { FormFieldLabelSlots } from '@/packages/@next/form-field/formField.slots'

defineSlots<FormFieldLabelSlots>()

const {
  isTouched,
  classConfig,
  customClassConfig,
  errors,
  for: forId,
  hint,
  style,
} = useInjectFormFieldContext()

const isErrorVisible = computed<boolean>(() => isTouched.value && errors.value.length > 0)
</script>

<template>
  <AnimateHeight>
    <span
      v-if="hint !== null && !isErrorVisible"
      :id="`${forId}-hint`"
      :class="style.hint({
        class: mergeClasses(customClassConfig.hint, classConfig?.hint),
      })"
      role="alert"
    >
      {{ hint }}
    </span>
  </AnimateHeight>
</template>
