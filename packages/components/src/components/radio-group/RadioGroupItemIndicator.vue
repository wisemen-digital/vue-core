<script setup lang="ts">
import { RadioGroupIndicator } from 'reka-ui'

import RadioGroupItem from '@/components/radio-group/RadioGroupItem.vue'

const ariaDescribedBy = useAriaDescribedBy({
  id: inputId,
  hasErrors: hasError,
  hasHint: computed<boolean>(() => props.hint !== null),
})
</script>

<template>
  <RadioGroupItem
    :id="inputId"
    :data-test-id="props.testId"
    :aria-describedby="ariaDescribedBy"
    :disabled="props.isDisabled"
    :readonly="props.isReadonly"
    :required="props.isRequired"
    :value="props.value"
    @focus="onFocus"
    @blur="onBlur"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <RadioGroupIndicator>
      x
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
