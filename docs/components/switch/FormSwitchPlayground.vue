<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import { FormSwitch } from '@wisemen/vue-core'
import { ref } from 'vue'

const controls = createControls({
  isDisabled: {
    default: false,
    label: 'Disabled',
    type: 'switch',
  },
  isInvalid: {
    default: false,
    label: 'Invalid',
    type: 'switch',
  },
  id: {
    default: 'form-switch-id',
    label: 'ID',
    type: 'text',
  },
})

const switchState = ref<boolean>(false)
</script>

<template>
  <ComponentPlayground
    :controls="controls"
  >
    <template #default="{ values }">
      <FormSwitch
        v-bind="values"
        v-model="switchState"
      />
    </template>
  </ComponentPlayground>
</template>
