<script setup lang="ts">
import { CheckboxIndicator } from 'reka-ui'
import { computed } from 'vue'

import { injectCheckboxContext } from '@/components/checkbox/checkbox.context'
import { useCheckboxStyle } from '@/components/checkbox/checkbox.style'
import Icon from '@/components/icon/Icon.vue'

const checkboxStyle = useCheckboxStyle()
const checkboxContext = injectCheckboxContext()

const baseClasses = computed<string>(() => checkboxStyle.base({
  hasError: checkboxContext.hasError.value,
  isChecked: checkboxContext.isChecked.value,
  isDisabled: checkboxContext.isDisabled.value,
  isFocused: checkboxContext.isFocused.value,
  isHovered: checkboxContext.isHovered.value,
  isIndeterminate: checkboxContext.isIndeterminate.value,
}))

const indicatorClasses = computed<string>(() => checkboxStyle.indicator({
  hasError: checkboxContext.hasError.value,
  isChecked: checkboxContext.isChecked.value,
  isDisabled: checkboxContext.isDisabled.value,
  isFocused: checkboxContext.isFocused.value,
  isHovered: checkboxContext.isHovered.value,
  isIndeterminate: checkboxContext.isIndeterminate.value,
}))
</script>

<template>
  <div :class="baseClasses">
    <Transition
      enter-from-class="opacity-0 scale-50"
      leave-active-class="duration-200"
      enter-active-class="duration-200"
      leave-to-class="opacity-0 scale-50"
    >
      <CheckboxIndicator>
        <Icon
          :class="indicatorClasses"
          :icon="checkboxContext.isIndeterminate.value ? 'checkboxIndeterminate' : 'checkboxIndicator'"
        />
      </CheckboxIndicator>
    </Transition>
  </div>
</template>
