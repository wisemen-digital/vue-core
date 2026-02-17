<script setup lang="ts">
import { computed } from 'vue'

import BaseCheckbox from '@/ui/checkbox/base/BaseCheckbox.vue'
import { useInjectCheckboxGroupContext } from '@/ui/checkbox-group/checkboxGroup.context'

const props = defineProps<{
  label?: string
}>()

const {
  isDisabled,
  isIndeterminate,
  modelValue,
  toggleAll,
} = useInjectCheckboxGroupContext()

const isAtLeastOneChecked = computed<boolean>(() => {
  return modelValue.value.length > 0
})
</script>

<template>
  <BaseCheckbox
    :is-disabled="isDisabled"
    :model-value="isAtLeastOneChecked"
    :is-indeterminate="isIndeterminate"
    :label="props.label"
    @update:model-value="toggleAll"
  />
</template>
