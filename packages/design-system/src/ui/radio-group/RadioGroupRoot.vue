<script setup lang="ts" generic="TValue extends AcceptableValue">
import type { AcceptableValue } from 'reka-ui'
import { RadioGroupRoot as RekaRadioGroupRoot } from 'reka-ui'
import { computed } from 'vue'

import { useProvideRadioGroupContext } from '@/ui/radio-group/radioGroup.context'
import type { RadioGroupProps } from '@/ui/radio-group/radioGroup.props'

const props = withDefaults(defineProps<RadioGroupProps>(), {
  isDisabled: false,
  hideErrorMessage: false,
  orientation: 'vertical',
})

const modelValue = defineModel<TValue>({
  required: true,
})

useProvideRadioGroupContext({
  isDisabled: computed<boolean>(() => props.isDisabled),
  modelValue,
  orientation: computed<'horizontal' | 'vertical'>(() => props.orientation),
})
</script>

<template>
  <RekaRadioGroupRoot
    v-model="modelValue"
    :orientation="orientation"
    :disabled="isDisabled"
  >
    <slot />
  </RekaRadioGroupRoot>
</template>
