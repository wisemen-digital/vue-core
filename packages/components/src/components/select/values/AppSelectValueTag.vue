<script setup lang="ts">
import { injectSelectContext } from '@/components/select/select.context.js'
import AppTag from '@/components/tag/AppTag.vue'
import type { SelectValue } from '@/types/select.type.js'

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
  <AppTag
    :is-removable="true"
    :is-disabled="selectContext.isDisabled.value"
    @remove="onRemoveValue(props.value)"
  >
    <slot />
  </AppTag>
</template>
