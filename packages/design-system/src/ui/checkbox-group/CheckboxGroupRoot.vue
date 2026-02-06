<script setup lang="ts" generic="TValue extends AcceptableValue">
import type { AcceptableValue } from 'reka-ui'
import type { Ref } from 'vue'
import {
  computed,
  ref,
} from 'vue'

import { useProvideCheckboxGroupContext } from '@/ui/checkbox-group/checkboxGroup.context'

const modelValue = defineModel<TValue[]>({
  required: true,
})

const registeredCheckboxes = ref<Map<string, TValue>>(new Map()) as Ref<Map<string, TValue>>

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
    modelValue.value = [
      ...registeredCheckboxes.value.values(),
    ] as TValue[]
  }
}

function registerCheckbox(id: string, value: AcceptableValue): void {
  registeredCheckboxes.value.set(id, value as TValue)
}

function unRegisterCheckbox(id: string): void {
  registeredCheckboxes.value.delete(id)
}

useProvideCheckboxGroupContext({
  isIndeterminate,
  modelValue,
  registerCheckbox,
  toggleAll,
  unRegisterCheckbox,
})
</script>

<template>
  <slot />
</template>
