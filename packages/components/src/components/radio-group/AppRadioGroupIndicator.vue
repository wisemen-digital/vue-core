<script setup lang="ts">
import { RadioGroupIndicator } from 'reka-ui'
import { computed } from 'vue'

import { radioGroupStyle } from './radioGroup.style'

interface Props {
  hasError: boolean
  isChecked: boolean
  isDisabled: boolean
  isFocused: boolean
  isHovered: boolean
}

const props = defineProps<Props>()

const style = radioGroupStyle()

const indicatorClasses = computed <string>(() => style.indicator({
  hasError: props.hasError,
  isChecked: props.isChecked,
  isDisabled: props.isDisabled,
  isFocused: props.isFocused,
  isHovered: props.isHovered,
}))

const indicatorRootClasses = computed <string>(() => style.indicatorRoot({
  hasError: props.hasError,
  isChecked: props.isChecked,
  isDisabled: props.isDisabled,
  isFocused: props.isFocused,
  isHovered: props.isHovered,
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
