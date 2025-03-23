<script setup lang="ts">
import { computed } from 'vue'

import { useComponentClassConfig } from '@/customClassVariants'
import { useProvideFormFieldContext } from '@/packages/@next/form-field/formField.context'
import type { FormFieldProps } from '@/packages/@next/form-field/formField.props'
import {
  type CreateFormFieldStyle,
  createFormFieldStyle,
} from '@/packages/@next/form-field/style/formField.style'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<FormFieldProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isRequired: false,
  isTouched: false,
  errors: () => [],
  hint: null,
  label: null,
})

const formFieldStyle = computed<CreateFormFieldStyle>(() => createFormFieldStyle({}))

const customClassConfig = useComponentClassConfig('formField', {})

useProvideFormFieldContext({
  ...toComputedRefs(props),
  customClassConfig,
  style: formFieldStyle,
})
</script>

<template>
  <div>
    <slot />
  </div>
</template>
