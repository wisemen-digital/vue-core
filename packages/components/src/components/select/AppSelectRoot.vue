<script setup lang="ts" generic="TValue extends AcceptableValue">
import { SelectRoot } from 'radix-vue'
import { computed } from 'vue'

import type { AcceptableValue } from '../../types/selectItem.type'

const props = defineProps<{
  isDisabled: boolean
  modelValue: TValue | null
}>()

const emit = defineEmits<{
  'update:modelValue': [value: TValue | null]
}>()

const isOpenModel = defineModel<boolean>('isOpen', {
  required: true,
})

const model = computed<string | undefined>({
  get: () => {
    return JSON.stringify(props.modelValue)
  },
  set: (value) => {
    if (value === undefined) {
      emit('update:modelValue', null)
      return
    }

    emit('update:modelValue', JSON.parse(value))
  },
})
</script>

<template>
  <SelectRoot
    v-model="model"
    v-model:open="isOpenModel"
    :disabled="props.isDisabled"
  >
    <slot />
  </SelectRoot>
</template>
