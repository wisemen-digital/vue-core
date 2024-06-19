<script setup lang="ts" generic="TControlKeys extends string">
import type { FormFieldErrors } from '@wisemen/vue-core'
import { FormRadioGroup } from '@wisemen/vue-core'
import { ref } from 'vue'

const exampleOptions = [
  {
    label: 'Option 1',
    value: 'option1',
  },
  {
    label: 'Option 2',
    value: 'option2',
  },
  {
    label: 'Option 3',
    value: 'option3',
  },
]

const exampleError: FormFieldErrors = {
  _errors: [
    'The name has an error',
  ],
}

const value = ref<null | string>(null)
</script>

<template>
  <!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
  <div class="vp-raw my-8 flex w-full flex-col overflow-hidden rounded-lg border border-solid border-border bg-background">
    <FormRadioGroup
      v-model="value"
      :options="exampleOptions"
      :errors="exampleError"
      label="Radio group"
      is-touched
    />
  </div>
</template>
