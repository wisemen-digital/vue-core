<script setup lang="ts">
import {
  AnimatePresence,
  Motion,
} from 'motion-v'

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
  <AnimatePresence :initial="false">
    <Motion
      v-if="errors.length > 0 && isTouched"
      :initial="{
        height: 0,
        opacity: 0,
        filter: 'blur(4px)',
      }"
      :animate="{
        height: 'auto',
        opacity: 1,
        filter: 'blur(0)',
      }"
      :exit="{
        height: 0,
        opacity: 0,
        filter: 'blur(4px)',
      }"
    >
      <div>
        <span
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
    </Motion>
  </AnimatePresence>
</template>
