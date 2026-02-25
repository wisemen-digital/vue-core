<script setup lang="ts">
import { computed, ref } from 'vue'
import { CheckboxGroupRoot as RekaCheckboxGroupRoot } from 'reka-ui';


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


const value = computed<string[]>({
  get: () => isAtLeastOneChecked.value ? ['indeterminate'] : [],
  set: toggleAll,
})
</script>

<template>
  <RekaCheckboxGroupRoot v-model="value">
    <BaseCheckbox
      :is-disabled="isDisabled"
      value="indeterminate"
      :is-indeterminate="isIndeterminate"
      :label="props.label"
      @update:model-value="toggleAll"
    />
  </RekaCheckboxGroupRoot>
</template>
