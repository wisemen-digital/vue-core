<script setup lang="ts">
import { CheckboxRoot as RekaCheckboxRoot } from 'reka-ui'
import { computed } from 'vue'

import { useProvideCheckboxContext } from '@/components/checkbox/checkbox.context'
import type { CheckboxEmits } from '@/components/checkbox/checkbox.emits'
import type { CheckboxProps } from '@/components/checkbox/checkbox.props'
import type { CreateCheckboxStyle } from '@/components/checkbox/checkbox.style'
import { createCheckboxStyle } from '@/components/checkbox/checkbox.style'
import FormControl from '@/components/shared/FormControl.vue'
import TestIdProvider from '@/components/shared/TestIdProvider.vue'
import {
  mergeClasses,
  useComponentClassConfig,
} from '@/customClassVariants'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<CheckboxProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isIndeterminate: false,
  isRequired: false,
  isTouched: false,
  classConfig: null,
  errorMessage: null,
  hint: null,
  label: null,
  value: null,
  variant: null,
})

const emit = defineEmits<CheckboxEmits>()

const modelValue = defineModel<boolean>({ required: false })

const delegatedModel = computed<boolean | 'indeterminate' | null>({
  get() {
    if (modelValue.value === null) {
      return null
    }

    if (modelValue.value) {
      return true
    }

    if (props.isIndeterminate) {
      return 'indeterminate'
    }

    return false
  },
  set(value) {
    if (value === null) {
      return
    }

    modelValue.value = value === 'indeterminate' ? false : value
  },
})

const checkboxStyle = computed<CreateCheckboxStyle>(() => createCheckboxStyle({ variant: props.variant ?? undefined }))

const customClassConfig = useComponentClassConfig('checkbox', { variant: props.variant ?? undefined })

useProvideCheckboxContext({
  ...toComputedRefs(props),
  customClassConfig,
  style: checkboxStyle,
})
</script>

<template>
  <TestIdProvider :test-id="testId">
    <FormControl
      :id="id"
      :is-disabled="isDisabled"
      :is-invalid="errorMessage !== null"
      :is-required="isRequired"
      :described-by="`${id}-error ${id}-hint`"
      :is-loading="false"
    >
      <RekaCheckboxRoot
        v-model="delegatedModel"
        :value="props.value"
        :data-invalid="(errorMessage !== null && props.isTouched) || undefined"
        :class="checkboxStyle.root({
          class: mergeClasses(customClassConfig.root, props.classConfig?.root),
        })"
        @focus="emit('focus')"
        @blur="emit('blur')"
      >
        <slot />
      </RekaCheckboxRoot>
    </FormControl>
  </TestIdProvider>
</template>
