<script setup lang="ts">
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
  style,
} = useInjectFormFieldContext()
</script>

<template>
  <AnimateHeight>
    <span
      v-if="errors.length > 0 && isTouched"
      :id="`${forId}-error`"
      :class="style.error({
        class: mergeClasses(customClassConfig.error, classConfig?.error),
      })"
      aria-live="assertive"
      role="alert"
    >
      {{ errors[0] }}
    </span>
  </AnimateHeight>
</template>
