<script setup lang="ts" generic="TControlKeys extends string">
import type { Controls } from '@docs/playground/types/controls.type'

import ComponentPlaygroundDateControl from './ComponentPlaygroundDateControl.vue'
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

function onUpdateControlValue(control: TControlKeys, value: any): void {
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
          @update:model-value="value => onUpdateControlValue(key, value)"
        />
        <ComponentPlaygroundSelectControl
          v-else-if="control.type === 'select'"
          :items="control.items"
          :label="control.label"
          :model-value="props.controlValues[key]"
          @update:model-value="(value: any) => onUpdateControlValue(key, value)"
        />
        <ComponentPlaygroundSwitchControl
          v-else-if="control.type === 'switch'"
          :label="control.label"
          :model-value="props.controlValues[key]"
          @update:model-value="(value: any) => onUpdateControlValue(key, value)"
        />
        <ComponentPlaygroundDateControl
          v-else-if="control.type === 'date'"
          :label="control.label"
          :model-value="props.controlValues[key]"
          @update:model-value="(value: any) => onUpdateControlValue(key, value)"
        />
        <ComponentPlaygroundIconControl
          v-else-if="control.type === 'icon'"
          :label="control.label"
          :model-value="props.controlValues[key]"
          @update:model-value="(value: any) => onUpdateControlValue(key, value)"
        />
      </div>
    </template>
  </div>
</template>
