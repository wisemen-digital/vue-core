<script setup lang="ts" generic="TValue extends SelectValue">
import { computed } from 'vue'

import { injectSelectContext } from '@/components/select/select.context'
import Tag from '@/components/tag/Tag.vue'
import type { SelectValue } from '@/types/select.type'

const props = defineProps<{
  value: SelectValue
}>()

const selectContext = injectSelectContext()

function onRemoveValue(value: SelectValue): void {
  selectContext.modelValue.value = (selectContext.modelValue.value as Array<unknown>)
    .filter((item) => JSON.stringify(item) !== JSON.stringify(value))
}

const label = computed<string>(() => selectContext.getLabelByValue(props.value))
</script>

<template>
  <Tag
    :is-removable="true"
    :is-disabled="selectContext.isDisabled.value"
    @remove="onRemoveValue(props.value)"
  >
    <slot>
      {{ label }}
    </slot>
  </Tag>
</template>
