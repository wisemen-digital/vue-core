<script setup lang="ts">
import { NumberFieldInput as RekaNumberFieldInput } from 'reka-ui'

import { useInjectNumberFieldContext } from '@/components/number-field/numberField.context'
import FormControl from '@/components/shared/FormControl.vue'
import PrimitiveElement from '@/components/shared/PrimitiveElement.vue'
import { mergeClasses } from '@/customClassVariants'

const {
  id,
  testId,
  isDisabled,
  isLoading,
  isRequired,
  autocomplete,
  classConfig,
  customClassConfig,
  errorMessage,
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
    <FormControl
      :is-disabled="isDisabled"
      :is-loading="isLoading"
      :is-invalid="errorMessage !== null"
      :described-by="`${id}-error ${id}-hint`"
      :is-required="isRequired"
    >
      <RekaNumberFieldInput
        :class="style.input({
          class: mergeClasses(customClassConfig.input, classConfig?.input),
        })"
        :autocomplete="autocomplete"
        :placeholder="placeholder"
        @focus="onFocus"
        @blur="onBlur"
      />
    </FormControl>
  </PrimitiveElement>
</template>
