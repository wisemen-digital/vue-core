<script setup lang="ts">
import { RadioGroupIndicator } from 'reka-ui'
import { computed } from 'vue'

import { injectRadioGroupContext } from '@/components/radio-group-old/radioGroup.context'
import { injectRadioGroupItemContext } from '@/components/radio-group-old/radioGroupItem.context'

import { radioGroupStyle } from './radioGroup.style'

const radioGroupContext = injectRadioGroupContext()
const radioGroupItemContext = injectRadioGroupItemContext()

const style = radioGroupStyle()

const indicatorClasses = computed <string>(() => style.indicator({
  hasError: radioGroupContext.hasError.value,
  isChecked: radioGroupItemContext.isChecked.value,
  isDisabled: radioGroupItemContext.isDisabled.value,
  isFocused: radioGroupItemContext.isFocused.value,
  isHovered: radioGroupItemContext.isHovered.value,
}))

const indicatorRootClasses = computed <string>(() => style.indicatorRoot({
  hasError: radioGroupContext.hasError.value,
  isChecked: radioGroupItemContext.isChecked.value,
  isDisabled: radioGroupItemContext.isDisabled.value,
  isFocused: radioGroupItemContext.isFocused.value,
  isHovered: radioGroupItemContext.isHovered.value,
}))
</script>

<template>
  <div :class="indicatorRootClasses">
    <RadioGroupIndicator
      :class="indicatorClasses"
      force-mount
    />
  </div>
</template>
