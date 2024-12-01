<script setup lang="ts">
import {
  CheckboxIndicator,
  CheckboxRoot,
} from 'reka-ui'
import {
  computed,
  ref,
  useId,
} from 'vue'

import type { CheckboxProps } from '@/components/checkbox/checkbox.props'
import { useCheckboxStyle } from '@/components/checkbox/checkbox.style'
import Icon from '@/components/icon/Icon.vue'
import { injectThemeProviderContext } from '@/components/theme-provider/themeProvider.context'
import { useAriaDescribedBy } from '@/composables/aria-described-by/ariaDescribedBy.composable'

const props = withDefaults(defineProps<CheckboxProps>(), {
  id: null,
  testId: null,
  isDisabled: false,
  isIndeterminate: false,
  isReadonly: false,
  isRequired: false,
  isTouched: false,
  errors: null,
  hint: null,
  label: null,
  styleConfig: null,
})

const model = defineModel<boolean>({
  required: true,
})

const themeProviderContext = injectThemeProviderContext()

const checkboxStyle = useCheckboxStyle()

const computedModel = computed<boolean | 'indeterminate'>({
  get() {
    if (model.value) {
      return true
    }

    if (props.isIndeterminate) {
      return 'indeterminate'
    }

    return false
  },
  set(value) {
    model.value = value === 'indeterminate' ? false : value
  },
})

const inputId = computed<string>(() => props.id ?? useId())

const isFocused = ref<boolean>(false)
const isMouseOver = ref<boolean>(false)

const isHovered = computed<boolean>(() => isMouseOver.value && !props.isDisabled)
const isIndeterminate = computed<boolean>(() => props.isIndeterminate)
const isChecked = computed<boolean>(() => model.value === true && !isIndeterminate.value)
const isDisabled = computed<boolean>(() => props.isDisabled || props.isReadonly)
const hasError = computed<boolean>(() => props.errors !== undefined && props.isTouched && props.errors !== null)

const ariaDescribedBy = useAriaDescribedBy({
  id: inputId,
  hasErrors: hasError,
  hasHint: computed<boolean>(() => props.hint !== null),
})

const baseClasses = computed<string>(() => checkboxStyle.base({
  hasError: hasError.value,
  isChecked: isChecked.value,
  isDisabled: isDisabled.value,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
  isIndeterminate: isIndeterminate.value,
}))

const indicatorClasses = computed<string>(() => checkboxStyle.indicator({
  hasError: hasError.value,
  isChecked: isChecked.value,
  isDisabled: isDisabled.value,
  isFocused: isFocused.value,
  isHovered: isHovered.value,
  isIndeterminate: isIndeterminate.value,
}))
</script>

<template>
  <CheckboxRoot
    :id="inputId"
    v-model="computedModel"
    :data-test-id="props.testId"
    :disabled="props.isDisabled || props.isReadonly"
    :aria-describedby="ariaDescribedBy"
    :class="baseClasses"
    class="checkbox-default input-field-label-default input-field-error-default input-field-hint-default"
  >
    <CheckboxIndicator>
      <Icon
        :class="indicatorClasses"
        icon="checkboxIndicator"
      />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
