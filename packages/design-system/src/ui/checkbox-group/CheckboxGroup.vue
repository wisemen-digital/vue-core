<script setup lang="ts" generic="TValue extends AcceptableValue">
import type { AcceptableValue } from 'reka-ui'
import { CheckboxGroupRoot as RekaCheckboxGroupRoot } from 'reka-ui'
import {
  computed,
  ref,
} from 'vue'

import { useProvideCheckboxGroupContext } from '@/ui/checkbox-group/checkboxGroup.context'

const modelValue = defineModel<TValue[]>({
  required: true,
})

const registeredCheckboxes = ref<Record<string, AcceptableValue>>({})

const isAllChecked = computed<boolean>(() => {
  return modelValue.value.length === Object.values(registeredCheckboxes.value).length
})

const isIndeterminate = computed<boolean>(() => {
  const checkedCount = modelValue.value.length
  const totalCount = Object.values(registeredCheckboxes.value).length

  return checkedCount > 0 && checkedCount < totalCount
})

function toggleAll(): void {
  if (isAllChecked.value) {
    modelValue.value = []
  }
  else {
    modelValue.value = Object.values(registeredCheckboxes.value) as TValue[]
  }
}

function registerCheckbox(id: string, value: AcceptableValue): void {
  registeredCheckboxes.value[id] = value
}

function unRegisterCheckbox(id: string): void {
  delete registeredCheckboxes.value[id]
}

useProvideCheckboxGroupContext({
  isIndeterminate,
  modelValue: computed<AcceptableValue[]>(() => modelValue.value),
  registerCheckbox,
  toggleAll,
  unRegisterCheckbox,
})
</script>

<template>
  <div>
    <slot name="indeterminate" />
    <RekaCheckboxGroupRoot
      v-model="modelValue"
    >
      <slot name="items" />
    </RekaCheckboxGroupRoot>
  </div>
</template>
