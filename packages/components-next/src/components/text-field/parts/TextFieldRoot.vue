<script setup lang="ts" generic="TValue extends string">
import { computed } from 'vue'

import { useProvideTextFieldContext } from '@/components/text-field/textField.context'
import type { TextFieldEmits, TextFieldProps } from '@/components/text-field/textField.props'
import {
  type CreateTextFieldStyle,
  createTextFieldStyle,
} from '@/components/text-field/textField.style'
import {
  mergeClasses,
  useComponentClassConfig,
} from '@/customClassVariants'
import { toComputedRefs } from '@/utils/props.util'

const props = withDefaults(defineProps<TextFieldProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isLoading: false,
  isRequired: false,
  isSpellCheckEnabled: false,
  isTouched: false,
  autocomplete: 'off',
  classConfig: null,
  errors: () => [],
  hint: null,
  iconLeft: null,
  iconRight: null,
  label: null,
  placeholder: null,
  type: 'text',
  variant: null,
})

const emit = defineEmits<TextFieldEmits>()

const modelValue = defineModel<TValue | null>({
  required: true,
})

const textFieldStyle = computed<CreateTextFieldStyle>(() => createTextFieldStyle({
  variant: props.variant ?? undefined,
}))

const customClassConfig = useComponentClassConfig('textField', {
  variant: props.variant ?? undefined,
})

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
