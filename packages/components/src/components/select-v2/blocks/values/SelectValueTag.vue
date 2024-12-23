<script setup lang="ts">
import { injectSelectContext } from '@/components/select-v2/select.context'
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
</script>

<template>
  <Tag
    :is-removable="true"
    :is-disabled="selectContext.isDisabled.value"
    @remove="onRemoveValue(props.value)"
  >
    <slot>
      {{ selectContext.displayFn(props.value) }}
    </slot>
  </Tag>
</template>
