<script setup lang="ts">
import { computed } from 'vue'

import { useProvideFormFieldContext } from '@/components/form-field/formField.context'
import type { FormFieldProps } from '@/components/form-field/formField.props'
import type { CreateFormFieldStyle } from '@/components/form-field/formField.style'
import { createFormFieldStyle } from '@/components/form-field/formField.style'
import {
  mergeClasses,
  useComponentClassConfig,
} from '@/customClassVariants'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<FormFieldProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isRequired: false,
  isTouched: false,
  classConfig: null,
  errors: () => [],
  hint: null,
  label: null,
  layout: 'vertical',
  variant: null,
})

const formFieldStyle = computed<CreateFormFieldStyle>(() => createFormFieldStyle({
  variant: props.variant ?? undefined,
}))

const customClassConfig = useComponentClassConfig('formField', {
  variant: props.variant ?? undefined,
})

useProvideFormFieldContext({
  ...toComputedRefs(props),
  customClassConfig,
  style: formFieldStyle,
})
</script>

<template>
  <div
    :data-layout="props.layout"
    :class="formFieldStyle.root({
      class: mergeClasses(customClassConfig.root, props.classConfig?.root),
    })"
  >
    <slot />
  </div>
</template>
