<script setup lang="ts">
import { VcRadioGroupItemRoot } from '@wisemen/vue-core-components'

const props = defineProps<{
  label: string
  value: string
}>()
</script>

<template>
  <VcRadioGroupItemRoot
    :value="props.value"
    class="text-left"
  >
    <div
      class="
        group-data-[state=checked]/radio-group-item:border-brand-500
        relative h-30 overflow-hidden rounded-xl border-2 border-solid
        border-transparent duration-200
      "
    >
      <slot />
    </div>

    <label class="text-primary mt-md inline-block text-sm font-medium">
      {{ props.label }}
    </label>
  </VcRadioGroupItemRoot>
</template>
