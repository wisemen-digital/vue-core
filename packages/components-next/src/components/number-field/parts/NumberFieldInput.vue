<script setup lang="ts">
import { NumberFieldInput as RekaNumberFieldInput } from 'reka-ui'

import { useInjectNumberFieldContext } from '@/components/number-field/numberField.context'
import PrimitiveElement from '@/components/shared/PrimitiveElement.vue'
import { mergeClasses } from '@/customClassVariants'

const {
  id,
  testId,
  isLoading,
  autocomplete,
  classConfig,
  customClassConfig,
  errors,
  placeholder,
  style,
  onBlur,
  onFocus,
} = useInjectNumberFieldContext()
</script>

<template>
  <PrimitiveElement
    :id="id"
    :test-id="testId"
  >
    <RekaNumberFieldInput
      :class="style.input({
        class: mergeClasses(customClassConfig.input, classConfig?.input),
      })"
      :describedby="`${id}-error ${id}-hint`"
      :aria-busy="isLoading"
      :aria-invalid="errors.length > 0"
      :autocomplete="autocomplete"
      :placeholder="placeholder"
      @focus="onFocus"
      @blur="onBlur"
    />
  </PrimitiveElement>
</template>
