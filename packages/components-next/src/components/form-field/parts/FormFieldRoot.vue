<script setup lang="ts">
import { computed } from 'vue'

import { useProvideFormFieldContext } from '@/components/form-field/formField.context'
import type { FormFieldProps } from '@/components/form-field/formField.props'
import {
  type CreateFormFieldStyle,
  createFormFieldStyle,
} from '@/components/form-field/formField.style'
import { useComponentClassConfig } from '@/customClassVariants'
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
