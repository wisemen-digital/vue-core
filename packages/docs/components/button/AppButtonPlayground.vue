<script setup lang="ts">
import AppButton from '@components/components/button/AppButton.vue'
import { ref } from 'vue'

import ComponentPlayground from '../../playground/components/ComponentPlayground.vue'
import { createControls } from '../../playground/types/controls.type'

const controls = createControls({
  variant: {
    default: 'default',
    label: 'Variant',
    type: 'text',
  },
})

const model = ref<string>('')
</script>

<template>
  <ComponentPlayground
    v-slot="{ values }"
    :controls="controls"
  >
    <AppButton
      v-bind="values"
      v-model="model"
    >
      Test
    </AppButton>
  </ComponentPlayground>
</template>
