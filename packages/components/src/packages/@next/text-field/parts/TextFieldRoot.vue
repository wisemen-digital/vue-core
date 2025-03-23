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
import type { TextFieldEmits, TextFieldProps } from '@/packages/@next/text-field/textField.props'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<TextFieldProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isLoading: false,
  isSpellCheckEnabled: false,
  autocomplete: 'off',
  classConfig: null,
  errors: () => [],
  iconLeft: null,
  iconRight: null,
  placeholder: null,
  type: 'text',
})

const emit = defineEmits<TextFieldEmits>()

const modelValue = defineModel<TValue | null>({
  required: true,
})

const textFieldStyle = computed<CreateTextFieldStyle>(() => createTextFieldStyle({}))

const customClassConfig = useComponentClassConfig('textField', {})

function onBlur(event: FocusEvent): void {
  emit('blur', event)
}

function onFocus(event: FocusEvent): void {
  emit('focus', event)
}

useProvideTextFieldContext({
  ...toComputedRefs(props),
  customClassConfig,
  modelValue,
  style: textFieldStyle,
  onBlur,
  onFocus,
})
</script>

<template>
  <div
    :class="textFieldStyle.root({
      class: mergeClasses(customClassConfig.root, props.classConfig?.root),
    })"
    :data-has-icon-left="props.iconLeft !== null"
    :data-has-icon-right="props.iconRight !== null"
    :data-is-invalid="props.errors.length > 0 && props.isTouched"
    :data-is-disabled="props.isDisabled"
  >
    <slot />
  </div>
</template>
