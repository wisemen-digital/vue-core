<script setup lang="ts">
import { RadioGroupIndicator } from 'reka-ui'
import { computed } from 'vue'

import { injectRadioGroupItemContext } from '@/components/radio-group/radioGroupItem.context'
import { useRadioGroupItemStyle } from '@/components/radio-group/radioGroupItem.style'

const radioGroupItemContext = injectRadioGroupItemContext()

const radioGroupItemStyle = useRadioGroupItemStyle()

const baseClasses = computed<string>(() => radioGroupItemStyle.base({
  hasError: radioGroupItemContext.hasError.value,
  isChecked: radioGroupItemContext.isChecked.value,
  isDisabled: radioGroupItemContext.isDisabled.value,
  isFocused: radioGroupItemContext.isFocused.value,
  isHovered: radioGroupItemContext.isHovered.value,
}))

const indicatorClasses = computed<string>(() => radioGroupItemStyle.indicator({
  hasError: radioGroupItemContext.hasError.value,
  isChecked: radioGroupItemContext.isChecked.value,
  isDisabled: radioGroupItemContext.isDisabled.value,
  isFocused: radioGroupItemContext.isFocused.value,
  isHovered: radioGroupItemContext.isHovered.value,
}))
</script>

<template>
  <div :class="baseClasses">
    <RadioGroupIndicator :class="indicatorClasses" />
  </div>
</template>
