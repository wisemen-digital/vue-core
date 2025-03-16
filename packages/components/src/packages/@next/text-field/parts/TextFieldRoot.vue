<script setup lang="ts" generic="TValue extends string">
import { computed } from 'vue'

import {
  mergeClasses,
  useComponentClassConfig,
} from '@/customClassVariants'
import {
  type CreateTextFieldStyle,
  createTextFieldStyle,
} from '@/packages/@next/text-field/style/textField.style'
import { useProvideTextFieldContext } from '@/packages/@next/text-field/textField.context'
import type { TextFieldProps } from '@/packages/@next/text-field/textField.props'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<TextFieldProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isLoading: false,
  isSpellCheckEnabled: false,
  autocomplete: 'off',
  classConfig: null,
  iconLeft: null,
  iconRight: null,
  placeholder: null,
  type: 'text',
})

const modelValue = defineModel<TValue | null>({
  required: true,
})

const textFieldStyle = computed<CreateTextFieldStyle>(() => createTextFieldStyle({}))

const customClassConfig = useComponentClassConfig('textField', {})

useProvideTextFieldContext({
  ...toComputedRefs(props),
  customClassConfig,
  modelValue,
  style: textFieldStyle,
})
</script>

<template>
  <div
    :class="textFieldStyle.root({
      class: mergeClasses(customClassConfig.root, props.classConfig?.root),
    })"
    :data-has-icon-left="props.iconLeft !== null"
    :data-has-icon-right="props.iconRight !== null"
    :data-is-disabled="props.isDisabled"
  >
    <slot />
  </div>
</template>
