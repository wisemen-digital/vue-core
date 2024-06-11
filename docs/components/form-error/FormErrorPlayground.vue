<script setup lang="ts">
import ComponentPlayground from '@docs/playground/components/ComponentPlayground.vue'
import { createControls } from '@docs/playground/utils/createContols'
import type { FormFieldErrors } from '@wisemen/vue-core'
import { FormError } from '@wisemen/vue-core'

const controls = createControls({
  isVisible: {
    default: true,
    cols: 2,
    label: 'Is visible',
    type: 'switch',
  },
})

const exampleError: FormFieldErrors = {
  _errors: [
    'The name has an error',
  ],
}
</script>

<template>
  <ComponentPlayground :controls="controls">
    <template #default="{ values }">
      <FormError
        v-bind="values"
        :errors="exampleError"
      />
    </template>
  </ComponentPlayground>
</template>
