<script setup lang="ts" generic="TControlKeys extends string">
import type { Controls } from '../types/controls.type'
import ComponentPlaygroundTextControl from './ComponentPlaygroundTextControl.vue'

interface Props<Keys extends string> {
  controlValues: Record<Keys, string>
  controls: Controls<Keys>
}
const props = defineProps<Props<TControlKeys>>()
const emits = defineEmits<{
  updateControlValue: [{ control: TControlKeys, value: any }]
}>()

function onUpdateContralValue(control: TControlKeys, value: any) {
  emits('updateControlValue', { control, value })
}
</script>

<template>
  <div class="grid grid-cols-2 gap-4">
    <template
      v-for="(control, key) in props.controls"
      :key="control.label"
    >
      <ComponentPlaygroundTextControl
        v-if="control.type === 'text'"
        :model-value="props.controlValues[key]"
        :label="control.label"
        @update:model-value="value => onUpdateContralValue(key, value)"
      />
    </template>
  </div>
</template>
