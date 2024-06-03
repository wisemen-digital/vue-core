<script setup lang="ts" generic="TControlKeys extends string">
import AppText from '@components/components/text/AppText.vue'
import type { Control, Controls } from '@docs/playground/types/controls.type'
import {
  type Ref,
  ref,
} from 'vue'

import ComponentPlaygroundControls from './ComponentPlaygroundControls.vue'

interface Props<Keys extends string> {
  controls: Controls<Keys> | null
}
const props = defineProps<Props<TControlKeys>>()

const controlValues = ref<Record<TControlKeys, any>>(getControlValueDefault()) as Ref<Record<TControlKeys, any>>

function setControlValues({ control, value }: { control: TControlKeys, value: any }): void {
  controlValues.value = {
    ...controlValues.value,
    [control]: value,
  }
}

function getControlValueDefault(): Record<TControlKeys, any> {
  if (props.controls === null) {
    return {} as Record<TControlKeys, any>
  }

  const controlsAsArray = Object.entries(props.controls) as [TControlKeys, Control][]

  return controlsAsArray.reduce((acc, [
    control,
    controlField,
  ]) => {
    acc[control as TControlKeys] = controlField.default

    return acc
  }, {} as Record<TControlKeys, any>)
}
</script>

<template>
  <!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
  <div
    class="vp-raw my-8 flex w-full flex-col rounded border border-foreground bg-neutral-900"
  >
    <div class="flex items-center justify-center rounded-t p-4">
      <slot :values="controlValues" />
    </div>

    <div class="h-px w-full bg-primary/50" />
    <div
      v-if="props.controls"
      class="flex flex-col gap-4 rounded-b border-t-4 border-primary bg-neutral-800/80 p-4"
    >
      <AppText
        as="p"
        class="!m-0 text-foreground"
        variant="subtitle"
      >
        Controls
      </AppText>
      <ComponentPlaygroundControls
        :controls="props.controls"
        :control-values="controlValues"
        @update-control-value="setControlValues"
      />
    </div>
  </div>
</template>
