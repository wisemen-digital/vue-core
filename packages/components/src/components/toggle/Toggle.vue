<script setup lang="ts">
import { Toggle } from 'reka-ui'

const props = withDefaults(defineProps<{
  /**
   * Whether the toggle is disabled.
   * @default false
   */
  isDisabled?: boolean
}>(), { isDisabled: false })

const isToggledModel = defineModel<boolean>({ required: true })

function onToggle(): void {
  isToggledModel.value = !isToggledModel.value
}
</script>

<template>
  <Toggle
    v-model:pressed="isToggledModel"
    :as-child="true"
    :disabled="props.isDisabled"
    @click="onToggle"
  >
    <slot
      :is-toggled="isToggledModel"
      :is-disabled="props.isDisabled"
    />
  </Toggle>
</template>
