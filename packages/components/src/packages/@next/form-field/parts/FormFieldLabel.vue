<script setup lang="ts">
import { mergeClasses } from '@/customClassVariants'
import { useInjectFormFieldContext } from '@/packages/@next/form-field/formField.context'
import type { FormFieldLabelSlots } from '@/packages/@next/form-field/formField.slots'

defineSlots<FormFieldLabelSlots>()

const {
  isRequired,
  classConfig,
  customClassConfig,
  for: forId,
  label,
  style,
} = useInjectFormFieldContext()
</script>

<template>
  <div
    :class="style.labelContainer({
      class: mergeClasses(customClassConfig.labelContainer, classConfig?.labelContainer),
    })"
  >
    <div class="flex items-center">
      <slot name="label-leading" />

      <label
        :class="style.label({
          class: mergeClasses(customClassConfig.label, classConfig?.label),
        })"
        :for="forId"
      >
        {{ label }}
        <span
          v-if="isRequired"
          :class="style.asterisk({
            class: mergeClasses(customClassConfig.asterisk, classConfig?.asterisk),
          })"
        >*</span>
      </label>

      <slot name="label-trailing" />
    </div>

    <slot name="label-right" />
  </div>
</template>
