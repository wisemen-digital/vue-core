<script setup lang="ts">
import { useInjectFormFieldContext } from '@/components/form-field/formField.context'
import type { FormFieldLabelSlots } from '@/components/form-field/formField.slots'
import { mergeClasses } from '@/customClassVariants'

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
  <div>
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
  </div>
</template>
