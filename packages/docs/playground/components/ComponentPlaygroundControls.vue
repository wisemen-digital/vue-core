<script setup lang="ts" generic="TControlKeys extends string">
import type { Controls } from '../types/controls.type'
import ComponentPlaygroundIconControl from './ComponentPlaygroundIconControl.vue'
import ComponentPlaygroundSelectControl from './ComponentPlaygroundSelectControl.vue'
import ComponentPlaygroundSwitchControl from './ComponentPlaygroundSwitchControl.vue'
import ComponentPlaygroundTextControl from './ComponentPlaygroundTextControl.vue'

interface Props<Keys extends string> {
  controlValues: Record<Keys, any>
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
      <div :style="`grid-column: span ${control.cols} / span ${control.cols}`">
        <ComponentPlaygroundTextControl
          v-if="control.type === 'text'"
          :model-value="props.controlValues[key]"
          :label="control.label"
          @update:model-value="value => onUpdateContralValue(key, value)"
        />
        <ComponentPlaygroundSelectControl
          v-else-if="control.type === 'select'"
          :items="control.items"
          :label="control.label"
          :model-value="props.controlValues[key]"
          @update:model-value="(value: any) => onUpdateContralValue(key, value)"
        />
        <ComponentPlaygroundSwitchControl
          v-else-if="control.type === 'switch'"
          :label="control.label"
          :model-value="props.controlValues[key]"
          @update:model-value="(value: any) => onUpdateContralValue(key, value)"
        />
        <ComponentPlaygroundIconControl
          v-else-if="control.type === 'icon'"
          :label="control.label"
          :model-value="props.controlValues[key]"
          @update:model-value="(value: any) => onUpdateContralValue(key, value)"
        />
      </div>
    </template>
  </div>
</template>
