<script setup lang="ts" generic="TValue extends SelectValue">
import { computed } from 'vue'

import { injectSelectContext } from '@/components/select/select.context'
import AppTag from '@/components/tag/AppTag.vue'
import type { SelectOption, SelectValue } from '@/types/select.type'

const props = defineProps<{
  value: SelectValue
}>()

const selectContext = injectSelectContext()

function onRemoveValue(value: SelectValue): void {
  selectContext.modelValue.value = (selectContext.modelValue.value as Array<unknown>)
    .filter((item) => JSON.stringify(item) !== JSON.stringify(value))
}

const label = computed<string>(() => {
  const find = selectContext.items.value.find((item) => {
    if (item.type === 'option') {
      return item.value === props.value
    }

    return false
  }) as SelectOption<TValue> | undefined

  return find?.label ?? 'Item not found'
})
</script>

<template>
  <AppTag
    :is-removable="true"
    :is-disabled="selectContext.isDisabled.value"
    @remove="onRemoveValue(props.value)"
  >
    <slot>
      {{ label }}
    </slot>
  </AppTag>
</template>
