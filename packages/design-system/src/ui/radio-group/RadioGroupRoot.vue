<script setup lang="ts" generic="TValue extends AcceptableValue">
import type { AcceptableValue } from 'reka-ui'
import {
  computed,
  useId,
} from 'vue'

import InputWrapper from '@/ui/input-wrapper/InputWrapper.vue'
import { useProvideRadioGroupContext } from '@/ui/radio-group/radioGroup.context'
import type { RadioGroupProps } from '@/ui/radio-group/radioGroup.props'

const props = withDefaults(defineProps<RadioGroupProps>(), {
  isDisabled: false,
  orientation: 'vertical',
  hideErrorMessage: false,
})

const modelValue = defineModel<TValue>({
  required: true,
})

const id = props.id ?? useId()

useProvideRadioGroupContext({
  isDisabled: computed<boolean>(() => props.isDisabled),
  modelValue,
  orientation: computed<'horizontal' | 'vertical'>(() => props.orientation),
})
</script>

<template>
  <InputWrapper
    :error-message="props.errorMessage"
    :is-disabled="props.isDisabled"
    :is-required="props.isRequired"
    :hint="props.hint"
    :label="props.label"
    :class="props.class"
    :style="props.style"
    :for="id"
    :hide-error-message="props.hideErrorMessage"
  >
    <slot />
  </InputWrapper>
</template>
